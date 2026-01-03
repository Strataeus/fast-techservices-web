"""Pydantic models for lead ingestion"""

from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional
from enum import Enum


class ServiceEnum(str, Enum):
    """Available services"""
    PONTS = "ponts"
    CABINES = "cabines"
    COMPRESSEURS = "compresseurs"
    DIAGNOSTIC = "diagnostic"
    AUTRE = "autre"


class LeadMeta(BaseModel):
    """Metadata from site submission"""
    source: str
    request_id: str
    ip_hash: str
    user_agent_hash: Optional[str] = None
    timestamp_utc: datetime


class InboundLeadRequest(BaseModel):
    """Lead received from fast-techservices.com"""
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    service: Optional[ServiceEnum] = None
    message: str
    consent: bool
    meta: LeadMeta

    model_config = {
        "json_schema_extra": {
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
    }


class LeadResponse(BaseModel):
    """Response from lead ingestion"""
    leadId: str
    timestamp: datetime
    status: str = "received"

    model_config = {
        "json_schema_extra": {
            "example": {
                "leadId": "550e8400-e29b-41d4-a716-446655440000",
                "timestamp": "2024-01-03T10:30:45.123456Z",
                "status": "received"
            }
        }
    }


class ErrorResponse(BaseModel):
    """Error response"""
    ok: bool = False
    error: str
    detail: Optional[str] = None
