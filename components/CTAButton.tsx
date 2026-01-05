/**
 * Premium CTA Button
 * Call-to-action buttons with advanced animations
 */

"use client";

import React from "react";
import Link from "next/link";
import { colors, spacing, radius, animations, transitions } from "@/lib/design/tokens";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const variantStyles = {
  primary: {
    backgroundColor: colors.cyan[600],
    color: "white",
    hoverBg: colors.cyan[500],
  },
  secondary: {
    backgroundColor: colors.slate[700],
    color: colors.slate[100],
    hoverBg: colors.slate[600],
  },
  outline: {
    backgroundColor: "transparent",
    color: colors.cyan[400],
    border: `2px solid ${colors.cyan[600]}`,
    hoverBg: colors.slate[800],
  },
};

const sizeStyles = {
  sm: {
    padding: `${spacing[2]} ${spacing[4]}`,
    fontSize: "0.875rem",
  },
  md: {
    padding: `${spacing[3]} ${spacing[6]}`,
    fontSize: "1rem",
  },
  lg: {
    padding: `${spacing[4]} ${spacing[8]}`,
    fontSize: "1.125rem",
  },
};

export function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  animated = true,
  disabled = false,
  type = "button",
  className,
}: CTAButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const baseStyle: React.CSSProperties = {
    ...sizeStyle,
    ...variantStyle,
    border: "none",
    borderRadius: radius.lg,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    fontWeight: 600,
    transition: transitions.smooth,
    textDecoration: "none",
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    ...(animated && {
      animation: `${animations.ctaPulse} 2s ease-in-out infinite`,
    }),
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const el = e.currentTarget;
    if (!disabled) {
      el.style.backgroundColor = variantStyle.hoverBg;
      if (variant === "outline") {
        (el as HTMLElement).style.backgroundColor = variantStyle.hoverBg;
      }
      el.style.transform = "scale(1.05)";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.backgroundColor = variantStyle.backgroundColor;
    el.style.transform = "scale(1)";
  };

  if (href) {
    return (
      <Link
        href={href}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </button>
  );
}

/**
 * Premium CTA Section with gradient background
 */

export function CTASection({
  title = "Prêt à commencer?",
  description = "Contactez-nous dès maintenant pour une consultation gratuite",
  primaryCTA = { text: "Démarrer", href: "/contact" },
  secondaryCTA = { text: "En savoir plus", href: "/methode" },
}: {
  title?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}) {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${colors.slate[900]}, ${colors.cyan[700]})`,
        padding: `${spacing[16]} ${spacing[4]}`,
        borderRadius: radius.xl,
        textAlign: "center",
        color: colors.slate[100],
      }}
    >
      <h2 style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: spacing[4] }}>
        {title}
      </h2>
      <p
        style={{
          fontSize: "1.125rem",
          marginBottom: spacing[8],
          color: colors.slate[300],
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {description}
      </p>
      <div style={{ display: "flex", gap: spacing[4], justifyContent: "center", flexWrap: "wrap" }}>
        <CTAButton href={primaryCTA.href} variant="primary" size="lg" animated>
          {primaryCTA.text}
        </CTAButton>
        <CTAButton href={secondaryCTA.href} variant="outline" size="lg">
          {secondaryCTA.text}
        </CTAButton>
      </div>
    </section>
  );
}
