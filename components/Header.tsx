/**
 * Header Component - Global navigation bar
 * 
 * Features:
 * - Responsive navigation (desktop + mobile)
 * - Dropdown submenu for Services
 * - Brand logo/name
 * - Primary CTA button
 * - Accessibility-first
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { getNavigation, getCTA } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

const SERVICES_SUBMENU = [
  { label: "Ponts élévateurs", href: "/services/ponts-elevateurs" },
  { label: "Compresseurs & air", href: "/services/compresseurs-air" },
  { label: "Cabines & ventilation", href: "/services/cabines-peinture-ventilation" },
  { label: "Stations de lavage", href: "/services/stations-lavage" },
];

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const nav = getNavigation();
  const primaryCTA = getCTA("primary");

  return (
    <header
      style={{
        backgroundColor: colors.slate[900],
        borderBottom: `1px solid ${colors.slate[800]}`,
        padding: `${spacing[4]} ${spacing[6]}`,
      }}
      className="sticky top-0 z-50"
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
        <nav style={{ display: "flex", gap: spacing[6], position: "relative" }}>
          {nav.main.map((item) => {
            const isServices = item.label === "Services";
            return (
              <div
                key={item.href}
                style={{ position: "relative" }}
                onMouseEnter={() => isServices && setIsServicesOpen(true)}
                onMouseLeave={() => isServices && setIsServicesOpen(false)}
              >
                {isServices ? (
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    style={{
                      color: colors.slate[200],
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      transition: "color 150ms ease-in-out",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: spacing[1],
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = colors.cyan[500];
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = colors.slate[200];
                    }}
                  >
                    {item.label}
                    <span
                      style={{
                        fontSize: "0.7rem",
                        transition: "transform 200ms ease",
                        transform: isServicesOpen ? "rotate(180deg)" : "rotate(0)",
                      }}
                    >
                      ▼
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      color: colors.slate[200],
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      transition: "color 150ms ease-in-out",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = colors.cyan[500];
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = colors.slate[200];
                    }}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Services Dropdown Menu */}
                {isServices && isServicesOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: colors.slate[800],
                      borderRadius: "0.375rem",
                      border: `1px solid ${colors.slate[700]}`,
                      minWidth: "220px",
                      marginTop: spacing[2],
                      boxShadow: `0 10px 25px rgba(0, 0, 0, 0.3)`,
                      zIndex: 50,
                    }}
                  >
                    {SERVICES_SUBMENU.map((subitem, idx) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        style={{
                          display: "block",
                          padding: `${spacing[3]} ${spacing[4]}`,
                          color: colors.slate[100],
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          transition: "all 150ms ease-in-out",
                          backgroundColor:
                            idx === 0 ? "transparent" : colors.slate[800],
                          borderTop: idx > 0 ? `1px solid ${colors.slate[700]}` : "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            colors.slate[700];
                          (e.currentTarget as HTMLElement).style.color = colors.cyan[400];
                          (e.currentTarget as HTMLElement).style.paddingLeft =
                            spacing[6];
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            colors.slate[800];
                          (e.currentTarget as HTMLElement).style.color = colors.slate[100];
                          (e.currentTarget as HTMLElement).style.paddingLeft =
                            spacing[4];
                        }}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[600];
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                colors.cyan[500];
            }}
          >
            {primaryCTA.label}
          </button>
        </Link>
      </div>
    </header>
  );
}
