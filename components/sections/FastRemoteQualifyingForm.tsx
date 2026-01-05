"use client";

import { useState } from "react";
import { FastRemoteFormSchema } from "@/lib/schemas/contact-form";
import { colors, spacing } from "@/lib/design/tokens";
import { z } from "zod";

type FastRemoteFormData = z.infer<typeof FastRemoteFormSchema>;

const equipmentOptions = [
  "Pont élévateur",
  "Compresseur / air comprimé",
  "Cabine peinture / ventilation",
  "Station de lavage",
  "Autre",
];

const urgencyOptions = [
  "Atelier bloqué (urgent)",
  "Dégradation performance",
  "Contrôle / prévention",
];

export function FastRemoteQualifyingForm() {
  const [formData, setFormData] = useState<Partial<FastRemoteFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    setIsSubmitting(true);

    try {
      const validatedData = FastRemoteFormSchema.parse(formData);
      
      // Submit to /api/leads
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "fast_remote",
          ...validatedData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erreur d'envoi du formulaire");
      }

      setSuccessMessage(
        "✓ Formulaire qualifiant reçu. Nous vous contactons très rapidement pour confirmer la faisabilité."
      );
      setFormData({});
      
      // Clear success after 6 seconds
      setTimeout(() => setSuccessMessage(""), 6000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        for (const error of err.issues) {
          const path = error.path.join(".");
          fieldErrors[path] = error.message;
        }
        setErrors(fieldErrors);
      } else if (err instanceof Error) {
        setErrors({ form: err.message });
      } else {
        setErrors({ form: "Une erreur est survenue. Veuillez réessayer." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const symptomLength = (formData.symptom || "").length;
  const symptomValid = symptomLength >= 40;
  const isFormValid =
    formData.email &&
    formData.name &&
    formData.phone &&
    formData.city &&
    formData.postal_code &&
    formData.equipment_category &&
    formData.symptom &&
    symptomValid &&
    formData.urgency &&
    formData.consent &&
    !Object.keys(errors).length;

  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[900],
        color: colors.white,
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: spacing[2],
            textAlign: "center",
          }}
        >
          Démarrer un diagnostic
        </h2>
        <p
          style={{
            textAlign: "center",
            color: colors.slate[300],
            marginBottom: spacing[8],
            fontSize: "0.95rem",
          }}
        >
          Décrivez votre équipement et votre problème. Nous confirmerons la faisabilité et proposerons un créneau.
        </p>

        {/* Accessibility: Success message with aria-live */}
        {successMessage && (
          <div
            role="status"
            aria-live="polite"
            aria-atomic="true"
            style={{
              padding: spacing[4],
              backgroundColor: colors.cyan[900],
              borderRadius: "0.375rem",
              marginBottom: spacing[6],
              color: colors.cyan[100],
              fontSize: "0.95rem",
              borderLeft: `4px solid ${colors.cyan[500]}`,
            }}
          >
            {successMessage}
          </div>
        )}

        {/* Accessibility: Error summary with aria-live */}
        {Object.keys(errors).length > 0 && (
          <div
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{
              padding: spacing[4],
              backgroundColor: colors.slate[800],
              borderRadius: "0.375rem",
              marginBottom: spacing[6],
              color: colors.slate[200],
              fontSize: "0.9rem",
              borderLeft: `4px solid ${colors.slate[500]}`,
            }}
          >
            <strong>Erreurs détectées:</strong>
            <ul
              style={{
                marginTop: spacing[2],
                marginBottom: 0,
                paddingLeft: spacing[6],
              }}
            >
              {Object.entries(errors).map(([field, message]) => (
                <li key={field} style={{ marginBottom: spacing[1] }}>
                  {message}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: spacing[4] }}
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Nom <span style={{ color: colors.slate[400] }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "error-name" : undefined}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.name ? colors.slate[500] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Votre nom complet"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Email <span style={{ color: colors.slate[400] }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "error-email" : undefined}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.email ? colors.slate[500] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="contact@garage.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Téléphone <span style={{ color: colors.slate[400] }}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "error-phone" : undefined}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.phone ? colors.slate[500] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="+33 6 XX XX XX XX"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Société / Atelier
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company || ""}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Nom de votre entreprise"
            />
          </div>

          {/* City & Postal Code Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: spacing[4] }}>
            <div>
              <label
                htmlFor="city"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: spacing[2],
                }}
              >
                Ville <span style={{ color: colors.slate[400] }}>*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city || ""}
                onChange={handleChange}
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? "error-city" : undefined}
                style={{
                  width: "100%",
                  padding: `${spacing[2]} ${spacing[3]}`,
                  backgroundColor: colors.slate[800],
                  border: `1px solid ${errors.city ? colors.slate[500] : colors.slate[700]}`,
                  borderRadius: "0.375rem",
                  color: colors.white,
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                placeholder="Paris"
              />
            </div>
            <div>
              <label
                htmlFor="postal_code"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginBottom: spacing[2],
                }}
              >
                Code postal <span style={{ color: colors.slate[400] }}>*</span>
              </label>
              <input
                type="text"
                id="postal_code"
                name="postal_code"
                value={formData.postal_code || ""}
                onChange={handleChange}
                aria-invalid={!!errors.postal_code}
                aria-describedby={errors.postal_code ? "error-postal_code" : undefined}
                style={{
                  width: "100%",
                  padding: `${spacing[2]} ${spacing[3]}`,
                  backgroundColor: colors.slate[800],
                  border: `1px solid ${errors.postal_code ? colors.slate[500] : colors.slate[700]}`,
                  borderRadius: "0.375rem",
                  color: colors.white,
                  fontSize: "0.95rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                placeholder="75001"
              />
            </div>
          </div>

          {/* Equipment Category */}
          <div>
            <label
              htmlFor="equipment_category"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Équipement <span style={{ color: colors.slate[400] }}>*</span>
            </label>
            <select
              id="equipment_category"
              name="equipment_category"
              value={formData.equipment_category || ""}
              onChange={handleChange}
              aria-invalid={!!errors.equipment_category}
              aria-describedby={
                errors.equipment_category ? "error-equipment_category" : undefined
              }
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${
                  errors.equipment_category ? colors.slate[500] : colors.slate[700]
                }`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              <option value="">-- Sélectionner un équipement --</option>
              {equipmentOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Brand/Model */}
          <div>
            <label
              htmlFor="brand_model"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Marque / Modèle (si connu)
            </label>
            <input
              type="text"
              id="brand_model"
              name="brand_model"
              value={formData.brand_model || ""}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              placeholder="Ex: Ravaglioli XLC2000"
            />
          </div>

          {/* Symptom - BLOCKING FIELD (40 char minimum) */}
          <div>
            <label
              htmlFor="symptom"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Symptôme / Problème constaté{" "}
              <span style={{ color: colors.slate[400] }}>
                * ({symptomLength}/40 caractères minimum)
              </span>
            </label>
            <textarea
              id="symptom"
              name="symptom"
              value={formData.symptom || ""}
              onChange={handleChange}
              aria-invalid={!!errors.symptom}
              aria-describedby={errors.symptom ? "error-symptom" : undefined}
              rows={4}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.symptom ? colors.slate[500] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                fontFamily: "inherit",
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
              placeholder="Décrivez le problème: symptômes observés, contexte d'apparition, équipements affectés, actions déjà tentées..."
            />
            {/* Character counter with color feedback */}
            <div
              style={{
                fontSize: "0.8rem",
                color: symptomValid ? colors.cyan[400] : colors.slate[400],
                marginTop: spacing[1],
                fontWeight: symptomValid ? 500 : 400,
              }}
            >
              {symptomValid ? "✓ Suffisant" : `⚠ ${40 - symptomLength} caractères manquants`}
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label
              htmlFor="urgency"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Urgence <span style={{ color: colors.slate[400] }}>*</span>
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency || ""}
              onChange={handleChange}
              aria-invalid={!!errors.urgency}
              aria-describedby={errors.urgency ? "error-urgency" : undefined}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.urgency ? colors.slate[500] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              <option value="">-- Sélectionner le niveau d&apos;urgence --</option>
              {urgencyOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Availability */}
          <div>
            <label
              htmlFor="availability"
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: 500,
                marginBottom: spacing[2],
              }}
            >
              Disponibilités (créneaux préférés)
            </label>
            <textarea
              id="availability"
              name="availability"
              value={formData.availability || ""}
              onChange={handleChange}
              rows={2}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                fontFamily: "inherit",
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
              placeholder="Ex: Lundi 14h-17h, Mardi matin, Vendredi toute la journée"
            />
          </div>

          {/* Consent Checkbox */}
          <div
            style={{
              display: "flex",
              gap: spacing[3],
              alignItems: "flex-start",
              padding: `${spacing[3]} ${spacing[3]}`,
              backgroundColor: colors.slate[800],
              borderRadius: "0.375rem",
              borderLeft: `2px solid ${errors.consent ? colors.slate[500] : colors.slate[600]}`,
            }}
          >
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={
                typeof formData.consent === "boolean"
                  ? formData.consent
                  : false
              }
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, consent: e.target.checked }));
                if (errors.consent) {
                  setErrors((prev) => {
                    const newErrors = { ...prev };
                    delete newErrors.consent;
                    return newErrors;
                  });
                }
              }}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "error-consent" : undefined}
              style={{
                marginTop: "3px",
                cursor: "pointer",
                accentColor: colors.cyan[500],
                minWidth: "20px",
              }}
            />
            <label
              htmlFor="consent"
              style={{
                fontSize: "0.875rem",
                color: colors.slate[300],
                cursor: "pointer",
                lineHeight: 1.6,
              }}
            >
              J&apos;accepte que mes données soient utilisées pour traiter ma demande (RGPD) et être
              recontacté dans le cadre du diagnostic FAST Remote.{" "}
              <span style={{ color: colors.slate[400] }}>*</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            aria-disabled={!isFormValid || isSubmitting}
            style={{
              padding: `${spacing[3]} ${spacing[6]}`,
              backgroundColor: isFormValid && !isSubmitting ? colors.cyan[500] : colors.slate[700],
              color: colors.white,
              border: "none",
              borderRadius: "0.375rem",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: isFormValid && !isSubmitting ? "pointer" : "not-allowed",
              opacity: isFormValid && !isSubmitting ? 1 : 0.6,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              marginTop: spacing[6],
            }}
            onMouseEnter={(e) => {
              if (isFormValid && !isSubmitting) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.cyan[600];
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }
            }}
            onMouseLeave={(e) => {
              if (isFormValid && !isSubmitting) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.cyan[500];
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }
            }}
          >
            {isSubmitting ? "Envoi en cours..." : "Démarrer le diagnostic FAST Remote"}
          </button>

          {/* Privacy Notice */}
          <p
            style={{
              fontSize: "0.75rem",
              color: colors.slate[400],
              textAlign: "center",
              margin: `${spacing[4]} 0 0 0`,
              lineHeight: 1.6,
            }}
          >
            Vos données sont traitées de manière confidentielle selon nos{" "}
            <a
              href="/confidentialite"
              style={{ color: colors.cyan[400], textDecoration: "none" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.textDecoration = "none")
              }
            >
              conditions de confidentialité
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
