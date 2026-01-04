/**
 * Proofs Teaser Component - 3 case studies with proof data
 * Sourced from: lib/content/proofs.ts
 * 
 * Design: Premium cards showcasing concrete technical evidence
 * - No invention: only documented cases
 * - No client names, no ratings
 * - Focus on: symptom → measure → action → test
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";
import { proofs } from "@/lib/content/proofs";

export function ProofsTeaser() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[900],
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: spacing[16], textAlign: "center" }}>
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              color: colors.cyan[400],
              marginBottom: spacing[4],
              letterSpacing: "0.05em",
            }}
          >
            Preuves / Réalisations
          </div>
          <h2
            style={{
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: colors.white,
              margin: `0 0 ${spacing[6]} 0`,
              lineHeight: 1.2,
            }}
          >
            Diagnostic, action, verdict
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.slate[300],
              margin: 0,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Chaque intervention documente les preuves : mesures avant, actions, tests de sortie. Résultats validés et opposables.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: spacing[8],
          }}
        >
          {proofs.map((proof, idx) => (
            <div
              key={idx}
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[800],
                borderRadius: "0.75rem",
                border: `1px solid ${colors.slate[700]}`,
                transition: "all 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: spacing[4],
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.slate[700];
                (e.currentTarget as HTMLElement).style.borderColor =
                  colors.cyan[500];
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  colors.slate[800];
                (e.currentTarget as HTMLElement).style.borderColor =
                  colors.slate[700];
              }}
            >
              {/* Title */}
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: colors.cyan[300],
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {proof.title}
              </h3>

              {/* Symptom */}
              <div style={{ display: "flex", gap: spacing[3] }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: colors.error,
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    padding: `${spacing[1]} ${spacing[2]}`,
                    borderRadius: "0.25rem",
                    whiteSpace: "nowrap",
                    marginTop: "0.2rem",
                  }}
                >
                  Symptôme
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[300],
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {proof.symptom}
                </p>
              </div>

              {/* Measure */}
              <div style={{ display: "flex", gap: spacing[3] }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: colors.warning,
                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                    padding: `${spacing[1]} ${spacing[2]}`,
                    borderRadius: "0.25rem",
                    whiteSpace: "nowrap",
                    marginTop: "0.2rem",
                  }}
                >
                  Mesure
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[300],
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {proof.measure}
                </p>
              </div>

              {/* Action */}
              <div style={{ display: "flex", gap: spacing[3] }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: colors.info,
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    padding: `${spacing[1]} ${spacing[2]}`,
                    borderRadius: "0.25rem",
                    whiteSpace: "nowrap",
                    marginTop: "0.2rem",
                  }}
                >
                  Action
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[300],
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {proof.action}
                </p>
              </div>

              {/* Test */}
              <div style={{ display: "flex", gap: spacing[3] }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: colors.success,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    padding: `${spacing[1]} ${spacing[2]}`,
                    borderRadius: "0.25rem",
                    whiteSpace: "nowrap",
                    marginTop: "0.2rem",
                  }}
                >
                  Test
                </div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[300],
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {proof.test}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
