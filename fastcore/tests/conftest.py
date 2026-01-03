"""Test configuration and fixtures"""

import pytest
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from fastapi.testclient import TestClient

from main import app
from models import Base
from database import get_db

# Use in-memory SQLite for tests
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
)

TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


# Override database dependency
app.dependency_overrides[get_db] = override_get_db

# Create test tables
Base.metadata.create_all(bind=engine)


@pytest.fixture
def client():
    """FastAPI test client"""
    return TestClient(app)


@pytest.fixture
def db_session():
    """Database session for tests"""
    connection = engine.connect()
    transaction = connection.begin()
    session = TestingSessionLocal(bind=connection)

    yield session

    session.close()
    transaction.rollback()
    connection.close()


@pytest.fixture
def auth_headers():
    """Authorization headers with valid token"""
    os.environ["FASTCORE_SITE_INGEST_TOKEN"] = "test-token-secret-xyz"
    return {"Authorization": "Bearer test-token-secret-xyz"}


@pytest.fixture
def sample_lead_payload():
    """Sample valid lead payload"""
    return {
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
