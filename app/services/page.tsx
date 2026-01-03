import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import Badge from "../../components/ui/Badge";
import SectionBand from "../../components/ui/SectionBand";
import HeroBanner from "../../components/HeroBanner";

export const metadata: Metadata = {
  title: "Services | FAST Tech Services",
  description:
    "Services techniques de diagnostic, maintenance et dépannage pour équipements de garage automobile : ponts élévateurs, compresseurs, cabines de peinture.",
};

// Diagnostic & Dépannage
const diagnosticContent = {
  title: "Diagnostic & Dépannage",
  subtitle: "Cause racine documentée, sécurité maîtrisée, redémarrage rapide",
  icon: "🔍",
  overview:
    "Intervention structurée pour identifier l'origine d'une panne et remettre en service sécurisée des équipements critiques de garage.",
  applications: [
    {
      title: "Pont élévateur défaillant",
      issues: [
        "Mécanisme de verrouillage bloqué ou desserrage involontaire",
        "Circuit hydraulique fuyant ou pression insuffisante",
        "Système électrique/électronique dysfonctionnant",
        "Capteurs de sécurité qui ne répondent plus",
      ],
    },
    {
      title: "Compresseur non productif",
      issues: [
        "Fuites d'air comprimé (conduites, joints, vannes)",
        "Pression insuffisante malgré motorisation normale",
        "Bruit anormal ou vibrations excessives",
        "Arrêt prématuré ou mise à l'arrêt intempestive",
      ],
    },
    {
      title: "Cabine de peinture défaillante",
      issues: [
        "Ventilation réduite : dépression insuffisante ou circuits encrassés",
        "Extracteurs faibles : moteurs usés, poulies glissantes, courroies usées",
        "Électrovannes encrassées ou commandes non réactives",
        "Défaut d'humidité ou réchauffement insuffisant",
      ],
    },
  ],
  methodology: [
    {
      step: "1. Cadrage",
      description: "Sécurisation du site, identification des risques résiduels, accès aux éléments critiques.",
    },
    {
      step: "2. Constats visuels",
      description: "Examen des traces d'usure, fuites, dégâts visibles, historique maintenance.",
    },
    {
      step: "3. Mesures ciblées",
      description: "Électrique (tensions, intensités, continuité), mécanique (pressions, débits, alignements), automatique (états logiques).",
    },
    {
      step: "4. Validation d'hypothèses",
      description: "Tests progressifs pour isoler le défaut, isolement des composants suspects.",
    },
    {
      step: "5. Actions correctives",
      description: "Remplacement/réglage des organes défaillants, nettoyage/remise en conformité minimale.",
    },
    {
      step: "6. Essais et verdict",
      description: "Vérification fonctionnelle complète, documentation des actions et résultats.",
    },
  ],
  deliverables: [
    "Journal technique : constats, mesures, valeurs enregistrées",
    "Compte rendu structuré : cause identifiée, actions réalisées, points résiduels",
    "Plan de prévention : recommandations court/moyen terme",
    "Rapport photo/vidéo : preuves des constats et actions",
  ],
};

// Maintenance Préventive
const maintenanceContent = {
  title: "Maintenance Préventive",
  subtitle: "Détection précoce des dérives, actions planifiées, arrêts programmés",
  icon: "⚙️",
  overview:
    "Programme de suivi conditionnel/planifié pour maximiser la disponibilité et anticiper les besoins d'intervention avant la défaillance.",
  keyBenefits: [
    {
      metric: "Disponibilité",
      detail: "Augmentation typique de 20-30% par réduction des arrêts non planifiés",
    },
    {
      metric: "Budget maintenance",
      detail: "Réduction 15-25% : actions priorisées et planifiées au lieu d'urgence",
    },
    {
      metric: "Durée de vie",
      detail: "Extension de 10-15 ans pour équipements en suivi régulier",
    },
    {
      metric: "Conformité",
      detail: "Documentation continue pour assurance et inspections réglementaires",
    },
  ],
  scope: {
    checked: [
      "Sécurité générale (dispositifs, arrêts d'urgence)",
      "Fonctionnement nominal (débits, pressions, vitesses)",
      "Stabilité mécanique (boulonnage, ressorts, amortisseurs)",
      "État électrique (connecteurs, disjoncteurs, câbles)",
      "Efficacité énergétique (étalonnages, recalibrage)",
      "Historique des défaillances (analyse de tendance)",
    ],
    notIncluded: [
      "Re-conception architecturale majeure",
      "Remise en conformité complète hors habilitation",
      "Pièces non standardisées sans spécification client",
    ],
  },
  frequency: [
    { type: "Critique", interval: "Mensuelle", examples: "Ponts hautement sollicités, milieu agressif" },
    { type: "Normal", interval: "Trimestrielle", examples: "Compresseurs standard, cabine standard" },
    { type: "Basse fréquence", interval: "Semestrielle", examples: "Équipements peu sollicités" },
  ],
};

// Interventions Terrain
const interventionsContent = {
  title: "Interventions Terrain",
  subtitle: "Mobilisation immédiate, sécurité d'abord, traçabilité complète",
  icon: "🚛",
  overview: "Déploiement rapide sur site pour situations critiques, avec protocole strict de sécurité et documentation intégrale.",
  scenarios: [
    {
      situation: "Urgence : équipement critique immobilisé",
      approach:
        "Priorité : sécurisation, preuves, décision rapide pour redémarrage ou escalade. Prêt à intervenir 24/48h.",
    },
    {
      situation: "Suite diagnostic FAST Remote non conclusif",
      approach: "Tests approfondis sur site avec mesures spécialisées, coordination avec technicien FAST Remote.",
    },
    {
      situation: "Validation de remise en conformité",
      approach: "Vérification post-réparation, tests de sécurité, procédures d'assureur si besoin.",
    },
  ],
  perimeter: {
    included: [
      "Diagnostic complet sur site avec isolation des causes",
      "Remplacement de pièces d'usure courante",
      "Réglages de conformité (sécurités, débits, pressions)",
      "Tests de sécurité et essais fonctionnels",
      "Collaboration avec tiers (assureur, client, constructeur)",
    ],
    prerequisites: [
      "Accès aux équipements et points de mesure",
      "Autorisation d'arrêt ou modifications mineures",
      "Disponibilité des preuves (schémas, historique, devis preuve)",
    ],
  },
  zones: "Île-de-France + mobilisations exceptionnelles possibles sur France",
};

// FAST Remote
const fastRemoteContent = {
  title: "FAST Remote",
  subtitle: "Diagnostic assisté à distance, verdict en 2-4h, opérateur habilité sur place",
  icon: "📹",
  overview:
    "Protocole structuré d'assistance à distance pilotée par un technicien référent. Présence physique d'un opérateur habilité sur site requise.",
  protocol: [
    {
      phase: "Pré-appel",
      duration: "15 min avant",
      steps: ["Opérateur habilité en place", "Matériel de mesure et prise de vue prêt", "Consignes de sécurité relues"],
    },
    {
      phase: "Appel technique",
      duration: "5-10 min",
      steps: [
        "Tour d'horizon contexte et risques",
        "Présentation de l'équipement et symptômes",
        "Vérification des moyens de test disponibles",
      ],
    },
    {
      phase: "Diagnostique guidé",
      duration: "30-90 min selon complexité",
      steps: [
        "Vérifications de sécurité étape par étape",
        "Tests électriques, mécaniques, automatiques sous guidage",
        "Capture de preuves : photos, vidéos, valeurs mesurées",
        "Validation en temps réel des observations",
      ],
    },
    {
      phase: "Verdict et suites",
      duration: "10-15 min",
      steps: [
        "Synthèse écrite avec cause racine ou hypothèses",
        "Plan d'actions immédiat ou escalade terrain",
        "Conditions de sécurisation si redémarrage",
      ],
    },
  ],
  requirements: {
    site: [
      "Opérateur électromécanique habilité sur place",
      "Connexion internet stable (1 Mbps minimum)",
      "Caméra ou smartphone haute résolution",
      "Outils de mesure : multimètre, manomètre, débitmètre selon équipement",
      "EPI et protocoles sécurité du site respectés",
    ],
    technical: [
      "Accès aux connecteurs, capteurs et organes critiques",
      "Capacité à isoler composants pour test (électrique, hydraulique, pneumatique)",
      "Moyens de verrouillage pour sécurisation pendant tests",
    ],
  },
  advantages: [
    "Diagnostic en 2-4h vs 5-10h d'intervention terrain classique",
    "Coût initial réduit 50-60% par rapport intervention immédiate",
    "Documentation complète des preuves et hypothèses",
    "Préparation optimale de l'intervention terrain si nécessaire",
    "Disponibilité 24-72h possible",
  ],
};

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Hero Banner full-width */}
      <HeroBanner
        src="/hero/services/hero.webp"
        alt="Services techniques FAST Tech Services"
      />
      
      {/* Hero Content Section */}
      <Section className="bg-gradient-to-b from-primary/95 to-primary-dark">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge className="w-fit bg-accent-bright/20 text-accent-bright">
              Portefeuille de services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Services Techniques pour Équipements de Garage
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Diagnostic structuré, maintenance préventive, interventions terrain et assistance à distance. Même approche : Terrain → Preuves → Verdict documenté
            </p>
          </div>
        </Container>
      </Section>

      {/* FAST REMOTE - RECOMMENDED PATH */}
      <Section className="bg-gradient-to-r from-accent/15 to-transparent border-b border-accent/30">
        <Container className="space-y-8">
          <div className="space-y-4">
            <Badge className="w-fit bg-accent/30 text-accent border border-accent/40">Approche recommandée</Badge>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{fastRemoteContent.title}</h2>
            <p className="max-w-2xl text-gray-200">{fastRemoteContent.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Protocole en 4 phases</h3>
                <div className="space-y-4">
                  {fastRemoteContent.protocol.map((phase, idx) => (
                    <div key={idx} className="glass-card border border-white/10 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center h-8 w-8 rounded bg-accent/20 border border-accent/40 flex-shrink-0">
                          <span className="text-sm font-bold text-accent">{idx + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{phase.phase}</h4>
                          <p className="text-xs text-gray-400 mt-1">~{phase.duration}</p>
                          <ul className="mt-2 space-y-1">
                            {phase.steps.map((step, sidx) => (
                              <li key={sidx} className="text-sm text-gray-200 flex gap-2">
                                <span className="text-accent">✓</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Conditions requises</h3>
                <div className="space-y-3">
                  <div className="glass-card border border-white/10 p-4">
                    <h4 className="font-semibold text-white mb-2">Site</h4>
                    <ul className="space-y-1">
                      {fastRemoteContent.requirements.site.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-200 flex gap-2">
                          <span className="text-accent">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass-card border border-white/10 p-4">
                    <h4 className="font-semibold text-white mb-2">Avantages</h4>
                    <ul className="space-y-1">
                      {fastRemoteContent.advantages.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-200 flex gap-2">
                          <span className="text-accent">⚡</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row pt-6 border-t border-white/10">
            <Link href="/fast-remote" className="btn btn-primary">
              Démarrer FAST Remote
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Discuter avant de démarrer
            </Link>
          </div>
        </Container>
      </Section>

      {/* DIAGNOSTIC & DEPANNAGE */}
      <Section id="pont-elevateur">
        <Container className="space-y-8">
          <div className="space-y-4">
            <div className="text-4xl">{diagnosticContent.icon}</div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{diagnosticContent.title}</h2>
            <p className="max-w-2xl text-gray-200">{diagnosticContent.subtitle}</p>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">{diagnosticContent.overview}</p>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Situations typiques</h3>
              <div className="grid gap-4 md:grid-cols-3">
                {diagnosticContent.applications.map((app, idx) => (
                  <div key={idx} className="glass-card border border-white/10 p-5">
                    <h4 className="font-semibold text-accent mb-3">{app.title}</h4>
                    <ul className="space-y-2">
                      {app.issues.map((issue, isidx) => (
                        <li key={isidx} className="text-sm text-gray-200 flex gap-2">
                          <span className="text-accent">→</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Méthodologie structurée</h3>
              <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
                {diagnosticContent.methodology.map((item, idx) => (
                  <div key={idx} className="glass-card border border-accent/20 p-4">
                    <h4 className="font-semibold text-accent text-sm mb-2">{item.step}</h4>
                    <p className="text-xs text-gray-200">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Livrables</h3>
              <div className="grid gap-2 md:grid-cols-2">
                {diagnosticContent.deliverables.map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span className="text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MAINTENANCE PREVENTIVE */}
      <Section id="compresseur" className="bg-primary/60">
        <Container className="space-y-8">
          <div className="space-y-4">
            <div className="text-4xl">{maintenanceContent.icon}</div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{maintenanceContent.title}</h2>
            <p className="max-w-2xl text-gray-200">{maintenanceContent.subtitle}</p>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">{maintenanceContent.overview}</p>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Impact quantifié</h3>
              <div className="grid gap-4 md:grid-cols-4">
                {maintenanceContent.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="glass-card border border-accent/20 p-4">
                    <p className="text-sm font-semibold text-accent mb-1">{benefit.metric}</p>
                    <p className="text-sm text-gray-200">{benefit.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Points de contrôle</h3>
                <ul className="space-y-2">
                  {maintenanceContent.scope.checked.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-200 flex gap-2">
                      <span className="text-action">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Hors scope</h3>
                <ul className="space-y-2">
                  {maintenanceContent.scope.notIncluded.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-200 flex gap-2">
                      <span className="text-orange-400">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Fréquences recommandées</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-2 text-left text-gray-200">Criticité</th>
                      <th className="px-4 py-2 text-left text-gray-200">Intervalle</th>
                      <th className="px-4 py-2 text-left text-gray-200">Exemples</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceContent.frequency.map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                        <td className="px-4 py-3 text-gray-100 font-semibold">{row.type}</td>
                        <td className="px-4 py-3 text-accent">{row.interval}</td>
                        <td className="px-4 py-3 text-gray-300">{row.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* INTERVENTIONS TERRAIN */}
      <Section id="cabine-peinture">
        <Container className="space-y-8">
          <div className="space-y-4">
            <div className="text-4xl">{interventionsContent.icon}</div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{interventionsContent.title}</h2>
            <p className="max-w-2xl text-gray-200">{interventionsContent.subtitle}</p>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">{interventionsContent.overview}</p>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Cas d&apos;intervention</h3>
              <div className="space-y-3">
                {interventionsContent.scenarios.map((scenario, idx) => (
                  <div key={idx} className="glass-card border border-white/10 p-5">
                    <h4 className="font-semibold text-accent mb-2">{scenario.situation}</h4>
                    <p className="text-sm text-gray-200">{scenario.approach}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Inclus dans l&apos;intervention</h3>
                <ul className="space-y-2">
                  {interventionsContent.perimeter.included.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-200 flex gap-2">
                      <span className="text-action">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Conditions préalables</h3>
                <ul className="space-y-2">
                  {interventionsContent.perimeter.prerequisites.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-200 flex gap-2">
                      <span className="text-accent">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card border border-white/10 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Zones géographiques</h3>
              <p className="text-sm text-gray-200">{interventionsContent.zones}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* COMPARISON TABLE */}
      <Section className="bg-primary/60">
        <Container className="space-y-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Comparaison des approches</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-left text-gray-200">Critère</th>
                  <th className="px-4 py-3 text-left text-gray-200">FAST Remote</th>
                  <th className="px-4 py-3 text-left text-gray-200">Diagnostic Terrain</th>
                  <th className="px-4 py-3 text-left text-gray-200">Maintenance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 text-gray-100 font-semibold">Durée</td>
                  <td className="px-4 py-3 text-gray-200">2-4h</td>
                  <td className="px-4 py-3 text-gray-200">4-8h</td>
                  <td className="px-4 py-3 text-gray-200">2-4h périodique</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 text-gray-100 font-semibold">Coût initial</td>
                  <td className="px-4 py-3 text-accent">À partir de 290€</td>
                  <td className="px-4 py-3 text-orange-400">Sur devis</td>
                  <td className="px-4 py-3 text-action">À partir de 150€/mois</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 text-gray-100 font-semibold">Déplacement</td>
                  <td className="px-4 py-3 text-accent">Non requis</td>
                  <td className="px-4 py-3 text-orange-400">Requis</td>
                  <td className="px-4 py-3 text-action">Requis</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 text-gray-100 font-semibold">Aptitude</td>
                  <td className="px-4 py-3 text-accent">Pré-qualification, urgence</td>
                  <td className="px-4 py-3 text-orange-400">Pannes complexes</td>
                  <td className="px-4 py-3 text-action">Disponibilité longue</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="px-4 py-3 text-gray-100 font-semibold">Preuves</td>
                  <td className="px-4 py-3 text-accent">Capturées en direct</td>
                  <td className="px-4 py-3 text-orange-400">Très complètes</td>
                  <td className="px-4 py-3 text-action">Historique continu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <SectionBand tone="tech">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-white md:text-4xl text-center">
            Quel service pour votre situation ?
          </h2>
          <p className="max-w-2xl mx-auto text-center text-gray-200">
            Contactez-nous pour discuter de votre contexte. Une pré-qualification rapide permet de recommander l&apos;approche optimale.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-4">
            <Link href="/fast-remote" className="btn btn-primary">
              Démarrer FAST Remote
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Discuter de votre contexte
            </Link>
          </div>
        </div>
      </SectionBand>
    </div>
  );
}
