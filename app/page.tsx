import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "FAST Tech Services — Maintenance et dépannage professionnels des équipements de garage",
  description:
    "Maintenance et dépannage professionnels des équipements de garage automobile : ponts élévateurs, compresseurs, cabines. Diagnostics précis, interventions fiables.",
};

const domains = [
  {
    icon: "🔧",
    title: "Ponts élévateurs",
    bullets: [
      "Ponts 2 colonnes, 4 colonnes, ciseaux",
      "Diagnostic électrique et mécanique",
      "Sécurisation et remise en service",
    ],
  },
  {
    icon: "🧰",
    title: "Compresseurs et réseaux d’air",
    bullets: [
      "Compresseurs à pistons ou à vis",
      "Réseaux d’air comprimé",
      "Détection de défauts et pertes",
      "Assistance au diagnostic et maintenance",
    ],
  },
  {
    icon: "🎨",
    title: "Cabines de peinture et ventilation",
    bullets: [
      "Cabines de peinture automobile",
      "Systèmes d’extraction et de ventilation",
      "Problèmes électriques et de commande",
      "Assistance à la remise en fonctionnement",
    ],
  },
  {
    icon: "⚙️",
    title: "Dépannage électromécanique",
    bullets: [
      "Pannes électriques",
      "Automatismes simples",
      "Capteurs, sécurités, commandes",
      "Analyse fonctionnelle et corrective",
    ],
  },
];

const methodSteps = [
  {
    title: "Analyse technique",
    text: "Compréhension précise du symptôme et du contexte d’exploitation.",
  },
  {
    title: "Diagnostic structuré",
    text: "Recherche méthodique de la cause : électrique, mécanique ou fonctionnelle.",
  },
  {
    title: "Intervention ciblée",
    text: "Action corrective adaptée, sécurisée et documentée.",
  },
  {
    title: "Vérifications & remise en service",
    text: "Tests, contrôles et validation du bon fonctionnement.",
  },
  {
    title: "Assistance & suivi",
    text: "Conseils techniques et accompagnement après intervention.",
  },
];

const whyFast = [
  "Expertise technique orientée terrain",
  "Approche structurée et méthodique",
  "Compréhension réelle des équipements de garage",
  "Priorité à la sécurité et à la fiabilité",
  "Communication claire et professionnelle",
  "Interventions efficaces et ciblées",
];

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
      <PositioningSection />
      <DomainsSection />
      <MethodSection />
      <AssistanceSection />
      <ProofsSection />
      <FAQSection />
      <WhySection />
      <CTAFinalSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="top" className="relative min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero/home/fast-hero.png"
          alt="FAST Tech Services"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
      </div>
      <Container className="relative flex min-h-[60vh] flex-col justify-end py-12">
        <Badge className="w-fit bg-accent/20 text-white">FAST TECH SERVICES</Badge>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
          Diagnostic à distance, interventions de confiance
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-200">
          Dépannage et maintenance des équipements de garage automobile. <strong>FAST Remote :</strong> verdict en 2h, sans attendre l&apos;intervention terrain.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/fast-remote" className="btn btn-primary">
            Démarrer FAST Remote
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Intervention sur site
          </Link>
        </div>
      </Container>
    </section>
  );
}

function IntroSection() {
  return (
    <Section className="bg-primary/85">
      <Container className="space-y-8">
        <Badge className="w-fit bg-accent/10 text-white">FAST TECH SERVICES</Badge>
        <div className="max-w-4xl space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            Expertise technique orientée terrain pour vos équipements critiques
          </h2>
          <p className="text-lg text-gray-200">
            FAST Tech Services accompagne les garages et ateliers automobiles dans la maintenance, le diagnostic et la remise en service de leurs équipements. Une approche rigoureuse, sécurité maximale, décisions documentées.
          </p>
        </div>

        {/* 3 bénéfices mesurables */}
        <div className="grid gap-4 md:grid-cols-3 pt-4">
          <Card className="glass-card border border-accent/20">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-semibold text-white">Réduction des immobilisations</h3>
            <p className="mt-2 text-sm text-gray-200">
              FAST Remote : diagnostic en 1-2h sans mobiliser un technicien terrain.
            </p>
          </Card>
          <Card className="glass-card border border-accent/20">
            <div className="text-2xl mb-2">✓</div>
            <h3 className="font-semibold text-white">Décision documentée</h3>
            <p className="mt-2 text-sm text-gray-200">
              Verdict écrit, preuves visuelles et techniques, plan d&apos;actions clair.
            </p>
          </Card>
          <Card className="glass-card border border-accent/20">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-white">Sécurité & traçabilité</h3>
            <p className="mt-2 text-sm text-gray-200">
              Protocoles strictes, stop immédiat si risque, documentation complète.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function HowItWorksSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <p className="eyebrow">Processus FAST Remote</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Comment FAST Remote fonctionne
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { num: 1, title: "Pré-qualification", desc: "Formulaire rapide : contexte, équipement, symptôme" },
            { num: 2, title: "Appel découverte", desc: "Technicien valide faisabilité et planning" },
            { num: 3, title: "Session visio", desc: "Pas-à-pas guidés, preuves capturées en direct" },
            { num: 4, title: "Verdict écrit", desc: "Synthèse, recommandations, plan d'actions" },
          ].map((step) => (
            <Card key={step.num} className="glass-card">
              <Badge className="bg-accent/10 text-white">Étape {step.num}</Badge>
              <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-200">{step.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/fast-remote" className="btn btn-primary">
            En savoir plus sur FAST Remote
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function PositioningSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-4">
        <p className="eyebrow">Positionnement & valeur ajoutée</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Une expertise technique orientée terrain
        </h2>
        <p className="text-gray-200">
          FAST Tech Services intervient sur les équipements essentiels au fonctionnement des ateliers
          automobiles. Chaque intervention repose sur une analyse méthodique, une compréhension
          électromécanique complète et une exigence élevée en matière de sécurité et de fiabilité.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Précision du diagnostic",
            "Maîtrise technique",
            "Traçabilité des interventions",
            "Continuité d’exploitation",
          ].map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DomainsSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <p className="eyebrow">Domaines d’intervention</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Nos domaines d’intervention</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {domains.map((domain) => (
            <Card key={domain.title} className="glass-card">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {domain.icon}
                </span>
                <p className="text-lg font-semibold text-white">{domain.title}</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-200">
                {domain.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function MethodSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <p className="eyebrow">Expertise / Savoir-faire</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Une méthode claire, rigoureuse et orientée sécurité
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {methodSteps.map((step, index) => (
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

function AssistanceSection() {
  return (
    <Section>
      <Container className="space-y-4">
        <p className="eyebrow">Intervention & assistance</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Intervention sur site et assistance technique à distance
        </h2>
        <p className="text-gray-200">
          FAST Tech Services propose : des interventions directes sur site, une assistance technique à
          distance pour orienter les diagnostics, un accompagnement professionnel en cas de panne
          complexe. L’objectif : réduire les temps d’arrêt et sécuriser les opérations.
        </p>
        <div className="flex flex-wrap gap-3">
          <Badge>Interventions directes</Badge>
          <Badge>Assistance à distance</Badge>
          <Badge>Réduction des arrêts</Badge>
        </div>
      </Container>
    </Section>
  );
}

function ProofsSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <p className="eyebrow">Crédibilité & preuves</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Des interventions documentées et tracées
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass-card text-center">
            <p className="text-3xl font-bold text-accent">500+</p>
            <p className="mt-2 text-sm text-gray-200">Interventions effectuées</p>
          </Card>
          <Card className="glass-card text-center">
            <p className="text-3xl font-bold text-accent">4 domaines</p>
            <p className="mt-2 text-sm text-gray-200">Ponts, compresseurs, cabines, électromécanique</p>
          </Card>
          <Card className="glass-card text-center">
            <p className="text-3xl font-bold text-accent">France entière</p>
            <p className="mt-2 text-sm text-gray-200">FAST Remote + interventions IDF</p>
          </Card>
        </div>
        <div className="mt-6 p-6 rounded bg-accent/10 border border-accent/20">
          <p className="text-center text-gray-200">
            Chaque intervention génère un rapport structuré : preuves visuelles, valeurs techniques, recommandations documentées.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <p className="eyebrow">Questions fréquentes</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          FAQ rapide
        </h2>
        <div className="grid gap-4 max-w-3xl">
          {[
            {
              q: "Quel est le coût d&apos;une intervention FAST Remote ?",
              a: "Tarif transparent selon la durée et la complexité. Devis fourni après pré-qualification.",
            },
            {
              q: "Combien de temps pour un diagnostic FAST Remote ?",
              a: "Généralement 1-2h de visio guidée. Verdict immédiat ou sous 24h après consolidation des preuves.",
            },
            {
              q: "Couvrez-vous toute la France ?",
              a: "FAST Remote : oui, France entière. Interventions terrain : région parisienne (IDF) principalement.",
            },
            {
              q: "Que faire si c&apos;est vraiment urgent ?",
              a: "Contactez-nous directement par téléphone. Nous évaluerons une mobilisation rapide ou FAST Remote immédiate.",
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="group rounded border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <summary className="cursor-pointer font-semibold text-white group-open:text-accent">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-gray-200">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CTAFinalSection() {
  return (
    <Section className="bg-accent/10 border-t border-accent/20">
      <Container className="text-center space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Prêt à résoudre votre problème ?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200">
          Démarrez FAST Remote immédiatement ou demandez une intervention terrain. Réponse garantie dans les 2 heures.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/fast-remote" className="btn btn-primary">
            Démarrer FAST Remote
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Demander une intervention
          </Link>
        </div>
      </Container>
    </Section>
  );
}

function WhySection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-4">
        <p className="eyebrow">Pourquoi FAST Tech Services</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Pourquoi choisir FAST Tech Services
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {whyFast.map((item) => (
            <Card key={item} className="glass-card">
              <p className="text-sm text-gray-200">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact">
      <Container className="glass-card text-center">
        <p className="eyebrow">Contact</p>
        <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Contactez FAST Tech Services
        </h3>
        <p className="mt-2 text-gray-200">
          Besoin d’un diagnostic, d’une intervention ou d’un avis technique ? Contactez-nous pour
          échanger sur votre situation et définir la meilleure solution.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <Link href="#contact-form" className="btn btn-primary">
            Demander un contact
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Voir les coordonnées
          </Link>
        </div>
      </Container>
      <div id="contact-form" className="mt-8">
        <Contact />
      </div>
    </Section>
  );
}
