/**
 * FAST Remote Value Props Component
 * "Ce que vous obtenez" : livrables concrets de FAST Remote
 * 
 * Source: FAST_SITE_SPEC_v1.md + FAST_TECH_SERVICES_COPY_v1.md
 */

import { colors, spacing } from "@/lib/design/tokens";

const valueProps = [
  {
    id: 1,
    title: "Diagnostic guidé en visio",
    description:
      "Session avec expert : tests discriminants, collecte d'indices, mesures documentées. Pas de perte de temps, approche terrain-first adaptée à votre équipement.",
  },
  {
    id: 2,
    title: "Dossier clair et traçable",
    description:
      "Preuves, constats, mesures, verdict écrit. Ce qui a été constaté, ce qui a été testé, ce qui reste à faire. Opposable, défendable.",
  },
  {
    id: 3,
    title: "Verdict précis ou plan d'action",
    description:
      "RÉSOLU / PLAN D'ACTION / ONSITE REQUIRED / NO-GO / INCOMPLET. Vous savez précisément ce qui est nécessaire, sans ambiguïté.",
  },
  {
    id: 4,
    title: "Gain de temps et disponibilité",
    description:
      "Évite les déplacements inutiles. Prépare une intervention onsite chirurgicale si nécessaire. Réduit l'arrêt d'atelier.",
  },
];

export function FASTRemoteValueProps() {
  return (
    <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.white }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            marginBottom: spacing[4],
            textAlign: "center",
            color: colors.slate[900],
          }}
        >
          Ce que vous obtenez avec FAST Remote
        </h2>

        <p
          style={{
            fontSize: "1.125rem",
            color: colors.slate[600],
            textAlign: "center",
            marginBottom: spacing[16],
            maxWidth: "800px",
            margin: `0 auto ${spacing[16]} auto`,
            lineHeight: 1.6,
          }}
        >
          Plus qu&apos;un appel support : un protocole structuré qui produit des preuves, des mesures et un verdict clair.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: spacing[8],
          }}
        >
          {valueProps.map((prop) => (
            <div
              key={prop.id}
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[50],
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  backgroundColor: colors.cyan[100],
                  borderRadius: "0.5rem",
                  marginBottom: spacing[4],
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: colors.cyan[600],
                  }}
                >
                  ✓
                </span>
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: spacing[3],
                  color: colors.slate[900],
                }}
              >
                {prop.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: colors.slate[600],
                  lineHeight: 1.6,
                }}
              >
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
