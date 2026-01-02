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

  // Validation basique
  const { formType, nom, email, tel } = body;
  if (!nom || (!email && !tel)) {
    return NextResponse.json(
      { ok: false, error: "nom_email_tel_required" },
      { status: 400 }
    );
  }

  if (process.env.NODE_ENV !== "production") {
    console.log(`[${new Date().toISOString()}] FORM_SUBMISSION (${formType || 'unknown'}):`, {
      ...body,
      ip,
    });
  }

  // TODO: Integrate email provider (SendGrid, Mailgun, etc.)
  // Required env in production: SENDGRID_API_KEY or MAILGUN_API_KEY
  // Example:
  // if (process.env.SENDGRID_API_KEY) {
  //   await sendEmail({ to: email, subject: '...', ... });
  // }

  return NextResponse.json({
    ok: true,
    message: "Formulaire reçu avec succès. Nous vous recontacterons bientôt.",
  });
}
