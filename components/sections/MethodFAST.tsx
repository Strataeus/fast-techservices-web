/**
 * MethodFAST Component - 5-step FAST methodology
 * Flexible layout: "teaser" (home) or "full" (method page)
 * HTML-first, pure CSS, no JavaScript interactions
 * 
 * Sourced from: FAST_TECH_SERVICES_COPY_v1.md
 * Doctrine: TERRAIN → PREUVES → TESTS → VERDICT → DOSSIER
 * "Pas de preuve = pas fait" — traçabilité réelle, résultats documentés
 */

import { colors, spacing } from "@/lib/design/tokens";

interface MethodFASTProps {
  variant?: "teaser" | "full";
}

const steps = [
  {
    num: 1,
    title: "Terrain",
    description: "Baseline avant action — mesures, état, symptômes",
    icon: "📋",
  },
  {
    num: 2,
    title: "Preuves",
    description: "Photos/vidéos AVANT • DIAG • PENDANT • APRÈS",
    icon: "📸",
  },
  {
    num: 3,
    title: "Tests",
    description: "Tests de sortie obligatoires — PASS / FAIL",
    icon: "✓",
  },
  {
    num: 4,
    title: "Verdict",
    description: "Écrit + punch list si réserves",
    icon: "📝",
  },
  {
    num: 5,
    title: "Dossier",
    description: "Compte rendu structuré : constats, actions, mesures, tests",
    icon: "📦",
  },
];

export function MethodFAST({ variant = "teaser" }: MethodFASTProps) {
  const isFull = variant === "full";
  const bgColor = isFull ? colors.slate[50] : colors.white;
  const headlineSize = isFull ? "2.25rem" : "2.5rem";
  const showEyebrow = !isFull;

  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: bgColor,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: spacing[16], textAlign: "center" }}>
          {/* Eyebrow (teaser only) */}
          {showEyebrow && (
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
              Processus structuré
            </div>
          )}

          {/* Headline */}
          <h2
            style={{
              fontSize: headlineSize,
              fontWeight: 700,
              color: colors.slate[900],
              margin: `0 0 ${spacing[4]} 0`,
              lineHeight: 1.2,
            }}
          >
            {isFull ? "Méthode FAST — Terrain → Preuves → Tests → Verdict → Dossier" : "Méthode FAST — 5 étapes"}
          </h2>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.slate[600],
              margin: 0,
              maxWidth: "750px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            <strong>Pas de preuve = pas fait.</strong> Chaque intervention est
            traitée comme un process industriel : on mesure, on prouve, on valide,
            on conclut. Traçabilité réelle, dossier opposable.
          </p>
        </div>

        {/* Steps Grid - Pure CSS, no JS */}
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
                padding: spacing[8],
                backgroundColor: isFull ? colors.white : colors.slate[50],
                borderRadius: "0.75rem",
                border: `2px solid ${colors.slate[200]}`,
                textAlign: "center",
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
              className="hover:border-cyan-500 hover:shadow-lg hover:scale-105"
            >
              {/* Step Number Badge */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  margin: `0 auto ${spacing[4]} auto`,
                  borderRadius: "50%",
                  backgroundColor: colors.cyan[500],
                  color: colors.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: spacing[3],
                }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                {step.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: colors.slate[600],
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {step.description}
              </p>

              {/* Arrow to next step (visual connector) */}
              {step.num < 5 && (
                <div
                  style={{
                    position: "absolute",
                    right: "-24px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "1.5rem",
                    color: colors.cyan[400],
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Emphasis Box */}
        <div
          style={{
            marginTop: spacing[16],
            padding: spacing[6],
            backgroundColor: colors.cyan[50],
            borderLeft: `4px solid ${colors.cyan[500]}`,
            borderRadius: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: colors.slate[700],
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            <strong>Garantie FAST :</strong> Chaque intervention est documentée avec
            preuves (photos, mesures, tests). Aucune promesse hors SLA. Résultats
            mesurables, dossier clair et défendable. C&apos;est notre signature.
          </p>
        </div>
      </div>
    </section>
  );
}
