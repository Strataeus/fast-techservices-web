/**
 * Forms API Logger
 * Safe logging for form submissions
 * DOCTRINE: PII Minimization - mask sensitive data
 */

export interface FormLog {
  timestamp: string;
  request_id: string;
  ip_hash: string;
  user_agent_hash?: string;
  status: "success" | "queued" | "rate_limited" | "validation_error" | "error";
  status_code: number;
  fastcore_status?: number;
  error?: string;
  queue_size?: number;
}

/**
 * Log form submission (server-side only)
 * Includes no plaintext email/phone/names
 */
export function logFormSubmission(log: FormLog): void {
  const logEntry = {
    ...log,
    timestamp: new Date(log.timestamp).toISOString(),
  };

  // In production, this could send to a logging service
  // For now, just console.log in development
  if (process.env.NODE_ENV !== "production") {
    console.log("[FormsAPI]", JSON.stringify(logEntry));
  }

  // Store in metrics/analytics service if needed
  // Example: send to DataDog, CloudWatch, etc.
}

/**
 * Truncate email for safe logging (only show domain)
 * Example: "user@example.com" → "u***@example.com"
 */
export function truncateEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "***@***";
  return local[0] + "***@" + domain;
}

/**
 * Truncate phone for safe logging
 * Example: "+33612345678" → "+336****5678"
 */
export function truncatePhone(phone: string): string {
  if (phone.length < 8) return "***";
  return phone.slice(0, 4) + "****" + phone.slice(-4);
}
