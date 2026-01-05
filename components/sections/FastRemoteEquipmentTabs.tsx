"use client";

import { useState } from "react";
import { colors, spacing } from "@/lib/design/tokens";

interface Equipment {
  id: string;
  name: string;
  icon: string;
  description: string;
  benefits: string[];
}

const equipmentOptions: Equipment[] = [
  {
    id: "lifts",
    name: "Ponts élévateurs",
    icon: "🚗",
    description: "Diagnostic complet des ponts et systèmes de levage",
    benefits: [
      "Tests d'équilibre et stabilité",
      "Mesures de charge admissible",
      "Vérification sécurité",
      "Dossier technique complet",
    ],
  },
  {
    id: "compressors",
    name: "Compresseurs / Air comprimé",
    icon: "💨",
    description: "Tests d'efficacité et performance du circuit",
    benefits: [
      "Mesure de débit et pression",
      "Détection fuites",
      "Tests de performance",
      "Recommandations maintenance",
    ],
  },
  {
    id: "paint",
    name: "Cabines peinture / Ventilation",
    icon: "🎨",
    description: "Audit complet de cabine et circuit d'air",
    benefits: [
      "Débit d'air mesuré",
      "Qualité filtration",
      "Conformité normes",
      "Plan d'amélioration",
    ],
  },
  {
    id: "wash",
    name: "Stations de lavage",
    icon: "💧",
    description: "Tests de systèmes de lavage et récupération",
    benefits: [
      "Débit eau/pression",
      "Efficacité produits",
      "Circuit traitement",
      "Maintenance programmée",
    ],
  },
];

export function FastRemoteEquipmentTabs() {
  const [activeTab, setActiveTab] = useState("lifts");

  const activeEquipment = equipmentOptions.find((eq) => eq.id === activeTab);

  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[50],
        color: colors.slate[900],
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: spacing[16] }}>
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
            Équipements diagnostiqués
          </h6>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              marginBottom: spacing[4],
              lineHeight: 1.3,
            }}
          >
            Nous diagnostiquons les équipements critiques
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: colors.slate[600],
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Cliquez sur chaque équipement pour découvrir notre approche diagnostic spécifique
          </p>
        </div>

        {/* Tabs Container: Left Menu + Right Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: spacing[8],
            alignItems: "start",
          }}
        >
          {/* LEFT: Menu vertical */}
          <div>
            {equipmentOptions.map((equipment) => (
              <button
                key={equipment.id}
                onClick={() => setActiveTab(equipment.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: spacing[4],
                  padding: `${spacing[4]} ${spacing[6]}`,
                  marginBottom: spacing[3],
                  backgroundColor:
                    activeTab === equipment.id ? colors.cyan[500] : colors.white,
                  color: activeTab === equipment.id ? colors.white : colors.slate[900],
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: "1rem",
                  fontWeight: activeTab === equipment.id ? 700 : 500,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow:
                    activeTab === equipment.id
                      ? `0 4px 12px ${colors.cyan[500]}30`
                      : "0 1px 3px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== equipment.id) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.slate[100];
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== equipment.id) {
                    (e.currentTarget as HTMLElement).style.backgroundColor = colors.white;
                  }
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{equipment.icon}</span>
                <h4 style={{ margin: 0, fontSize: "1rem" }}>{equipment.name}</h4>
              </button>
            ))}
          </div>

          {/* RIGHT: Content Pane */}
          {activeEquipment && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: spacing[8],
                alignItems: "stretch",
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "350px",
                  backgroundColor: colors.slate[200],
                  borderRadius: "0.5rem",
                  fontSize: "3rem",
                  border: `2px solid ${colors.slate[300]}`,
                }}
              >
                {activeEquipment.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    marginBottom: spacing[3],
                    color: colors.slate[900],
                  }}
                >
                  {activeEquipment.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: colors.slate[600],
                    lineHeight: 1.7,
                    marginBottom: spacing[6],
                  }}
                >
                  {activeEquipment.description}
                </p>

                {/* Benefits List */}
                <div style={{ marginBottom: spacing[6] }}>
                  {activeEquipment.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: spacing[3],
                        marginBottom: spacing[2],
                        fontSize: "0.95rem",
                        color: colors.slate[700],
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
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#formulaire"
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
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.cyan[600];
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.cyan[500];
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Démarrer diagnostic →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
