/**
 * About Section Component - CarServ style
 * Image + text with numbered features (1, 2, 3)
 * Sourced from: FAST_TECH_SERVICES_COPY_v1.md
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function AboutSection() {
  const features = [
    {
      num: "01",
      title: "Méthode non négociable",
      description:
        "Terrain → Preuve → Verdict. Pas de preuve = pas fait.",
    },
    {
      num: "02",
      title: "Culture preuve",
      description:
        "Preuves avant/pendant/après, traçabilité complète, dossier opposable.",
    },
    {
      num: "03",
      title: "Expertise électromécanique",
      description:
        "Équipements critiques garage : ponts, compresseurs, cabines, stations.",
    },
  ];

  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.white,
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: spacing[12],
            alignItems: "center",
          }}
          className="animate-fade-in-up"
        >
          <div
            style={{
              position: "relative",
              minHeight: "400px",
              backgroundColor: colors.slate[100],
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          >
            <img
              src="/hero/home/hero.webp"
              alt="FAST Tech Services atelier"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: spacing[6],
                right: spacing[6],
                padding: `${spacing[4]} ${spacing[6]}`,
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                borderRadius: "0.5rem",
                backdropFilter: "blur(4px)",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: colors.white,
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                Fiable
              </h2>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.cyan[300],
                  margin: `${spacing[1]} 0 0 0`,
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Et opposable
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: spacing[8] }}>
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: colors.cyan[600],
                  marginBottom: spacing[3],
                  letterSpacing: "0.05em",
                }}
              >
                À Propos
              </div>
              <h2
                style={{
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[4]} 0`,
                  lineHeight: 1.3,
                }}
              >
                <span style={{ color: colors.cyan[600] }}>FAST Tech Services</span>
                {": pour équipements fiables"}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.slate[600],
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                Expert électromécanicien terrain orienté maintenance, diagnostic,
                intégration d&apos;équipements critiques de garage automobile. Sécurité,
                qualité, traçabilité, disponibilité.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: spacing[4] }}>
              {features.map((feature) => (
                <div
                  key={feature.num}
                  style={{
                    display: "flex",
                    gap: spacing[4],
                    padding: spacing[4],
                    backgroundColor: colors.slate[50],
                    borderRadius: "0.5rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.slate[100];
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.1)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.slate[50];
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      minWidth: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: colors.white,
                      borderRadius: "0.375rem",
                      border: `2px solid ${colors.slate[200]}`,
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: colors.slate[600],
                      }}
                    >
                      {feature.num}
                    </span>
                  </div>

                  <div>
                    <h6
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: colors.slate[900],
                        margin: 0,
                        marginBottom: spacing[1],
                      }}
                    >
                      {feature.title}
                    </h6>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: colors.slate[600],
                        margin: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                style={{
                  padding: `${spacing[3]} ${spacing[6]}`,
                  backgroundColor: colors.cyan[500],
                  color: colors.white,
                  border: "none",
                  borderRadius: "0.5rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    colors.cyan[600];
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 8px 16px rgba(0, 217, 255, 0.3)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    colors.cyan[500];
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Découvrir notre méthode →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
