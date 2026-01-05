/**
 * Equipment Grid Component - 4 services/expertise cards
 * 
 * Sourced from: FAST_TECH_SERVICES_COPY_v1.md (section 3: Services cœur)
 * Grid: 4 items (Ponts, Compresseurs, Cabines, Stations)
 * Premium, sobre, performant — no invented data
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

interface EquipmentItem {
  id: number;
  name: string;
  headline: string;
  description: string;
  icon: string;
  href: string;
}

const equipment: EquipmentItem[] = [
  {
    id: 1,
    name: "Ponts élévateurs",
    headline: "Dépannage & maintenance spécialisée",
    description: "Électrique, hydraulique, sécurité. Réglages, remise en conformité, tests fonctionnels. Retrofits armoires/commandes.",
    icon: "🚗",
    href: "/services/ponts-elevateurs",
  },
  {
    id: 2,
    name: "Compresseurs & air",
    headline: "Fiabilisation des réseaux pneumatiques",
    description: "Maintenance, diagnostic, remise en route. Traitement d'air, régulation, recherche fuites. Qualité d'air garantie.",
    icon: "💨",
    href: "/services/compresseurs-air",
  },
  {
    id: 3,
    name: "Cabines & ventilation",
    headline: "Process sécurisé et stable",
    description: "Ventilation/extraction, moteurs, variateurs. Retrofit coffrets. Stabilisation débits/flux, tests de sortie.",
    icon: "🎨",
    href: "/services/cabines-peinture-ventilation",
  },
  {
    id: 4,
    name: "Stations de lavage",
    headline: "Remise en exploitation rapide",
    description: "Électromécanique : commande, puissance, pompage, sécurités. Prévention de pannes, disponibilité garantie.",
    icon: "💧",
    href: "/services/stations-lavage",
  },
];

export function EquipmentGrid() {
  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.white,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: spacing[16], textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: colors.slate[900],
              margin: `0 0 ${spacing[4]} 0`,
            }}
          >
            Le triptyque de l&apos;atelier
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: colors.slate[600],
              margin: 0,
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Levage • Air comprimé • Ventilation/Process. Expertise électromécanique industrielle appliquée au garage automobile.
          </p>
        </div>

        {/* Grid 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: spacing[8],
          }}
        >
          {equipment.map((item) => (
          <a
            key={item.id}
            href={item.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[50],
                border: `1px solid ${colors.slate[200]}`,
                borderRadius: "0.5rem",
                transition: "all 150ms ease-in-out",
                cursor: "pointer",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = colors.cyan[500];
                el.style.boxShadow = `0 4px 12px ${colors.cyan[500]}20`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = colors.slate[200];
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: spacing[4],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60px",
                }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: colors.slate[900],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                {item.name}
              </h3>

              {/* Headline */}
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: colors.cyan[600],
                  margin: `0 0 ${spacing[3]} 0`,
                }}
              >
                {item.headline}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: colors.slate[600],
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}
