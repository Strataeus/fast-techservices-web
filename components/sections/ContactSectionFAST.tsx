/**
 * Contact Section FAST Component
 * CarServ-style layout: form + info blocks + optional map
 * Reuses ContactForm component
 * 
 * Layout:
 * - Left: 3 info cards (SLA, phone, email) + map (optional)
 * - Right: Contact form
 * 
 * Sourced from: content/config.ts (phone, email, SLA)
 */

"use client";

import { getSLA } from "@/content/config";
import { ContactForm } from "./ContactForm";
import { colors, spacing } from "@/lib/design/tokens";

interface ContactSectionFASTProps {
  showMap?: boolean;
  variant?: "contact" | "fast_remote"; // Form type
}

export function ContactSectionFAST({
  showMap = false,
  variant = "contact",
}: ContactSectionFASTProps) {
  const sla = getSLA();

  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.white,
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section Headline */}
        <div style={{ marginBottom: spacing[16], textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: colors.slate[900],
              margin: `0 0 ${spacing[4]} 0`,
              lineHeight: 1.2,
            }}
          >
            {variant === "fast_remote"
              ? "Démarrer votre diagnostic FAST Remote"
              : "Nous Contacter"}
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.slate[600],
              margin: 0,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {variant === "fast_remote"
              ? "Remplissez le formulaire ci-dessous pour démarrer votre diagnostic à distance."
              : "Décrivez votre besoin. Vous recevrez un accusé immédiat et une réponse dans nos délais SLA."}
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: showMap ? "1fr 1fr" : "1fr 1.2fr",
            gap: spacing[12],
            alignItems: "start",
          }}
          className="md:grid-cols-1 lg:grid-cols-2"
        >
          {/* LEFT: Info Cards + Map */}
          <div style={{ display: "flex", flexDirection: "column", gap: spacing[6] }}>
            {/* SLA Card */}
            <div
              style={{
                padding: spacing[6],
                backgroundColor: colors.cyan[50],
                borderRadius: "0.75rem",
                border: `1px solid ${colors.cyan[300]}`,
              }}
            >
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: colors.cyan[700],
                  margin: `0 0 ${spacing[3]} 0`,
                  letterSpacing: "0.05em",
                }}
              >
                Notre engagement SLA
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: spacing[2],
                }}
              >
                <div>
                  <div style={{ fontSize: "0.75rem", color: colors.slate[600] }}>
                    Accusé réception
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: colors.slate[900],
                    }}
                  >
                    {sla.timeframe.split(" → ")[0] || "Immédiat"}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: colors.slate[600] }}>
                    Première réponse
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: colors.slate[900],
                    }}
                  >
                    {sla.timeframe.split(" → ")[1] || "4h"}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: colors.slate[600] }}>
                    Créneau visio
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: colors.slate[900],
                    }}
                  >
                    {sla.timeframe.split(" → ")[2] || "24h"}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              style={{
                padding: spacing[6],
                backgroundColor: colors.slate[50],
                borderRadius: "0.75rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: colors.slate[700],
                  margin: `0 0 ${spacing[3]} 0`,
                  letterSpacing: "0.05em",
                }}
              >
                Appeler directement
              </h3>
              <a
                href="tel:+33XXXXXXXXX"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: colors.cyan[500],
                  textDecoration: "none",
                  display: "block",
                  marginBottom: spacing[2],
                }}
              >
                📞 +33 (placeholder)
              </a>
              <p style={{ fontSize: "0.875rem", color: colors.slate[600], margin: 0 }}>
                Disponible du lundi au vendredi, 8h-18h
              </p>
            </div>

            {/* Email Card */}
            <div
              style={{
                padding: spacing[6],
                backgroundColor: colors.slate[50],
                borderRadius: "0.75rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: colors.slate[700],
                  margin: `0 0 ${spacing[3]} 0`,
                  letterSpacing: "0.05em",
                }}
              >
                Email
              </h3>
              <a
                href="mailto:contact@fast-techservices.com"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: colors.cyan[500],
                  textDecoration: "none",
                  display: "block",
                }}
              >
                contact@fast-techservices.com
              </a>
            </div>

            {/* Optional Map Placeholder */}
            {showMap && (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: colors.slate[100],
                  borderRadius: "0.75rem",
                  border: `1px solid ${colors.slate[200]}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: colors.slate[500],
                  fontSize: "0.875rem",
                }}
              >
                Google Map intégrée (à configurer)
              </div>
            )}
          </div>

          {/* RIGHT: Contact Form */}
          <div
            style={{
              backgroundColor: colors.slate[50],
              padding: spacing[8],
              borderRadius: "0.75rem",
              border: `1px solid ${colors.slate[200]}`,
            }}
          >
            <ContactForm formType={variant === "contact" ? "default" : "fast_remote"} />
          </div>
        </div>
      </div>
    </section>
  );
}
