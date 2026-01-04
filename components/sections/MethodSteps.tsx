/**
 * Method Steps Component - 5-step FAST methodology
 * 
 * Sourced from: FAST_TECH_SERVICES_COPY_v1.md
 * Doctrine intégrée: TERRAIN → PREUVES → TESTS → VERDICT → DOSSIER
 * "Pas de preuve = pas fait" — traçabilité réelle, résultats documentés
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

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

export function MethodSteps() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[50],
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: spacing[16], textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: colors.slate[900],
              margin: `0 0 ${spacing[4]} 0`,
            }}
          >
            Méthode FAST — Terrain → Preuves → Tests → Verdict → Dossier
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.slate[600],
              margin: 0,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <strong>Pas de preuve = pas fait.</strong> Chaque intervention traitée comme un process industriel : on mesure, on prouve, on valide, on conclut.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: spacing[8],
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                padding: spacing[8],
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                border: `2px solid ${colors.slate[200]}`,
                textAlign: "center",
                transition: "border-color 150ms ease-in-out, box-shadow 150ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = colors.cyan[500];
                el.style.boxShadow = `0 4px 12px ${colors.cyan[500]}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = colors.slate[200];
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon Emoji + Step Number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: spacing[2],
                  marginBottom: spacing[4],
                }}
              >
                <span style={{ fontSize: "2rem" }}>{step.icon}</span>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "36px",
                    height: "36px",
                    backgroundColor: colors.cyan[500],
                    color: colors.white,
                    borderRadius: "50%",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                  }}
                >
                  {step.num}
                </div>
              </div>

              {/* Step Title */}
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[3]} 0`,
                }}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.slate[600],
                  lineHeight: 1.6,
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
