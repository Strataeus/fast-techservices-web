/**
 * FAST Remote Process Component
 * Timeline du processus FAST Remote (4-6 étapes)
 * 
 * Source: FAST_SITE_SPEC_v1.md + content-map.yml
 */

import { colors, spacing } from "@/lib/design/tokens";

const processSteps = [
  {
    num: 1,
    title: "Cadrage & prérequis",
    description:
      "Périmètre clair, objectif, conditions sécurité. NO-GO si risques ou environnement non sûr. Safe-by-default.",
    duration: "5-10 min",
  },
  {
    num: 2,
    title: "Baseline & mesures",
    description:
      "État initial de l'équipement, symptômes constatés, mesures avant action. Pas de preuve = pas fait.",
    duration: "10-15 min",
  },
  {
    num: 3,
    title: "Tests discriminants",
    description:
      "Tests guidés qui tranchent. Hypothèses et vérifications. Collecte d'indices et de preuves (photos/vidéos/mesures).",
    duration: "30-45 min",
  },
  {
    num: 4,
    title: "Verdict & recommandations",
    description:
      "Conclusion clair : RÉSOLU / PLAN D'ACTION / ONSITE REQUIRED / NO-GO / INCOMPLET. Recommandations prioritaires.",
    duration: "5-10 min",
  },
  {
    num: 5,
    title: "Dossier opposable",
    description: "Constats, mesures, actions, tests de sortie, verdict écrit et signatures. Traçable, défendable.",
    duration: "Fourni après",
  },
];

export function FastRemoteProcess() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[50],
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: spacing[4],
            color: colors.slate[900],
          }}
        >
          Le process FAST Remote
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
          5 étapes structurées, de la qualification au verdict, en 1–2h maximum.
        </p>

        {/* Timeline visual */}
        <div style={{ position: "relative" }}>
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "2px",
              height: "calc(100% - 80px)",
              backgroundColor: colors.cyan[300],
              zIndex: 0,
            }}
          />

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: spacing[6],
              position: "relative",
              zIndex: 1,
            }}
          >
            {processSteps.map((step) => (
              <div key={step.num} style={{ position: "relative" }}>
                {/* Connector node */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: spacing[4],
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: colors.white,
                      border: `3px solid ${colors.cyan[500]}`,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: colors.cyan[600],
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    padding: spacing[6],
                    backgroundColor: colors.white,
                    borderRadius: "0.5rem",
                    border: `1px solid ${colors.slate[200]}`,
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      marginBottom: spacing[3],
                      color: colors.slate[900],
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: colors.slate[600],
                      marginBottom: spacing[4],
                      lineHeight: 1.5,
                    }}
                  >
                    {step.description}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: `${spacing[2]} ${spacing[4]}`,
                      backgroundColor: colors.cyan[50],
                      color: colors.cyan[700],
                      borderRadius: "0.25rem",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div
          style={{
            marginTop: spacing[16],
            padding: spacing[8],
            backgroundColor: colors.cyan[50],
            border: `1px solid ${colors.cyan[200]}`,
            borderRadius: "0.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: colors.slate[700],
              margin: 0,
              fontWeight: 500,
            }}
          >
            <strong>Durée totale :</strong> 1–2 heures pour une session complète avec verdict écrit.
          </p>
        </div>
      </div>
    </section>
  );
}
