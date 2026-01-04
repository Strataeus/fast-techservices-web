/**
 * Header Component - Global navigation bar
 * 
 * Features:
 * - Responsive navigation (desktop + mobile)
 * - Brand logo/name
 * - Primary CTA button
 * - Accessibility-first
 */

"use client";

import Link from "next/link";
import { getNavigation, getCTA } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

export function Header() {
  const nav = getNavigation();
  const primaryCTA = getCTA("primary");

  return (
    <header
      style={{
        backgroundColor: colors.slate[900],
        borderBottom: `1px solid ${colors.slate[800]}`,
        padding: `${spacing[4]} ${spacing[6]}`,
      }}
      className="sticky top-0 z-fixed"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Brand */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              color: colors.white,
              fontSize: "1.5rem",
              fontWeight: 700,
              margin: 0,
              cursor: "pointer",
            }}
          >
            FAST
          </h1>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: spacing[6] }}>
          {nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                color: colors.slate[200],
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "color 150ms ease-in-out",
              }}
              className="hover:text-cyan-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA Button */}
        <Link href={primaryCTA.href} style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: colors.cyan[500],
              color: colors.slate[900],
              padding: `${spacing[2]} ${spacing[4]}`,
              border: "none",
              borderRadius: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "background-color 150ms ease-in-out",
            }}
            className="hover:bg-cyan-600"
          >
            {primaryCTA.label}
          </button>
        </Link>
      </div>
    </header>
  );
}
