/**
 * FAST Remote Deliverables Section
 * "Ce que vous obtenez" — Les livrables client
 * 
 * Source: FAST_TECH_SERVICES_COPY_v1.md (section 6 - Livrables client)
 * - Compte rendu structuré (constats, actions, mesures, tests)
 * - Verdict clair : conforme / remis en service / réserves / intervention à prévoir
 * - Recommandations : préventif, pièces, priorités risques/arrêt
 * - Punch list si nécessaire
 * 
 * Tone: Professional, factual, no hype
 * HTML-first presentation
 */

import { colors, spacing } from "@/lib/design/tokens";

const deliverables = [
  {
    icon: "📋",
    title: "Compte rendu structuré",
    description:
      "Documentation complète : constats initiaux, mesures techniques, actions réalisées, tests de validation. Traçable et opposable.",
  },
  {
    icon: "✓",
    title: "Verdict clair",
    description:
      "Conclusion précise : conforme / remis en service / réserves notifiées / intervention terrain requise. Zéro ambiguïté.",
  },
  {
    icon: "🔧",
    title: "Recommandations",
    description:
      "Plan d'action détaillé : maintenance préventive, pièces à commander, priorités basées sur risques et arrêts.",
  },
  {
    icon: "📝",
    title: "Punch list (si réserves)",
    description:
      "Liste des éléments à traiter ultérieurement avec conditions de levée. Engagement de suivi si nécessaire.",
  },
];

export function FastRemoteDeliverables() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[50],
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: spacing[16], textAlign: "center" }}>
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
            Votre engagement reçoit
          </div>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: colors.slate[900],
              margin: `0 0 ${spacing[4]} 0`,
              lineHeight: 1.2,
            }}
          >
            Ce que vous obtenez
          </h2>
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
            Documentation complète, verdict clair, recommandations actionnables. 
            Aucun flou. Preuves à l&apos;appui.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: spacing[6],
          }}
        >
          {deliverables.map((item, index) => (
            <div
              key={index}
              style={{
                padding: spacing[8],
                backgroundColor: colors.white,
                borderRadius: "0.75rem",
                border: `2px solid ${colors.slate[200]}`,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className="hover:border-cyan-500 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: spacing[4],
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[3]} 0`,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.slate[700],
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emphasis: Dossier opposable */}
        <div
          style={{
            marginTop: spacing[16],
            padding: spacing[8],
            backgroundColor: colors.cyan[50],
            borderLeft: `4px solid ${colors.cyan[500]}`,
            borderRadius: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: colors.slate[800],
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            <strong>Signature FAST :</strong> Chaque livrablele est documenté avec 
            preuves (mesures, photos, vidéos, tests). Dossier défendable et 
            opposable : vous pouvez le partager avec assureurs, fabricants ou experts tiers.
          </p>
        </div>
      </div>
    </section>
  );
}
