# FASTCore Backend

FastAPI backend service for lead ingestion from fast-techservices.com

## Quick Start

### Local Development (Docker)

```bash
cd fastcore
docker-compose up
```

This will:
- Start PostgreSQL on port 5432
- Start FastAPI on port 8000
- Initialize database tables
- Enable hot-reload

### Local Development (Manual)

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Create .env file
cp .env.example .env
# Edit .env with your database URL and token

# 3. Create database
python -c "from database import init_db; init_db()"

# 4. Run server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## API Endpoints

### POST /inbound/leads

Ingest a lead from fast-techservices.com

**Authorization**: Bearer token (env: FASTCORE_SITE_INGEST_TOKEN)

**Request**:
```bash
curl -X POST http://localhost:8000/inbound/leads \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-token-here" \
  -d '{
    "name": "Jean Dupont",
    "email": "jean@example.com",
    "message": "Message here",
    "consent": true,
    "meta": {
      "source": "fast-techservices.com",
      "request_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "ip_hash": "abc123def456",
      "timestamp_utc": "2024-01-03T10:30:45.123456Z"
    }
  }'
```

**Response** (201):
```json
{
  "leadId": "550e8400-e29b-41d4-a716-446655440000",
  "timestamp": "2024-01-03T10:30:45.123456Z",
  "status": "received"
}
```

### GET /health

Health check endpoint

**Response** (200):
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

## Database

### Tables

- `lead_inbox`: Stores leads from fast-techservices.com
- `audit_log`: Append-only log of all events

### Sample Query

```sql
-- View received leads
SELECT id, email, service, created_at_utc FROM lead_inbox 
ORDER BY created_at_utc DESC;

-- View audit log
SELECT event, actor, status_code, created_at_utc FROM audit_log 
ORDER BY created_at_utc DESC;
```

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=. --cov-report=html

# Run specific test
pytest tests/test_leads.py::test_ingest_lead_success -v
```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `FASTCORE_SITE_INGEST_TOKEN`: Bearer token for authentication (generate with `openssl rand -base64 32`)
- `DEBUG`: Enable debug mode (false/true)
- `LOG_LEVEL`: Logging level (DEBUG, INFO, WARNING, ERROR)

## Deployment

### Generate token

```bash
openssl rand -base64 32
```

### Production

1. Set environment variables in deployment:
   ```
   DATABASE_URL=postgresql://user:pass@db.example.com/fastcore
   FASTCORE_SITE_INGEST_TOKEN=<secure-token>
   DEBUG=false
   LOG_LEVEL=INFO
   ```

2. Run migrations (if any):
   ```bash
   python -c "from database import init_db; init_db()"
   ```

3. Start service:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

## Security Notes

- ✅ Token in environment variables only (never in client)
- ✅ IP/UA hashed from site (PII minimization)
- ✅ Email truncated in audit logs
- ✅ Audit log is append-only (immutable)
- ✅ request_id is unique (duplicate detection)
- ✅ CORS restricted to fast-techservices.com
- ✅ HTTPS required in production

## Integration with Site Forms API

The site (fast-techservices.com) sends leads to this endpoint:

```
POST {FASTCORE_BASE_URL}/inbound/leads
Authorization: Bearer {FASTCORE_SITE_INGEST_TOKEN}

Payload: {
  name, email, phone, company, service, message, consent,
  meta: { source, request_id, ip_hash, user_agent_hash, timestamp_utc }
}
```

The site includes in its environment:
```
FASTCORE_BASE_URL=https://fastcore.example.com
FASTCORE_SITE_INGEST_TOKEN=<token>
```

## Support

For issues or questions, check:
- API docs: http://localhost:8000/docs
- OpenAPI: http://localhost:8000/openapi.json
- Logs: `docker-compose logs fastcore`
