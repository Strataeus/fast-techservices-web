/**
 * FASTCore Client
 * Server-to-server HTTP client for ingest endpoint
 * 
 * DOCTRINE:
 * - Timeout: 5 seconds
 * - Retries: 1 attempt max (avoid cascade failures)
 * - Auth: Bearer token from env only
 * - Error handling: detailed logging without exposing sensitive data
 */

import type { Lead } from "@/lib/schemas/contact-form";

export interface FastCoreIngestResponse {
  ok: boolean;
  statusCode: number;
  leadId?: string;
  error?: string;
}

/**
 * Send lead to FASTCore /inbound/leads endpoint
 * 
 * @param lead Lead object with metadata
 * @param token FASTCore ingest token from env
 * @param baseUrl FASTCore base URL from env
 * @returns Result with ok flag and optional leadId
 */
export async function ingestLeadToFastCore(
  lead: Lead,
  token: string,
  baseUrl: string
): Promise<FastCoreIngestResponse> {
  // Validate env config
  if (!baseUrl || !token) {
    console.error("[FASTCore] Missing configuration (baseUrl or token)");
    return {
      ok: false,
      statusCode: 500,
      error: "FASTCore configuration missing",
    };
  }

  const url = `${baseUrl}/inbound/leads`;
  const timeout = 5000; // 5 seconds
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      let responseData;
      try {
        responseData = await response.json();
      } catch {
        responseData = {};
      }

      console.log(
        `[FASTCore] Lead ingested successfully (${response.status})`,
        { request_id: lead.meta?.request_id }
      );

      return {
        ok: true,
        statusCode: response.status,
        leadId: responseData.leadId || responseData.id,
      };
    } else {
      console.warn(
        `[FASTCore] Ingest returned error status (${response.status})`,
        { request_id: lead.meta?.request_id }
      );

      return {
        ok: false,
        statusCode: response.status,
        error: `FASTCore returned ${response.status}`,
      };
    }
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof TypeError && error.name === "AbortError") {
      console.error(
        "[FASTCore] Request timeout (5s)",
        { request_id: lead.meta?.request_id }
      );
      return {
        ok: false,
        statusCode: 504,
        error: "FASTCore timeout",
      };
    }

    console.error(
      "[FASTCore] Request failed",
      { 
        error: error instanceof Error ? error.message : "unknown",
        request_id: lead.meta?.request_id,
      }
    );

    return {
      ok: false,
      statusCode: 503,
      error: "FASTCore unavailable",
    };
  }
}
