/**
 * Services Hub Hero Section
 * 
 * Source: content-map.yml (services_hub)
 * Copy: FAST_TECH_SERVICES_COPY_v1.md#Services
 * 
 * Premium hero with SLA badges (sourced from content/config.ts)
 * Dark background, left text + right image placeholder
 * HTML-first, minimal JS (hover effects only)
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";
import { getSLA } from "@/content/config";

export function ServicesHero() {
  const sla = getSLA();

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
              Expertise au service de votre atelier
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
              Services
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
              Dépannage premium, remise en service, fiabilisation — avec méthode, preuves et tests de sortie.
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "0.95rem",
                color: colors.slate[300],
                margin: `0 0 ${spacing[8]} 0`,
                lineHeight: 1.8,
              }}
            >
              Ponts élévateurs, compresseurs, cabines peinture, stations de lavage : nous maîtrisons 
              le diagnostic rapide, la maintenance préventive et la remise en exploitation fiable. 
              Avec la méthode FAST : tests guidés, preuves documentées, verdict clair.
            </p>

            {/* SLA Section */}
            <div style={{ marginBottom: spacing[8] }}>
              <h3
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: colors.slate[300],
                  marginBottom: spacing[4],
                  letterSpacing: "0.05em",
                }}
              >
                Garanties de traitement
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: colors.slate[200],
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {sla.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: spacing[4], flexWrap: "wrap" }}>
              <a
                href="/fast-remote#formulaire"
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
                Démarrer FAST Remote →
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
                Intervention sur site
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
            🔧
          </div>
        </div>
      </div>
    </section>
  );
}
