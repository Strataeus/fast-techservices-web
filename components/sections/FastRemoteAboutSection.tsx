/**
 * FAST Remote - About Section (CarServ style)
 * Image + 3 numbered features: Proposition, SLA, Scope
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function FastRemoteAboutSection() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.white,
        color: colors.slate[900],
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Grid: Image (left) + Features (right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: spacing[12],
            alignItems: "stretch",
          }}
        >
          {/* LEFT: Image Placeholder */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "400px",
              backgroundColor: colors.slate[100],
              borderRadius: "0.5rem",
              border: `2px dashed ${colors.slate[300]}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Image placeholder with number of years */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: colors.cyan[500],
                  marginBottom: spacing[2],
                }}
              >
                24h
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  color: colors.slate[600],
                }}
              >
                Diagnostic complet
              </div>
            </div>

            {/* Corner badge - Experience */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: colors.slate[900],
                color: colors.white,
                padding: `${spacing[4]} ${spacing[6]}`,
                textAlign: "center",
                borderRadius: "0 0 0 0.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                }}
              >
                Années
              </div>
            </div>
          </div>

          {/* RIGHT: Features (01, 02, 03) */}
          <div>
            <h6
              style={{
                textTransform: "uppercase",
                color: colors.cyan[500],
                fontSize: "0.875rem",
                fontWeight: 600,
                marginBottom: spacing[2],
                letterSpacing: "0.05em",
              }}
            >
              À propos de FAST Remote
            </h6>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                marginBottom: spacing[4],
                lineHeight: 1.3,
              }}
            >
              Diagnostic <span style={{ color: colors.cyan[500] }}>visio</span> en 24h avec preuves
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[600],
                marginBottom: spacing[6],
                lineHeight: 1.7,
              }}
            >
              FAST Remote propose un diagnostic technique complet à distance via visio. Tests guidés,
              mesures précises, preuves documentées. Réponse sous 4h, créneau sous 24h.
            </p>

            {/* Feature 01 */}
            <div
              style={{
                display: "flex",
                gap: spacing[4],
                marginBottom: spacing[6],
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "50px",
                  height: "50px",
                  backgroundColor: colors.slate[100],
                  borderRadius: "0.375rem",
                  fontWeight: 700,
                  color: colors.slate[600],
                  fontSize: "1rem",
                }}
              >
                01
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: spacing[1],
                    color: colors.slate[900],
                  }}
                >
                  Proposition claire
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Diagnostic + assistance visio. Tests discriminants. Verdict + recommandations.
                </p>
              </div>
            </div>

            {/* Feature 02 */}
            <div
              style={{
                display: "flex",
                gap: spacing[4],
                marginBottom: spacing[6],
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "50px",
                  height: "50px",
                  backgroundColor: colors.slate[100],
                  borderRadius: "0.375rem",
                  fontWeight: 700,
                  color: colors.slate[600],
                  fontSize: "1rem",
                }}
              >
                02
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: spacing[1],
                    color: colors.slate[900],
                  }}
                >
                  SLA garantis
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Réponse en 4h ouvrées. Créneau visio en 24h. Dossier complet dans les 48h.
                </p>
              </div>
            </div>

            {/* Feature 03 */}
            <div
              style={{
                display: "flex",
                gap: spacing[4],
                marginBottom: spacing[6],
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "50px",
                  height: "50px",
                  backgroundColor: colors.slate[100],
                  borderRadius: "0.375rem",
                  fontWeight: 700,
                  color: colors.slate[600],
                  fontSize: "1rem",
                }}
              >
                03
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: spacing[1],
                    color: colors.slate[900],
                  }}
                >
                  Scope : France entière
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Accessible depuis tout le territoire. NO-GO si sécurité. Intervention terrain possible.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#formulaire"
              style={{
                display: "inline-block",
                marginTop: spacing[4],
                padding: `${spacing[3]} ${spacing[6]}`,
                backgroundColor: colors.cyan[500],
                color: colors.white,
                textDecoration: "none",
                borderRadius: "0.375rem",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = colors.cyan[600];
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = colors.cyan[500];
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Démarrer un diagnostic →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
