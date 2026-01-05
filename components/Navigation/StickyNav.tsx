/**
 * StickyNavigation Component
 * Premium sticky navbar with logo animation, mega menu, mobile hamburger
 * Sticks to top on scroll with subtle shadow
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { colors, spacing, transitions, zIndex } from "@/lib/design/tokens";

const menuItems = [
  { label: "Accueil", href: "/" },
  { label: "FAST Remote", href: "/fast-remote" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Ponts élévateurs", href: "/services/ponts-elevateurs" },
      { label: "Compresseurs d'air", href: "/services/compresseurs-air" },
      { label: "Cabines peinture", href: "/services/cabines-peinture-ventilation" },
      { label: "Stations de lavage", href: "/services/stations-lavage" },
    ],
  },
  { label: "Méthode", href: "/methode" },
  { label: "Preuves", href: "/preuves" },
  { label: "Contact", href: "/contact", highlight: true },
];

export function StickyNavigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.slate[900],
        borderBottom: isSticky ? `1px solid ${colors.slate[700]}` : "none",
        boxShadow: isSticky ? `0 4px 12px rgba(0, 0, 0, 0.15)` : "none",
        zIndex: zIndex.sticky,
        transition: `all ${transitions.normal}`,
        paddingTop: spacing[3],
        paddingBottom: spacing[3],
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: `0 ${spacing[6]}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: spacing[8],
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: spacing[2],
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: colors.white,
            transition: `all ${transitions.fast}`,
            transform: isSticky ? "scale(0.9)" : "scale(1)",
            transformOrigin: "left center",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: `linear-gradient(135deg, ${colors.cyan[400]} 0%, ${colors.cyan[600]} 100%)`,
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: colors.white,
              fontSize: "0.875rem",
            }}
          >
            ⚡
          </div>
          FAST
        </Link>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            gap: spacing[2],
            alignItems: "center",
          }}
          className="hidden lg:flex"
        >
          {menuItems.map((item) => (
            <div key={item.label} style={{ position: "relative" }}>
              <Link
                href={item.href}
                style={{
                  padding: `${spacing[2]} ${spacing[4]}`,
                  color: item.highlight ? colors.cyan[400] : colors.slate[300],
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: `all ${transitions.fast}`,
                  borderRadius: spacing[1],
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = colors.slate[800];
                  if (item.submenu) {
                    setActiveSubmenu(item.label);
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {item.label} {item.submenu && "▼"}
              </Link>

              {/* Submenu */}
              {item.submenu && activeSubmenu === item.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: colors.slate[800],
                    border: `1px solid ${colors.slate[700]}`,
                    borderRadius: spacing[2],
                    minWidth: "200px",
                    marginTop: spacing[1],
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={() => setActiveSubmenu(item.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      style={{
                        display: "block",
                        padding: `${spacing[3]} ${spacing[4]}`,
                        color: colors.slate[300],
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: `all ${transitions.fast}`,
                        borderBottom: `1px solid ${colors.slate[700]}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = colors.slate[700];
                        (e.currentTarget as HTMLElement).style.color = colors.cyan[400];
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLElement).style.color = colors.slate[300];
                      }}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: spacing[2],
          }}
          className="lg:hidden flex flex-col gap-1"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "24px",
                height: "2px",
                backgroundColor: colors.cyan[400],
                borderRadius: "1px",
                transition: `all ${transitions.fast}`,
                transform: isMobileMenuOpen
                  ? i === 0
                    ? "rotate(45deg) translateY(10px)"
                    : i === 2
                      ? "rotate(-45deg) translateY(-10px)"
                      : "scaleX(0)"
                  : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            borderTop: `1px solid ${colors.slate[700]}`,
            padding: `${spacing[4]} ${spacing[6]}`,
            marginTop: spacing[4],
          }}
          className="lg:hidden"
        >
          {menuItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                style={{
                  display: "block",
                  padding: `${spacing[3]} 0`,
                  color: item.highlight ? colors.cyan[400] : colors.slate[300],
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  borderBottom: `1px solid ${colors.slate[800]}`,
                }}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div style={{ paddingLeft: spacing[4] }}>
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      style={{
                        display: "block",
                        padding: `${spacing[2]} 0`,
                        color: colors.slate[400],
                        textDecoration: "none",
                        fontSize: "0.875rem",
                      }}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
