/**
 * /services/compresseurs-air
 * Page détaillée: Compresseurs & réseau d'air comprimé
 * Source: content-map.yml (svc_air) + FAST_TECH_SERVICES_COPY_v1.md
 */

import type { Metadata } from "next";
import { ServiceDetailPage } from "../ServiceDetailPage";

export const metadata: Metadata = {
  title:
    "Compresseurs & air comprimé — dépannage, réseau, régulation | FAST Tech Services",
  description:
    "Compresseurs à vis/piston, régulation, traitement d'air, fuites, stabilité pression. Diagnostic guidé FAST Remote.",
  openGraph: {
    title: "Compresseurs & air comprimé | FAST Tech Services",
    description:
      "Compresseurs à vis/piston, régulation, traitement d'air, fuites, stabilité pression. Diagnostic guidé FAST Remote.",
    images: [
      {
        url: "/media/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "Compresseurs air comprimé",
      },
    ],
  },
};

export default function CompressorsDetailPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: "Compresseurs & air comprimé",
        description: "Dépannage, réseau, régulation, fiabilisation",
      }}
      heroContent={{
        headline: "Compresseurs & réseau d'air comprimé",
        subheadline:
          "Stabilité pression, régulation, fuites, fiabilisation : diagnostic guidé et remise en exploitation.",
        cta_primary: {
          label: "Démarrer FAST Remote",
          href: "/fast-remote#demarrer",
        },
        cta_secondary: {
          label: "Demander une intervention sur site",
          href: "/contact#onsite",
        },
        sla_badges: {
          ack: "Accusé immédiat",
          response: "Réponse sous 4h ouvrées",
        },
      }}
      aboutSection={{
        headline: "Expertise compresseurs & réseaux air",
        description:
          "Compresseurs à vis ou piston : diagnostic moteur, compresseur, régulation, traitement d'air. Recherche fuites, stabilité pression, fiabilisation réseau. Intervention orientée disponibilité et qualité d'air.",
        features: [
          {
            number: "01",
            title: "Diagnostic complet",
            description:
              "Tests débit, pression, consommation, fuites. Mesures moteur et compresseur. Preuves documentées.",
          },
          {
            number: "02",
            title: "Optimisation & régulation",
            description:
              "Ajustement régulation pression, traitement d'air, stabilité. Réduction fuites, amélioration efficacité.",
          },
          {
            number: "03",
            title: "Remise en exploitation",
            description:
              "Tests débit/pression validés. Conformité normes. Recommandations préventives. Dossier opposable.",
          },
        ],
      }}
      methodSection={{
        headline: "Notre approche structurée",
        description:
          "Terrain → Preuve → Verdict. Pas de preuve = pas fait. STOP&CALL si risque ou données critiques manquantes.",
        steps: [
          {
            icon: "📋",
            title: "Cadrage",
            description: "Périmètre, prérequis, risques, objectif clair.",
          },
          {
            icon: "📸",
            title: "Baseline",
            description: "État initial, mesures (débit, pression, consommation).",
          },
          {
            icon: "🔍",
            title: "Tests discriminants",
            description: "Tests qui tranchent, hypothèses validées.",
          },
          {
            icon: "🔧",
            title: "Action",
            description:
              "Intervention propre, sécurisée, traçable (nettoyage, remplacement pièces, réglages).",
          },
          {
            icon: "✅",
            title: "Verdict écrit",
            description: "Tests débit/pression validés, normes respectées, PV signé.",
          },
        ],
      }}
      deliverables={[
        {
          icon: "📊",
          title: "Mesures & graphiques",
          description:
            "Débit, pression, consommation (avant/après). Courbes de stabilité si nécessaire.",
        },
        {
          icon: "✓",
          title: "Verdict & recommandations",
          description:
            "Conformité validée, préventif identifié, restes à faire clairement listés.",
        },
        {
          icon: "🔐",
          title: "Opposabilité",
          description: "Dossier complet, traçable, responsabilité et assurances OK.",
        },
      ]}
      noGoSection={{
        headline: "Conditions de STOP (prérequis non respectés)",
        items: [
          "Atelier ou réseau air non sécurisé : risque opérateur → STOP&CALL.",
          "Données critiques manquantes (schémas, historique moteur) → UNKNOWN + plan clair.",
          "Client indisponible pour tests validation / measurements → Report obligatoire.",
          "Compresseur présentant signes de fatigue moteur grave → Diagnostic approfondi requis.",
        ],
      }}
    />
  );
}
