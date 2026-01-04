/**
 * Zones Teaser Section — Doctrine officielle
 * 
 * Sources (priorité):
 *   1. FAST_SITE_SPEC_v1.md (document directeur)
 *   2. public/hero/zones/README.md
 *   3. content-map.yml
 * 
 * Doctrine: 
 *   - FAST Remote: France entière
 *   - Interventions terrain: Île-de-France uniquement
 *   - Pas d'invension, strictement documenté
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function ZonesTeaser() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.white,
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
            Couverture géographique
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
            Zones d&apos;intervention
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
            FAST Remote couvre la France entière. Interventions terrain basées à Île-de-France.
          </p>
        </div>

        {/* Emplacement pour image carte de la France */}
        <div
          style={{
            marginBottom: spacing[16],
            backgroundColor: colors.slate[100],
            borderRadius: "0.75rem",
            border: `2px dashed ${colors.slate[300]}`,
            padding: spacing[12],
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: spacing[4] }}>🗺️</div>
            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[600],
                margin: 0,
                fontWeight: 500,
              }}
            >
              Carte de la France
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: colors.slate[500],
                margin: `${spacing[2]} 0 0 0`,
              }}
            >
              (Image à intégrer ultérieurement)
            </p>
          </div>
        </div>

        {/* Two-column layout: FAST Remote (left) + Onsite (right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: spacing[8],
          }}
        >
          {/* FAST Remote - France Entière */}
          <div
            style={{
              padding: spacing[8],
              backgroundColor: colors.cyan[50],
              borderRadius: "0.75rem",
              border: `2px solid ${colors.cyan[300]}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            className="hover:border-cyan-500 hover:shadow-lg"
          >
            <div style={{ marginBottom: spacing[6] }}>
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: spacing[3],
                }}
              >
                🚀
              </div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                FAST Remote
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.cyan[700],
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                France entière
              </p>
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[700],
                margin: `0 0 ${spacing[4]} 0`,
                lineHeight: 1.6,
              }}
            >
              Diagnostic guidé à distance par visio. Intervention immédia à distance, 
              preuves équipement en direct, verdict clair, plan d&apos;action documenté.
            </p>

            <div
              style={{
                paddingTop: spacing[4],
                borderTop: `1px solid ${colors.cyan[200]}`,
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: colors.slate[600],
                  margin: 0,
                  marginBottom: spacing[2],
                }}
              >
                ✓ Accusé immédiat
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: colors.slate[600],
                  margin: 0,
                  marginBottom: spacing[2],
                }}
              >
                ✓ Réponse sous 4h ouvrées
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: colors.slate[600],
                  margin: 0,
                }}
              >
                ✓ Créneau visio J+1 ouvré
              </p>
            </div>
          </div>

          {/* Onsite - Île-de-France */}
          <div
            style={{
              padding: spacing[8],
              backgroundColor: colors.slate[50],
              borderRadius: "0.75rem",
              border: `2px solid ${colors.slate[200]}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            className="hover:border-cyan-500 hover:shadow-lg"
          >
            <div style={{ marginBottom: spacing[6] }}>
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: spacing[3],
                }}
              >
                📍
              </div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                Interventions sur site
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: colors.cyan[700],
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Île-de-France
              </p>
            </div>

            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[700],
                margin: `0 0 ${spacing[4]} 0`,
                lineHeight: 1.6,
              }}
            >
              Dépannage d&apos;urgence, maintenance préventive, retrofit et intégration. 
              Déplacement rapide (24-48h), traçabilité complète, tests de sortie obligatoires.
            </p>

            <div
              style={{
                paddingTop: spacing[4],
                borderTop: `1px solid ${colors.slate[200]}`,
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: colors.slate[600],
                  margin: 0,
                  marginBottom: spacing[2],
                }}
              >
                ✓ Proximité immédiate (Paris, Île-de-France)
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: colors.slate[600],
                  margin: 0,
                  marginBottom: spacing[2],
                }}
              >
                ✓ Équipement complet sur site
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: colors.slate[600],
                  margin: 0,
                }}
              >
                ✓ Dossier d&apos;intervention défendable
              </p>
            </div>
          </div>
        </div>

        {/* Emphasis: Outside Île-de-France → FAST Remote */}
        <div
          style={{
            marginTop: spacing[16],
            padding: spacing[6],
            backgroundColor: colors.slate[100],
            borderRadius: "0.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1rem",
              color: colors.slate[700],
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            <strong>Vous êtes hors Île-de-France ?</strong> FAST Remote reste l&apos;option 
            idéale : diagnostic guidé, preuves en direct, verdict clair. Intervention terrain 
            possible sur demande (itinérance).
          </p>
        </div>

        {/* CTA */}
        <div style={{ marginTop: spacing[12], textAlign: "center" }}>
          <a
            href="/zones"
            style={{
              display: "inline-block",
              padding: `${spacing[3]} ${spacing[8]}`,
              backgroundColor: colors.cyan[500],
              color: colors.white,
              textDecoration: "none",
              borderRadius: "0.375rem",
              fontWeight: 600,
              fontSize: "1rem",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[600];
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[500];
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Consulter la page zones →
          </a>
        </div>
      </div>
    </section>
  );
}
