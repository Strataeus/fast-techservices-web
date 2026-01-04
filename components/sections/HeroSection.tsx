/**
 * Hero Section Component - Premium brand introduction
 * 
 * Features:
 * - Headline + subheadline
 * - Primary CTA button
 * - SLA badges
 * - Image placeholder
 */

import { getCTA, getSLA } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  showSLA?: boolean;
}

export function HeroSection({
  headline = "Dépannage d'équipements",
  subheadline = "Diagnostic rapide et efficace avec preuve technique",
  ctaLabel,
  showSLA = true,
}: HeroSectionProps) {
  const primaryCTA = getCTA("primary");
  const sla = getSLA();

  return (
    <section
      style={{
        backgroundColor: colors.slate[900],
        padding: `${spacing[20]} ${spacing[6]}`,
        color: colors.white,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: spacing[12],
          alignItems: "center",
        }}
      >
        {/* Content */}
        <div>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: spacing[6],
              margin: 0,
            }}
          >
            {headline}
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: colors.slate[300],
              lineHeight: 1.6,
              marginBottom: spacing[8],
              margin: `0 0 ${spacing[8]} 0`,
            }}
          >
            {subheadline}
          </p>

          {/* CTA Button */}
          <a
            href={primaryCTA.url}
            style={{
              display: "inline-block",
              backgroundColor: colors.cyan[500],
              color: colors.slate[900],
              padding: `${spacing[3]} ${spacing[6]}`,
              borderRadius: "0.375rem",
              textDecoration: "none",
              fontWeight: 600,
              transition: "background-color 150ms ease-in-out",
              marginBottom: spacing[8],
            }}
            className="hover:bg-cyan-600"
          >
            {ctaLabel || primaryCTA.label}
          </a>

          {/* SLA Badges */}
          {showSLA && (
            <div style={{ display: "flex", gap: spacing[4] }}>
              <div
                style={{
                  padding: `${spacing[2]} ${spacing[3]}`,
                  backgroundColor: colors.cyan[900],
                  borderRadius: "0.25rem",
                  border: `1px solid ${colors.cyan[700]}`,
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: colors.cyan[300],
                    fontWeight: 600,
                    textTransform: "uppercase",
                    margin: 0,
                    letterSpacing: "0.05em",
                  }}
                >
                  {sla.title}
                </p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: colors.cyan[300],
                    fontWeight: 700,
                    margin: `${spacing[1]} 0 0 0`,
                  }}
                >
                  {sla.timeframe}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Image Placeholder */}
        <div
          style={{
            aspectRatio: "16 / 9",
            backgroundColor: colors.slate[800],
            borderRadius: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${colors.slate[700]}`,
            color: colors.slate[600],
            fontSize: "0.875rem",
          }}
        >
          [Image placeholder]
        </div>
      </div>
    </section>
  );
}
