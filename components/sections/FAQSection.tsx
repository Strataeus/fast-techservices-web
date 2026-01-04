/**
 * FAQ Section Component
 * Questions fréquentes FAST Remote (<= 5 items)
 * 
 * Source: FAST_TECH_SERVICES_COPY_v1.md + content-map.yml
 */

"use client";

import { useState } from "react";
import { colors, spacing } from "@/lib/design/tokens";

const faqItems = [
  {
    id: 1,
    question: "Combien de temps dure une session FAST Remote ?",
    answer:
      "1 à 2 heures généralement. Ça dépend de la complexité du diagnostic. Cadrage (5-10 min), tests (30-45 min), verdict (5-10 min), dossier après. Nous vous donnons un timing à la prise de rendez-vous.",
  },
  {
    id: 2,
    question: "Que se passe-t-il si le remote ne résout pas le problème ?",
    answer:
      "Le verdict indiquera ONSITE REQUIRED. Nous vous proposons alors une intervention sur site, en confiance car le diagnostic remote a préparé le terrain. Moins de perte de temps, intervention plus ciblée et efficace.",
  },
  {
    id: 3,
    question: "Et si vous ne pouvez pas conclure pendant la session ?",
    answer:
      "Nous marquons le verdict comme INCOMPLET ou UNKNOWN, avec un plan clair : quelles mesures il faut collecter, quels tests faire après, ou quand faut-il passer à onsite. Jamais de flou.",
  },
  {
    id: 4,
    question: "Quel est le coût d'une session FAST Remote ?",
    answer:
      "Le tarif sera détaillé sur cette page très rapidement. Pour l'instant : contactez-nous avec le formulaire ci-dessous pour une pré-qualification. Nous vous donnons un devis clair, sans surprise.",
  },
  {
    id: 5,
    question: "Comment accédez-vous à mon équipement ?",
    answer:
      "Vous êtes en visio avec notre expert. Vous montrez l'équipement, vous effectuez les tests et mesures qu'il vous guide à faire (photos, vidéos, relevés). Nous supervisons, nous guiderons, nous validerons. Pas d'accès direct de notre côté = sécurité intacte.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section style={{ padding: `${spacing[20]} ${spacing[6]}`, backgroundColor: colors.slate[50] }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            marginBottom: spacing[16],
            textAlign: "center",
            color: colors.slate[900],
          }}
        >
          Questions fréquentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: spacing[4] }}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: colors.white,
                border: `1px solid ${colors.slate[200]}`,
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                style={{
                  width: "100%",
                  padding: spacing[6],
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: colors.white,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: colors.slate[900],
                  transition: "background-color 150ms ease-in-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = colors.slate[50];
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = colors.white;
                }}
              >
                <span>{item.question}</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "32px",
                    height: "32px",
                    backgroundColor: colors.cyan[100],
                    borderRadius: "0.25rem",
                    color: colors.cyan[600],
                    fontWeight: 700,
                    transform: openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 200ms ease-in-out",
                  }}
                >
                  ▼
                </span>
              </button>

              {openId === item.id && (
                <div
                  style={{
                    padding: spacing[6],
                    backgroundColor: colors.slate[50],
                    borderTop: `1px solid ${colors.slate[200]}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      color: colors.slate[700],
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
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
          <p style={{ fontSize: "1rem", color: colors.slate[700], margin: 0 }}>
            Vous avez d&apos;autres questions ?{" "}
            <a
              href="#form"
              style={{
                color: colors.cyan[600],
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: `1px solid ${colors.cyan[600]}`,
              }}
            >
              Contactez-nous via le formulaire ci-dessous
            </a>
            . Réponse sous 4h ouvrées garantie.
          </p>
        </div>
      </div>
    </section>
  );
}
