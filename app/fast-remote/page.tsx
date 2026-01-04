import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { getCTA, getSLA } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "FAST Remote — Diagnostic à distance (visio) | FAST Tech Services",
  description:
    "Assistance technique à distance : tests guidés, mesures, preuves, verdict clair. Réponse 4h ouvrées, créneau visio J+1 ouvré.",
  keywords: ["diagnostic distance", "FAST Remote", "assistance visio", "diagnostic HVAC"],
};

export default function FastRemotePage() {
  const sla = getSLA();
  const primaryCTA = getCTA("primary");

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        headline="FAST Remote — dépannage à distance en visio"
        subheadline="Diagnostic guidé, mesures et preuves : vous obtenez un verdict clair ou un plan d&apos;action, sans perte de temps."
        ctaLabel={primaryCTA.label}
      />

      {/* Offre & Principes */}
      <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.white }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[12],
              textAlign: "center",
            }}
          >
            L&apos;offre FAST Remote
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: spacing[8],
              marginBottom: spacing[16],
            }}
          >
            {/* Principle 1 */}
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[50],
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: spacing[4],
                  color: colors.slate[900],
                }}
              >
                Diagnostic guidé
              </h3>
              <p style={{ color: colors.slate[600], lineHeight: 1.6 }}>
                Session visio avec un expert : tests discriminants, collecte d&apos;indices, mesures documentées.
                Pas de perte de temps : approche terrain-first adaptée à votre équipement.
              </p>
            </div>

            {/* Principle 2 */}
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[50],
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: spacing[4],
                  color: colors.slate[900],
                }}
              >
                Preuves & verdict
              </h3>
              <p style={{ color: colors.slate[600], lineHeight: 1.6 }}>
                Chaque diagnostic produit un dossier clair : preuves, constats, verdict écrit.
                Résolu ? Plan d&apos;action ? Intervention onsite requise ? Vous saurez précisément ce qui est nécessaire.
              </p>
            </div>

            {/* Principle 3 */}
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[50],
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: spacing[4],
                  color: colors.slate[900],
                }}
              >
                Décision rapide
              </h3>
              <p style={{ color: colors.slate[600], lineHeight: 1.6 }}>
                SLA clair : réponse rapide, créneau visio sous 24h ouvrées, verdict sous 2h après session
                (si preuves suffisantes). Sinon UNKNOWN + plan d&apos;action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.slate[900], color: colors.white }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[12],
              textAlign: "center",
            }}
          >
            Ce que vous recevez
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: spacing[8],
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: spacing[3],
                  color: colors.cyan[300],
                }}
              >
                Dossier technique
              </h3>
              <ul style={{ color: colors.slate[200], lineHeight: 1.8, paddingLeft: spacing[4] }}>
                <li>Preuves (photos, vidéos, mesures)</li>
                <li>Constats avant/après</li>
                <li>Actions effectuées & résultats</li>
                <li>Verdict : RÉSOLU / PLAN / ONSITE / NO-GO</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: spacing[3],
                  color: colors.cyan[300],
                }}
              >
                Recommandations
              </h3>
              <ul style={{ color: colors.slate[200], lineHeight: 1.8, paddingLeft: spacing[4] }}>
                <li>Actions préventives</li>
                <li>Pièces à remplacer (si nécessaire)</li>
                <li>Priorités risques/arrêt production</li>
                <li>Punch list si réserves</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  marginBottom: spacing[3],
                  color: colors.cyan[300],
                }}
              >
                Disponibilité
              </h3>
              <ul style={{ color: colors.slate[200], lineHeight: 1.8, paddingLeft: spacing[4] }}>
                <li>Réponse : {sla.timeframe}</li>
                <li>Visio : sous 24h ouvrées</li>
                <li>Verdict : sous 2h après session</li>
                <li>Support terrain si onsite requis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limites & NO-GO */}
      <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.slate[50] }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[12],
              textAlign: "center",
            }}
          >
            Conditions & limitations
          </h2>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              padding: spacing[8],
              backgroundColor: colors.white,
              borderRadius: "0.5rem",
              border: `2px solid ${colors.slate[200]}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                marginBottom: spacing[4],
                color: colors.slate[900],
              }}
            >
              Pas de FAST Remote si :
            </h3>
            <ul
              style={{
                color: colors.slate[700],
                lineHeight: 2,
                paddingLeft: spacing[6],
                listStyleType: "disc",
              }}
            >
              <li>
                <strong>Équipement arrêté & risques non maîtrisés</strong> : sécurité d&apos;abord
              </li>
              <li>
                <strong>Pas d&apos;accès à distance sûr</strong> : LOTO / isolation électrique requises
              </li>
              <li>
                <strong>Preuves insuffisantes</strong> : équipement hors champ visio, accès machines restreint
              </li>
              <li>
                <strong>Intervention immédiate requise</strong> : pour arrêt critique, onsite direct
              </li>
              <li>
                <strong>Réseaux & architecture système</strong> : hors périmètre garage automobile
              </li>
            </ul>
            <p style={{ color: colors.slate[600], marginTop: spacing[4], fontStyle: "italic" }}>
              Dans ces cas, nous vous orienterons vers une intervention sur site ou déclarerons le diagnostic IMPOSSIBLE.
            </p>
          </div>
        </div>
      </section>

      {/* Processus détaillé */}
      <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.white }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[12],
              textAlign: "center",
            }}
          >
            Processus FAST Remote
          </h2>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {[
              {
                step: 1,
                title: "Pré-qualification",
                desc: "Remplissez le formulaire : équipement, symptômes, contexte. Nous confirmons la faisabilité ou vous orientons onsite.",
              },
              {
                step: 2,
                title: "Prise de RDV visio",
                desc: "Créneau proposé sous 24h ouvrées. Préparation technique : outils à disposition (appareil photo, voltmètre, etc.).",
              },
              {
                step: 3,
                title: "Session guidée",
                desc: "Tests discriminants, mesures documentées, collecte d&apos;indices. Durée : 45min à 2h selon complexité.",
              },
              {
                step: 4,
                title: "Analyse & rapport",
                desc: "Preuves compilées, diagnostic écrit, verdict clair. Recommandations et plan d&apos;action livré sous 2h.",
              },
              {
                step: 5,
                title: "Support suivi",
                desc: "Questions sur le rapport ? Besoin d&apos;onsite ? Support email/téléphone inclus 7 jours après clôture.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  gap: spacing[6],
                  marginBottom: spacing[8],
                  paddingBottom: spacing[8],
                  borderBottom: idx < 4 ? `1px solid ${colors.slate[200]}` : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    minWidth: "50px",
                    backgroundColor: colors.cyan[500],
                    color: colors.white,
                    borderRadius: "50%",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      marginBottom: spacing[2],
                      color: colors.slate[900],
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: colors.slate[600], lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.slate[50] }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[12],
              textAlign: "center",
            }}
          >
            Questions fréquentes
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: spacing[6] }}>
            {[
              {
                q: "Combien ça coûte ?",
                a: "Le tarif sera défini en P1 selon équipement et complexité. Devis sur demande suite formulaire.",
              },
              {
                q: "Ça prend combien de temps ?",
                a: "Pré-qualification immédiate. Créneau visio sous 24h ouvrées. Verdict sous 2h après session. Report possible si preuves insuffisantes.",
              },
              {
                q: "Et si vous ne trouvez pas ?",
                a: "Verdict honnête : RÉSOLU, PLAN D&apos;ACTION, ou IMPOSSIBLE/ONSITE REQUIS. Pas de diagnostic « flou ».",
              },
              {
                q: "Pouvez-vous d&apos;intervenir onsite après FAST Remote ?",
                a: "Oui. FAST Remote prépare l&apos;intervention : diagnostic cible, pièces listées, actions prioritaires. Intervention chirurgicale et rapide.",
              },
              {
                q: "Quels équipements couvre FAST Remote ?",
                a: "Ponts élévateurs, compresseurs, cabines de peinture/ventilation, stations de lavage. Autres équipements garage sur demande.",
              },
              {
                q: "Besoin de compétences techniques spéciales ?",
                a: "Non. Nous guidons les étapes. Un operateur garage avec accès visio et outils basiques (appareil photo, voltmètre) suffit.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  padding: spacing[4],
                  backgroundColor: colors.white,
                  borderRadius: "0.5rem",
                  border: `1px solid ${colors.slate[200]}`,
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontWeight: 600,
                    color: colors.slate[900],
                    outline: "none",
                  }}
                >
                  {faq.q}
                </summary>
                <p
                  style={{
                    color: colors.slate[600],
                    marginTop: spacing[3],
                    lineHeight: 1.6,
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de qualification */}
      <section
        style={{
          padding: `${spacing[20]} ${spacing[6]}`,
          backgroundColor: colors.slate[900],
          color: colors.white,
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[4],
              textAlign: "center",
            }}
          >
            Démarrer un diagnostic
          </h2>
          <p
            style={{
              textAlign: "center",
              color: colors.slate[300],
              marginBottom: spacing[8],
            }}
          >
            Décrivez votre équipement et votre problème. Nous confirmerons la faisabilité et proposerons un créneau.
          </p>
        </div>
      </section>

      <ContactForm formType="fast_remote" />
    </main>
  );
}


