/**
 * Fast Remote CTA Final Component
 * Client-side CTA button with hover effects
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function FastRemoteCTAFinal() {
  return (
    <section style={{ padding: `${spacing[16]} ${spacing[6]}`, backgroundColor: colors.slate[50] }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "1rem", color: colors.slate[700], marginBottom: spacing[6] }}>
          Vous préférez parler directement ? Appelez-nous pour une pré-qualification immédiate.
        </p>
        <a
          href="tel:+33XXXXXXXXX"
          style={{
            display: "inline-block",
            padding: `${spacing[3]} ${spacing[8]}`,
            backgroundColor: colors.cyan[500],
            color: colors.slate[900],
            textDecoration: "none",
            fontWeight: 600,
            borderRadius: "0.375rem",
            transition: "background-color 150ms ease-in-out",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = colors.cyan[600];
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = colors.cyan[500];
          }}
        >
          Appeler FAST Tech Services
        </a>
      </div>
    </section>
  );
}
