import { NextResponse, type NextRequest } from "next/server";
import { randomUUID } from "crypto";

// Rate limiting simple in-memory
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQ = 10;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQ;
}

// Extract IP
function getClientIp(request: NextRequest): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? 
         request.headers.get("x-real-ip") ?? 
         "unknown";
}

// Type definitions
type FormType = "fast-remote" | "onsite" | "maintenance";

// Type definitions (for documentation and future extensibility)
// These interfaces document the expected shape of form data for each type
interface FastRemoteData {
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  codePostal: string;
  urgence: "arret-total" | "degrade" | "preventif";
  equipement: string;
  symptome: string;
  disponibilite: string;
  consentement: boolean;
  societe?: string;
  marque?: string;
  acces?: boolean;
}

interface OnsiteData {
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  codePostal: string;
  equipement: string;
  symptome: string;
  consentement: boolean;
  societe?: string;
}

interface MaintenanceData {
  nom: string;
  telephone: string;
  email: string;
  ville: string;
  codePostal: string;
  type: "contrat" | "audit" | "maintenance";
  consentement: boolean;
  societe?: string;
}

// Validations
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[\d\s()+-]{9,}$/.test(phone);
}

function isValidPostalCode(code: string): boolean {
  return /^\d{5}$/.test(code.trim());
}

function validateFastRemote(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const d = data as Record<string, unknown>;

  if (!d.nom || typeof d.nom !== "string" || !d.nom.trim()) errors.push("Nom requis.");
  if (!d.telephone || !isValidPhone(String(d.telephone))) errors.push("Téléphone invalide.");
  if (!d.email || !isValidEmail(String(d.email))) errors.push("Email invalide.");
  if (!d.ville || typeof d.ville !== "string" || !d.ville.trim()) errors.push("Ville requise.");
  if (!d.codePostal || !isValidPostalCode(String(d.codePostal))) errors.push("Code postal invalide (5 chiffres).");
  if (!d.urgence || !["arret-total", "degrade", "preventif"].includes(String(d.urgence))) errors.push("Urgence requise.");
  if (!d.equipement || typeof d.equipement !== "string" || !d.equipement.trim()) errors.push("Équipement requis.");
  if (!d.symptome || typeof d.symptome !== "string" || !d.symptome.trim()) errors.push("Symptôme requis.");
  if (!d.disponibilite || typeof d.disponibilite !== "string" || !d.disponibilite.trim()) errors.push("Disponibilité requise.");
  if (d.consentement !== true) errors.push("Consentement requis.");

  return { valid: errors.length === 0, errors };
}

function validateOnsite(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const d = data as Record<string, unknown>;

  if (!d.nom || typeof d.nom !== "string" || !d.nom.trim()) errors.push("Nom requis.");
  if (!d.telephone || !isValidPhone(String(d.telephone))) errors.push("Téléphone invalide.");
  if (!d.email || !isValidEmail(String(d.email))) errors.push("Email invalide.");
  if (!d.ville || typeof d.ville !== "string" || !d.ville.trim()) errors.push("Ville requise.");
  if (!d.codePostal || !isValidPostalCode(String(d.codePostal))) errors.push("Code postal invalide.");
  if (!d.equipement || typeof d.equipement !== "string" || !d.equipement.trim()) errors.push("Équipement requis.");
  if (!d.symptome || typeof d.symptome !== "string" || !d.symptome.trim()) errors.push("Symptôme requis.");
  if (d.consentement !== true) errors.push("Consentement requis.");

  return { valid: errors.length === 0, errors };
}

function validateMaintenance(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const d = data as Record<string, unknown>;

  if (!d.nom || typeof d.nom !== "string" || !d.nom.trim()) errors.push("Nom requis.");
  if (!d.telephone || !isValidPhone(String(d.telephone))) errors.push("Téléphone invalide.");
  if (!d.email || !isValidEmail(String(d.email))) errors.push("Email invalide.");
  if (!d.ville || typeof d.ville !== "string" || !d.ville.trim()) errors.push("Ville requise.");
  if (!d.codePostal || !isValidPostalCode(String(d.codePostal))) errors.push("Code postal invalide.");
  if (!d.type || !["contrat", "audit", "maintenance"].includes(String(d.type))) errors.push("Type requis.");
  if (d.consentement !== true) errors.push("Consentement requis.");

  return { valid: errors.length === 0, errors };
}

// Log safely (mask sensitive data in production)
function logSubmission(type: FormType, data: Record<string, unknown>, ip: string) {
  if (process.env.NODE_ENV !== "production") {
    const safeData = { ...data };
    if (safeData.email) safeData.email = String(safeData.email).slice(0, 3) + "***";
    if (safeData.telephone) safeData.telephone = String(safeData.telephone).slice(0, 3) + "***";
    console.log(`[${new Date().toISOString()}] FORM_SUBMISSION (${type}):`, { ...safeData, ip });
  }
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  // Rate limiting
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const type = body.type as FormType;
  const data = body.data as Record<string, unknown> || {};
  const honeypot = body.honeypot;

  // Anti-spam: honeypot
  if (honeypot && typeof honeypot === "string" && honeypot.trim()) {
    // Silently ignore
    return NextResponse.json({ ok: true, referenceId: randomUUID() });
  }

  // Validate type
  if (!type || !["fast-remote", "onsite", "maintenance"].includes(type)) {
    return NextResponse.json({ ok: false, error: "invalid_type" }, { status: 400 });
  }

  // Validate based on type
  let validation;
  if (type === "fast-remote") {
    validation = validateFastRemote(data);
  } else if (type === "onsite") {
    validation = validateOnsite(data);
  } else {
    validation = validateMaintenance(data);
  }

  if (!validation.valid) {
    return NextResponse.json(
      { ok: false, error: "validation_error", messages: validation.errors },
      { status: 400 }
    );
  }

  // Log safely
  logSubmission(type, data as Record<string, unknown>, ip);

  // Generate reference ID
  const referenceId = randomUUID();

  // TODO: Send email or store in database
  // For now, just acknowledge receipt
  
  return NextResponse.json({
    ok: true,
    message: "Demande reçue. On revient vers toi rapidement…",
    referenceId,
  });
}

