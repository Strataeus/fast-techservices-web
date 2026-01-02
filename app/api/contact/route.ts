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

  // Log submission for development
  if (process.env.NODE_ENV !== "production") {
    console.log(`[${new Date().toISOString()}] FORM_SUBMISSION (${formType || 'unknown'}):`, {
      ...body,
      ip,
    });
  }

  // ============================================
  // BACKEND INTEGRATION POINT
  // ============================================
  // Replace this with actual backend call when ready:
  // 
  // const backendUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  // if (!backendUrl) {
  //   return NextResponse.json(
  //     { ok: false, error: "backend_not_configured" },
  //     { status: 500 }
  //   );
  // }
  //
  // try {
  //   const backendResponse = await fetch(`${backendUrl}/api/contact`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       formType,
  //       nom,
  //       email,
  //       tel,
  //       ...body,
  //       submittedAt: new Date().toISOString(),
  //       ipAddress: ip,
  //     }),
  //   });
  //
  //   if (!backendResponse.ok) {
  //     throw new Error(`Backend error: ${backendResponse.status}`);
  //   }
  //
  //   const result = await backendResponse.json();
  //   return NextResponse.json({ ok: true, ...result });
  // } catch (error) {
  //   console.error('Backend integration error:', error);
  //   return NextResponse.json(
  //     { ok: false, error: "backend_error" },
  //     { status: 500 }
  //   );
  // }

  // For now, simply acknowledge receipt
  // Backend will handle email sending, database storage, etc.
  return NextResponse.json({
    ok: true,
    message: "Formulaire reçu avec succès. Nous vous recontacterons bientôt.",
  });
}

