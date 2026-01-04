/**
 * Site Configuration - Single Source of Truth
 * 
 * Brand, domain, contact info, SLA, CTAs.
 * Centralized to prevent contradictions.
 * 
 * DOCTRINE: Single definition, multiple consumption points.
 */

export interface SLAConfig {
  title: string;        // e.g., "Réponse garantie"
  timeframe: string;    // e.g., "2h"
  description: string;  // e.g., "Diagnostic et premiers conseils en 2 heures"
}

export interface CTAConfig {
  label: string;
  href: string;
}

export interface SiteConfig {
  // Brand identity
  brand: {
    name: string;
    tagline: string;
    description: string;
  };

  // Contact & domain
  domain: string;
  phone: string;
  email: string;

  // SLA - SINGLE SOURCE OF TRUTH
  // Used by all pages (FAST Remote, Contact, Services, etc.)
  sla: SLAConfig;

  // CTAs
  cta: {
    primary: CTAConfig;
    secondary: CTAConfig;
  };

  // Navigation
  navigation: {
    main: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
  };

  // SEO metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// ============================================================================
// LIVE CONFIGURATION
// ============================================================================

export const siteConfig: SiteConfig = {
  brand: {
    name: "FAST Tech Services",
    tagline: "Diagnostic et maintenance équipements HVAC",
    description:
      "Expert en diagnostic rapide et maintenance d'équipements climatisation, pompes, compresseurs.",
  },

  domain: "fast-techservices.com",
  phone: "+33 (placeholder)",
  email: "contact@fast-techservices.com",

  // ⚠️ SLA: SINGLE DEFINITION (source de vérité : content-map.yml)
  // This is injected into:
  // - /fast-remote page (SLABadges component)
  // - /contact page (SLABadges component)
  // - /services page (SLABadges component)
  // - All CTAs & testimonials
  // If you change this, it updates EVERYWHERE. No contradictions possible.
  sla: {
    title: "Garantie de traitement",
    timeframe: "Immédiat → 4h → 24h → 2h",
    description:
      "Accusé immédiat. Réponse sous 4h ouvrées. Créneau visio sous 24h ouvrées (J+1 ouvré). Verdict / plan sous 2h après session (si preuves suffisantes), sinon UNKNOWN + plan.",
  },

  cta: {
    primary: {
      label: "Démarrer diagnostic",
      href: "/fast-remote",
    },
    secondary: {
      label: "En savoir plus",
      href: "/methode",
    },
  },

  navigation: {
    main: [
      { label: "Accueil", href: "/" },
      { label: "FAST Remote", href: "/fast-remote" },
      { label: "Services", href: "/services" },
      { label: "Méthode", href: "/methode" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Zones", href: "/zones" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "Cookies", href: "/cookies" },
    ],
  },

  seo: {
    title: "FAST Tech Services - Diagnostic HVAC 2h garanties",
    description:
      "Diagnostic et maintenance équipements climatisation, pompes, compresseurs. Réponse en 2h.",
    keywords: [
      "diagnostic HVAC",
      "maintenance climatisation",
      "pompes",
      "compresseurs",
      "expertise technique",
    ],
  },
};

/**
 * Export SLA for easy component consumption
 * Usage: import { getSLA } from '@/content/config'
 */
export const getSLA = () => siteConfig.sla;

/**
 * Export navigation for Header/Footer
 */
export const getNavigation = () => siteConfig.navigation;

/**
 * Export CTAs for consistent button labels across site
 */
export const getCTA = (type: "primary" | "secondary") => siteConfig.cta[type];
