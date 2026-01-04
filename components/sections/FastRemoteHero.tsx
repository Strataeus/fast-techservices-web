/**
 * FAST Remote Hero Section (CarServ-inspired)
 * 
 * Source: content-map.yml (hero_remote)
 * Copy sources:
 *   - FAST_TECH_SERVICES_COPY_v1.md#FAST Remote
 *   - FAST_TECH_SERVICES_COPY_v1.md#Méthode de travail
 * 
 * Proposition: diagnostic + assistance technique à distance (visio)
 * Layout: Left text + Right image (two-column, responsive)
 * Tone: Professional, clear, action-oriented
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function FastRemoteHero() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[900],
        color: colors.white,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: spacing[12],
            alignItems: "center",
          }}
        >
          {/* Left: Text Content */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: colors.cyan[400],
                marginBottom: spacing[3],
                letterSpacing: "0.05em",
              }}
            >
              Diagnostic à distance
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "2.75rem",
                fontWeight: 700,
                color: colors.white,
                margin: `0 0 ${spacing[4]} 0`,
                lineHeight: 1.2,
              }}
            >
              FAST Remote <br /> dépannage à distance en visio
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "1.125rem",
                color: colors.slate[200],
                margin: `0 0 ${spacing[6]} 0`,
                lineHeight: 1.7,
              }}
            >
              Tests guidés, mesures précises, verdict clair. 
              Réponse en 4h, visio en 24h.
            </p>

            {/* SLA Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: spacing[3],
                marginBottom: spacing[8],
              }}
            >
              <div
                style={{
                  padding: `${spacing[3]} ${spacing[4]}`,
                  backgroundColor: "rgba(6, 182, 212, 0.15)",
                  border: `1px solid ${colors.cyan[500]}`,
                  borderRadius: "0.375rem",
                }}
              >
                <div style={{ color: colors.cyan[300], fontSize: "0.875rem" }}>Réponse</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: colors.white,
                  }}
                >
                  4h
                </div>
              </div>
              <div
                style={{
                  padding: `${spacing[3]} ${spacing[4]}`,
                  backgroundColor: "rgba(6, 182, 212, 0.15)",
                  border: `1px solid ${colors.cyan[500]}`,
                  borderRadius: "0.375rem",
                }}
              >
                <div style={{ color: colors.cyan[300], fontSize: "0.875rem" }}>Créneau</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.125rem",
                    color: colors.white,
                  }}
                >
                  24h
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: spacing[4] }}>
              <a
                href="#formulaire"
                style={{
                  padding: `${spacing[3]} ${spacing[6]}`,
                  backgroundColor: colors.cyan[500],
                  color: colors.slate[900],
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    colors.cyan[600];
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    colors.cyan[500];
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Demander un diagnostic →
              </a>
              <a
                href="/contact"
                style={{
                  padding: `${spacing[3]} ${spacing[6]}`,
                  backgroundColor: "transparent",
                  border: `2px solid ${colors.slate[400]}`,
                  color: colors.white,
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(226, 232, 240, 0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    colors.white;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    colors.slate[400];
                }}
              >
                Questions ?
              </a>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
              backgroundColor: colors.slate[800],
              borderRadius: "0.5rem",
              fontSize: "4rem",
              border: `2px dashed ${colors.slate[700]}`,
            }}
          >
            📹
          </div>
        </div>
      </div>
    </section>
  );
}
