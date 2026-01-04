/**
 * Contact Form Schema (Zod)
 * Unified validation for all contact form types (FAST Remote, Onsite, Maintenance)
 * 
 * DOCTRINE: SAFE-BY-DEFAULT
 * - All fields strictly typed
 * - consent must be explicitly true
 * - honeypot must be empty (anti-spam)
 */

import { z } from "zod";

// ============================================================================
// BASE SCHEMA (unified for all forms)
// ============================================================================

export const ContactFormSchema = z.object({
  // Required
  name: z
    .string()
    .trim()
    .min(2, "Nom doit contenir au moins 2 caractères")
    .max(80, "Nom trop long (max 80 caractères)"),
  
  email: z
    .string()
    .email("Email invalide")
    .max(120, "Email trop long")
    .pipe(z.string().toLowerCase()),
  
  message: z
    .string()
    .trim()
    .min(40, "Message doit contenir au moins 40 caractères")
    .max(2000, "Message trop long (max 2000 caractères)"),
  
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Consentement obligatoire",
    }),

  // Optional
  phone: z
    .string()
    .max(30, "Téléphone trop long")
    .regex(/^[\d\s()+-]{9,}$/, "Téléphone invalide")
    .optional()
    .or(z.literal("")),
  
  company: z
    .string()
    .max(120, "Nom de l'entreprise trop long")
    .optional()
    .or(z.literal("")),
  
  service: z
    .enum(["ponts", "cabines", "compresseurs", "diagnostic", "autre"])
    .optional(),

  // Anti-spam honeypot (must be empty)
  honeypot: z
    .string()
    .max(0, "Invalid submission")
    .optional()
    .or(z.literal("")),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

// ============================================================================
// FAST REMOTE FORM SCHEMA
// ============================================================================
// Specific fields for FAST Remote qualifying form
// Aligns with content-map.yml form structure

export const FastRemoteFormSchema = z.object({
  // Core (required)
  name: z
    .string()
    .trim()
    .min(2, "Nom doit contenir au moins 2 caractères")
    .max(80, "Nom trop long"),
  
  email: z
    .string()
    .email("Email invalide")
    .max(120, "Email trop long"),
  
  phone: z
    .string()
    .max(30, "Téléphone trop long")
    .regex(/^[\d\s()+-]{9,}$/, "Téléphone invalide"),
  
  city: z
    .string()
    .trim()
    .min(2, "Ville requise")
    .max(80, "Ville trop long"),
  
  postal_code: z
    .string()
    .regex(/^\d{5}$/, "Code postal invalide (5 chiffres)"),
  
  equipment_category: z
    .enum(
      [
        "Pont élévateur",
        "Compresseur / air comprimé",
        "Cabine peinture / ventilation",
        "Station de lavage",
        "Autre",
      ]
    ),
  
  symptom: z
    .string()
    .trim()
    .min(40, "Symptôme doit contenir au moins 40 caractères")
    .max(2000, "Symptôme trop long"),
  
  urgency: z
    .enum(["Atelier bloqué (urgent)", "Dégradation performance", "Contrôle / prévention"]),
  
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Consentement RGPD obligatoire",
    }),
  
  // Optional
  company: z
    .string()
    .max(120, "Société trop long")
    .optional()
    .or(z.literal("")),
  
  brand_model: z
    .string()
    .max(100, "Marque/Modèle trop long")
    .optional()
    .or(z.literal("")),
  
  availability: z
    .string()
    .max(200, "Disponibilités trop long")
    .optional()
    .or(z.literal("")),
});

export type FastRemoteForm = z.infer<typeof FastRemoteFormSchema>;

// ============================================================================
// LEAD (what gets sent to FASTCore)
// ============================================================================

export const LeadSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.enum(["ponts", "cabines", "compresseurs", "diagnostic", "autre"]).optional(),
  message: z.string().min(40).max(2000),
  consent: z.boolean(),
  
  // Metadata (added by server)
  meta: z.object({
    source: z.literal("fast-techservices.com"),
    request_id: z.string().uuid(),
    ip_hash: z.string(),
    user_agent_hash: z.string().optional(),
    timestamp_utc: z.string().datetime(),
  }).optional(),
});

export type Lead = z.infer<typeof LeadSchema>;

// ============================================================================
// VALIDATION RESULT
// ============================================================================

export type ValidationResult<T> = 
  | { ok: true; data: T }
  | { ok: false; errors: Record<string, string[]> };
