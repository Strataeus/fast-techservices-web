import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import SectionBand from "../../components/ui/SectionBand";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Méthode FAST | FAST Tech Services",
  description:
    "Méthode Terrain → Preuve → Verdict pour éviter les erreurs et fiabiliser les décisions techniques. STOP & CALL si risque.",
  openGraph: {
    title: "Méthode FAST | FAST Tech Services",
    description:
      "Terrain → Preuve → Verdict. Règles non négociables, traçabilité, décision humaine documentée.",
  },
  twitter: {
    title: "Méthode FAST | FAST Tech Services",
    description:
      "Terrain → Preuve → Verdict. Règles non négociables, traçabilité, décision humaine documentée.",
  },
};

// Piliers détaillés
const pillars = [
  {
    title: "TERRAIN",
    subtitle: "Constats & Contexte",
    icon: "🔍",
    points: [
      "Symptômes observés et historique de pannes",
      "Environnement et conditions d'exploitation",
      "Sécurités en place et vérification de conformité",
      "Accès aux organes critiques et risques résiduels",
    ],
  },
  {
    title: "PREUVE",
    subtitle: "Mesures Documentées",
    icon: "📊",
    points: [
      "Tests électriques : tensions, intensités, continuités",
      "Tests mécaniques : pressions, débits, alignements",
      "Tests automatiques : états logiques, capteurs",
      "Photos, vidéos et valeurs horodatées",
    ],
  },
  {
    title: "VERDICT",
    subtitle: "Décision Écrite",
    icon: "✓",
    points: [
      "Cause racine identifiée ou hypothèses fondées",
      "Actions réalisées et points résiduels",
      "Plan d'actions recommandé (court/moyen/long terme)",
      "Statut : redémarrage autorisé ou escalade requise",
    ],
  },
];

// FAQ
const faqs = [
  {
    q: "Qu'est-ce qui se passe si un risque est détecté pendant le diagnostic ?",
    a: "Application stricte de la règle STOP & CALL : arrêt immédiat du diagnostic, sécurisation de l'installation et bascule vers solution sûre (intervention terrain ou escalade). Aucun risque n'est accepté.",
  },
  {
    q: "FAST Remote vs intervention terrain : quand quoi ?",
    a: "FAST Remote : pré-qualification rapide, preuves préliminaires, réduction 50% coûts/délais. Terrain : cas complexes, actions réparatrices, remise en service physique. Souvent : Remote d'abord → si besoin, terrain après.",
  },
  {
    q: "Comment les preuves sont utilisées par mon assureur ou auditeur ?",
    a: "Journal complet, photos géolocalisées/datées, mesures certifiées. Format standard (PDF + CSV) exploitable par systèmes audit. Traçabilité = protection légale pour vous et FAST.",
  },
  {
    q: "Si je doute et dis 'CALL', ça coûte plus cher ?",
    a: "Non. STOP & CALL = protocole standard, inclus. Escalade (terrain ou consultation spécialisée) se facture ensuite si décidé. Mieux : dépenser 300€ pour vérifier vs 10k€ de mauvaise décision.",
  },
];

const steps = [
  { title: "Cadrage", text: "Périmètre, risques, sécurités site et objectif de verdict." },
  { title: "Constats terrain", text: "Symptômes, contexte, environnement, sécurisation." },
  { title: "Mesures", text: "Tests ciblés (élec/méca/auto), captures et valeurs horodatées." },
  { title: "Analyse", text: "Croisement mesures/constats, hypothèses et causes probables." },
  { title: "Actions", text: "Corrections autorisées, suivi des impacts et preuves associées." },
  { title: "Verdict & suites", text: "Décision écrite, risques résiduels, actions recommandées." },
];

const benefits = [
  "Moins d'arrêts non planifiés : causes racines identifiées rapidement.",
  "Décisions crédibles : verdict écrit, preuves attachées.",
  "Risques maîtrisés : stop si doute, escalade documentée.",
  "Coordination facilitée : livrables exploitables par assurance/exploitant.",
];

export default function MethodeFastPage() {
  return (
    <div className="relative">
      <PageHero
        badgeLabel="PHILOSOPHIE"
        title="Méthode FAST : la fiabilité par la rigueur"
        description="Éviter les erreurs coûteuses en appliquant une règle simple : Terrain → Preuve → Verdict. Décision humaine documentée, traçabilité complète, zéro compromis sur la sécurité."
        imageUrl="/hero/methode.svg"
        imageAlt="Illustration de la méthode FAST"
      />
      <SchemaSection />
      <PillarsSection />
      <StopCallSection />
      <RulesSection />
      <TimelineSection />
      <FAQSection />
      <BenefitsSection />
      <FinalCTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.14),transparent_55%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>
      <Container className="relative flex min-h-[60vh] flex-col justify-center gap-6 py-16">
        <Badge className="w-fit bg-accent/10 text-white">PHILOSOPHIE</Badge>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Méthode FAST : la fiabilité par la rigueur
        </h1>
        <p className="max-w-3xl text-lg text-gray-200">
          Éviter les erreurs coûteuses en appliquant une règle simple : 
          <strong> Terrain → Preuve → Verdict</strong>. Décision humaine documentée, 
          traçabilité complète, zéro compromis sur la sécurité.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row pt-4">
          <Link href="/fast-remote" className="btn btn-primary">
            Démarrer FAST Remote
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Voir les services
          </Link>
        </div>
      </Container>
    </section>
  );
}

function SchemaSection() {
  const items = [
    { title: "Terrain", text: "Constats, sécurités, contexte d'exploitation." },
    { title: "Preuve", text: "Mesures, tests, captures horodatées." },
    { title: "Verdict", text: "Décision écrite, risques résiduels, plan d'actions." },
  ];

  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <div>
          <p className="eyebrow">Schéma central</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Terrain → Preuve → Verdict
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {items.map((item, index) => (
            <div key={item.title} className="flex items-center gap-3">
              <Card className="glass-card">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-gray-200">{item.text}</p>
              </Card>
              {index < items.length - 1 ? (
                <span className="text-accent text-2xl md:text-3xl" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Piliers détaillés
function PillarsSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <div>
          <p className="eyebrow">Les trois piliers</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Détail des phases critiques
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card border border-white/10 p-6 rounded-lg hover:border-accent/40 transition"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl">{pillar.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="text-xs text-accent uppercase tracking-[0.1em]">{pillar.subtitle}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {pillar.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-gray-200 flex gap-2">
                    <span className="text-accent font-bold flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// STOP & CALL - Section prominente
function StopCallSection() {
  return (
    <Section className="bg-gradient-to-r from-orange-900/30 via-primary/80 to-primary/80 border-t border-b border-orange-500/20">
      <Container>
        <div className="glass-card border-2 border-orange-500/40 bg-orange-500/10 p-8 rounded-lg">
          <div className="flex items-start gap-4 md:items-center md:gap-6">
            <div className="text-5xl flex-shrink-0">⚠️</div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-orange-300 mb-2">STOP & CALL</h3>
              <p className="text-gray-100 mb-3">
                <strong>Si risque détecté, doute ou sécurité en jeu :</strong>
              </p>
              <ol className="space-y-1 text-gray-200 text-sm">
                <li className="flex gap-2">
                  <span className="text-orange-300 font-bold">1.</span>
                  <span>Arrêt immédiat du diagnostic ou de l&apos;intervention</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-300 font-bold">2.</span>
                  <span>Sécurisation physique de l&apos;installation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-300 font-bold">3.</span>
                  <span>Bascule vers solution sûre (intervention terrain ou escalade spécialisée)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-300 font-bold">4.</span>
                  <span>Documentation complète du motif et plan de suites</span>
                </li>
              </ol>
              <p className="text-xs text-orange-200 mt-3 italic">
                « Mieux payer 1k€ pour vérifier que de risquer une catastrophe de 100k€ »
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function RulesSection() {
  const rules = [
    "Pas de preuve = pas fait",
    "Doute = STOP & CALL",
    "Décision humaine",
    "Traçabilité totale",
  ];

  return (
    <Section className="bg-primary/60">
      <Container className="space-y-4">
        <div>
          <p className="eyebrow">Règles non négociables</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Les garde-fous de la méthode
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {rules.map((rule) => (
            <Card key={rule} className="glass-card text-center">
              <p className="text-sm font-semibold text-white">{rule}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function TimelineSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <div>
          <p className="eyebrow">Déroulé</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Comment se déroule une intervention
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="glass-card">
              <div className="flex items-center gap-3">
                <Badge className="bg-accent/10 text-white">
                  Étape {String(index + 1).padStart(2, "0")}
                </Badge>
                <p className="text-sm font-semibold text-white">{step.title}</p>
              </div>
              <p className="mt-2 text-sm text-gray-200">{step.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// FAQ Mini
function FAQSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <div>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Sécurité, Remote vs Onsite & Traçabilité
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-accent/30"
            >
              <summary className="cursor-pointer font-semibold text-white group-open:text-accent transition flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-accent group-open:rotate-180 transition ml-2">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">{faq.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section>
      <Container className="space-y-4">
        <div>
          <p className="eyebrow">Résultats opérationnels</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Pourquoi FAST réduit les arrêts
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <Card key={item} className="glass-card">
              <div className="flex gap-3">
                <span className="text-action flex-shrink-0">✓</span>
                <p className="text-sm text-gray-200">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalCTA() {
  return (
    <SectionBand tone="tech">
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Appliquer FAST sur vos équipements
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200">
          Terrain → Preuve → Verdict. Décision humaine documentée, traçabilité complète, 
          STOP & CALL si risque. Commencez par FAST Remote pour une pré-qualification rapide.
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
  );
}
