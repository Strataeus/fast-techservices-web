const isProd = process.env.NODE_ENV === "production";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? (isProd ? "" : "A renseigner");
const contactPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? (isProd ? "" : "A renseigner");
const serviceArea =
  process.env.NEXT_PUBLIC_SERVICE_AREA ?? (isProd ? "" : "A renseigner");

// TODO: Renseigner NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CONTACT_PHONE, NEXT_PUBLIC_SERVICE_AREA.

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
} as const;
