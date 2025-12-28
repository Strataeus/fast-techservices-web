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
    title: "Zone Nord",
    description:
      "Interventions techniques et maintenance industrielle sur site. Périmètre exact à préciser selon votre besoin.",
    coverageNote: "Zone d'intervention à préciser.",
    perimeter: "Périmètre: à préciser (départements/villes).",
    bullets: [
      "Dépannage et maintenance équipements de garage",
      "Diagnostic & remise en conformité",
      "Assistance à distance FAST Remote",
    ],
  },
  {
    slug: "zone-ouest",
    title: "Zone Ouest",
    description:
      "Couverture professionnelle pour équipements industriels et électromécaniques. Périmètre exact à préciser.",
    coverageNote: "Zone d'intervention à préciser.",
    perimeter: "Périmètre: à préciser (départements/villes).",
    bullets: [
      "Maintenance électromécanique",
      "Audit technique et conformité",
      "Interventions planifiées",
    ],
  },
  {
    slug: "zone-sud-est",
    title: "Zone Sud-Est",
    description:
      "Support terrain et diagnostic structuré pour exploitants d'équipements industriels. Zone à confirmer.",
    coverageNote: "Zone d'intervention à préciser.",
    perimeter: "Périmètre: à préciser (départements/villes).",
    bullets: [
      "Support technique sur site",
      "Analyse et preuves terrain",
      "Verdict traçable",
    ],
  },
];

export const zoneBySlug = Object.fromEntries(
  zones.map((zone) => [zone.slug, zone])
) as Record<ZoneSlug, ZoneItem>;
