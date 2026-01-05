/**
 * /services/stations-lavage
 * Page détaillée: Stations de lavage
 * Source: content-map.yml (svc_wash) + FAST_TECH_SERVICES_COPY_v1.md
 */

import type { Metadata } from "next";
import { ServiceDetailPage } from "../ServiceDetailPage";

export const metadata: Metadata = {
  title:
    "Stations de lavage — dépannage, commande, puissance, sécurité | FAST Tech Services",
  description:
    "Dépannage électromécanique stations de lavage : commande, puissance, pompage, sécurités. Remote possible selon cas.",
  openGraph: {
    title: "Stations de lavage | FAST Tech Services",
    description:
      "Dépannage électromécanique stations de lavage : commande, puissance, pompage, sécurités. Remote possible selon cas.",
    images: [
      {
        url: "/media/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "Stations de lavage",
      },
    ],
  },
};

export default function WashDetailPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: "Stations de lavage",
        description: "Dépannage électromécanique, remise en exploitation",
      }}
      heroContent={{
        headline: "Stations de lavage",
        subheadline:
          "Commande, puissance, pompage, sécurités : dépannage et remise en exploitation.",
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
        headline: "Expertise stations de lavage",
        description:
          "Stations de lavage : diagnostic électromécanique (commande, puissance, pompage, circuits), sécurités validées, remise en exploitation et fiabilisation. Nous visons continuité d'exploitation et prévention de pannes coûteuses.",
        features: [
          {
            number: "01",
            title: "Diagnostic électromécanique",
            description:
              "Tests commande, puissance, pompage, circuits eau/électricité. Mesures pressions et consommation. Preuves documentées.",
          },
          {
            number: "02",
            title: "Dépannage & fiabilisation",
            description:
              "Remplacement pièces usées, réglages pompes, sécurités validées. Remise en conformité normes.",
          },
          {
            number: "03",
            title: "Tests de sortie & PV",
            description:
              "Fonctionnement complet validé (eau, électricité, sécurités). PV de remise en service signé. Équipement prêt.",
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
            description:
              "État initial, mesures (pression, électricité), symptômes documentés.",
          },
          {
            icon: "🔍",
            title: "Tests discriminants",
            description: "Tests circuits eau/électricité, hypothèses validées.",
          },
          {
            icon: "🔧",
            title: "Action",
            description:
              "Intervention propre, sécurisée, traçable (remplacement pièces, réglages).",
          },
          {
            icon: "✅",
            title: "Verdict écrit",
            description:
              "Tests complets OK, sécurités validées, pressions normales, PV signé.",
          },
        ],
      }}
      deliverables={[
        {
          icon: "📊",
          title: "Mesures & diagnostics",
          description:
            "Pressions eau/électricité, consommation, courbes si pertinent.",
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
          "Station présentant risque électrique ou hydraulique grave → STOP&CALL immédiat.",
          "Données critiques manquantes (schémas électriques, pièces détachées) → UNKNOWN + plan clair.",
          "Client indisponible pour tests complets / validation → Report obligatoire.",
          "Pompe ou moteur présentant signes avancés de défaillance → Diagnostic approfondi requis.",
        ],
      }}
    />
  );
}
