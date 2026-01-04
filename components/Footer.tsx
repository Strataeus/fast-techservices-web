/**
 * Footer Component - Global footer with legal links
 * 
 * Features:
 * - Copyright info
 * - Legal links (Mentions légales, Confidentialité, Cookies)
 * - Contact info
 * - Minimal, accessible
 */

import Link from "next/link";
import { getNavigation, siteConfig } from "@/content/config";
import { colors, spacing } from "@/lib/design/tokens";

export function Footer() {
  const nav = getNavigation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: colors.slate[900],
        borderTop: `1px solid ${colors.slate[800]}`,
        padding: `${spacing[12]} ${spacing[6]}`,
        marginTop: spacing[20],
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Main footer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: spacing[8],
            marginBottom: spacing[12],
          }}
        >
          {/* Brand info */}
          <div>
            <h3
              style={{
                color: colors.white,
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: spacing[2],
              }}
            >
              {siteConfig.brand.name}
            </h3>
            <p
              style={{
                color: colors.slate[400],
                fontSize: "0.875rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                color: colors.white,
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: spacing[2],
                letterSpacing: "0.05em",
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: spacing[2] }}>
                <a
                  href={`tel:${siteConfig.phone}`}
                  style={{
                    color: colors.slate[400],
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  style={{
                    color: colors.slate[400],
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div
          style={{
            borderTop: `1px solid ${colors.slate[800]}`,
            paddingTop: spacing[6],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: spacing[4],
          }}
        >
          <p
            style={{
              color: colors.slate[500],
              fontSize: "0.75rem",
              margin: 0,
            }}
          >
            © {currentYear} {siteConfig.brand.name}. Tous droits réservés.
          </p>

          <div style={{ display: "flex", gap: spacing[6] }}>
            {nav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: colors.slate[400],
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  transition: "color 150ms ease-in-out",
                }}
                className="hover:text-cyan-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
