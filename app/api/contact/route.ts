/**
 * POST /api/forms/contact
 * 
 * Unified forms endpoint
 * Validates, rate-limits, and injects leads into FASTCore
 * 
 * DOCTRINE:
 * - SAFE-BY-DEFAULT: honeypot → silent 200
 * - Rate limit per IP hash → 429
 * - Validation failures → 400
 * - FASTCore OK → 201
 * - FASTCore down → 202 (queued)
 * - Audit log without PII
 */

import { NextResponse, type NextRequest } from "next/server";
import { randomUUID } from "crypto";

import { parseContactForm } from "@/lib/utils/validation";
import { getClientIp, hashClientIp, getUserAgent, hashUserAgent } from "@/lib/utils/ip-hash";
import { globalRateLimiter } from "@/lib/utils/rate-limit";
import { logFormSubmission } from "@/lib/utils/forms-logger";
import { enqueueForm, getQueueStats } from "@/lib/queue/forms-queue";
import { ingestLeadToFastCore } from "@/lib/clients/fastcore";

export async function POST(request: NextRequest) {
  const requestId = randomUUID();
  const timestamp = new Date().toISOString();
  
  // 1. EXTRACT CLIENT INFO
  const clientIp = getClientIp(request);
  const ipHash = hashClientIp(clientIp);
  const userAgent = getUserAgent(request);
  const userAgentHash = hashUserAgent(userAgent);

  // 2. RATE LIMIT CHECK
  const rateLimitStatus = globalRateLimiter.check(ipHash);
  if (!rateLimitStatus.allowed) {
    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "rate_limited",
      status_code: 429,
    });

    return NextResponse.json(
      { ok: false, error: "rate_limited", message: "Trop de demandes. Réessayez dans quelques minutes." },
      { status: 429, headers: { "Retry-After": String(rateLimitStatus.retryAfter || 60) } }
    );
  }

  // 3. PARSE REQUEST BODY
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "validation_error",
      status_code: 400,
      error: "invalid_json",
    });

    return NextResponse.json(
      { ok: false, error: "invalid_json", message: "Format invalide" },
      { status: 400 }
    );
  }

  // 4. HONEYPOT CHECK (anti-spam)
  const jsonObj = json as Record<string, unknown> | null;
  const honeypot = jsonObj?.honeypot as string | undefined;
  
  if (honeypot && honeypot.trim()) {
    // Silently return success (fool the bot)
    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "success",
      status_code: 200,
    });
    return NextResponse.json({ ok: true, requestId });
  }

  // 5. VALIDATE FORM (Zod)
  // Support both old format (type + data) and new unified format
  const result = parseContactForm(json);
  
  if (!result.ok) {
    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "validation_error",
      status_code: 400,
      error: JSON.stringify(result.errors),
    });

    return NextResponse.json(
      { ok: false, error: "validation_error", errors: result.errors },
      { status: 400 }
    );
  }

  // 6. BUILD LEAD WITH METADATA
  const formData = result.data;
  const lead = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || undefined,
    company: formData.company || undefined,
    service: formData.service,
    message: formData.message,
    consent: formData.consent,
    meta: {
      source: "fast-techservices.com" as const,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      timestamp_utc: timestamp,
    },
  };

  // 7. SEND TO FASTCORE
  const fastcoreBaseUrl = process.env.FASTCORE_BASE_URL;
  const fastcoreToken = process.env.FASTCORE_SITE_INGEST_TOKEN;

  if (!fastcoreBaseUrl || !fastcoreToken) {
    console.error(
      "[FormsAPI] FASTCore configuration missing",
      { request_id: requestId }
    );

    // Queue locally and return 202 (queued)
    enqueueForm(lead);
    const queueStats = getQueueStats();

    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "queued",
      status_code: 202,
      error: "fastcore_config_missing",
      queue_size: queueStats.pending,
    });

    return NextResponse.json(
      {
        ok: true,
        queued: true,
        requestId,
        message: "Votre demande a été enregistrée localement. Nous la traiterons dès que possible.",
      },
      { status: 202 }
    );
  }

  const ingestResult = await ingestLeadToFastCore(lead, fastcoreToken, fastcoreBaseUrl);

  // 8. HANDLE RESPONSE
  if (ingestResult.ok) {
    // FASTCore accepted the lead
    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "success",
      status_code: 201,
      fastcore_status: ingestResult.statusCode,
    });

    return NextResponse.json(
      {
        ok: true,
        requestId,
        leadId: ingestResult.leadId,
        message: "Demande reçue avec succès. On revient vers toi rapidement…",
      },
      { status: 201 }
    );
  } else {
    // FASTCore failed or unavailable → queue locally
    enqueueForm(lead);
    const queueStats = getQueueStats();

    logFormSubmission({
      timestamp,
      request_id: requestId,
      ip_hash: ipHash,
      user_agent_hash: userAgentHash,
      status: "queued",
      status_code: 202,
      error: ingestResult.error,
      fastcore_status: ingestResult.statusCode,
      queue_size: queueStats.pending,
    });

    return NextResponse.json(
      {
        ok: true,
        queued: true,
        requestId,
        message: "Votre demande a été enregistrée. Nous la traiterons rapidement…",
      },
      { status: 202 }
    );
  }
}

