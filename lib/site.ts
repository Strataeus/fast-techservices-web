const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@fast-techservices.com";
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+33 1 XX XX XX XX";
const serviceArea =
  process.env.NEXT_PUBLIC_SERVICE_AREA ?? "Île-de-France, Région parisienne";

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
    { label: "Accueil", href: "#top" },
    { label: "FAST Remote", href: "fast-remote" },
    { label: "Services", href: "services" },
    { label: "Méthode", href: "methode" },
    { label: "Preuves", href: "preuves" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    email: contactEmail,
    phone: contactPhone,
    area: serviceArea,
  },
  cta,
} as const;
