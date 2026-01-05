/**
 * Breadcrumbs Navigation Component
 * Improves UX and SEO (schema.org support)
 * Shows navigation path to current page
 */

"use client";

import { usePathname } from "next/navigation";
import { colors, spacing } from "@/lib/design/tokens";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs() {
  const pathname = usePathname();

  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    "/": [{ label: "Accueil" }],
    "/services": [
      { label: "Accueil", href: "/" },
      { label: "Services" },
    ],
    "/services/ponts-elevateurs": [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Ponts élévateurs" },
    ],
    "/services/compresseurs-air": [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Compresseurs d'air" },
    ],
    "/services/cabines-peinture-ventilation": [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Cabines peinture" },
    ],
    "/services/stations-lavage": [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Stations de lavage" },
    ],
    "/fast-remote": [
      { label: "Accueil", href: "/" },
      { label: "FAST Remote" },
    ],
    "/methode": [
      { label: "Accueil", href: "/" },
      { label: "Méthode" },
    ],
    "/preuves": [
      { label: "Accueil", href: "/" },
      { label: "Preuves" },
    ],
    "/zones": [
      { label: "Accueil", href: "/" },
      { label: "Zones" },
    ],
    "/contact": [
      { label: "Accueil", href: "/" },
      { label: "Contact" },
    ],
  };

  const breadcrumbs = breadcrumbMap[pathname] || [{ label: "Accueil", href: "/" }];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://fast-techservices.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        style={{
          padding: `${spacing[4]} ${spacing[6]}`,
          backgroundColor: colors.slate[50],
          borderBottom: `1px solid ${colors.slate[200]}`,
        }}
        aria-label="Fil d'ariane"
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: spacing[2],
            fontSize: "0.875rem",
            color: colors.slate[600],
          }}
        >
          {breadcrumbs.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", gap: spacing[2] }}>
              {index > 0 && <span style={{ color: colors.slate[400] }}>/</span>}
              {item.href ? (
                <a
                  href={item.href}
                  style={{
                    color: colors.cyan[600],
                    textDecoration: "none",
                    transition: "color 150ms ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = colors.cyan[700];
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = colors.cyan[600];
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span style={{ color: colors.slate[800], fontWeight: 500 }}>
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
