"""Authentication dependencies"""

from fastapi import HTTPException, status, Header
from typing import Optional
import os
import logging

logger = logging.getLogger(__name__)


def verify_ingest_token(authorization: Optional[str] = Header(None)) -> str:
    """
    Verify Bearer token matches FASTCORE_SITE_INGEST_TOKEN
    
    Returns token if valid.
    Raises HTTPException(401) if invalid.
    """
    if not authorization:
        logger.warning("Request missing Authorization header")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing Authorization header",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Parse "Bearer <token>"
    parts = authorization.split()
    if len(parts) != 2 or parts[0].lower() != "bearer":
        logger.warning(f"Invalid auth scheme: {parts[0] if parts else 'empty'}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid auth scheme (use 'Bearer <token>')",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    credentials = parts[1]
    expected_token = os.getenv("FASTCORE_SITE_INGEST_TOKEN")
    
    if not expected_token:
        logger.error("FASTCORE_SITE_INGEST_TOKEN not configured")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Server configuration error",
        )
    
    if credentials != expected_token:
        logger.warning(f"Invalid token provided")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    return credentials
