/**
 * IP Hashing utility
 * Converts client IP to SHA256 hash for logging (PII-safe)
 * 
 * DOCTRINE: PII Minimization
 * - Never store plaintext IP in logs
 * - Use consistent hash for rate limiting & audit
 */

import { createHash } from "crypto";
import type { NextRequest } from "next/server";

/**
 * Hash client IP for safe logging
 * Deterministic: same IP always produces same hash
 */
export function hashClientIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex").slice(0, 16);
}

/**
 * Extract client IP from NextRequest
 * Respects X-Forwarded-For (Vercel, proxy) and X-Real-IP headers
 */
export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  
  return "unknown";
}

/**
 * Extract user agent for hashing (optional, for better bot detection)
 */
export function getUserAgent(request: NextRequest): string {
  return request.headers.get("user-agent") ?? "";
}

/**
 * Hash user agent for safe logging
 */
export function hashUserAgent(ua: string): string {
  return createHash("sha256").update(ua).digest("hex").slice(0, 16);
}
