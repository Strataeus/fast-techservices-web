/**
 * Method Steps Component - 5-step FAST methodology
 */

import { colors, spacing } from "@/lib/design/tokens";

const steps = [
  { num: 1, title: "Pré-qualification", description: "Formulaire + équipement" },
  {
    num: 2,
    title: "Faisabilité",
    description: "Évaluation diagnostic visio",
  },
  { num: 3, title: "Session visio", description: "Tests guidés + mesures" },
  { num: 4, title: "Diagnostic", description: "Rapport écrit détaillé" },
  {
    num: 5,
    title: "Plan d'action",
    description: "Recommandations prioritaires",
  },
];

export function MethodSteps() {
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
            marginBottom: spacing[12],
          }}
        >
          Notre méthode en 5 étapes
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: spacing[6],
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                padding: spacing[6],
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: colors.cyan[500],
                  color: colors.white,
                  borderRadius: "50%",
                  fontWeight: 700,
                  marginBottom: spacing[4],
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: spacing[2],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.slate[600],
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
