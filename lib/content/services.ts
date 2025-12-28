export type ServiceSlug =
  | "depannage-garage"
  | "maintenance-electromecanique"
  | "remise-en-conformite"
  | "fast-remote";

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  result: string;
  detailTitle: string;
  detailDescription: string;
  bullets: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "depannage-garage",
    title: "Dépannage équipements de garage",
    shortDescription: "Diagnostic rigoureux, remise en service, essais fonctionnels.",
    result: "Disponibilité rapide et sécurisée.",
    detailTitle: "Dépannage équipements de garage",
    detailDescription:
      "Diagnostic rapide, remise en service sécurisée et essais fonctionnels complets. Rapport technique livré en fin d'intervention.",
    bullets: [
      "Analyse des organes critiques et sécurités",
      "Mesures et preuves techniques",
      "Validation de conformité après intervention",
    ],
  },
  {
    slug: "maintenance-electromecanique",
    title: "Maintenance électromécanique",
    shortDescription: "Équipements industriels, armoires, automatismes.",
    result: "Prévention des arrêts non planifiés.",
    detailTitle: "Maintenance électromécanique",
    detailDescription:
      "Contrôles périodiques, réglages et prévention des arrêts non planifiés. Interventions tracées et documentées.",
    bullets: [
      "Vérifications électriques et automatismes",
      "Mesures de performance et sécurité",
      "Recommandations de maintenance",
    ],
  },
  {
    slug: "remise-en-conformite",
    title: "Diagnostic & remise en conformité",
    shortDescription: "Contrôle approfondi, documentation, conformité réglementaire.",
    result: "Conformité vérifiée et traçable.",
    detailTitle: "Diagnostic & remise en conformité",
    detailDescription:
      "Audit technique, collecte de preuves et actions correctives. Dossier de conformité livré pour vos audits internes ou externes.",
    bullets: [
      "Mesures et contrôles réglementaires",
      "Documentation et traçabilité",
      "Recommandations et plan d'action",
    ],
  },
  {
    slug: "fast-remote",
    title: "Assistance à distance (FAST Remote)",
    shortDescription: "Diagnostic guidé à distance avec preuves terrain.",
    result: "Décision rapide et documentée.",
    detailTitle: "Diagnostic à distance, piloté par l'expert",
    detailDescription:
      "Un protocole d'assistance à distance renforcé par l'IA, validé par un technicien référent. Objectif : décider vite, décider juste.",
    bullets: [
      "Diagnostic guidé, humain-in-the-loop",
      "Preuve exigée à chaque étape",
      "Verdict écrit et traçable",
    ],
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<ServiceSlug, ServiceItem>;
