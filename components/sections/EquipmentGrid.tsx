/**
 * Equipment Grid Component - 4 equipment cards (Ponts, Compresseurs, Cabines, Stations lavage)
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

const equipment = [
  { id: 1, name: "Ponts", icon: "🚗" },
  { id: 2, name: "Compresseurs", icon: "💨" },
  { id: 3, name: "Cabines de peinture", icon: "🎨" },
  { id: 4, name: "Stations de lavage", icon: "💧" },
];

export function EquipmentGrid() {
  return (
    <section style={{ padding: `${spacing[20]} ${spacing[6]}` }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: spacing[12],
          }}
        >
          Services d&apos;expertise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: spacing[8],
          }}
        >
          {equipment.map((item) => (
            <div
              key={item.id}
              style={{
                padding: spacing[8],
                backgroundColor: colors.slate[50],
                borderRadius: "0.5rem",
                border: `1px solid ${colors.slate[200]}`,
                textAlign: "center",
                transition: "transform 150ms ease-in-out",
              }}
              className="hover:shadow-lg hover:scale-105"
            >
              <div style={{ fontSize: "3rem", marginBottom: spacing[4] }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
