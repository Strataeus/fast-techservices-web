"""SQLAlchemy database models"""

from sqlalchemy import Column, String, DateTime, JSON, Boolean, Integer, func
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
    email = Column(String(120), nullable=False, index=True)
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
    status = Column(String(20), default="received")

    def __repr__(self):
        return f"<LeadInbox(id={self.id}, email={self.email}, service={self.service})>"


class AuditLog(Base):
    """Append-only audit log for all lead events"""
    __tablename__ = "audit_log"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at_utc = Column(DateTime(timezone=True), server_default=func.now())
    
    event = Column(String(50), nullable=False, index=True)
    actor = Column(String(50), default="site_ingest")
    lead_id = Column(UUID(as_uuid=True), nullable=True, index=True)
    request_id = Column(UUID(as_uuid=True), nullable=False, index=True)
    
    status_code = Column(Integer, nullable=True)
    details_json = Column(JSON, nullable=True)

    def __repr__(self):
        return f"<AuditLog(id={self.id}, event={self.event}, lead_id={self.lead_id})>"
