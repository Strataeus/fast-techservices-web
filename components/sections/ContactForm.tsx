/**
 * Contact Form Component - Form structure with Zod validation
 * Supports: default (generic), fast_remote (with equipment dropdown)
 */

"use client";

import { useState } from "react";
import { ContactFormSchema, FastRemoteFormSchema } from "@/lib/schemas/contact-form";
import { colors, spacing } from "@/lib/design/tokens";
import { z } from "zod";

type FormData = z.infer<typeof ContactFormSchema>;
type FastRemoteFormData = z.infer<typeof FastRemoteFormSchema>;

interface ContactFormProps {
  formType?: "default" | "fast_remote";
}

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

export function ContactForm({ formType = "default" }: ContactFormProps) {
  const [formData, setFormData] = useState<Partial<FormData | FastRemoteFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const isFastRemote = formType === "fast_remote";
  const schema = isFastRemote ? FastRemoteFormSchema : ContactFormSchema;

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
      const validatedData = schema.parse(formData);
      console.log("Form valid:", validatedData);
      // TODO: Submit to /api/leads in PR4
      setSuccessMessage("✓ Formulaire reçu. Nous vous contactons très rapidement.");
      setFormData({});
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        for (const error of err.issues) {
          const path = error.path.join(".");
          fieldErrors[path] = error.message;
        }
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.email &&
    formData.name &&
    (isFastRemote ? (formData as Partial<FastRemoteFormData>).symptom : (formData as Partial<FormData>).message) &&
    !Object.keys(errors).length;

  const symptomLength = isFastRemote ? ((formData as Partial<FastRemoteFormData>).symptom || "").length : ((formData as Partial<FormData>).message || "").length;

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
          {isFastRemote ? "Démarrer un diagnostic" : "Contactez-nous"}
        </h2>
        <p
          style={{
            textAlign: "center",
            color: colors.slate[300],
            marginBottom: spacing[8],
            fontSize: "0.95rem",
          }}
        >
          {isFastRemote
            ? "Décrivez votre équipement et votre problème. Nous confirmerons la faisabilité et proposerons un créneau."
            : "Décrivez vos symptômes, nous vous répondrons rapidement"}
        </p>

        {successMessage && (
          <div
            style={{
              padding: spacing[4],
              backgroundColor: colors.cyan[900],
              borderRadius: "0.375rem",
              marginBottom: spacing[6],
              color: colors.cyan[100],
              fontSize: "0.95rem",
            }}
          >
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: spacing[4] }}>
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
              Nom *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.name ? colors.slate[600] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
              }}
              placeholder="Votre nom"
            />
            {errors.name && (
              <p
                style={{
                  color: colors.slate[400],
                  fontSize: "0.75rem",
                  marginTop: spacing[1],
                }}
              >
                {errors.name}
              </p>
            )}
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
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.email ? colors.slate[600] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
              }}
              placeholder="email@exemple.com"
            />
            {errors.email && (
              <p
                style={{
                  color: colors.slate[400],
                  fontSize: "0.75rem",
                  marginTop: spacing[1],
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          {isFastRemote && (
            <>
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
                  Équipement *
                </label>
                <select
                  id="equipment_category"
                  name="equipment_category"
                  value={(formData as Partial<FastRemoteFormData>).equipment_category || ""}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: `${spacing[2]} ${spacing[3]}`,
                    backgroundColor: colors.slate[800],
                    border: `1px solid ${
                      errors.equipment_category ? colors.slate[600] : colors.slate[700]
                    }`,
                    borderRadius: "0.375rem",
                    color: colors.white,
                    fontSize: "0.95rem",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="">-- Choisir un équipement --</option>
                  {equipmentOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.equipment_category && (
                  <p
                    style={{
                      color: colors.slate[400],
                      fontSize: "0.75rem",
                      marginTop: spacing[1],
                    }}
                  >
                    {errors.equipment_category}
                  </p>
                )}
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
                  value={(formData as Partial<FastRemoteFormData>).brand_model || ""}
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
                  }}
                  placeholder="Ex: Ravaglioli XLC2000"
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
                  Société
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
                  }}
                  placeholder="Nom de votre garage/entreprise"
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
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: `${spacing[2]} ${spacing[3]}`,
                    backgroundColor: colors.slate[800],
                    border: `1px solid ${errors.phone ? colors.slate[600] : colors.slate[700]}`,
                    borderRadius: "0.375rem",
                    color: colors.white,
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  placeholder="+33 6 XX XX XX XX"
                />
                {errors.phone && (
                  <p
                    style={{
                      color: colors.slate[400],
                      fontSize: "0.75rem",
                      marginTop: spacing[1],
                    }}
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* City & Postal Code */}
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
                    Ville *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={(formData as Partial<FastRemoteFormData>).city || ""}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: `${spacing[2]} ${spacing[3]}`,
                      backgroundColor: colors.slate[800],
                      border: `1px solid ${errors.city ? colors.slate[600] : colors.slate[700]}`,
                      borderRadius: "0.375rem",
                      color: colors.white,
                      fontSize: "0.95rem",
                      outline: "none",
                    }}
                    placeholder="Paris"
                  />
                  {errors.city && (
                    <p
                      style={{
                        color: colors.slate[400],
                        fontSize: "0.75rem",
                        marginTop: spacing[1],
                      }}
                    >
                      {errors.city}
                    </p>
                  )}
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
                    Code postal *
                  </label>
                  <input
                    type="text"
                    id="postal_code"
                    name="postal_code"
                    value={(formData as Partial<FastRemoteFormData>).postal_code || ""}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: `${spacing[2]} ${spacing[3]}`,
                      backgroundColor: colors.slate[800],
                      border: `1px solid ${
                        errors.postal_code ? colors.slate[600] : colors.slate[700]
                      }`,
                      borderRadius: "0.375rem",
                      color: colors.white,
                      fontSize: "0.95rem",
                      outline: "none",
                    }}
                    placeholder="75001"
                  />
                  {errors.postal_code && (
                    <p
                      style={{
                        color: colors.slate[400],
                        fontSize: "0.75rem",
                        marginTop: spacing[1],
                      }}
                    >
                      {errors.postal_code}
                    </p>
                  )}
                </div>
              </div>

              {/* Symptom */}
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
                  Symptôme / problème constaté * ({symptomLength}/40 caractères min)
                </label>
                <textarea
                  id="symptom"
                  name="symptom"
                  value={(formData as Partial<FastRemoteFormData>).symptom || ""}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: `${spacing[2]} ${spacing[3]}`,
                    backgroundColor: colors.slate[800],
                    border: `1px solid ${errors.symptom ? colors.slate[600] : colors.slate[700]}`,
                    borderRadius: "0.375rem",
                    color: colors.white,
                    fontSize: "0.95rem",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                  placeholder="Décrivez le symptôme, le contexte et toute information utile pour le diagnostic..."
                />
                {errors.symptom && (
                  <p
                    style={{
                      color: colors.slate[400],
                      fontSize: "0.75rem",
                      marginTop: spacing[1],
                    }}
                  >
                    {errors.symptom}
                  </p>
                )}
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
                  Urgence *
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={(formData as Partial<FastRemoteFormData>).urgency || ""}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: `${spacing[2]} ${spacing[3]}`,
                    backgroundColor: colors.slate[800],
                    border: `1px solid ${errors.urgency ? colors.slate[600] : colors.slate[700]}`,
                    borderRadius: "0.375rem",
                    color: colors.white,
                    fontSize: "0.95rem",
                    outline: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="">-- Choisir le niveau d&apos;urgence --</option>
                  {urgencyOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.urgency && (
                  <p
                    style={{
                      color: colors.slate[400],
                      fontSize: "0.75rem",
                      marginTop: spacing[1],
                    }}
                  >
                    {errors.urgency}
                  </p>
                )}
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
                  value={(formData as Partial<FastRemoteFormData>).availability || ""}
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
                  }}
                  placeholder="Ex: Lundi 14h-17h, Mardi matin, Vendredi toute la journée"
                />
              </div>
            </>
          )}

          {!isFastRemote && (
            <>
              {/* Generic Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    marginBottom: spacing[2],
                  }}
                >
                  {isFastRemote ? "Description du symptôme" : "Message"} ({symptomLength}/40 caractères min) *
                </label>
                <textarea
                  id="message"
                  name={isFastRemote ? "symptom" : "message"}
                  value={isFastRemote ? ((formData as Partial<FastRemoteFormData>).symptom || "") : ((formData as Partial<FormData>).message || "")}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: `${spacing[2]} ${spacing[3]}`,
                    backgroundColor: colors.slate[800],
                    border: `1px solid ${errors[isFastRemote ? "symptom" : "message"] ? colors.slate[600] : colors.slate[700]}`,
                    borderRadius: "0.375rem",
                    color: colors.white,
                    fontSize: "0.95rem",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                  placeholder={isFastRemote ? "Décrivez le problème observé..." : "Décrivez votre situation..."}
                />
                {errors[isFastRemote ? "symptom" : "message"] && (
                  <p
                    style={{
                      color: colors.slate[400],
                      fontSize: "0.75rem",
                      marginTop: spacing[1],
                    }}
                  >
                    {errors[isFastRemote ? "symptom" : "message"]}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Consent */}
          <div style={{ display: "flex", gap: spacing[2], alignItems: "flex-start" }}>
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
              style={{
                marginTop: "2px",
                cursor: "pointer",
                accentColor: colors.cyan[500],
              }}
            />
            <label
              htmlFor="consent"
              style={{
                fontSize: "0.875rem",
                color: colors.slate[300],
                cursor: "pointer",
                lineHeight: 1.5,
              }}
            >
              J&apos;accepte que mes données soient utilisées pour traiter ma demande (RGPD). *
            </label>
          </div>
          {errors.consent && (
            <p
              style={{
                color: colors.slate[400],
                fontSize: "0.75rem",
                marginTop: "-#{spacing[2]}",
              }}
            >
              {errors.consent}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            style={{
              padding: `${spacing[3]} ${spacing[6]}`,
              backgroundColor: isFormValid ? colors.cyan[500] : colors.slate[700],
              color: colors.white,
              border: "none",
              borderRadius: "0.375rem",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: isFormValid ? "pointer" : "not-allowed",
              opacity: isFormValid ? 1 : 0.5,
              transition: "background-color 0.3s",
              marginTop: spacing[4],
            }}
            onMouseEnter={(e) => {
              if (isFormValid) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.cyan[600];
              }
            }}
            onMouseLeave={(e) => {
              if (isFormValid) {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.cyan[500];
              }
            }}
          >
            {isSubmitting
              ? "Envoi..."
              : isFastRemote
                ? "Démarrer le diagnostic"
                : "Envoyer"}
          </button>

          <p
            style={{
              fontSize: "0.75rem",
              color: colors.slate[400],
              textAlign: "center",
              margin: `${spacing[4]} 0 0 0`,
            }}
          >
            Vos données sont confidentielles. Voir nos{" "}
            <a
              href="/confidentialite"
              style={{ color: colors.cyan[400], textDecoration: "none" }}
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

