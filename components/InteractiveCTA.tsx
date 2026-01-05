/**
 * InteractiveCTA — Client component for hover effects
 * Variants: primary (cyan) | outline (white border)
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

export interface InteractiveCTAProps {
  href: string;
  label: string;
  variant: "primary" | "outline";
}

export function InteractiveCTA({ href, label, variant }: InteractiveCTAProps) {
  if (variant === "primary") {
    return (
      <a
        href={href}
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
        {label} →
      </a>
    );
  }

  // outline variant
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        padding: `${spacing[3]} ${spacing[6]}`,
        backgroundColor: "transparent",
        color: colors.white,
        textDecoration: "none",
        borderRadius: "0.375rem",
        fontWeight: 600,
        fontSize: "0.95rem",
        border: `2px solid ${colors.slate[400]}`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = colors.white;
        (e.currentTarget as HTMLElement).style.backgroundColor = colors.slate[800];
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = colors.slate[400];
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      {label} →
    </a>
  );
}
