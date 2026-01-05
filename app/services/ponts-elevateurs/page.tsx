/**
 * /services/ponts-elevateurs
 * Page détaillée: Ponts élévateurs
 * Source: content-map.yml (svc_lifts) + FAST_TECH_SERVICES_COPY_v1.md
 */

import type { Metadata } from "next";
import { ServiceDetailPage } from "../ServiceDetailPage";

export const metadata: Metadata = {
  title: "Ponts élévateurs — dépannage, sécurité, conformité | FAST Tech Services",
  description:
    "Diagnostic électrique/hydraulique, sécurités, remise en conformité, tests de sortie. FAST Remote possible selon conditions.",
  openGraph: {
    title: "Ponts élévateurs | FAST Tech Services",
    description:
      "Diagnostic électrique/hydraulique, sécurités, remise en conformité, tests de sortie. FAST Remote possible selon conditions.",
    images: [
      {
        url: "/media/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "Ponts élévateurs",
      },
    ],
  },
};

export default function LiftsDetailPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: "Ponts élévateurs",
        description: "Dépannage, sécurité, conformité et remise en service",
      }}
      heroContent={{
        headline: "Ponts élévateurs",
        subheadline:
          "Sécurité, conformité, stabilité : diagnostic, remise en service et tests de sortie.",
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
        headline: "Expertise ponts élévateurs",
        description:
          "Nous intervenons sur tous les types de ponts : dépannage électrique et hydraulique, conformité normes, réglages, remise en service propre et fiabilisée. Chaque intervention inclut baseline, tests discriminants, et verdict écrit.",
        features: [
          {
            number: "01",
            title: "Diagnostic électrique & hydraulique",
            description:
              "Tests guided, mesures, identification cause racine. Preuves documentées (photos, valeurs, vidéos si nécessaire).",
          },
          {
            number: "02",
            title: "Conformité & remise en service",
            description:
              "Sécurités validées, armoires actualisées si besoin, ajustements mécanique/hydraulique. Mise en conformité normes.",
          },
          {
            number: "03",
            title: "Tests de sortie & PV",
            description:
              "Fonctionnement complet validé (levage, descente, sécurités). PV de remise en service signé. Équipement opérationnel.",
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
            description: "État initial, mesures, symptômes documentés.",
          },
          {
            icon: "🔍",
            title: "Tests discriminants",
            description: "Tests qui tranchent, hypothèses validées.",
          },
          {
            icon: "🔧",
            title: "Action",
            description: "Intervention propre, sécurisée, traçable.",
          },
          {
            icon: "✅",
            title: "Verdict écrit",
            description: "Tests de sortie, validation sécurités, PV signé.",
          },
        ],
      }}
      deliverables={[
        {
          icon: "📄",
          title: "Compte rendu structuré",
          description:
            "Constats, mesures (avant/après), actions réalisées, photos/vidéos.",
        },
        {
          icon: "✓",
          title: "Verdict clair",
          description:
            "PASS / Réserves / Recommandations préventives / Restes à faire.",
        },
        {
          icon: "🔐",
          title: "Opposabilité",
          description:
            "Dossier complet et traçable. Responsabilité, assurances, normes validées.",
        },
      ]}
      noGoSection={{
        headline: "Conditions de STOP (prérequis non respectés)",
        items: [
          "Atelier ou pont non sécurisé : risque opérateur non maîtrisé → STOP&CALL.",
          "Données critiques manquantes (schémas électriques, historique, etc.) → UNKNOWN + plan clair.",
          "Client ou atelier indisponible pour tests / validation → Report obligatoire.",
          "Risque d'arrêt prolongé sans preuve de cause → Diagnostic complet requis avant action.",
        ],
      }}
    />
  );
}
