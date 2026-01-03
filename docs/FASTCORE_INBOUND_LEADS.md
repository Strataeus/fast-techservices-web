# Pseudo-Code FastAPI - FASTCore /inbound/leads Endpoint

## Architecture Overview

```
User fills form on fast-techservices.com
         ↓
POST /api/forms/contact (Next.js)
    - Validate with Zod
    - Rate limit (IP hash)
    - Honeypot check
         ↓
POST {FASTCORE_BASE_URL}/inbound/leads (FastAPI)
    - Validate with Pydantic
    - Check Bearer token
    - Persist to LeadInbox table
    - Append audit log (LEAD_RECEIVED)
         ↓
Response: 201 Created {leadId, timestamp}
```

---

## FastAPI Implementation (Pseudo-Code)

### 1. Install dependencies

```bash
pip install fastapi pydantic sqlalchemy python-dotenv
```

### 2. Environment configuration

```python
# .env
FASTCORE_SITE_INGEST_TOKEN=your-secret-token-xyz
DATABASE_URL=postgresql://user:pass@localhost/fastcore
```

### 3. Pydantic Models

```python
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
from enum import Enum

class ServiceEnum(str, Enum):
    PONTS = "ponts"
    CABINES = "cabines"
    COMPRESSEURS = "compresseurs"
    DIAGNOSTIC = "diagnostic"
    AUTRE = "autre"

class LeadMeta(BaseModel):
    source: str  # "fast-techservices.com"
    request_id: str  # UUID
    ip_hash: str
    user_agent_hash: Optional[str] = None
    timestamp_utc: datetime

class InboundLeadRequest(BaseModel):
    """Lead received from fast-techservices.com"""
    name: str  # 2-80 chars
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[ServiceEnum] = None
    message: str  # 20-2000 chars
    consent: bool
    meta: LeadMeta

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Jean Dupont",
                "email": "jean@example.com",
                "phone": "+33612345678",
                "company": "ACME SAS",
                "service": "diagnostic",
                "message": "Mon compresseur ne démarre plus depuis hier",
                "consent": True,
                "meta": {
                    "source": "fast-techservices.com",
                    "request_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                    "ip_hash": "abc123def456",
                    "user_agent_hash": "xyz789",
                    "timestamp_utc": "2024-01-03T10:30:45.123456Z"
                }
            }
        }

class LeadResponse(BaseModel):
    leadId: str
    timestamp: datetime
    status: str = "received"
```

### 4. Database Models (SQLAlchemy)

```python
from sqlalchemy import Column, String, DateTime, JSON, Boolean, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
import uuid

Base = declarative_base()

class LeadInbox(Base):
    """Inbox for leads from fast-techservices.com"""
    __tablename__ = "lead_inbox"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at_utc = Column(DateTime(timezone=True), server_default=func.now())
    
    # Contact info
    name = Column(String(80), nullable=False)
    email = Column(String(120), nullable=False)
    phone = Column(String(30), nullable=True)
    company = Column(String(120), nullable=True)
    service = Column(String(30), nullable=True)
    message = Column(String(2000), nullable=False)
    consent = Column(Boolean, default=True)
    
    # Metadata
    source = Column(String(50), default="fast-techservices.com")
    request_id = Column(UUID(as_uuid=True), nullable=False, unique=True, index=True)
    ip_hash = Column(String(50), nullable=False)
    meta_json = Column(JSON, nullable=True)
    
    # Status
    status = Column(String(20), default="received")  # received, processing, resolved, archived

class AuditLog(Base):
    """Append-only audit log for all lead events"""
    __tablename__ = "audit_log"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at_utc = Column(DateTime(timezone=True), server_default=func.now())
    
    event = Column(String(50), nullable=False)  # LEAD_RECEIVED, LEAD_PROCESSED, etc.
    actor = Column(String(50), default="site_ingest")  # Who triggered event
    lead_id = Column(UUID(as_uuid=True), nullable=True, index=True)
    request_id = Column(UUID(as_uuid=True), nullable=False, index=True)
    
    status_code = Column(Integer, nullable=True)
    details_json = Column(JSON, nullable=True)
```

### 5. Endpoint Handler

```python
from fastapi import FastAPI, Depends, HTTPException, status, Header
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from typing import Optional
from datetime import datetime
import json
import logging

app = FastAPI()
logger = logging.getLogger(__name__)

# Dependency: verify auth token
def verify_ingest_token(authorization: Optional[str] = Header(None)) -> str:
    """Check Bearer token matches FASTCORE_SITE_INGEST_TOKEN"""
    if not authorization:
        raise HTTPException(status_code=401, detail="Missing Authorization header")
    
    scheme, _, credentials = authorization.partition(" ")
    if scheme.lower() != "bearer":
        raise HTTPException(status_code=401, detail="Invalid auth scheme")
    
    expected_token = os.getenv("FASTCORE_SITE_INGEST_TOKEN")
    if not expected_token or credentials != expected_token:
        raise HTTPException(status_code=401, detail="Invalid token")
    
    return credentials

@app.post(
    "/inbound/leads",
    response_model=LeadResponse,
    status_code=201,
    summary="Ingest lead from fast-techservices.com",
    tags=["Leads"]
)
async def ingest_lead(
    payload: InboundLeadRequest,
    db: Session = Depends(get_db),
    token: str = Depends(verify_ingest_token),
) -> LeadResponse:
    """
    Receive and store lead from fast-techservices.com
    
    Authorization required: Bearer token (env: FASTCORE_SITE_INGEST_TOKEN)
    
    Returns 201 on success with lead ID
    Returns 401 if token invalid
    Returns 400 if validation fails
    """
    
    try:
        # 1. Persist lead to database
        new_lead = LeadInbox(
            name=payload.name,
            email=payload.email,
            phone=payload.phone,
            company=payload.company,
            service=payload.service,
            message=payload.message,
            consent=payload.consent,
            source="fast-techservices.com",
            request_id=uuid.UUID(payload.meta.request_id),
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
            request_id=uuid.UUID(payload.meta.request_id),
            status_code=201,
            details_json={
                "email": payload.email[:3] + "***",  # PII minimization
                "service": payload.service,
                "ip_hash": payload.meta.ip_hash,
            }
        )
        db.add(audit)
        db.commit()
        
        logger.info(
            f"Lead received",
            extra={
                "lead_id": str(new_lead.id),
                "request_id": payload.meta.request_id,
                "email": payload.email[:3] + "***",
                "service": payload.service,
            }
        )
        
        return LeadResponse(
            leadId=str(new_lead.id),
            timestamp=datetime.utcnow(),
            status="received"
        )
        
    except Exception as e:
        db.rollback()
        logger.error(
            f"Error ingesting lead: {str(e)}",
            extra={"request_id": payload.meta.request_id}
        )
        raise HTTPException(status_code=500, detail="Failed to ingest lead")

# Error handling
@app.exception_handler(ValueError)
async def value_error_handler(request, exc):
    """Handle validation errors"""
    return JSONResponse(
        status_code=400,
        content={"ok": False, "error": "validation_error", "detail": str(exc)}
    )
```

### 6. Database connection pool

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL, echo=False, pool_size=10, max_overflow=20)
SessionLocal = sessionmaker(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create tables on startup
Base.metadata.create_all(bind=engine)
```

### 7. Tests (pytest)

```python
import pytest
from fastapi.testclient import TestClient

client = TestClient(app)

def test_ingest_lead_success():
    """Valid lead should return 201"""
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "message": "This is a valid test message",
        "consent": True,
        "meta": {
            "source": "fast-techservices.com",
            "request_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            "ip_hash": "abc123",
            "timestamp_utc": "2024-01-03T10:00:00Z"
        }
    }
    
    response = client.post(
        "/inbound/leads",
        json=payload,
        headers={"Authorization": f"Bearer {os.getenv('FASTCORE_SITE_INGEST_TOKEN')}"}
    )
    assert response.status_code == 201
    assert "leadId" in response.json()

def test_ingest_lead_missing_auth():
    """Missing auth header should return 401"""
    response = client.post("/inbound/leads", json={})
    assert response.status_code == 401

def test_ingest_lead_invalid_token():
    """Invalid token should return 401"""
    response = client.post(
        "/inbound/leads",
        json={},
        headers={"Authorization": "Bearer invalid-token"}
    )
    assert response.status_code == 401

def test_ingest_lead_validation_error():
    """Invalid payload should return 400"""
    payload = {"name": "Test"}  # Missing required fields
    
    response = client.post(
        "/inbound/leads",
        json=payload,
        headers={"Authorization": f"Bearer {os.getenv('FASTCORE_SITE_INGEST_TOKEN'}"}
    )
    assert response.status_code == 422  # Pydantic validation error
```

---

## Integration Checklist

- [ ] Create LeadInbox and AuditLog tables in PostgreSQL
- [ ] Implement /inbound/leads endpoint with auth
- [ ] Add error handling + logging
- [ ] Write pytest tests (auth, validation, persistence)
- [ ] Document API in OpenAPI/Swagger
- [ ] Configure FASTCORE_SITE_INGEST_TOKEN in env (generate with `openssl rand -base64 32`)
- [ ] Test with sample curl request:
  ```bash
  curl -X POST http://localhost:8000/inbound/leads \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer YOUR_TOKEN_HERE" \
    -d @sample-lead.json
  ```

---

## Security Notes

- ✅ Token in .env only (never in client)
- ✅ IP + UA hashed (PII minimization)
- ✅ Email truncated in logs
- ✅ Audit log append-only (immutable)
- ✅ DB schema enforces unique request_id (duplicate detection)
- ✅ Rate limiting on site side (before sending to FASTCore)
- ✅ Honeypot validation on site side
