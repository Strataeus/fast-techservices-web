/**
 * Validation utility
 * Safe parsing without throwing errors
 * DOCTRINE: Fail safely, return structured errors
 */

import { ContactFormSchema, FastRemoteFormSchema, type ValidationResult, type ContactForm, type FastRemoteForm } from "@/lib/schemas/contact-form";
import { ZodError } from "zod";

/**
 * Parse contact form safely
 * Returns structured result with errors if validation fails
 */
export function parseContactForm(json: unknown): ValidationResult<ContactForm> {
  try {
    const data = ContactFormSchema.parse(json);
    return { ok: true, data };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string[]> = {};
      for (const issue of error.issues) {
        const path = issue.path.join(".");
        if (!errors[path]) errors[path] = [];
        errors[path]!.push(issue.message);
      }
      return { ok: false, errors };
    }
    return { ok: false, errors: { _general: ["Unknown validation error"] } };
  }
}

/**
 * Parse FAST Remote form safely
 */
export function parseFastRemoteForm(json: unknown): ValidationResult<FastRemoteForm> {
  try {
    const data = FastRemoteFormSchema.parse(json);
    return { ok: true, data };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string[]> = {};
      for (const issue of error.issues) {
        const path = issue.path.join(".");
        if (!errors[path]) errors[path] = [];
        errors[path]!.push(issue.message);
      }
      return { ok: false, errors };
    }
    return { ok: false, errors: { _general: ["Unknown validation error"] } };
  }
}
