/**
 * Services - About Section (CarServ style)
 * Image + 3 numbered features: Diagnostic, Maintenance, Tests
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function ServicesAboutSection() {
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
              fontSize: "3rem",
            }}
          >
            🔧
            {/* Corner badge */}
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
                24h
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                }}
              >
                Disponibilité
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
              Nos services
            </h6>
            <h2
              style={{
                fontSize: "2.25rem",
                fontWeight: 700,
                marginBottom: spacing[4],
                lineHeight: 1.3,
              }}
            >
              Dépannage, maintenance et <span style={{ color: colors.cyan[500] }}>remise en service</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[600],
                marginBottom: spacing[6],
                lineHeight: 1.7,
              }}
            >
              Ponts élévateurs, compresseurs, cabines, stations de lavage : nous maîtrisons le diagnostic rapide, 
              la maintenance préventive et la fiabilisation. Avec des tests de sortie et une documentation complète.
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
                  Diagnostic structuré
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Tests guidés, mesures précises, preuves documentées. Identification cause racine sans ambiguïté.
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
                  Maintenance préventive
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Entretien régulier, retrofit, remise en conformité. Éviter les défaillances coûteuses.
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
                  Tests de sortie & PV
                </h4>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Tests complets post-intervention, validation sécurités, PV signé. Équipement prêt pour exploitation.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/contact"
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
              Demander une intervention →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
