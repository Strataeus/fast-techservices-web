"""Admin dashboard routes"""

from fastapi import APIRouter, Depends, HTTPException, status, Header
from sqlalchemy.orm import Session
from typing import Optional
import logging

from database import get_db
from models import LeadInbox, AuditLog
from background_tasks import scheduler_manager
from auth import verify_ingest_token

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/admin", tags=["Admin"])


def verify_admin_token(authorization: Optional[str] = Header(None)) -> str:
    """Verify admin Bearer token (same as ingest token for now)"""
    return verify_ingest_token(authorization)


@router.get("/health", tags=["Admin"])
async def admin_health(token: str = Depends(verify_admin_token)):
    """Health check for admin"""
    return {
        "status": "ok",
        "scheduler_running": scheduler_manager.scheduler.running if scheduler_manager.scheduler else False,
        "jobs": scheduler_manager.get_jobs()
    }


@router.get("/leads", tags=["Admin"])
async def list_leads(
    db: Session = Depends(get_db),
    token: str = Depends(verify_admin_token),
    limit: int = 50,
    offset: int = 0,
    status_filter: Optional[str] = None
):
    """List leads with optional filtering"""
    query = db.query(LeadInbox)
    
    if status_filter:
        query = query.filter(LeadInbox.status == status_filter)
    
    total = query.count()
    leads = query.order_by(LeadInbox.created_at_utc.desc()).limit(limit).offset(offset).all()
    
    return {
        "total": total,
        "limit": limit,
        "offset": offset,
        "leads": [
            {
                "id": str(lead.id),
                "name": lead.name,
                "email": lead.email,
                "service": lead.service,
                "status": lead.status,
                "created_at": lead.created_at_utc.isoformat(),
            }
            for lead in leads
        ]
    }


@router.get("/leads/{lead_id}", tags=["Admin"])
async def get_lead_detail(
    lead_id: str,
    db: Session = Depends(get_db),
    token: str = Depends(verify_admin_token)
):
    """Get full lead details"""
    lead = db.query(LeadInbox).filter(LeadInbox.id == lead_id).first()
    
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    # Get audit logs for this lead
    audit_logs = db.query(AuditLog).filter(
        AuditLog.lead_id == lead_id
    ).order_by(AuditLog.created_at_utc.desc()).all()
    
    return {
        "id": str(lead.id),
        "name": lead.name,
        "email": lead.email,
        "phone": lead.phone,
        "company": lead.company,
        "service": lead.service,
        "message": lead.message,
        "consent": lead.consent,
        "source": lead.source,
        "request_id": str(lead.request_id),
        "ip_hash": lead.ip_hash,
        "meta": lead.meta_json,
        "status": lead.status,
        "created_at": lead.created_at_utc.isoformat(),
        "audit_logs": [
            {
                "event": log.event,
                "actor": log.actor,
                "status_code": log.status_code,
                "details": log.details_json,
                "created_at": log.created_at_utc.isoformat(),
            }
            for log in audit_logs
        ]
    }


@router.patch("/leads/{lead_id}/status", tags=["Admin"])
async def update_lead_status(
    lead_id: str,
    new_status: str,
    db: Session = Depends(get_db),
    token: str = Depends(verify_admin_token)
):
    """Update lead status (received, processing, resolved, archived)"""
    allowed_statuses = ["received", "processing", "resolved", "archived"]
    
    if new_status not in allowed_statuses:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid status. Allowed: {allowed_statuses}"
        )
    
    lead = db.query(LeadInbox).filter(LeadInbox.id == lead_id).first()
    
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    
    old_status = lead.status
    lead.status = new_status
    
    # Log the status change
    audit = AuditLog(
        event="LEAD_STATUS_UPDATED",
        actor="admin",
        lead_id=lead.id,
        request_id=lead.request_id,
        details_json={"old_status": old_status, "new_status": new_status}
    )
    
    db.add(audit)
    db.commit()
    
    logger.info(
        f"Lead status updated",
        extra={"lead_id": lead_id, "old_status": old_status, "new_status": new_status}
    )
    
    return {"id": lead_id, "status": new_status}


@router.get("/queue/stats", tags=["Admin"])
async def get_queue_stats(token: str = Depends(verify_admin_token)):
    """Get queue statistics"""
    stats = scheduler_manager.queue_flusher.get_queue_stats()
    return stats


@router.post("/queue/flush", tags=["Admin"])
async def manual_queue_flush(token: str = Depends(verify_admin_token)):
    """Manually trigger queue flush"""
    try:
        # This is sync, so we can't await it directly
        # In production, use asyncio.run() or call via background task
        import asyncio
        asyncio.run(scheduler_manager.queue_flusher.flush_queue())
        
        logger.info("Manual queue flush triggered by admin")
        return {"status": "flush_triggered", "message": "Queue flush started"}
        
    except Exception as e:
        logger.error(f"Manual flush failed: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to trigger flush: {str(e)}"
        )


@router.delete("/queue/clear", tags=["Admin"])
async def clear_queue(token: str = Depends(verify_admin_token)):
    """Clear the entire queue (use with caution!)"""
    try:
        scheduler_manager.queue_flusher.save_queue([])
        logger.warning("Queue cleared by admin")
        return {"status": "success", "message": "Queue has been cleared"}
    except Exception as e:
        logger.error(f"Failed to clear queue: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to clear queue: {str(e)}"
        )


@router.get("/scheduler/jobs", tags=["Admin"])
async def get_scheduler_jobs(token: str = Depends(verify_admin_token)):
    """Get list of scheduled jobs"""
    return {
        "jobs": scheduler_manager.get_jobs(),
        "scheduler_running": scheduler_manager.scheduler.running if scheduler_manager.scheduler else False
    }
