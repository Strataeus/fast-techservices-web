const isProd = process.env.NODE_ENV === "production";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? (isProd ? "" : "A renseigner");
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? (isProd ? "" : "A renseigner");
const serviceArea =
  process.env.NEXT_PUBLIC_SERVICE_AREA ?? (isProd ? "" : "A renseigner");

// TODO: Renseigner NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CONTACT_PHONE, NEXT_PUBLIC_SERVICE_AREA.

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
    { label: "Services", href: "#services" },
    { label: "FAST Remote", href: "#remote" },
    { label: "Méthode", href: "methode" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    email: contactEmail,
    phone: contactPhone,
    area: serviceArea,
  },
  cta,
} as const;
