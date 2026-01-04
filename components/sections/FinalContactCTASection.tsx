/**
 * Final Contact CTA Section — Before contact form
 * Simple, direct call-to-action towards contact page
 * 
 * Source: content-map.yml (secondary_cta: "Demander une intervention sur site")
 * Tone: Professional, action-oriented, no hype
 * HTML-first, minimal JS
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function FinalContactCTASection() {
  return (
    <section
      style={{
        padding: `${spacing[16]} ${spacing[6]}`,
        backgroundColor: colors.slate[900],
        borderTop: `1px solid ${colors.slate[700]}`,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: spacing[8],
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                color: colors.white,
                margin: `0 0 ${spacing[4]} 0`,
                lineHeight: 1.3,
              }}
            >
              Prêt à passer à l&apos;action ?
            </h3>
            <p
              style={{
                fontSize: "1.0625rem",
                color: colors.slate[300],
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              Contactez-nous pour une demande FAST Remote ou une intervention sur site. 
              Accusé immédiat, réponse sous 4h ouvrées.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div style={{ textAlign: "right" }}>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: `${spacing[4]} ${spacing[8]}`,
                backgroundColor: colors.cyan[500],
                color: colors.white,
                textDecoration: "none",
                borderRadius: "0.375rem",
                fontWeight: 600,
                fontSize: "1.0625rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.cyan[600];
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.cyan[500];
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Contacter FAST Tech Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
