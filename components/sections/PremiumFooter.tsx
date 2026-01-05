/**
 * Premium Footer Component
 * B2B automobile focus: sitemap, quick contact, social, certifications
 */

"use client";

import Link from "next/link";
import { colors, spacing, gradients } from "@/lib/design/tokens";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { label: "FAST Remote", href: "/fast-remote" },
      { label: "Ponts élévateurs", href: "/services/ponts-elevateurs" },
      { label: "Compresseurs", href: "/services/compresseurs-air" },
      { label: "Cabines peinture", href: "/services/cabines-peinture-ventilation" },
      { label: "Stations lavage", href: "/services/stations-lavage" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Méthode FAST", href: "/methode" },
      { label: "Preuves & réalisations", href: "/preuves" },
      { label: "Zones d'intervention", href: "/zones" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

const certifications = ["ISO 9001", "Qualibat", "RGE"];
const socialLinks = [
  { name: "LinkedIn", url: "#", icon: "🔗" },
  { name: "WhatsApp", url: "#", icon: "💬" },
  { name: "Email", url: "mailto:contact@fast-techservices.com", icon: "📧" },
];

export function PremiumFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: colors.slate[900],
        borderTop: `1px solid ${colors.slate[800]}`,
        color: colors.slate[200],
      }}
    >
      {/* Main Footer Content */}
      <div style={{ padding: `${spacing[16]} ${spacing[6]}` }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* Grid: Logo + Sections */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "250px repeat(3, 1fr)",
              gap: spacing[12],
              marginBottom: spacing[12],
            }}
          >
            {/* Brand Section */}
            <div>
              <Link href="/">
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    marginBottom: spacing[4],
                    background: gradients.cyanToBluePrimary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } as React.CSSProperties}
                >
                  FAST
                </h3>
              </Link>
              <p style={{ fontSize: "0.875rem", color: colors.slate[400], marginBottom: spacing[6] }}>
                Expert électromécanicien terrain pour équipements critiques de garage automobile.
              </p>

              {/* Certifications */}
              <div style={{ marginBottom: spacing[4] }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", marginBottom: spacing[2] }}>
                  Certifications
                </p>
                <div style={{ display: "flex", gap: spacing[3], flexWrap: "wrap" }}>
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      style={{
                        fontSize: "0.75rem",
                        padding: `${spacing[1]} ${spacing[2]}`,
                        backgroundColor: colors.slate[800],
                        borderRadius: "0.25rem",
                        border: `1px solid ${colors.cyan[500]}`,
                        color: colors.cyan[300],
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", marginBottom: spacing[2] }}>
                  Nous contacter
                </p>
                <div style={{ display: "flex", gap: spacing[4] }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      title={social.name}
                      style={{
                        fontSize: "1.5rem",
                        textDecoration: "none",
                        opacity: 0.8,
                        transition: "opacity 300ms ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.opacity = "0.8";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: spacing[4],
                    color: colors.white,
                    letterSpacing: "0.05em",
                  }}
                >
                  {section.title}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing[3],
                  }}
                >
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: colors.slate[400],
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          transition: "color 300ms ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = colors.cyan[400];
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = colors.slate[400];
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ borderTop: `1px solid ${colors.slate[800]}`, marginBottom: spacing[8] }} />

          {/* Stats Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: spacing[6],
              marginBottom: spacing[12],
            }}
          >
            <div>
              <p style={{ fontSize: "0.75rem", color: colors.slate[500], textTransform: "uppercase", marginBottom: spacing[1] }}>
                Clients
              </p>
              <p style={{ fontSize: "1.75rem", fontWeight: 700, color: colors.cyan[400] }}>250+</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: colors.slate[500], textTransform: "uppercase", marginBottom: spacing[1] }}>
                Interventions
              </p>
              <p style={{ fontSize: "1.75rem", fontWeight: 700, color: colors.cyan[400] }}>15k+</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: colors.slate[500], textTransform: "uppercase", marginBottom: spacing[1] }}>
                Uptime moyen
              </p>
              <p style={{ fontSize: "1.75rem", fontWeight: 700, color: colors.cyan[400] }}>98%</p>
            </div>
            <div>
              <p style={{ fontSize: "0.75rem", color: colors.slate[500], textTransform: "uppercase", marginBottom: spacing[1] }}>
                Temps réponse
              </p>
              <p style={{ fontSize: "1.75rem", fontWeight: 700, color: colors.cyan[400] }}>4h</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: spacing[6],
              borderTop: `1px solid ${colors.slate[800]}`,
              flexWrap: "wrap",
              gap: spacing[4],
            }}
          >
            <p style={{ fontSize: "0.75rem", color: colors.slate[500] }}>
              © {currentYear} FAST Tech Services. Tous droits réservés.
            </p>
            <p style={{ fontSize: "0.75rem", color: colors.slate[500] }}>
              Diagnostic • Maintenance • Intervention terrain
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
