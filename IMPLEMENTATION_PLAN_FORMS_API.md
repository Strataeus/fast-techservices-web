# Plan d'Implémentation - Site Forms API (FAST Doctrine)

## OBJECTIF
- Route POST `/api/forms/contact` (Next.js) valide & envoie vers FASTCore
- FASTCore /inbound/leads reçoit & persiste les leads
- Queue locale en cas downtime FASTCore (SAFE-BY-DEFAULT)
- Tests complets + audit logs

---

## A) CHECKLIST IMPLEMENTATION APPS/WEB (Next.js)

### Phase 1 : Refactor validation (Zod) + structure
- [ ] **Installer zod** : `npm install zod`
- [ ] **Créer `lib/schemas/contact-form.ts`**
  - Schema Zod unifié pour tous les types de formulaires
  - Fields: name, email, phone?, company?, service?, message, consent, honeypot?
  - Exports: `ContactFormSchema`, `ValidationError` type
- [ ] **Créer `lib/utils/validation.ts`**
  - Helper parseContactForm(json) → ValidationResult<T>
  - Safe parsing (pas d'exception)

### Phase 2 : Rate limiting + IP hashing
- [ ] **Créer `lib/utils/rate-limit.ts`**
  - RateLimiter class (constructor window, maxRequests)
  - check(ipHash: string) → { allowed: bool, retryAfter?: number }
  - Cleanup timer (garbage collect expired buckets)
- [ ] **Créer `lib/utils/ip-hash.ts`**
  - hashClientIp(ip: string) → hash SHA256 (PII-safe)
  - getClientIp() from NextRequest

### Phase 3 : Queue locale (fallback FASTCore down)
- [ ] **Créer `lib/queue/forms-queue.ts`**
  - In-memory + file persistence (`.data/forms-queue.json`)
  - enqueue(lead: Lead) → void
  - dequeueAll() → Lead[]
  - flushToFastCore() async → {success: bool, failed: Lead[]}
- [ ] **Créer `.data/.gitignore`** : `forms-queue.json`

### Phase 4 : FASTCore client
- [ ] **Créer `lib/clients/fastcore.ts`**
  - `ingestLead(lead: Lead, token: string, baseUrl: string)`
  - Fetch POST with timeout (5s), retries (1x), error handling
  - Returns: {ok: bool, statusCode: number, error?: string}

### Phase 5 : Route handler refactor
- [ ] **Refactor `app/api/contact/route.ts`**
  - Import: Zod schema, IP hash, rate limit, queue, FASTCore client
  - POST handler flow:
    1. Parse JSON + validate Zod
    2. Check honeypot (return 200 silent if filled)
    3. Check rate limit IP → 429 if exceeded
    4. Call FASTCore /inbound/leads
    5. If FASTCore OK → 201 {ok:true, requestId}
    6. If FASTCore fail → 202 {ok:true, queued:true, requestId} + enqueue
    7. Log: {timestamp, requestId, ipHash, result, error?}

### Phase 6 : Environment variables
- [ ] **Documenter `.env.local`** :
  ```
  FASTCORE_BASE_URL=http://localhost:8000
  FASTCORE_SITE_INGEST_TOKEN=secret-token-xyz
  ```
- [ ] **Valider env.local au startup** (schema parsing)

---

## B) PSEUDO-CODE FASTCORE (FastAPI - sera implémenté en PR séparée)

### Endpoint privé
```python
POST /inbound/leads
Authorization: Bearer {FASTCORE_SITE_INGEST_TOKEN}
Content-Type: application/json

{
  "name": "Jean",
  "email": "jean@example.com",
  "phone": "+33612345678",
  "company": "ACME SAS",
  "service": "diagnostic",
  "message": "Mon compresseur ne démarre plus...",
  "consent": true,
  "meta": {
    "source": "fast-techservices.com",
    "request_id": "uuid",
    "ip_hash": "sha256(...)",
    "user_agent_hash": "sha256(...)"
  }
}
```

### Validation + Persistence
- Pydantic schema aligned with Zod
- Store in `LeadInbox` table:
  - id (PK)
  - created_at_utc
  - source: "fast-techservices.com"
  - name, email, phone, company, service, message, consent
  - meta_json (JSON for extensibility)
  - status: "received" | "processed" | "archived"

### Audit log
- Table `AuditLog` append-only:
  - event: "LEAD_RECEIVED"
  - actor: "site_ingest"
  - request_id (FK to lead)
  - timestamp_utc
  - details_json: {lead_id, status_code, ip_hash}

---

## C) TESTS

### apps/web Tests
- [ ] **`__tests__/schemas/contact-form.test.ts`**
  - Valid payloads → parse OK
  - Invalid email, phone, consent → errors
  - Honeypot filled → should not throw
  
- [ ] **`__tests__/utils/rate-limit.test.ts`**
  - 5 requests OK
  - 6th request → denied
  - After 10min → reset
  
- [ ] **`__tests__/queue/forms-queue.test.ts`**
  - Enqueue → file written
  - Dequeue → returns items
  - flushToFastCore mock success/failure
  
- [ ] **`__tests__/api/contact.test.ts`** (integration)
  - Valid form → FASTCore returns 201 → response 201
  - Valid form → FASTCore timeout → response 202 + queue written
  - Honeypot filled → response 200 silent
  - Rate limit exceeded → response 429
  - Missing consent → response 400

### Verification commands
```bash
# Run all tests
npm test

# Run specific suite
npm test -- __tests__/api/contact.test.ts

# Check lint + types
npm run lint && npm run typecheck

# Build validation
npm run build
```

---

## D) DOCUMENTATION

### File: `docs/FORMS_API.md`
- **Architecture diagram**: Site → /api/forms/contact → FASTCore /inbound/leads
- **Variables d'environnement requises**
- **Flux de données** (step-by-step avec IDs de requête)
- **Risques + Mitigations**:
  - Risk: Form data in logs → Mitigation: IP hash, email truncated
  - Risk: FASTCore down → Mitigation: 202 + queue file
  - Risk: Spam → Mitigation: Honeypot + rate limit + Zod validation
  - Risk: Secret exposure → Mitigation: Token in env only, never client

---

## EXECUTION ORDER (A→B→C)

1. **Phase 1-6 (A)** : Implémentation web complète
   - Zod + utils (validation, IP hash, rate limit)
   - Queue locale
   - FASTCore client
   - Route handler refactor
   - Env validation

2. **Phase B** : Pseudo-code + doc architecture FASTCore

3. **Phase C** : Tests + docs finales

---

## SUCCESS CRITERIA (DoD)

- ✅ `npm run lint` = 0 errors
- ✅ `npm run typecheck` = 0 errors
- ✅ `npm test` = all passing
- ✅ Route returns 201 for valid forms (FASTCore OK)
- ✅ Route returns 202 + queue file when FASTCore down
- ✅ Route returns 200 silent for honeypot filled
- ✅ Route returns 429 for rate limited IP
- ✅ Logs contain no email/phone plaintext
- ✅ `.env.local` properly documented
- ✅ Docs cover architecture + risks

