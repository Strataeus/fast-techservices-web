/**
 * Case Studies Teaser Component - 3 case study cards
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

const cases = [
  {
    id: 1,
    company: "Garage Proton",
    symptom: "Émanations suspectes lors des diagnostics",
    result: "Diagnostic complet achevé",
  },
  {
    id: 2,
    company: "Poste Concessionnaire",
    symptom: "Anomalies électriques sur équipement",
    result: "Maintenance intégrée recommandée",
  },
  {
    id: 3,
    company: "Station Multiservices",
    symptom: "Performance diagnostique insuffisante",
    result: "Calibrage approfondi effectué",
  },
];

export function CaseStudiesTeaser() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.white,
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
            Interventions réalisées
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
            Résultat fiable + dossier clair : ce qui a été constaté, ce qui a été fait, ce qui a été testé, ce qui reste à faire.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: spacing[8],
          }}
        >
          {cases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              style={{
                padding: spacing[6],
                backgroundColor: colors.slate[50],
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1.02)";
                el.style.boxShadow = `0 4px 6px ${colors.slate[400]}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: spacing[2],
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                {caseStudy.company}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.slate[600],
                  marginBottom: spacing[3],
                  margin: `0 0 ${spacing[3]} 0`,
                }}
              >
                <strong>Symptôme:</strong> {caseStudy.symptom}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.cyan[600],
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                <strong>Résultat:</strong> {caseStudy.result}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: spacing[12] }}>
          <a
            href="/realisations"
            style={{
              display: "inline-block",
              padding: `${spacing[3]} ${spacing[6]}`,
              backgroundColor: colors.cyan[500],
              color: colors.white,
              textDecoration: "none",
              borderRadius: "0.375rem",
              fontWeight: 600,
              fontSize: "0.875rem",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[600];
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[500];
            }}
          >
            Voir tous les cas
          </a>
        </div>
      </div>
    </section>
  );
}
