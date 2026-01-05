/**
 * Generic Hero Component
 * Reusable hero section for all pages
 * Large banner with gradient background, title, subtitle, and optional CTA
 */

"use client";

import { colors, spacing, gradients } from "@/lib/design/tokens";

interface GenericHeroProps {
  title: string;
  subtitle?: string;
  badgeLabel?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function GenericHero({
  title,
  subtitle,
  badgeLabel,
  backgroundImage = "/hero/home/hero.webp",
  ctaText,
  ctaHref,
}: GenericHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "400px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: `${spacing[12]} ${spacing[6]}`,
        overflow: "hidden",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "800px",
          color: colors.white,
        }}
      >
        {/* Badge */}
        {badgeLabel && (
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              color: colors.cyan[300],
              marginBottom: spacing[4],
              letterSpacing: "0.05em",
            }}
          >
            {badgeLabel}
          </div>
        )}

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: spacing[6],
            background: gradients.cyanToBluePrimary,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          } as React.CSSProperties}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              color: colors.slate[200],
              lineHeight: 1.6,
              maxWidth: "90%",
              margin: "0 auto",
              marginBottom: spacing[8],
            }}
          >
            {subtitle}
          </p>
        )}

        {/* CTA Button */}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            style={{
              display: "inline-block",
              padding: `${spacing[4]} ${spacing[8]}`,
              backgroundColor: colors.cyan[500],
              color: colors.white,
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 700,
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 4px 12px rgba(0, 200, 255, 0.3)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = colors.cyan[600];
              el.style.boxShadow = "0 8px 24px rgba(0, 200, 255, 0.4)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = colors.cyan[500];
              el.style.boxShadow = "0 4px 12px rgba(0, 200, 255, 0.3)";
              el.style.transform = "translateY(0)";
            }}
          >
            {ctaText}
            <span style={{ marginLeft: spacing[2] }}>→</span>
          </a>
        )}
      </div>
    </section>
  );
}
