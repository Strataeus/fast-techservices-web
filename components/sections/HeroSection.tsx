/**
 * Hero Section Component - Premium brand introduction (Home)
 * 
 * Structure copiée de CarServ template:
 * - FULL-WIDTH background image (carousel-bg-1.jpg equivalent)
 * - Dark overlay rgba(0,0,0,0.7) par-dessus
 * - 2-column grid inside overlay (col-lg-7 text left, col-lg-5 image right)
 * - Dual CTA buttons (Primary: FAST Remote, Secondary: Méthode)
 * - SLA badges (single source: content/config.ts)
 * 
 * Converted from CarServ HTML to Next.js React
 * Sourced copy from: FAST_TECH_SERVICES_COPY_v1.md
 */

"use client";

import { getCTA, getSLA } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  backgroundImage?: string;
  showSLA?: boolean;
  showSecondaryButton?: boolean;
}

export function HeroSection({
  headline = "FAST Tech Services / FAST Remote\n\nExpertise mécatronique sur site et à distance pour équipements techniques critiques de garage automobile",
  subheadline = "Spécialiste ponts élévateurs, compresseurs d'air comprimé, cabines de peinture et stations de lavage.\nFAST Remote : diagnostic à distance par visio sous 24 heures.\nMéthode non négociable : terrain → preuve → verdict.\nTests de sortie systématiques et dossier d'intervention documenté.",
  backgroundImage = "/hero/home/hero.webp",
  showSLA = true,
  showSecondaryButton = true,
}: HeroSectionProps) {
  const primaryCTA = getCTA("primary");
  const secondaryCTA = getCTA("secondary");
  const sla = getSLA();

  return (
    <>
      {/* HERO SECTION - Image only */}
      <section
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "2560 / 960",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: `${spacing[12]} ${spacing[6]}`,
          margin: 0,
          overflow: "hidden",
        }}
      >
        {/* Dark Overlay - exact CarServ style: rgba(0,0,0,.7) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0)",
            zIndex: 1,
          }}
        />
      </section>

      {/* TEXT SECTION - Below the hero image */}
      <section
        style={{
          backgroundColor: colors.white,
          padding: `${spacing[16]} ${spacing[6]}`,
          borderBottom: `1px solid ${colors.slate[200]}`,
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Eyebrow/Badge - like CarServ h6 */}
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              color: colors.cyan[600],
              marginBottom: spacing[4],
              letterSpacing: "0.05em",
            }}
          >
            {"Diagnostic / Preuve / Verdict"}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: `0 0 ${spacing[6]} 0`,
              color: colors.slate[900],
              maxWidth: "90%",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              color: colors.slate[600],
              lineHeight: 1.6,
              margin: `0 0 ${spacing[8]} 0`,
              maxWidth: "85%",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
          >
            {subheadline}
          </p>

          {/* Dual CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: spacing[4],
              marginBottom: spacing[8],
            }}
          >
            {/* Primary CTA */}
            <a
              href={primaryCTA.href}
              style={{
                display: "inline-block",
                padding: `${spacing[3]} ${spacing[6]}`,
                backgroundColor: colors.cyan[500],
                color: colors.white,
                textDecoration: "none",
                fontWeight: 600,
                borderRadius: "0.375rem",
                border: "none",
                cursor: "pointer",
                transition: "all 150ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = colors.cyan[600];
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = colors.cyan[500];
              }}
            >
              {primaryCTA.label}
              <span style={{ marginLeft: spacing[2] }}>→</span>
            </a>

            {/* Secondary CTA */}
            {showSecondaryButton && (
              <a
                href={secondaryCTA.href}
                style={{
                  display: "inline-block",
                  padding: `${spacing[3]} ${spacing[6]}`,
                  backgroundColor: "transparent",
                  color: colors.slate[900],
                  textDecoration: "none",
                  fontWeight: 600,
                  border: `2px solid ${colors.slate[900]}`,
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  transition: "all 150ms ease-in-out",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = colors.slate[100];
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "transparent";
                }}
              >
                {secondaryCTA.label}
                <span style={{ marginLeft: spacing[2] }}>→</span>
              </a>
            )}
          </div>

          {/* SLA Badges - Single source of truth (config.ts) */}
          {showSLA && (
            <div
              style={{
                display: "flex",
                gap: spacing[4],
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {/* SLA Box */}
              <div
                style={{
                  padding: `${spacing[3]} ${spacing[4]}`,
                  backgroundColor: colors.cyan[50],
                  borderRadius: "0.375rem",
                  border: `1px solid ${colors.cyan[300]}`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: colors.cyan[700],
                    letterSpacing: "0.05em",
                    marginBottom: spacing[1],
                  }}
                >
                  {sla.title}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: colors.slate[900],
                    marginBottom: spacing[1],
                  }}
                >
                  {sla.timeframe}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: colors.slate[600],
                    lineHeight: 1.4,
                  }}
                >
                  {sla.description}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
