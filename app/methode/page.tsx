import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export const metadata: Metadata = {
  title: "Méthode FAST | FAST Tech Services",
  description:
    "Méthode Terrain → Preuve → Verdict pour éviter les erreurs et fiabiliser les décisions techniques.",
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
      <HeroSection />
      <SchemaSection />
      <RulesSection />
      <TimelineSection />
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
        <Badge className="w-fit bg-accent/10 text-white">Méthode</Badge>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Méthode FAST</h1>
        <p className="max-w-3xl text-lg text-gray-200">
          Éviter les erreurs, fiabiliser les décisions techniques : Terrain → Preuve → Verdict,
          décision humaine documentée.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/#contact" className="btn btn-primary">
            Demander un diagnostic
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

function RulesSection() {
  const rules = [
    "Pas de preuve = pas fait",
    "Doute = STOP & CALL",
    "Décision humaine",
    "Traçabilité",
  ];

  return (
    <Section>
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
    <Section className="bg-primary/60">
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

function BenefitsSection() {
  return (
    <Section>
      <Container className="space-y-4">
        <div>
          <p className="eyebrow">Pourquoi ça réduit les arrêts</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Bénéfices opérationnels
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {benefits.map((item) => (
            <Card key={item} className="glass-card">
              <p className="text-sm text-gray-200">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="bg-primary/60">
      <Container className="glass-card text-center">
        <p className="eyebrow">Prêt à décider</p>
        <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Appliquer FAST sur votre équipement
        </h3>
        <p className="mt-2 text-gray-200">
          Terrain → Preuve → Verdict. Règles non négociables, décision humaine documentée.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/#contact" className="btn btn-primary">
            Demander un diagnostic
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Voir les services
          </Link>
        </div>
      </Container>
    </Section>
  );
}
