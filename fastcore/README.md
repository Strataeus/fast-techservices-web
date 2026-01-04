# FASTCore Backend

FastAPI backend service for lead ingestion from fast-techservices.com with queue management, email notifications, and admin dashboard.

## Features

✅ **Lead Ingestion** - POST /inbound/leads with Pydantic validation
✅ **Queue Fallback** - Accept leads even if FASTCore down
✅ **Queue Flush Job** - Background cron (every 5 min) with retry logic (max 3 retries)
✅ **Email Notifications** - Welcome emails + admin alerts
✅ **Admin Dashboard** - View leads, manage queue, monitor jobs
✅ **Audit Log** - Append-only event tracking
✅ **Security** - Bearer token auth, PII minimization, CORS

## Quick Start (Docker)

```bash
cd fastcore
docker-compose up
```

Access:
- API: http://localhost:8000
- Docs: http://localhost:8000/docs
- Queue Stats: http://localhost:8000/admin/queue/stats (with token)

## API Endpoints

### Lead Ingestion

```bash
POST /inbound/leads
Authorization: Bearer {FASTCORE_SITE_INGEST_TOKEN}

curl -X POST http://localhost:8000/inbound/leads \
  -H "Authorization: Bearer dev-token-xyz-123" \
  -d '{...lead payload...}'

# Response (201)
{
  "leadId": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2024-01-03T10:30:45.123456Z",
  "status": "received"
}
```

### Admin Dashboard

```bash
# List leads
GET /admin/leads?limit=50&offset=0&status_filter=received

# Get lead details
GET /admin/leads/{lead_id}

# Update lead status
PATCH /admin/leads/{lead_id}/status?new_status=processing

# Queue stats
GET /admin/queue/stats

# Flush queue manually
POST /admin/queue/flush

# Clear queue
DELETE /admin/queue/clear

# Scheduler jobs
GET /admin/scheduler/jobs

# Health check
GET /admin/health
```

All admin endpoints require Bearer token authorization.

## Background Jobs

### Queue Flush (Every 5 Minutes)

Automatically:
1. Loads queued leads from Next.js site
2. Submits each to FastCore /inbound/leads
3. Retries failed submissions (max 3 retries with backoff)
4. Removes successful leads from queue
5. Logs events to audit_log

Monitoring:
- Check status: `GET /admin/queue/stats`
- Check jobs: `GET /admin/scheduler/jobs`
- Manual trigger: `POST /admin/queue/flush`
- View logs: `docker-compose logs fastcore`

## Database

### Tables

- **lead_inbox**: Leads from fast-techservices.com (indexed on email, request_id, created_at)
- **audit_log**: Append-only event log (indexed on event, lead_id, request_id, created_at)

### Sample Queries

```sql
-- Recent leads
SELECT id, email, service, status, created_at_utc 
FROM lead_inbox 
ORDER BY created_at_utc DESC LIMIT 20;

-- Leads by status
SELECT status, COUNT(*) FROM lead_inbox GROUP BY status;

-- Queue stats
SELECT 
  COUNT(*) as total_leads,
  COUNT(CASE WHEN status = 'received' THEN 1 END) as received,
  COUNT(CASE WHEN status = 'processing' THEN 1 END) as processing
FROM lead_inbox;

-- Audit trail for a lead
SELECT event, actor, status_code, details_json, created_at_utc
FROM audit_log
WHERE lead_id = '550e8400-e29b-41d4-a716-446655440000'
ORDER BY created_at_utc DESC;
```

## Email Configuration

### Gmail (Development)

1. Enable 2FA: https://myaccount.google.com/security
2. Generate app password: https://myaccount.google.com/apppasswords
3. Set in `.env`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_TLS=true
   ```

### SendGrid (Production)

```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=SG.your-api-key
SMTP_TLS=true
```

## Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/fastcore

# Security
FASTCORE_SITE_INGEST_TOKEN=<openssl rand -base64 32>

# API
DEBUG=false
LOG_LEVEL=INFO

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=noreply@fast-techservices.com
ADMIN_EMAIL=admin@fast-techservices.com
SMTP_TLS=true
```

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=. --cov-report=html

# Specific test
pytest tests/test_leads.py::test_ingest_lead_success -v
```

## Deployment

### Generate Token

```bash
openssl rand -base64 32
```

### Production Checklist

- [ ] Set DEBUG=false
- [ ] Use strong token (openssl rand -base64 32)
- [ ] PostgreSQL: Use managed RDS/Cloud SQL
- [ ] SMTP: Use SendGrid or AWS SES
- [ ] HTTPS only
- [ ] Update CORS origins
- [ ] Set up monitoring/alerting
- [ ] Test queue flush job
- [ ] Test email notifications
- [ ] Database backups configured

### Docker Production

```bash
docker build -t fastcore:latest .

docker run -d \
  -e DATABASE_URL=postgresql://... \
  -e FASTCORE_SITE_INGEST_TOKEN=... \
  -e SMTP_HOST=smtp.sendgrid.net \
  -e SMTP_PASSWORD=SG.xxx \
  -p 8000:8000 \
  fastcore:latest
```

## Architecture

```
fast-techservices.com (Next.js)
  ↓
POST /api/contact (validate + rate limit + queue)
  ↓
POST /inbound/leads (FASTCore)
  ↓
[FastAPI Backend] ← This service
  ├─ Lead Ingest (POST /inbound/leads)
  ├─ Queue Flush (Background job, every 5 min)
  ├─ Admin Dashboard (GET /admin/*)
  └─ Email Service (SMTP)
  ↓
PostgreSQL (LeadInbox + AuditLog)
```

## Troubleshooting

### Queue not flushing?

```bash
# Check scheduler status
curl http://localhost:8000/admin/scheduler/jobs \
  -H "Authorization: Bearer your-token"

# Manual trigger
curl -X POST http://localhost:8000/admin/queue/flush \
  -H "Authorization: Bearer your-token"

# Check logs
docker-compose logs fastcore | grep "Queue"
```

### Email not sending?

```bash
# Check SMTP config in .env
# Test with: python -m smtplib

# View logs
docker-compose logs fastcore | grep "SMTP\|email"
```

### Database issues?

```bash
# Check connection
psql $DATABASE_URL -c "SELECT 1"

# View tables
psql $DATABASE_URL -c "\dt"

# Check lead data
psql $DATABASE_URL -c "SELECT COUNT(*) FROM lead_inbox"
```

## Support

- API Docs: http://localhost:8000/docs
- OpenAPI: http://localhost:8000/openapi.json
- Logs: `docker-compose logs fastcore`
- Bugs: Create GitHub issue
