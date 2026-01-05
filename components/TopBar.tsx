/**
 * TopBar Component - SLA badges + contact info
 * Global awareness of service level commitments
 * 
 * Sourced from: content/config.ts (SLA single source of truth)
 * Pattern: Premium positioning, minimal friction
 */

"use client";

import { getSLA } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

export function TopBar() {
  const sla = getSLA();
  // Parse timeframe: "Immédiat → 4h → 24h → 2h"
  const steps = sla.timeframe.split(" → ").map((step) => step.trim());

  return (
    <div
      style={{
        backgroundColor: colors.slate[900],
        borderBottom: `1px solid ${colors.slate[800]}`,
        padding: `${spacing[3]} ${spacing[6]}`,
        fontSize: "0.875rem",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: spacing[6],
          flexWrap: "wrap",
        }}
      >
        {/* Left: SLA Badges */}
        <div
          style={{
            display: "flex",
            gap: spacing[4],
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Step 1: Immédiat */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing[2],
              color: colors.cyan[400],
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: "1rem" }}>✓</span>
            <span>{steps[0] || "Accusé immédiat"}</span>
          </div>

          {/* Separator */}
          <div style={{ width: "1px", height: "16px", backgroundColor: colors.slate[700] }} />

          {/* Step 2: 4h */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing[2],
              color: colors.cyan[400],
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: "1rem" }}>⏱️</span>
            <span>Réponse {steps[1] || "4h"}</span>
          </div>

          {/* Separator */}
          <div style={{ width: "1px", height: "16px", backgroundColor: colors.slate[700] }} />

          {/* Step 3: 24h */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: spacing[2],
              color: colors.cyan[400],
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: "1rem" }}>📞</span>
            <span>Visio {steps[2] || "24h"}</span>
          </div>
        </div>

        {/* Right: Contact Info (optional, mobile-hidden) */}
        <div
          style={{
            display: "flex",
            gap: spacing[6],
            alignItems: "center",
            color: colors.slate[300],
          }}
          className="hidden md:flex"
        >
          <a
            href="tel:+33XXXXXXXXX"
            style={{
              color: colors.cyan[400],
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 150ms ease-in-out",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = colors.cyan[300];
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = colors.cyan[400];
            }}
          >
            📞 Appeler
          </a>
        </div>
      </div>
    </div>
  );
}
