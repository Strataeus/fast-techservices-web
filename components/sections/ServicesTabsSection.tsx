/**
 * Services Tabs Component - CarServ style
 * Left menu with equipment icons, right side with image + checkmarks
 * Fully interactive with state management
 */

"use client";

import { useState } from "react";
import { colors, spacing } from "@/lib/design/tokens";

export function ServicesTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: "🏗️",
      title: "Ponts élévateurs",
      shortDesc: "Remise en sécurité et conformité",
      description:
        "Dépannage, maintenance, tests de sécurité et conformité. Diagnostic électrique, hydraulique et mécanique complet.",
      benefits: [
        "Diagnostic complet électrique & hydraulique",
        "Tests de sécurité obligatoires",
        "Remise en exploitation sécurisée",
      ],
      image: "/hero/home/hero.webp",
    },
    {
      icon: "💨",
      title: "Compresseurs d'air",
      shortDesc: "Fiabilité et qualité d'air",
      description:
        "Maintenance préventive, diagnostic, optimisation réseau d'air comprimé. Qualité d'air, stabilité pression, disponibilité.",
      benefits: [
        "Diagnostic réseau et débits",
        "Recherche fuites optimisée",
        "Fiabilisation et maintenance",
      ],
      image: "/hero/home/hero.webp",
    },
    {
      icon: "🎨",
      title: "Cabines peinture",
      shortDesc: "Conformité et performance",
      description:
        "Ventilation, extraction, variateurs et sécurités. Stabilisation process, tests de sortie, conformité complète.",
      benefits: [
        "Tests débits & dépression",
        "Conformité environnementale",
        "Mise en service complète",
      ],
      image: "/hero/home/hero.webp",
    },
    {
      icon: "💧",
      title: "Stations de lavage",
      shortDesc: "Dépannage et optimisation",
      description:
        "Dépannage électromécanique, commande, puissance, pompage. Remise en exploitation et prévention de pannes.",
      benefits: [
        "Diagnostic complet et rapide",
        "Remplacement d'organes critiques",
        "Disponibilité garantie",
      ],
      image: "/hero/home/hero.webp",
    },
  ];

  const activeService = services[activeTab];

  return (
    <section
      style={{
        padding: `${spacing[20]} ${spacing[6]}`,
        backgroundColor: colors.slate[50],
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
            Nos Services
          </div>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: colors.slate[900],
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Expertise sur 4 équipements critiques
          </h2>
        </div>

        {/* Tabs Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: spacing[8],
            alignItems: "stretch",
          }}
          className="animate-fade-in-up"
        >
          {/* Left Menu */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: spacing[3],
            }}
          >
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: spacing[4],
                  display: "flex",
                  alignItems: "center",
                  gap: spacing[4],
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor:
                    activeTab === idx
                      ? colors.white
                      : "transparent",
                  borderLeft: `4px solid ${
                    activeTab === idx ? colors.cyan[500] : "transparent"
                  }`,
                  boxShadow:
                    activeTab === idx
                      ? `0 4px 12px rgba(0, 0, 0, 0.08)`
                      : "none",
                  textAlign: "left",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== idx) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.slate[100];
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== idx) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    minWidth: "40px",
                  }}
                >
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h5
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: colors.slate[900],
                      margin: 0,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {service.title}
                  </h5>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: colors.slate[500],
                      margin: 0,
                    }}
                  >
                    {service.shortDesc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: spacing[8],
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div
              style={{
                position: "relative",
                minHeight: "350px",
                backgroundColor: colors.slate[200],
                borderRadius: "0.75rem",
                overflow: "hidden",
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.12)`,
              }}
            >
              <img
                src={activeService.image}
                alt={activeService.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>

            {/* Text + Checkmarks */}
            <div style={{ display: "flex", flexDirection: "column", gap: spacing[6] }}>
              <div>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: colors.slate[900],
                    margin: 0,
                    marginBottom: spacing[3],
                  }}
                >
                  {activeService.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: colors.slate[600],
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {activeService.description}
                </p>
              </div>

              {/* Benefits Checkmarks */}
              <div style={{ display: "flex", flexDirection: "column", gap: spacing[2] }}>
                {activeService.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: spacing[3],
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.25rem",
                        color: colors.cyan[500],
                        marginTop: "0.125rem",
                      }}
                    >
                      ✓
                    </span>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: colors.slate[600],
                        margin: 0,
                      }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <button
                  style={{
                    padding: `${spacing[3]} ${spacing[6]}`,
                    backgroundColor: colors.cyan[500],
                    color: colors.white,
                    border: "none",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: spacing[2],
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.cyan[600];
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 8px 16px rgba(0, 217, 255, 0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      colors.cyan[500];
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  En savoir plus
                  <span style={{ fontSize: "1.25rem" }}>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
