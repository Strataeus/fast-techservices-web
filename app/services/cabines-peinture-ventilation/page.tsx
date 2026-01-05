/**
 * /services/cabines-peinture-ventilation
 * Page détaillée: Cabines de peinture & ventilation
 * Source: content-map.yml (svc_booth) + FAST_TECH_SERVICES_COPY_v1.md
 */

import type { Metadata } from "next";
import { ServiceDetailPage } from "../ServiceDetailPage";

export const metadata: Metadata = {
  title:
    "Cabines de peinture — ventilation, variateurs, coffrets | FAST Tech Services",
  description:
    "Ventilation/extraction, variateurs, coffrets de commande, sécurités, stabilité process. Tests de sortie & preuves.",
  openGraph: {
    title: "Cabines de peinture & ventilation | FAST Tech Services",
    description:
      "Ventilation/extraction, variateurs, coffrets de commande, sécurités, stabilité process. Tests de sortie & preuves.",
    images: [
      {
        url: "/media/hero-services.jpg",
        width: 1200,
        height: 630,
        alt: "Cabines peinture ventilation",
      },
    ],
  },
};

export default function BoothDetailPage() {
  return (
    <ServiceDetailPage
      meta={{
        title: "Cabines de peinture & ventilation",
        description: "Dépannage, stabilité process, sécurités",
      }}
      heroContent={{
        headline: "Cabines de peinture & ventilation",
        subheadline:
          "Ventilation, commande, variateurs : stabilité process, sécurité et tests de sortie.",
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
        headline: "Expertise cabines & ventilation",
        description:
          "Cabines de peinture : ventilation/extraction, moteurs ventilos, variateurs de vitesse, coffrets de commande, capteurs et sécurités. Nous assurons stabilité des débits, conformité process et remise en service propre.",
        features: [
          {
            number: "01",
            title: "Diagnostic ventilation & process",
            description:
              "Tests débits (entrée/sortie), variateur, capteurs. Mesures stabilité. Preuves documentées.",
          },
          {
            number: "02",
            title: "Fiabilisation & conformité",
            description:
              "Retrofit coffrets si besoin, câblage propre, sécurités validées. Stabilisation débits et fonctionnement sûr.",
          },
          {
            number: "03",
            title: "Tests de sortie & PV",
            description:
              "Débits validés, variateur stable, sécurités OK. PV de remise en service signé et opposable.",
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
            description: "Périmètre, prérequis, risques, objectif process.",
          },
          {
            icon: "📸",
            title: "Baseline",
            description: "État initial, mesures débits, stabilité, symptômes.",
          },
          {
            icon: "🔍",
            title: "Tests discriminants",
            description:
              "Tests ventilation, variateur, sécurités. Hypothèses validées.",
          },
          {
            icon: "🔧",
            title: "Action",
            description:
              "Intervention propre, sécurisée (nettoyage, retrofit, réglages).",
          },
          {
            icon: "✅",
            title: "Verdict écrit",
            description: "Tests débits OK, sécurités validées, process stable, PV signé.",
          },
        ],
      }}
      deliverables={[
        {
          icon: "📊",
          title: "Mesures & débits",
          description:
            "Débits entrée/sortie, stabilité variateur, courbes temporelles.",
        },
        {
          icon: "✓",
          title: "Verdict & conformité",
          description:
            "Process stabilisé, sécurités OK, recommandations préventives, restes à faire.",
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
          "Cabine ou ventilation présentant risque opérateur grave → STOP&CALL immédiat.",
          "Données critiques manquantes (schémas électriques, historique moteur) → UNKNOWN + plan clair.",
          "Client indisponible pour tests/mesures de débits → Report obligatoire.",
          "Variateur ou moteur présentant signes avancés de défaillance → Diagnostic approfondi requis avant intervention.",
        ],
      }}
    />
  );
}
