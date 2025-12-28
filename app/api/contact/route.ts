import { NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQ = 10;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQ;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const body = await request.json();
  const honeypot = body?.company_website;
  if (honeypot) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("CONTACT_SUBMISSION", body);
  }

  // TODO: Integrate email provider or CRM webhook.
  // Required env in production: CONTACT_WEBHOOK_URL or EMAIL_API_KEY.

  return NextResponse.json({ ok: true });
}
