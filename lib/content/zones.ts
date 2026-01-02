export type ZoneSlug = "zone-nord" | "zone-ouest" | "zone-sud-est";

export interface ZoneItem {
  slug: ZoneSlug;
  title: string;
  description: string;
  coverageNote: string;
  bullets: string[];
  perimeter: string;
}

export const zones: ZoneItem[] = [
  {
    slug: "zone-nord",
    title: "Zone Nord – Île-de-France & Région Parisienne",
    description:
      "Couverture complète en Île-de-France et périphérie. Intervention rapide (24-48h) pour dépannage urgent et maintenance industrielle. Spécialistes en équipements garage, chaînes de production et systèmes électromécaniques.",
    coverageNote: "Région parisienne et Île-de-France (75, 77, 78, 91, 92, 93, 94, 95).",
    perimeter: "Île-de-France : Paris, Banlieue Nord/Est/Ouest/Sud. Interventions rapides sur urgence dépannage. Sav maintenance préventive.",
    bullets: [
      "Dépannage équipements garage (ponts élévateurs, compresseurs, cabines)",
      "Diagnostic électromécanique sur site ou FAST Remote",
      "Maintenance préventive contractuelle",
      "Interventions urgence 24h/24h sur devis",
    ],
  },
  {
    slug: "zone-ouest",
    title: "Zone Ouest – Bretagne & Normandie",
    description:
      "Présence technique en Bretagne et Normandie. Partenariat avec intervenants locaux certifiés. Équipement diagnostic et moyens pour intervention rapide ou escalade expert.",
    coverageNote: "Bretagne, Normandie et régions adjacentes (22, 35, 56, 14, 50, 61, 76, 27).",
    perimeter: "Bretagne (Côtes-d'Armor, Ille-et-Vilaine, Morbihan), Normandie (Calvados, Manche, Orne, Seine-Maritime, Eure). FAST Remote actif 24h.",
    bullets: [
      "Dépannage urgent avec intervenants certifiés locaux",
      "FAST Remote prioritaire (diagnostic 1-2h)",
      "Audit technique et conformité",
      "Maintenance contrats périodiques",
    ],
  },
  {
    slug: "zone-sud-est",
    title: "Zone Sud-Est – PACA & Rhône-Alpes",
    description:
      "Couverture technique régionale PACA et Rhône-Alpes. Expertise en équipements motorisés et systèmes haute température. Intervention rapide pour maintenance industrie. FAST Remote principal.",
    coverageNote: "Provence-Alpes-Côte d'Azur, Rhône-Alpes et régions adjacentes.",
    perimeter: "PACA (13, 83, 84, 06), Rhône-Alpes (69, 42, 38, 73, 74, 26), Bourgogne (21, 71, 89). Support FAST Remote 24/7 dominant.",
    bullets: [
      "Maintenance industrielle spécialisée mécanique/hydraulique",
      "Support FAST Remote expert (diagnostic distance)",
      "Interventions terrain ponctuelles ou contrat",
      "Analyse preuves et verdict traçable",
    ],
  },
];

export const zoneBySlug = Object.fromEntries(
  zones.map((zone) => [zone.slug, zone])
) as Record<ZoneSlug, ZoneItem>;
