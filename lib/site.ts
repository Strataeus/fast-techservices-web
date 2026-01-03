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
        { label: "🚡 Ponts Élévateurs", href: "/services#pont-elevateur", desc: "Diagnostic hydraulique & sécurité" },
        { label: "💨 Compresseurs", href: "/services#compresseur", desc: "Efficacité énergétique & débit" },
        { label: "🎨 Cabines Peinture", href: "/services#cabine-peinture", desc: "Conformité & ventilation" },
      ]
    },
    { label: "Zones Intervention", href: "/zones",
      submenu: [
        { label: "📍 Île-de-France", href: "/zones#ile-de-france", desc: "Interventions terrain prioritaires" },
        { label: "🚀 France Entière", href: "/fast-remote", desc: "FAST Remote couvre tout" },
      ]
    },
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
