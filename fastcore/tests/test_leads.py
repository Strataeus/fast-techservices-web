"""Test suite for authentication"""

import pytest
from fastapi import status


def test_health_check(client):
    """Health check endpoint should return 200"""
    response = client.get("/health")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["status"] == "ok"


def test_ingest_lead_missing_auth(client, sample_lead_payload):
    """Request without auth header should return 401"""
    response = client.post("/inbound/leads", json=sample_lead_payload)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert "Authorization" in response.headers.get("WWW-Authenticate", "")


def test_ingest_lead_invalid_auth_scheme(client, sample_lead_payload):
    """Invalid auth scheme (not Bearer) should return 401"""
    response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers={"Authorization": "Basic invalid"}
    )
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_ingest_lead_invalid_token(client, sample_lead_payload):
    """Invalid Bearer token should return 401"""
    response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers={"Authorization": "Bearer wrong-token"}
    )
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_ingest_lead_success(client, auth_headers, sample_lead_payload):
    """Valid lead with auth should return 201"""
    response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_201_CREATED
    data = response.json()
    assert "leadId" in data
    assert data["status"] == "received"
    assert "timestamp" in data


def test_ingest_lead_missing_email(client, auth_headers, sample_lead_payload):
    """Missing email should return 422"""
    del sample_lead_payload["email"]
    response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY


def test_ingest_lead_invalid_email(client, auth_headers, sample_lead_payload):
    """Invalid email should return 422"""
    sample_lead_payload["email"] = "not-an-email"
    response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY


def test_ingest_lead_missing_consent(client, auth_headers, sample_lead_payload):
    """Missing consent should return 422"""
    del sample_lead_payload["consent"]
    response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY


def test_ingest_lead_duplicate_request_id(client, auth_headers, sample_lead_payload):
    """Duplicate request_id should return 400"""
    # First submission
    response1 = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert response1.status_code == status.HTTP_201_CREATED
    
    # Second submission with same request_id
    response2 = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert response2.status_code == status.HTTP_400_BAD_REQUEST
    assert "Duplicate request" in response2.json()["detail"]


def test_ingest_lead_minimal_payload(client, auth_headers):
    """Minimal valid payload (only required fields)"""
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "message": "This is a test message about services",
        "consent": True,
        "meta": {
            "source": "fast-techservices.com",
            "request_id": "a1234567-89ab-cdef-0123-456789abcdef",
            "ip_hash": "abc123",
            "timestamp_utc": "2024-01-03T10:00:00Z"
        }
    }
    
    response = client.post(
        "/inbound/leads",
        json=payload,
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_201_CREATED
    assert "leadId" in response.json()
