/**
 * Contact Form Component - Form structure with Zod validation
 */

"use client";

import { useState } from "react";
import { ContactFormSchema } from "@/lib/schemas/contact-form";
import { colors, spacing } from "@/lib/design/tokens";
import { z } from "zod";

type FormData = z.infer<typeof ContactFormSchema>;

export function ContactForm() {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    setIsSubmitting(true);

    try {
      const validatedData = ContactFormSchema.parse(formData);
      console.log("Form valid:", validatedData);
      // TODO: Submit to /api/leads in PR4
      alert("Formulaire valide (envoi en PR4)");
      setFormData({});
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
    formData.email && formData.name && formData.message && !Object.keys(errors).length;

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
          Contactez-nous
        </h2>
        <p
          style={{
            textAlign: "center",
            color: colors.slate[300],
            marginBottom: spacing[8],
            fontSize: "0.95rem",
          }}
        >
          Décrivez vos symptômes, nous vous répondrons rapidement
        </p>

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
              Nom
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
              Email
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

          {/* Message */}
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
              Symptôme ({formData.message?.length || 0}/40 caractères min)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message || ""}
              onChange={handleChange}
              rows={4}
              style={{
                width: "100%",
                padding: `${spacing[2]} ${spacing[3]}`,
                backgroundColor: colors.slate[800],
                border: `1px solid ${errors.message ? colors.slate[600] : colors.slate[700]}`,
                borderRadius: "0.375rem",
                color: colors.white,
                fontSize: "0.95rem",
                outline: "none",
                fontFamily: "inherit",
                resize: "vertical",
              }}
              placeholder="Décrivez le symptôme ou la situation..."
            />
            {errors.message && (
              <p
                style={{
                  color: colors.slate[400],
                  fontSize: "0.75rem",
                  marginTop: spacing[1],
                }}
              >
                {errors.message}
              </p>
            )}
          </div>

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
            {isSubmitting ? "Envoi..." : "Démarrer diagnostic"}
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
              href="/mentions-legales"
              style={{ color: colors.cyan[400], textDecoration: "none" }}
            >
              conditions légales
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
