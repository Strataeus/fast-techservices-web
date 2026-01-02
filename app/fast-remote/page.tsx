import { Metadata } from 'next';
import Link from 'next/link';
import Container from '../../components/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { serviceBySlug } from '../../lib/content/services';
import FormSection from './FormSection';

export const metadata: Metadata = {
  title: 'FAST Remote — Diagnostic & assistance à distance',
  description: 'FAST Remote : diagnostic et assistance à distance pour équipements industriels. Verdict en 1-2h, preuves documentées, plan d\'action clair. Dépannage urgent sans intervention terrain.',
  openGraph: {
    title: 'FAST Remote — Diagnostic & assistance à distance',
    description: 'Diagnostic guidé à distance avec preuves terrain. Verdict en 1-2h, dépannage urgent, sans immobiliser intervention terrain coûteuse.',
    type: 'website',
    url: 'https://fast-techservices.com/fast-remote',
  },
};

const fastRemote = serviceBySlug['fast-remote'];

const quickWins = [
  {
    title: 'Décision rapide',
    description: 'Verdict en 1-2 heures sans attendre intervention terrain.',
    icon: '⏱️',
  },
  {
    title: 'Preuves documentées',
    description: 'Traces visuelles et valeurs techniques capturées en direct.',
    icon: '📸',
  },
  {
    title: 'Plan d\'action clair',
    description: 'Recommandations immédiates : OK, réserves ou escalade site.',
    icon: '✓',
  },
  {
    title: 'Sécurité maximale',
    description: 'Guidage expert, stop immédiat si risque détecté.',
    icon: '🛡️',
  },
];

const useCases = [
  {
    scenario: 'Pont élévateur bloqué',
    symptom: 'Ne monte plus, bruit suspect.',
    outcome: 'Diagnostic électromécanique à distance, plan remise en service',
    time: '~90 min',
  },
  {
    scenario: 'Compresseur débit faible',
    symptom: 'Pression OK mais débit insuffisant.',
    outcome: 'Test fuite air, analyse filtre/soupape, verdict diagnostic',
    time: '~60 min',
  },
  {
    scenario: 'Cabine peinture défaut qualité',
    symptom: 'Variations ventilation, qualité air dégradée.',
    outcome: 'Mesures débit/filtre, test capteurs, recommandations',
    time: '~75 min',
  },
];

const processSteps = [
  {
    num: 1,
    title: 'Pré-qualification',
    description: 'Vous remplissez un formulaire rapide (5 min) : contexte, symptôme, disponibilité.',
  },
  {
    num: 2,
    title: 'Appel de découverte',
    description: 'Technicien confirme faisabilité, planning et moyens requis.',
  },
  {
    num: 3,
    title: 'Session visio guidée',
    description: 'Pas-à-pas commentés, tests demandés, preuves capturées en temps réel.',
  },
  {
    num: 4,
    title: 'Verdict écrit',
    description: 'Synthèse, recommandations et plan d\'actions immédiates.',
  },
];

const prerequisites = [
  'Opérateur habilité disponible sur site pendant la session',
  'Connexion internet stable (visio + partage écran)',
  'Accès à l\'équipement (pas de condamnation physique)',
  'Moyens de mesure basiques (multimètre, caméra/téléphone)',
];

const safetyRules = [
  'Stop immédiat en cas de détection de risque électrique ou mécanique critique',
  'Aucune action sans opérateur qualifié sur place',
  'Procédures de sécurité site respectées en permanence',
  'Arrêt de session si conditions de sécurité dégradées',
];

export default function FastRemotePage() {
  return (
    <div className="relative">
      <HeroSection />
      <PromiseSection />
      <BenefitsSection />
      <UseCasesSection />
      <ProcessSection />
      <DeliverablesSection />
      <PrerequisitesSection />
      <SafetySection />
      <FormSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
      </div>
      <Container className="relative flex min-h-[50vh] flex-col justify-end py-12">
        <Badge className="w-fit bg-accent/20 text-white">FAST REMOTE</Badge>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
          Diagnostic guidé à distance avec preuves terrain
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-200">
          {fastRemote.heroBenefit}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="#formulaire" className="btn btn-primary">
            Démarrer une session
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Nous appeler
          </Link>
        </div>
      </Container>
    </section>
  );
}

function PromiseSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Pour qui ? Quand ?
          </h2>
          <p className="text-gray-200">
            FAST Remote est conçu pour les situations où vous avez besoin d&apos;une décision rapide
            sans immobiliser une intervention terrain coûteuse. Idéal pour les pannes intermittentes,
            les diagnostics de conformité, ou les décisions d&apos;escalade.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="glass-card">
            <h3 className="font-semibold text-white">Situation urgente</h3>
            <p className="mt-2 text-sm text-gray-200">
              Équipement bloqué, besoin de diagnostic dans les 2 heures pour décider de l&apos;escalade
              terrain.
            </p>
          </Card>
          <Card className="glass-card">
            <h3 className="font-semibold text-white">Panne intermittente</h3>
            <p className="mt-2 text-sm text-gray-200">
              Défaut difficile à reproduire, guidage expert pour capturer symptômes et preuves.
            </p>
          </Card>
          <Card className="glass-card">
            <h3 className="font-semibold text-white">Décision préventive</h3>
            <p className="mt-2 text-sm text-gray-200">
              Vérification de conformité, audit sécurité ou validation avant maintenance planifiée.
            </p>
          </Card>
          <Card className="glass-card">
            <h3 className="font-semibold text-white">Escalade terrain</h3>
            <p className="mt-2 text-sm text-gray-200">
              Preuves collectées à distance pour justifier une intervention terrain documentée.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Les bénéfices clés
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickWins.map((item) => (
            <Card key={item.title} className="glass-card">
              <div className="text-3xl" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="mt-2 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-200">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function UseCasesSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Exemples de situations
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {useCases.map((useCase, idx) => (
            <Card key={idx} className="glass-card">
              <Badge className="bg-accent/10 text-accent">{useCase.time}</Badge>
              <h3 className="mt-3 font-semibold text-white">{useCase.scenario}</h3>
              <div className="mt-3 space-y-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Symptôme</p>
                  <p className="text-sm text-gray-200">{useCase.symptom}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Résultat</p>
                  <p className="text-sm text-gray-200">{useCase.outcome}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProcessSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Comment ça marche ?
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.num} className="relative">
              <Card className="glass-card">
                <Badge className="bg-accent/10 text-white">
                  Étape {step.num}
                </Badge>
                <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-200">{step.description}</p>
              </Card>
              {step.num < 4 && (
                <div className="absolute -right-2 top-8 hidden text-2xl text-accent/40 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DeliverablesSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Ce que vous recevez
        </h2>
        <div className="max-w-3xl space-y-3">
          <p className="text-gray-200">
            Chaque session FAST Remote produit des livrables structurés et exploitables :
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {fastRemote.deliverables.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <Badge className="h-fit bg-accent/10 text-accent">✓</Badge>
              <div>
                <p className="font-semibold text-white">{item.split(' ')[0]}</p>
                <p className="text-sm text-gray-200">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PrerequisitesSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Pré-requis pour une session
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {prerequisites.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <span className="text-lg text-accent">✓</span>
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </div>
        <Card className="glass-card border border-accent/20 bg-accent/5">
          <h3 className="font-semibold text-white">Vous n&apos;êtes pas sûr ?</h3>
          <p className="mt-2 text-sm text-gray-200">
            Contactez-nous. Nous évaluerons ensemble si FAST Remote convient à votre situation ou si
            une intervention terrain est plus appropriée.
          </p>
        </Card>
      </Container>
    </Section>
  );
}

function SafetySection() {
  return (
    <Section className="bg-red-950/20 border-t border-red-900/40">
      <Container className="space-y-4">
        <div className="flex gap-2">
          <span className="text-2xl">🛑</span>
          <div>
            <h2 className="text-2xl font-semibold text-red-300">Sécurité & STOP</h2>
            <p className="text-sm text-red-200/80">
              FAST Remote inclut un protocole de sécurité strict. Aucune action compromettante.
            </p>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {safetyRules.map((rule, idx) => (
            <div key={idx} className="flex gap-2 text-sm">
              <span className="text-red-400">•</span>
              <p className="text-red-100">{rule}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section>
      <Container className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Questions fréquentes
        </h2>
        <div className="grid gap-4 max-w-3xl">
          {fastRemote.faq.map((item, idx) => (
            <details
              key={idx}
              className="group rounded border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <summary className="cursor-pointer font-semibold text-white group-open:text-accent">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-gray-200">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CTASection() {
  return (
    <Section className="bg-accent/10 border-t border-accent/20">
      <Container className="text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Prêt à démarrer ?
        </h2>
        <p className="mt-3 text-gray-200">
          Remplissez le formulaire ci-dessus ou appelez-nous directement pour une session immédiate.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="#formulaire" className="btn btn-primary">
            Remplir le formulaire
          </Link>
          <Link href="/contact" className="btn btn-secondary">
            Nous appeler
          </Link>
        </div>
      </Container>
    </Section>
  );
}
