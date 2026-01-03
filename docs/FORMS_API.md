# Site Forms API - Documentation

## Overview

The **Site Forms API** is a complete solution for handling contact forms submitted from fast-techservices.com. It implements a **SAFE-BY-DEFAULT** architecture with strict validation, rate limiting, and graceful fallback when the backend is unavailable.

### Key Features

- ✅ **Zod validation** (TypeScript-safe, strict)
- ✅ **Rate limiting** per IP (5 requests / 10 minutes)
- ✅ **Honeypot anti-spam** (silent rejection)
- ✅ **Queue fallback** when FASTCore unavailable (202 + local persistence)
- ✅ **PII minimization** in logs (IP hash, email truncation)
- ✅ **Audit trail** (request IDs, timestamps, hashes)
- ✅ **Zero client-side secrets** (all auth server-side)

---

## Architecture

### Data Flow

```
Browser (fast-techservices.com)
    ↓ POST /api/forms/contact
    ↓ FormData: {name, email, message, consent, ...}
    ↓
NextJS /api/forms/contact (app/api/contact/route.ts)
    ├─ Validate with Zod (strict schema)
    ├─ Check rate limit (IP hash)
    ├─ Check honeypot (anti-bot)
    ├─ Hash IP & UA for logging
    ├─ Generate request ID (UUID)
    ↓
    ├─ [FASTCore available] → Ingest lead
    │  └─ POST /inbound/leads (server-to-server)
    │     └─ Persist in LeadInbox table
    │     └─ Append audit log (LEAD_RECEIVED)
    │     └─ Return 201 {leadId, requestId}
    │
    └─ [FASTCore down/timeout] → Queue locally
       └─ Persist to .data/forms-queue.json
       └─ Return 202 {queued: true, requestId}
       └─ Background job retries flush

Browser ← Response: {ok: true, requestId}
```

### Files Structure

```
apps/web/
├── app/api/contact/
│   └── route.ts                           # Main handler (POST /api/forms/contact)
├── lib/schemas/
│   └── contact-form.ts                    # Zod schemas (validation rules)
├── lib/utils/
│   ├── ip-hash.ts                         # IP/UA hashing (PII-safe)
│   ├── validation.ts                      # Safe parsing helpers
│   ├── rate-limit.ts                      # Rate limiter class
│   └── forms-logger.ts                    # Structured logging
├── lib/clients/
│   └── fastcore.ts                        # FASTCore HTTP client
├── lib/queue/
│   └── forms-queue.ts                     # Local queue persistence
├── __tests__/
│   ├── schemas/contact-form.test.ts       # Validation tests
│   ├── utils/rate-limit.test.ts           # Rate limiting tests
│   ├── utils/ip-hash.test.ts              # IP hashing tests
│   └── queue/forms-queue.test.ts          # Queue tests
├── .data/
│   ├── .gitignore                         # Never commit queue file
│   └── forms-queue.json                   # (generated at runtime)
└── docs/
    ├── FORMS_API.md                       # This file
    └── FASTCORE_INBOUND_LEADS.md          # FASTCore endpoint spec
```

---

## Environment Variables

Create `.env.local` at the root of `apps/web`:

```bash
# FASTCore Backend
FASTCORE_BASE_URL=http://localhost:8000
FASTCORE_SITE_INGEST_TOKEN=your-secret-token-xyz
```

### Generating a secure token

```bash
# On macOS/Linux
openssl rand -base64 32

# On Windows (PowerShell)
[Convert]::ToBase64String([System.Security.Cryptography.RNGCryptoServiceProvider]::new().GetBytes(32))
```

---

## Request/Response Examples

### Valid Form Submission

**Request (POST /api/forms/contact):**
```json
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "phone": "+33612345678",
  "company": "ACME SAS",
  "service": "diagnostic",
  "message": "Mon compresseur de cabine de peinture ne démarre plus depuis hier matin",
  "consent": true,
  "honeypot": ""
}
```

**Response (201 Created):**
```json
{
  "ok": true,
  "requestId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "leadId": "abc-123-def",
  "message": "Demande reçue avec succès. On revient vers toi rapidement…"
}
```

### Validation Error

**Request (invalid email):**
```json
{
  "name": "Jean",
  "email": "not-an-email",
  "message": "Help!",
  "consent": true
}
```

**Response (400 Bad Request):**
```json
{
  "ok": false,
  "error": "validation_error",
  "errors": {
    "email": ["Email invalide"],
    "message": ["Message doit contenir au moins 20 caractères"]
  }
}
```

### Rate Limited

**Response (429 Too Many Requests):**
```json
{
  "ok": false,
  "error": "rate_limited",
  "message": "Trop de demandes. Réessayez dans quelques minutes."
}
```

**Headers:**
```
Retry-After: 45  # Seconds to wait before retry
```

### Honeypot Triggered (Silent)

**Request (honeypot field filled):**
```json
{
  "name": "Spambot",
  "email": "spam@bot.com",
  "message": "Long message here...",
  "consent": true,
  "honeypot": "FILLED_BY_BOT"
}
```

**Response (200 OK - silent):**
```json
{
  "ok": true,
  "requestId": "..." 
}
```
*Note: Form is not processed, just silent acknowledgment to fool bots*

### FASTCore Unavailable (Queue)

**Response (202 Accepted - Queued):**
```json
{
  "ok": true,
  "queued": true,
  "requestId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "message": "Votre demande a été enregistrée. Nous la traiterons rapidement…"
}
```

---

## Validation Schema

### Contact Form (Zod)

```typescript
{
  name:     string (2-80 chars, trimmed)
  email:    string (valid email, lowercased)
  phone:    string? (optional, 9+ chars, digits/spaces/+/-)
  company:  string? (optional, max 120 chars)
  service:  enum? (ponts | cabines | compresseurs | diagnostic | autre)
  message:  string (20-2000 chars, trimmed)
  consent:  boolean (must be true)
  honeypot: string (must be empty)
}
```

### Validation Errors (HTTP 400)

All validation errors return structured errors:

```json
{
  "ok": false,
  "error": "validation_error",
  "errors": {
    "name": ["Nom doit contenir au least 2 caractères"],
    "email": ["Email invalide"],
    "message": ["Message doit contenir au moins 20 caractères"],
    "consent": ["Consentement obligatoire"]
  }
}
```

---

## Logging & Audit Trail

### Server-side Logs (console + metrics)

Every request is logged with:
- `timestamp`: ISO 8601 UTC
- `request_id`: UUID (unique per request)
- `ip_hash`: SHA256 hash of client IP (no plaintext)
- `user_agent_hash`: SHA256 hash of user agent
- `status`: "success" | "queued" | "rate_limited" | "validation_error" | "error"
- `status_code`: HTTP status
- `fastcore_status?`: FASTCore response code
- `queue_size?`: Number of pending leads if queued

**Example log:**
```json
{
  "timestamp": "2024-01-03T10:30:45.123Z",
  "request_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "ip_hash": "abc123def456ghij",
  "user_agent_hash": "xyz789",
  "status": "success",
  "status_code": 201,
  "fastcore_status": 201
}
```

### Audit Trail (FASTCore)

FASTCore maintains an append-only `AuditLog` table:
- `event`: "LEAD_RECEIVED" | "LEAD_PROCESSED" | etc.
- `actor`: "site_ingest"
- `request_id`: UUID (links to the lead)
- `lead_id`: Foreign key to LeadInbox
- `details_json`: {email (truncated), service, ip_hash}

This log is immutable and never deleted.

---

## Rate Limiting

### Configuration

Default: **5 requests per 10 minutes per IP**

Configured in `lib/utils/rate-limit.ts`:
```typescript
export const globalRateLimiter = new RateLimiter({
  windowMs: 10 * 60 * 1000,  // 10 minutes
  maxRequests: 5,             // Max 5 requests
});
```

### How It Works

1. Client IP is extracted from `X-Forwarded-For` or `X-Real-IP` headers
2. IP is hashed (SHA256, no plaintext storage)
3. IP hash is checked against in-memory sliding window
4. If exceeds limit → return 429 with `Retry-After` header
5. Timestamps older than 10 minutes are automatically cleaned up

### Testing

```bash
# Simulate rate limiting (curl 6 times in quick succession)
for i in {1..6}; do
  curl -X POST http://localhost:3000/api/forms/contact \
    -H "Content-Type: application/json" \
    -d '{...valid form...}'
done
# 5th request: 201 OK
# 6th request: 429 Too Many Requests
```

---

## Queue & Fallback Logic

### When does queueing trigger?

1. **FASTCore env vars missing**: If `FASTCORE_BASE_URL` or `FASTCORE_SITE_INGEST_TOKEN` not set
2. **FASTCore timeout**: If no response within 5 seconds
3. **FASTCore error**: If returns 4xx or 5xx status

### Queue Persistence

- **Location**: `.data/forms-queue.json` (server-side only)
- **Format**: JSON array of Lead objects
- **Max size**: 1000 leads (prevents disk fill)
- **Behavior**: If full, oldest item is dropped and logged as warning

**Example queue file:**
```json
[
  {
    "name": "Jean Dupont",
    "email": "jean@example.com",
    "message": "...",
    "consent": true,
    "meta": {
      "source": "fast-techservices.com",
      "request_id": "...",
      "ip_hash": "...",
      "timestamp_utc": "2024-01-03T10:00:00Z"
    }
  }
]
```

### Manual Flushing (TODO)

In production, you should implement a background job to periodically flush the queue:

```typescript
// Example: flush queue every 5 minutes if FASTCore recovers
setInterval(async () => {
  const queuedLeads = dequeueAll();
  for (const lead of queuedLeads) {
    const result = await ingestLeadToFastCore(lead, token, baseUrl);
    if (!result.ok) {
      // Re-enqueue failed leads
      enqueueForm(lead);
    }
  }
}, 5 * 60 * 1000);
```

---

## Security & Privacy

### Principles

1. **SAFE-BY-DEFAULT**: Missing secrets → 202 (queue), not 500
2. **PII Minimization**: 
   - IPs stored as SHA256 hashes only
   - Emails truncated in logs (e@*****.com)
   - Phone truncated in logs (+33****5678)
   - No plaintext storage in logs
3. **Zero Client Secrets**: 
   - API tokens NEVER exposed to browser
   - All auth happens server-to-server
   - Client cannot directly call FASTCore
4. **Audit Trail**: 
   - Append-only logs (FASTCore)
   - Request IDs link form → processing
   - Actor ("site_ingest") identifies source

### Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| **Spam bots submitting forms** | Honeypot (hidden field) + rate limiting per IP |
| **Invalid data in database** | Zod validation (client) + Pydantic (FASTCore) |
| **FASTCore unavailable** | Queue locally + 202 response (SAFE-BY-DEFAULT) |
| **PII exposure in logs** | IP/UA hashed, email/phone truncated |
| **Token exposure** | Env vars only, never in code or client |
| **Duplicate leads** | Unique constraint on `request_id` in DB |
| **Rate limit bypass** | IP hash from proxy headers (X-Forwarded-For) + fallback to "unknown" |
| **Queue file grows unbounded** | Max size 1000 + oldest item dropped |

---

## Testing

### Run Unit Tests

```bash
npm test
```

### Run Specific Test Suite

```bash
# Validation tests
npm test -- __tests__/schemas/contact-form.test.ts

# Rate limiting tests
npm test -- __tests__/utils/rate-limit.test.ts

# Queue tests
npm test -- __tests__/queue/forms-queue.test.ts

# IP hashing tests
npm test -- __tests__/utils/ip-hash.test.ts
```

### Manual Testing

#### Using curl

```bash
curl -X POST http://localhost:3000/api/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jean Dupont",
    "email": "jean@example.com",
    "message": "This is a test message for the forms API",
    "consent": true
  }'
```

#### Using fetch (browser console)

```javascript
fetch('/api/forms/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jean Dupont',
    email: 'jean@example.com',
    message: 'This is a test message for the forms API',
    consent: true
  })
})
.then(r => r.json())
.then(console.log)
```

---

## Monitoring & Metrics

### Key Metrics to Track

1. **Form submission rate** (forms/minute)
2. **Validation error rate** (% of submissions)
3. **Rate limit hits** (IPs per minute)
4. **Honeypot triggers** (suspected bots)
5. **Queue size** (pending leads when FASTCore down)
6. **FASTCore latency** (avg response time)
7. **FASTCore availability** (% uptime)

### Example monitoring integration (Datadog/CloudWatch)

```typescript
// lib/utils/forms-logger.ts - add metric emission

export function logFormSubmission(log: FormLog): void {
  // ... existing code ...
  
  // Send to metrics service
  if (process.env.METRICS_ENABLED === 'true') {
    sendMetric('forms.submission', 1, {
      status: log.status,
      status_code: log.status_code,
    });
  }
}
```

---

## Future Improvements

- [ ] Email notifications to admin when queue size > X
- [ ] Background job to flush queue on FASTCore recovery
- [ ] Admin dashboard to view queued leads
- [ ] SMS notifications for urgent leads
- [ ] Lead deduplication (same email within 24h)
- [ ] Integration with CRM (HubSpot, Pipedrive, etc.)
- [ ] Webhook notifications to external services

---

## Troubleshooting

### Forms not reaching FASTCore?

1. Check env vars:
   ```bash
   echo $FASTCORE_BASE_URL
   echo $FASTCORE_SITE_INGEST_TOKEN | head -c 10
   ```

2. Check FASTCore is running:
   ```bash
   curl http://localhost:8000/health
   ```

3. Check queue file:
   ```bash
   cat .data/forms-queue.json
   ```

4. Check logs:
   ```bash
   npm run dev  # dev logs show in console
   ```

### Rate limiting too strict?

Adjust in `lib/utils/rate-limit.ts`:
```typescript
new RateLimiter({
  windowMs: 10 * 60 * 1000,  // Increase window
  maxRequests: 10,             // Increase limit
})
```

### Queue file too large?

Reduce `MAX_QUEUE_SIZE` in `lib/queue/forms-queue.ts`:
```typescript
const MAX_QUEUE_SIZE = 500;  // Down from 1000
```

---

## Related Documentation

- [FASTCORE_INBOUND_LEADS.md](./FASTCORE_INBOUND_LEADS.md) - FASTCore endpoint spec
- [IMPLEMENTATION_PLAN_FORMS_API.md](../IMPLEMENTATION_PLAN_FORMS_API.md) - Detailed implementation plan
