/**
 * FAST Remote Hero Section
 * 
 * Source: content-map.yml (hero_remote)
 * Copy sources:
 *   - FAST_TECH_SERVICES_COPY_v1.md#FAST Remote
 *   - FAST_TECH_SERVICES_COPY_v1.md#Méthode de travail
 * 
 * Proposition: diagnostic + assistance technique à distance (visio)
 * Tone: Professional, clear, action-oriented
 * HTML-first, no client interactivity
 */

import { colors, spacing } from "@/lib/design/tokens";
import Link from "next/link";

export function FastRemoteHero() {
  return (
    <section
      style={{
        padding: `${spacing[24]} ${spacing[6]}`,
        backgroundColor: colors.white,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: spacing[12],
            alignItems: "center",
          }}
        >
          {/* Left: Text Content */}
          <div>
            {/* Eyebrow */}
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
              Diagnostic à distance
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "2.75rem",
                fontWeight: 700,
                color: colors.slate[900],
                margin: `0 0 ${spacing[4]} 0`,
                lineHeight: 1.2,
              }}
            >
              FAST Remote — dépannage à distance en visio
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "1.25rem",
                color: colors.slate[700],
                margin: `0 0 ${spacing[8]} 0`,
                lineHeight: 1.7,
              }}
            >
              Diagnostic guidé, mesures et preuves : vous obtenez un verdict clair 
              ou un plan d&apos;action, sans perte de temps.
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "1.0625rem",
                color: colors.slate[600],
                margin: `0 0 ${spacing[8]} 0`,
                lineHeight: 1.7,
              }}
            >
              Protocole structuré : cadrage des prérequis, collecte de preuves 
              (photos/vidéos/mesures), tests guidés et discriminants, conclusion 
              claire. Objectif : gagner du temps, éviter les déplacements inutiles, 
              et préparer une intervention terrain chirurgicale si nécessaire.
            </p>

            {/* SLA Badges */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: spacing[4],
                marginBottom: spacing[8],
              }}
            >
              <div
                style={{
                  padding: spacing[4],
                  backgroundColor: colors.cyan[50],
                  borderRadius: "0.375rem",
                  border: `1px solid ${colors.cyan[200]}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: colors.cyan[700],
                    margin: 0,
                    marginBottom: spacing[1],
                  }}
                >
                  Accusé immédiat
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: colors.slate[600],
                    margin: 0,
                  }}
                >
                  Confirmation instantanée
                </p>
              </div>

              <div
                style={{
                  padding: spacing[4],
                  backgroundColor: colors.cyan[50],
                  borderRadius: "0.375rem",
                  border: `1px solid ${colors.cyan[200]}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: colors.cyan[700],
                    margin: 0,
                    marginBottom: spacing[1],
                  }}
                >
                  Réponse sous 4h
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: colors.slate[600],
                    margin: 0,
                  }}
                >
                  4h ouvrées maximales
                </p>
              </div>

              <div
                style={{
                  padding: spacing[4],
                  backgroundColor: colors.cyan[50],
                  borderRadius: "0.375rem",
                  border: `1px solid ${colors.cyan[200]}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: colors.cyan[700],
                    margin: 0,
                    marginBottom: spacing[1],
                  }}
                >
                  Créneau J+1 ouvré
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: colors.slate[600],
                    margin: 0,
                  }}
                >
                  Visio sous 24h ouvrées
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: spacing[4],
                flexWrap: "wrap",
              }}
            >
              {/* Primary CTA: Start FAST Remote */}
              <Link
                href="#formulaire"
                style={{
                  display: "inline-block",
                  padding: `${spacing[3]} ${spacing[6]}`,
                  backgroundColor: colors.cyan[500],
                  color: colors.white,
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                Démarrer FAST Remote ↓
              </Link>

              {/* Secondary CTA: Contact */}
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  padding: `${spacing[3]} ${spacing[6]}`,
                  backgroundColor: colors.slate[100],
                  color: colors.slate[900],
                  textDecoration: "none",
                  borderRadius: "0.375rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: `1px solid ${colors.slate[300]}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Demander une intervention terrain →
              </Link>
            </div>

            {/* Disclaimer */}
            <p
              style={{
                fontSize: "0.875rem",
                color: colors.slate[500],
                margin: `${spacing[8]} 0 0 0`,
                lineHeight: 1.6,
              }}
            >
              <strong>Note :</strong> FAST Remote est un diagnostic guidé et une assistance 
              technique à distance. Si les conditions ne sont pas sûres (NO-GO) ou si une 
              intervention terrain est requise, nous vous proposons un plan d&apos;action 
              ou une mobilisation onsite.
            </p>
          </div>

          {/* Right: Visual Placeholder */}
          <div
            style={{
              backgroundColor: colors.slate[100],
              borderRadius: "0.75rem",
              border: `2px dashed ${colors.slate[300]}`,
              padding: spacing[12],
              minHeight: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <div style={{ fontSize: "3rem", marginBottom: spacing[4] }}>📹</div>
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.slate[600],
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Image FAST Remote
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.slate[500],
                  margin: `${spacing[2]} 0 0 0`,
                }}
              >
                (À intégrer ultérieurement)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
