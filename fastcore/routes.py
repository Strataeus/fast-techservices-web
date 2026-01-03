"""Lead ingest routes"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from datetime import datetime
from uuid import UUID
import logging

from schemas import InboundLeadRequest, LeadResponse
from models import LeadInbox, AuditLog
from database import get_db
from auth import verify_ingest_token

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/inbound", tags=["Leads"])


@router.post(
    "/leads",
    response_model=LeadResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Ingest lead from fast-techservices.com",
)
async def ingest_lead(
    payload: InboundLeadRequest,
    db: Session = Depends(get_db),
    token: str = Depends(verify_ingest_token),
) -> LeadResponse:
    """
    Receive and store lead from fast-techservices.com
    
    **Authorization**: Bearer token (env: FASTCORE_SITE_INGEST_TOKEN)
    
    **Returns**:
    - 201: Lead successfully stored
    - 400: Validation error
    - 401: Invalid or missing token
    - 500: Database error
    """
    
    try:
        # 1. Create and persist lead
        new_lead = LeadInbox(
            name=payload.name.strip(),
            email=payload.email.lower().strip(),
            phone=payload.phone.strip() if payload.phone else None,
            company=payload.company.strip() if payload.company else None,
            service=payload.service,
            message=payload.message.strip(),
            consent=payload.consent,
            source="fast-techservices.com",
            request_id=UUID(payload.meta.request_id),
            ip_hash=payload.meta.ip_hash,
            meta_json={
                "user_agent_hash": payload.meta.user_agent_hash,
                "timestamp_utc": payload.meta.timestamp_utc.isoformat(),
            },
            status="received"
        )
        db.add(new_lead)
        db.flush()  # Get the ID before commit
        
        # 2. Append audit log (LEAD_RECEIVED)
        audit = AuditLog(
            event="LEAD_RECEIVED",
            actor="site_ingest",
            lead_id=new_lead.id,
            request_id=UUID(payload.meta.request_id),
            status_code=201,
            details_json={
                "email": payload.email[:3] + "***",  # PII minimization
                "service": payload.service if payload.service else None,
                "ip_hash": payload.meta.ip_hash,
            }
        )
        db.add(audit)
        db.commit()
        
        # 3. Log success
        logger.info(
            f"Lead received: {payload.email[:3]}***",
            extra={
                "lead_id": str(new_lead.id),
                "request_id": payload.meta.request_id,
                "service": payload.service,
                "event": "LEAD_RECEIVED"
            }
        )
        
        return LeadResponse(
            leadId=str(new_lead.id),
            timestamp=datetime.utcnow(),
            status="received"
        )
        
    except IntegrityError as e:
        db.rollback()
        logger.warning(
            f"Duplicate lead request: {payload.meta.request_id}",
            extra={"error": str(e)}
        )
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Duplicate request (request_id already processed)"
        )
        
    except ValueError as e:
        db.rollback()
        logger.error(
            f"Validation error: {str(e)}",
            extra={"request_id": payload.meta.request_id}
        )
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Validation error: {str(e)}"
        )
        
    except Exception as e:
        db.rollback()
        logger.error(
            f"Error ingesting lead: {type(e).__name__}: {str(e)}",
            extra={"request_id": payload.meta.request_id},
            exc_info=True
        )
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to ingest lead"
        )
