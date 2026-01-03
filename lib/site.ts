const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@fast-techservices.com";
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+33 1 42 86 82 00";
const serviceArea =
  process.env.NEXT_PUBLIC_SERVICE_AREA ?? "Interventions terrain : Île-de-France | FAST Remote : France entière";

// CTA Canonique - FAST Remote First
const cta = {
  primary: {
    label: "Démarrer FAST Remote",
    href: "/fast-remote",
  },
  secondary: {
    label: "Demander une intervention sur site",
    href: "/contact",
  },
} as const;

export const siteConfig = {
  name: "FAST Tech Services",
  description:
    "Dépannage et maintenance d'équipements industriels. Méthode rigoureuse, preuves techniques et diagnostic clair.",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "FAST Remote", href: "/fast-remote" },
    { 
      label: "Services", 
      href: "/services",
      // Megamenu items
      submenu: [
        { label: "🚡 Ponts Élévateurs", href: "/services", desc: "Diagnostic hydraulique & sécurité" },
        { label: "💨 Compresseurs", href: "/services", desc: "Efficacité énergétique & débit" },
        { label: "🎨 Cabines Peinture", href: "/services", desc: "Conformité & ventilation" },
      ]
    },
    { label: "Zones Intervention", href: "/zones" },
    { label: "Méthode", href: "/methode" },
    { label: "Preuves", href: "/preuves" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: contactEmail,
    phone: contactPhone,
    area: serviceArea,
  },
  cta,
} as const;
