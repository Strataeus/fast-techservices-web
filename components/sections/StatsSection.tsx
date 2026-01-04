/**
 * Stats Section Component - CarServ style counters
 * Shows key metrics (without invented numbers)
 * Only displays documented facts
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export function StatsSection() {
  // Only showing facts that are documented/verifiable
  // NOT inventing numbers per project constraints
  const stats = [
    {
      icon: "🔧",
      value: "4",
      label: "Équipements\ncouverts",
      description: "Ponts, compresseurs, cabines, stations",
    },
    {
      icon: "📋",
      value: "5",
      label: "Étapes\nmethode",
      description: "Terrain → Preuves → Tests → Verdict → Dossier",
    },
    {
      icon: "🏢",
      value: "2",
      label: "Modes\nd'intervention",
      description: "Terrain (Île-de-France/Nord-Est) + Remote (France)",
    },
    {
      icon: "⏱️",
      value: "24h",
      label: "Verdict\nremote",
      description: "Diagnostic FAST Remote en 24 heures",
    },
  ];

  return (
    <section
      style={{
        padding: `${spacing[16]} ${spacing[6]}`,
        backgroundImage: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: spacing[8],
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                textAlign: "center",
                padding: spacing[8],
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "0.75rem",
                border: `1px solid ${colors.slate[700]}`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(0, 217, 255, 0.1)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  colors.cyan[500];
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(255, 255, 255, 0.05)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  colors.slate[700];
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: spacing[4],
                }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: colors.cyan[300],
                  margin: `0 0 ${spacing[2]} 0`,
                }}
              >
                {stat.value}
              </h3>

              {/* Label */}
              <p
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: colors.slate[300],
                  margin: `0 0 ${spacing[3]} 0`,
                  whiteSpace: "pre-line",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.8rem",
                  color: colors.slate[400],
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
