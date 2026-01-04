/**
 * FAST Remote Prerequisites & Limitations Component
 * NO-GO cases, safe-by-default conditions, limites du remote
 * 
 * Source: FAST_SITE_SPEC_v1.md + FAST_TECH_SERVICES_COPY_v1.md
 */

import { colors, spacing } from "@/lib/design/tokens";

const prerequisites = [
  {
    type: "requirement",
    title: "Équipement accessible en visio",
    description:
      "Vous devez pouvoir faire des tests simples (mesures, photos, vidéos) pendant la session visio.",
  },
  {
    type: "requirement",
    title: "Internet stable",
    description:
      "Connexion fiable pour une session sans coupures. 4G acceptable, WiFi recommandé.",
  },
  {
    type: "requirement",
    title: "Contact direct avec responsable technique",
    description:
      "Une personne qualifiée disponible pendant la session pour effectuer les tests et manipulations.",
  },
];

const noGo = [
  {
    title: "Absence sécurité appropriée",
    description:
      "Pas de LOTO, pas de garde-fou, atelier sans protocole : STOP & CALL. Sécurité = non-négociable.",
  },
  {
    title: "Équipement électriquement dangereux",
    description:
      "Risques haute tension non maîtrisés, isolation douteuse : NO-GO remote. Intervention onsite requise.",
  },
  {
    title: "Impossibilité d'isoler/sécuriser",
    description:
      "Si l'équipement ne peut pas être sécurisé avant session (LOTO impossible, circuit actif toujours) : déplacement onsite inévitable.",
  },
  {
    title: "Urgence extrême (atelier bloqué 0h)",
    description:
      "Si vous avez besoin d'une solution en 30 min et remote peut prendre 1-2h : appelez directement, intervention express possible.",
  },
];

const limitations = [
  {
    title: "Pas d'intervention physique",
    description:
      "Remote = diagnostic + tests. Pas de réparation à distance, pas de remplacement de pièces par visio. Onsite si action nécessaire.",
  },
  {
    title: "Preuves limitées à ce que vous pouvez montrer",
    description:
      "Pas d'accès direct à l'équipement. Mesures requises de votre côté. Si données manquent : UNKNOWN explicite + plan de collecte.",
  },
  {
    title: "Décisions safe-by-default",
    description:
      "En doute ? Recommandation conservative. Mieux prévenir qu'exposer atelier/opérateurs à risque.",
  },
];

export function FASTRemotePrereqs() {
  return (
    <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.white }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            marginBottom: spacing[16],
            textAlign: "center",
            color: colors.slate[900],
          }}
        >
          Prérequis, NO-GO & limites
        </h2>

        {/* Prerequisites */}
        <div style={{ marginBottom: spacing[20] }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: spacing[8],
              color: colors.slate[900],
              borderBottom: `2px solid ${colors.success}`,
              paddingBottom: spacing[4],
            }}
          >
            ✓ Prérequis pour FAST Remote
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: spacing[6],
            }}
          >
            {prerequisites.map((req, idx) => (
              <div
                key={idx}
                style={{
                  padding: spacing[6],
                  backgroundColor: `${colors.success}20`,
                  borderLeft: `4px solid ${colors.success}`,
                  borderRadius: "0.25rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: spacing[2],
                    color: `${colors.success}99`,
                  }}
                >
                  {req.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: colors.slate[600],
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {req.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NO-GO */}
        <div style={{ marginBottom: spacing[20] }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: spacing[8],
              color: colors.slate[900],
              borderBottom: `2px solid ${colors.error}`,
              paddingBottom: spacing[4],
            }}
          >
            ⚠️ NO-GO cases (intervention onsite obligatoire)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: spacing[6],
            }}
          >
            {noGo.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: spacing[6],
                  backgroundColor: `${colors.error}20`,
                  borderLeft: `4px solid ${colors.error}`,
                  borderRadius: "0.25rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: spacing[2],
                    color: `${colors.error}99`,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: colors.slate[600],
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Limitations */}
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: spacing[8],
              color: colors.slate[900],
              borderBottom: `2px solid ${colors.info}`,
              paddingBottom: spacing[4],
            }}
          >
            ℹ️ Limites du remote (à connaître)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: spacing[6],
            }}
          >
            {limitations.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: spacing[6],
                  backgroundColor: `${colors.info}20`,
                  borderLeft: `4px solid ${colors.info}`,
                  borderRadius: "0.25rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: spacing[2],
                    color: `${colors.info}99`,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: colors.slate[600],
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safe-by-default callout */}
        <div
          style={{
            marginTop: spacing[16],
            padding: spacing[8],
            backgroundColor: `${colors.warning}20`,
            border: `1px solid ${colors.warning}40`,
            borderRadius: "0.5rem",
            borderLeft: `4px solid ${colors.warning}`,
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: `${colors.warning}99`,
              margin: 0,
              fontWeight: 500,
            }}
          >
            <strong>Philosophie FAST :</strong> Safe-by-default. Si nous manquons de preuves, nous disons UNKNOWN et vous proposons un
            plan. Pas de preuve = pas fait. Pas de surprise.
          </p>
        </div>
      </div>
    </section>
  );
}
