/**
 * Services - Equipment Tabs (CarServ style)
 * Interactive left menu + right content pane
 * 4 équipements: Ponts, Compresseurs, Cabines, Stations
 */

"use client";

import { useState } from "react";
import { colors, spacing } from "@/lib/design/tokens";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type EquipmentType = "ponts" | "compresseurs" | "cabines" | "stations";

interface Equipment {
  id: EquipmentType;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
  detailPageHref: string;
}

const EQUIPMENT_DATA: Equipment[] = [
  {
    id: "ponts",
    name: "Ponts élévateurs",
    icon: "🚗",
    description:
      "Diagnostic de sécurité, maintenance des vérin, réparation des pompes hydrauliques, remise en conformité normes.",
    benefits: [
      "Contrôle sécurité complet",
      "Maintenance hydraulique",
      "Retrofit & améliorations",
      "PV de vérification inclus",
    ],
    detailPageHref: "/services/ponts-elevateurs",
  },
  {
    id: "compresseurs",
    name: "Compresseurs d'air",
    icon: "💨",
    description:
      "Dépannage moteur & compresseur, maintenance préventive, révision complète, remise en service avec tests de débit.",
    benefits: [
      "Tests débit & pression",
      "Révision moteur",
      "Remplacement pièces usées",
      "Certification post-intervention",
    ],
    detailPageHref: "/services/compresseurs-air",
  },
  {
    id: "cabines",
    name: "Cabines de lavage",
    icon: "🎨",
    description:
      "Réparation circulations eau/air, nettoyage systèmes, remplacement moteurs, mise en route & calibrage.",
    benefits: [
      "Circulations testées",
      "Filtration vérifiée",
      "Moteurs validés",
      "Mise en route guidée",
    ],
    detailPageHref: "/services/cabines-peinture-ventilation",
  },
  {
    id: "stations",
    name: "Stations de lavage",
    icon: "💧",
    description:
      "Dépannage vannes, pompes, chauffage. Maintenance circuits eau/électricité. Mise en conformité & tests complets.",
    benefits: [
      "Vannes hydrauliques",
      "Pompes haute pression",
      "Circuits électriques",
      "Documentation fournie",
    ],
    detailPageHref: "/services/stations-lavage",
  },
];

export function ServicesTabsFAST() {
  const [activeTab, setActiveTab] = useState<EquipmentType>("ponts");
  const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  const activeEquipment = EQUIPMENT_DATA.find((eq) => eq.id === activeTab)!;

  return (
    <section
      ref={tabsRef}
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[50],
        color: colors.slate[900],
        opacity: tabsVisible ? 1 : 0.7,
        transform: tabsVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: spacing[12],
          }}
        >
          <h6
            style={{
              textTransform: "uppercase",
              color: colors.cyan[500],
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: spacing[2],
              letterSpacing: "0.05em",
            }}
          >
            Nos équipements
          </h6>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[3],
              lineHeight: 1.3,
            }}
          >
            Expertise par domaine
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: colors.slate[600],
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Cliquez sur chaque équipement pour découvrir nos capacités et notre approche dédiée.
          </p>
        </div>

        {/* Tabs Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: spacing[8],
            alignItems: "start",
          }}
        >
          {/* LEFT: Menu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: spacing[3],
            }}
          >
            {EQUIPMENT_DATA.map((equipment) => {
              const isActive = equipment.id === activeTab;
              return (
                <button
                  key={equipment.id}
                  onClick={() => setActiveTab(equipment.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: spacing[3],
                    padding: `${spacing[4]} ${spacing[4]}`,
                    backgroundColor: isActive ? colors.cyan[500] : colors.white,
                    color: isActive ? colors.white : colors.slate[900],
                    border: isActive ? `2px solid ${colors.cyan[500]}` : `2px solid ${colors.slate[200]}`,
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = colors.cyan[300];
                      (e.currentTarget as HTMLElement).style.backgroundColor = colors.slate[100];
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.borderColor = colors.slate[200];
                      (e.currentTarget as HTMLElement).style.backgroundColor = colors.white;
                    }
                  }}
                >
                  <span style={{ fontSize: "1.75rem" }}>{equipment.icon}</span>
                  <span>{equipment.name}</span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Content Pane */}
          <div
            ref={contentRef}
            style={{
              backgroundColor: colors.white,
              borderRadius: "0.5rem",
              padding: spacing[8],
              border: `1px solid ${colors.slate[200]}`,
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "scale(1)" : "scale(0.95)",
              transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Title + Icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: spacing[4],
                marginBottom: spacing[6],
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                }}
              >
                {activeEquipment.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.875rem",
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: spacing[1],
                  }}
                >
                  {activeEquipment.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: colors.slate[500],
                    margin: 0,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  Expertise dédiée
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "1rem",
                color: colors.slate[600],
                lineHeight: 1.8,
                marginBottom: spacing[6],
              }}
            >
              {activeEquipment.description}
            </p>

            {/* Benefits */}
            <div
              style={{
                marginBottom: spacing[6],
              }}
            >
              <h4
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: colors.slate[900],
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: spacing[3],
                }}
              >
                Nos points forts
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: spacing[2],
                }}
              >
                {activeEquipment.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: spacing[2],
                      fontSize: "0.95rem",
                      color: colors.slate[600],
                    }}
                  >
                    <span
                      style={{
                        color: colors.cyan[500],
                        fontWeight: 700,
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={activeEquipment.detailPageHref}
              style={{
                display: "inline-block",
                padding: `${spacing[3]} ${spacing[6]}`,
                backgroundColor: colors.cyan[500],
                color: colors.white,
                textDecoration: "none",
                borderRadius: "0.375rem",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = colors.cyan[600];
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = colors.cyan[500];
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              En savoir plus → Fiche complète
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
