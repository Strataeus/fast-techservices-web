/**
 * Premium CTA Section - Before contact form
 * Highlights value proposition and urgency
 * Style: Dark elegant with gradient, strong typography
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function PremiumCTASection() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundImage: `linear-gradient(135deg, ${colors.cyan[600]}10 0%, ${colors.slate[900]} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          backgroundColor: colors.cyan[500],
          opacity: 0.08,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          backgroundColor: colors.cyan[600],
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.75rem",
            fontWeight: 700,
            color: colors.white,
            margin: `0 0 ${spacing[6]} 0`,
            lineHeight: 1.3,
          }}
        >
          Équipements critiques ?{" "}
          <span style={{ color: colors.cyan[400] }}>
            Diagnostic structuré garantit les réponses.
          </span>
        </h2>

        <p
          style={{
            fontSize: "1.25rem",
            color: colors.slate[300],
            margin: `0 0 ${spacing[8]} 0`,
            lineHeight: 1.7,
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Pas de preuve = pas fait. Nos méthodes d&apos;intervention garantissent
          traçabilité, sécurité et disponibilité. Chaque dossier est documenté et
          défendable.
        </p>

        <div
          style={{
            display: "flex",
            gap: spacing[4],
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: `${spacing[4]} ${spacing[8]}`,
              backgroundColor: colors.cyan[500],
              color: colors.white,
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: `0 12px 24px rgba(0, 217, 255, 0.25)`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[600];
              (e.currentTarget as HTMLElement).style.transform =
                "scale(1.05) translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                `0 16px 32px rgba(0, 217, 255, 0.35)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[500];
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                `0 12px 24px rgba(0, 217, 255, 0.25)`;
            }}
          >
            Demander un diagnostic →
          </button>
          <button
            style={{
              padding: `${spacing[4]} ${spacing[8]}`,
              backgroundColor: "transparent",
              color: colors.cyan[400],
              border: `2px solid ${colors.cyan[500]}`,
              borderRadius: "0.5rem",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[500];
              (e.currentTarget as HTMLElement).style.color = colors.white;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
              (e.currentTarget as HTMLElement).style.color = colors.cyan[400];
            }}
          >
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}
