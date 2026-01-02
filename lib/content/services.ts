export type ServiceSlug =
  | "diagnostic-depannage"
  | "maintenance-industrielle"
  | "interventions-terrain"
  | "fast-remote";

export interface ServiceItem {
  slug: ServiceSlug;
  title: string;
  heroBenefit: string;
  shortDescription: string;
  result: string;
  whatIs: string;
  included: string[];
  notIncluded: string[];
  steps: { title: string; description: string }[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  remoteFirstHint?: string;
}

export const services: ServiceItem[] = [
  {
    slug: "diagnostic-depannage",
    title: "Diagnostic & dépannage garage",
    heroBenefit:
      "Identifier la cause racine d'un pont, compresseur ou cabine, sécuriser et remettre en service.",
    shortDescription:
      "Diagnostic structuré des équipements de garage, preuves terrain, décision rapide.",
    result: "Cause identifiée, actions tracées, redémarrage sécurisé.",
    whatIs:
      "Intervention terrain centrée sur le diagnostic de panne et la remise en service sécurisée d'équipements de garage (ponts, compresseurs, cabines).",
    included: [
      "Contrôles sécurité et consignation avant intervention",
      "Mesures ciblées (élec/méca/automatisme) avec capture des valeurs",
      "Actions correctives autorisées (réglages, remplacements validés)",
      "Essais fonctionnels et vérification des sécurités",
    ],
    notIncluded: [
      "Modifications de conception non validées",
      "Pièces hors périmètre contractuel sans accord client",
      "Tests destructifs ou non conformes aux règles HSE",
    ],
    steps: [
      { title: "Cadrage", description: "Sécurisation, périmètre, consignes site." },
      { title: "Constats", description: "Symptômes, historiques, contrôles visuels/sondes." },
      { title: "Mesures", description: "Tests ciblés, enregistrement des valeurs et captures." },
      { title: "Actions", description: "Réglages/correctifs autorisés, suivis des impacts." },
      { title: "Essais", description: "Tests fonctionnels et sécurité, validation croisée." },
      { title: "Verdict", description: "Cause racine, actions réalisées, recommandations." },
    ],
    deliverables: [
      "Journal d'intervention (constats, mesures, actions)",
      "Liste des anomalies et causes probables",
      "Actions correctives réalisées et points en suspens",
      "Recommandations de prévention",
    ],
    faq: [
      {
        question: "Que se passe-t-il si la panne n'est pas reproduite ?",
        answer:
          "Nous documentons les constats, mesures et hypothèses et proposons un plan de surveillance ou de tests supplémentaires.",
      },
      {
        question: "Intervenez-vous sur tous types d'équipements ?",
        answer:
          "Nous traitons ponts élévateurs, compresseurs, cabines et automatismes associés. Les systèmes propriétaires nécessitent l'accord du constructeur.",
      },
      {
        question: "Le rapport est-il fourni le jour même ?",
        answer:
          "Un verdict préliminaire est donné sur site. Le rapport synthétique est livré après consolidation des preuves (généralement sous 24-48h ouvrées).",
      },
    ],
    metaTitle: "Diagnostic & dépannage | FAST Tech Services",
    metaDescription:
      "Diagnostic structuré, preuves terrain et remise en service sécurisée des équipements industriels.",
    remoteFirstHint:
      "Avant de planifier une intervention terrain, un diagnostic guidé à distance (FAST Remote) permet une pré-qualification rapide et des preuves évidentes.",
  },
  {
    slug: "maintenance-industrielle",
    title: "Maintenance préventive garage",
    heroBenefit: "Fiabiliser ponts, compresseurs et cabines, prévenir les arrêts non planifiés.",
    shortDescription: "Contrôles périodiques garage, réglages et plan d'actions priorisé.",
    result: "Disponibilité accrue, dérives détectées, actions préventives planifiées.",
    whatIs:
      "Programme de maintenance conditionnelle/planifiée sur équipements de garage (ponts, compresseurs, cabines).",
    included: [
      "Checklists sécurité et conformité de base",
      "Mesures périodiques (élec/méca/automatisme) avec tendances",
      "Nettoyages/réglages mineurs autorisés",
      "Synthèse des risques et recommandations planifiées",
    ],
    notIncluded: [
      "Arrêts majeurs de re-engineering",
      "Remplacement massif sans commande client",
      "Interventions hors habilitation ou hors périmètre site",
    ],
    steps: [
      { title: "Périmètre", description: "Inventaire des équipements et criticité." },
      { title: "Contrôles", description: "Sécurité, visuels, tests fonctionnels." },
      { title: "Mesures", description: "Relevés électriques/mécaniques, analyse des dérives." },
      { title: "Actions", description: "Réglages mineurs, lubrification, resserrages autorisés." },
      { title: "Synthèse", description: "Risques, priorités, pièces à prévoir." },
      { title: "Plan", description: "Recommandations et planning d'actions." },
    ],
    deliverables: [
      "Fiches de contrôle complétées",
      "Tendances de mesures et alertes",
      "Liste d'actions préventives/prévisionnelles",
      "Priorisation par criticité et délai",
    ],
    faq: [
      {
        question: "Pouvez-vous intégrer nos GMAO ?",
        answer:
          "Oui, les livrables peuvent être exportés pour intégration ou fournis au format standard (CSV/PDF).",
      },
      {
        question: "Faites-vous la fourniture de pièces ?",
        answer:
          "Nous recommandons et référencerons les pièces. L'achat se fait selon le processus client ou sur commande dédiée.",
      },
      {
        question: "Quelle fréquence d'intervention ?",
        answer:
          "Selon la criticité : mensuelle/trimestrielle/semestrielle. Le plan est ajusté après le premier passage.",
      },
    ],
    metaTitle: "Maintenance industrielle | FAST Tech Services",
    metaDescription:
      "Maintenance électromécanique conditionnelle/planifiée avec mesures, tendances et plan d'actions priorisé.",
    remoteFirstHint:
      "Commencer par un diagnostic FAST Remote permet une identification rapide des dérives et une priorisation éclairée du plan de maintenance.",
  },
  {
    slug: "interventions-terrain",
    title: "Interventions terrain",
    heroBenefit: "Prendre en charge des situations critiques garage avec traçabilité complète.",
    shortDescription: "Mobilisation terrain, sécurisation, preuves et verdict.",
    result: "Situation maîtrisée, faits documentés, plan d'actions clair.",
    whatIs:
      "Intervention sur site pour incidents critiques garage, contrôles de sécurité ou remise en conformité limitée.",
    included: [
      "Analyse de contexte et sécurisation de zone",
      "Tests ciblés sur organes critiques",
      "Actions correctives urgentes autorisées",
      "Compte rendu structuré pour décision (assureur/exploitant)",
    ],
    notIncluded: [
      "Remise en conformité complète sans devis approuvé",
      "Travaux hors habilitation ou hors procédures site",
      "Interventions sans conditions de sécurité réunies",
    ],
    steps: [
      { title: "Brief", description: "Contexte, risques, règles site." },
      { title: "Sécurisation", description: "Consignation, EPI, verrouillages." },
      { title: "Constats & mesures", description: "Tests organes critiques, collecte de preuves." },
      { title: "Actions ciblées", description: "Corrections autorisées et vérifications associées." },
      { title: "Validation", description: "Essais, sécurité, conformité minimale." },
      { title: "Restitution", description: "Synthèse écrite, suites recommandées." },
    ],
    deliverables: [
      "Journal des constats et mesures",
      "Preuves (photos/valeurs) des tests et actions",
      "Synthèse risques résiduels",
      "Verdict et prochaines étapes recommandées",
    ],
    faq: [
      {
        question: "Intervenez-vous en heures non ouvrées ?",
        answer:
          "Possible sur planification ou astreinte dédiée. Les conditions HSE doivent être réunies.",
      },
      {
        question: "Que se passe-t-il si des pièces sont manquantes ?",
        answer:
          "Nous sécurisons l'installation, documentons les besoins et planifions le complément avec le client.",
      },
      {
        question: "Pouvez-vous vous coordonner avec un expert/assureur ?",
        answer:
          "Oui, la restitution inclut les preuves requises et peut être partagée aux tiers désignés.",
      },
    ],
    metaTitle: "Interventions terrain | FAST Tech Services",
    metaDescription:
      "Prise en charge sur site des situations critiques avec sécurisation, preuves et verdict documenté.",
    remoteFirstHint:
      "Une session FAST Remote préalable peut sécuriser la situation et documenter les preuves essentielles avant une mobilisation terrain.",
  },
  {
    slug: "fast-remote",
    title: "FAST Remote",
    heroBenefit: "Diagnostic guidé à distance avec preuves terrain exigées.",
    shortDescription: "Protocole remote structuré, humain-in-the-loop, verdict rapide.",
    result: "Décision rapide, preuves capturées, plan d'actions clair.",
    whatIs:
      "Assistance à distance pilotée par un technicien référent avec validations à chaque étape et collecte systématique de preuves.",
    included: [
      "Check initial (sécurité, contexte, matériel disponible)",
      "Guidage pas-à-pas et contrôles à distance",
      "Validation des preuves (photos/vidéos/valeurs) en direct",
      "Synthèse écrite et recommandations immédiates",
    ],
    notIncluded: [
      "Action sur des équipements sans opérateur habilité sur place",
      "Interventions hors procédures de sécurité du site",
      "Diagnostic sans preuves terrain exploitables",
    ],
    steps: [
      { title: "Cadrage", description: "Contexte, risques, opérateur habilité." },
      { title: "Check matériel", description: "Disponibilité des outils/mesures/caméra." },
      { title: "Guidage", description: "Étapes commentées, contrôles et mesures demandées." },
      { title: "Validation", description: "Preuves revues en temps réel, ajustements." },
      { title: "Décision", description: "Verdict écrit et plan d'actions immédiat." },
      { title: "Suivi", description: "Points ouverts et escalade si nécessaire." },
    ],
    deliverables: [
      "Journal des échanges et actions réalisées",
      "Preuves validées (captures, valeurs, vidéos)",
      "Verdict écrit et plan d'actions",
      "Conditions de sécurisation ou d'escalade",
    ],
    faq: [
      {
        question: "Quelles conditions pour une session FAST Remote ?",
        answer:
          "Présence d'un opérateur habilité, connexion stable, moyens de mesure et de prise de vue suffisants.",
      },
      {
        question: "Quelle durée pour obtenir un verdict ?",
        answer:
          "La plupart des décisions sont prises durant la session. Un complément peut être planifié si des mesures supplémentaires sont nécessaires.",
      },
      {
        question: "Que faire si la connexion est interrompue ?",
        answer:
          "Les données déjà collectées sont sauvegardées. Une reprise est planifiée ou une intervention terrain est proposée si nécessaire.",
      },
    ],
    metaTitle: "FAST Remote | FAST Tech Services",
    metaDescription:
      "Diagnostic guidé à distance, preuves exigées et verdict rapide piloté par un technicien référent.",
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<ServiceSlug, ServiceItem>;
