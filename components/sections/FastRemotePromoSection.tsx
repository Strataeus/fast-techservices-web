/**
 * FAST Remote Promotion Section - Premium CTA
 * Highlights FAST Remote as key differentiator
 * Style: Dark elegant with cyan accent, directional flow
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function FastRemotePromoSection() {
  return (
    <section
      style={{
        padding: `${spacing[16]} ${spacing[6]}`,
        backgroundImage: `linear-gradient(135deg, ${colors.cyan[600]}15 0%, ${colors.cyan[500]}20 100%)`,
        borderTop: `2px solid ${colors.cyan[500]}20`,
        borderBottom: `2px solid ${colors.cyan[500]}20`,
      }}
      className="animate-fade-in-up"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: spacing[12],
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div>
            <div
              style={{
                fontSize: "0.875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: colors.cyan[600],
                marginBottom: spacing[2],
                letterSpacing: "0.05em",
              }}
            >
              ⚡ Offre signature
            </div>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: colors.slate[900],
                margin: `0 0 ${spacing[4]} 0`,
                lineHeight: 1.3,
              }}
            >
              FAST Remote{"\n"}
              <span style={{ color: colors.cyan[600] }}>
                Diagnostic à distance en 24h
              </span>
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[600],
                margin: 0,
                lineHeight: 1.7,
              }}
            >
              Réduisez le temps mort. Avant une intervention terrain, une session
              FAST Remote permet une pré-qualification rapide, des preuves évidentes,
              et une mobilisation chirurgicale si nécessaire.
            </p>

            {/* Quick Benefits */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: spacing[4],
                marginTop: spacing[6],
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: colors.cyan[500],
                  }}
                >
                  24h
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: colors.slate[600],
                    margin: 0,
                  }}
                >
                  Diagnostic complet
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: colors.cyan[500],
                  }}
                >
                  France
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: colors.slate[600],
                    margin: 0,
                  }}
                >
                  Couverture nationale
                </p>
              </div>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                padding: `${spacing[4]} ${spacing[8]}`,
                backgroundColor: colors.cyan[500],
                color: colors.white,
                border: "none",
                borderRadius: "0.75rem",
                fontSize: "1.125rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: `0 12px 24px rgba(0, 217, 255, 0.25)`,
                whiteSpace: "nowrap",
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
              Démarrer →
            </button>
            <p
              style={{
                fontSize: "0.8rem",
                color: colors.slate[500],
                margin: `${spacing[3]} 0 0 0`,
              }}
            >
              Devis gratuit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
