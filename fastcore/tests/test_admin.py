"""Test suite for admin routes and background tasks"""

import pytest
from fastapi import status
import json
from pathlib import Path
from uuid import uuid4


def test_admin_health(client, auth_headers):
    """Admin health check should return scheduler status"""
    response = client.get("/admin/health", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "status" in data
    assert "scheduler_running" in data


def test_admin_health_without_auth(client):
    """Admin health without auth should return 401"""
    response = client.get("/admin/health")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED


def test_list_leads_empty(client, auth_headers):
    """List leads when empty should return 0 items"""
    response = client.post(
        "/inbound/leads",
        json={
            "name": "Test User",
            "email": "test@example.com",
            "message": "Test message about services",
            "consent": True,
            "meta": {
                "source": "fast-techservices.com",
                "request_id": str(uuid4()),
                "ip_hash": "abc123",
                "timestamp_utc": "2024-01-03T10:00:00Z"
            }
        },
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_201_CREATED
    
    # Now list
    response = client.get("/admin/leads", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["total"] >= 1
    assert "leads" in data


def test_list_leads_with_limit(client, auth_headers):
    """List leads with pagination"""
    response = client.get("/admin/leads?limit=10&offset=0", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["limit"] == 10
    assert data["offset"] == 0


def test_list_leads_with_status_filter(client, auth_headers):
    """List leads with status filter"""
    response = client.get("/admin/leads?status_filter=received", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "leads" in data


def test_get_lead_detail(client, auth_headers, sample_lead_payload):
    """Get full lead details including audit logs"""
    # Create a lead first
    create_response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    assert create_response.status_code == status.HTTP_201_CREATED
    lead_id = create_response.json()["leadId"]
    
    # Get details
    response = client.get(f"/admin/leads/{lead_id}", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["id"] == lead_id
    assert data["email"] == sample_lead_payload["email"]
    assert "audit_logs" in data


def test_get_nonexistent_lead(client, auth_headers):
    """Get nonexistent lead should return 404"""
    response = client.get(f"/admin/leads/nonexistent-id", headers=auth_headers)
    assert response.status_code == status.HTTP_404_NOT_FOUND


def test_update_lead_status(client, auth_headers, sample_lead_payload):
    """Update lead status"""
    # Create lead
    create_response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    lead_id = create_response.json()["leadId"]
    
    # Update status
    response = client.patch(
        f"/admin/leads/{lead_id}/status?new_status=processing",
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["status"] == "processing"
    
    # Verify status changed
    get_response = client.get(f"/admin/leads/{lead_id}", headers=auth_headers)
    assert get_response.json()["status"] == "processing"


def test_update_lead_invalid_status(client, auth_headers, sample_lead_payload):
    """Invalid status should return 400"""
    create_response = client.post(
        "/inbound/leads",
        json=sample_lead_payload,
        headers=auth_headers
    )
    lead_id = create_response.json()["leadId"]
    
    response = client.patch(
        f"/admin/leads/{lead_id}/status?new_status=invalid_status",
        headers=auth_headers
    )
    assert response.status_code == status.HTTP_400_BAD_REQUEST


def test_get_queue_stats(client, auth_headers):
    """Get queue statistics"""
    response = client.get("/admin/queue/stats", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "queue_size" in data
    assert "timestamp" in data


def test_get_scheduler_jobs(client, auth_headers):
    """Get scheduled jobs"""
    response = client.get("/admin/scheduler/jobs", headers=auth_headers)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "jobs" in data
    assert "scheduler_running" in data


def test_admin_endpoints_require_auth(client):
    """All admin endpoints should require auth"""
    endpoints = [
        ("/admin/health", "GET"),
        ("/admin/leads", "GET"),
        ("/admin/queue/stats", "GET"),
        ("/admin/scheduler/jobs", "GET"),
    ]
    
    for endpoint, method in endpoints:
        if method == "GET":
            response = client.get(endpoint)
            assert response.status_code == status.HTTP_401_UNAUTHORIZED, f"Failed: {endpoint}"
