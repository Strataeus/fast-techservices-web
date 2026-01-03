import { Metadata } from 'next';
import Link from 'next/link';
import Container from '../../components/Container';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import StickyCTA from '../../components/StickyCTA';
import HeroBanner from '../../components/HeroBanner';

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

// Section "Quand FAST Remote est le meilleur premier réflexe"
const bestMoments = [
  {
    icon: '⚡',
    title: 'Équipement critique bloqué',
    description: 'Besoin d\'une décision rapide sans attendre une intervention terrain coûteuse.',
  },
  {
    icon: '🔍',
    title: 'Panne intermittente',
    description: 'Symptôme difficile à reproduire. Guidage expert pour capturer et documenter.',
  },
  {
    icon: '📋',
    title: 'Décision d\'escalade',
    description: 'Preuves documentées pour justifier une intervention terrain ou un devis.',
  },
  {
    icon: '✓',
    title: 'Conformité & prévention',
    description: 'Audit sécurité ou vérification avant maintenance planifiée.',
  },
];

// Section "Livrables: tu repars avec du concret"
const deliverables = [
  { status: '📋', label: 'Journal d\'intervention', desc: 'Tous les échanges, mesures et actions en un seul document.' },
  { status: '📸', label: 'Preuves visuelles & numériques', desc: 'Photos, vidéos et valeurs capturées en temps réel.' },
  { status: '✓', label: 'Verdict écrit traçable', desc: 'Diagnostic clair, cause probable, plan d\'actions.' },
  { status: '🎯', label: 'Recommandations opérationnelles', desc: 'Prochaines étapes : correction, prévention ou escalade.' },
];

// Section "Méthode: Terrain → Preuve → Verdict"
const methodSteps = [
  {
    title: 'Terrain',
    icon: '🏭',
    description: 'Opérateur sur site avec visio. Guidage pas-à-pas du technicien. Tests demandés en direct.',
  },
  {
    title: 'Preuve',
    icon: '📸',
    description: 'Photo, vidéo, valeur capturées. Validation immédiate par le technicien. Aucune supposition.',
  },
  {
    title: 'Verdict',
    icon: '✓',
    description: 'Synthèse écrite du diagnostic. Plan d\'actions clair. Escalade justifiée si besoin.',
  },
];

// Section "Pré-requis (simple)"
const simplePrerequisites = [
  { check: true, text: 'Un opérateur habilité sur place pendant la session' },
  { check: true, text: 'Connexion internet stable (visio + partage d\'écran)' },
  { check: true, text: 'Accès direct à l\'équipement (pas de condamnation physique)' },
  { check: true, text: 'Moyens de mesure basiques : multimètre, caméra/téléphone' },
];

const stopAndCallNote = 'Si vous n\'êtes pas sûr(e), contactez-nous. Nous évaluerons ensemble si FAST Remote convient ou si une intervention terrain est nécessaire.';

export default function FastRemotePage() {
  return (
    <div className="relative">
      {/* Hero Banner full-width */}
      <HeroBanner
        src="/hero/fast-remote/hero.webp"
        alt="FAST Remote - Assistance à distance"
      />
      
      {/* Hero Content Section */}
      <Section className="bg-gradient-to-b from-primary/95 to-primary-dark">
        <Container>
          <div className="max-w-3xl space-y-6">
            <Badge className="w-fit bg-accent-bright/20 text-accent-bright">
              FAST Remote
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Assistance à distance guidée pour dépanner vite et décider juste
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              FAST Remote : diagnostic et assistance à distance pour équipements industriels. Verdict en 1-2h, preuves documentées, plan d&apos;action clair. Dépannage urgent sans intervention terrain coûteuse.
            </p>
          </div>
        </Container>
      </Section>
      <WhenBestSection />
      <DeliverablesSection />
      <MethodSection />
      <PrerequisitesSection />
      <StartSection />
      <CTAFormSection />
      <StickyCTA />
    </div>
  );
}

function WhenBestSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Quand FAST Remote est le meilleur premier réflexe
          </h2>
          <p className="text-lg text-gray-200">
            Vous êtes face à une panne ? Voici les situations où FAST Remote apporte la réponse la plus rapide et pertinente.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bestMoments.map((item) => (
            <Card key={item.title} className="glass-card hover:border-accent/40 transition-all">
              <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
              <h3 className="font-bold text-white text-lg">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DeliverablesSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Livrables : tu repars avec du concret
          </h2>
          <p className="text-lg text-gray-200">
            Chaque session FAST Remote génère des documents exploitables et des preuves traçables.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {deliverables.map((item) => (
            <div key={item.label} className="flex gap-4 items-start p-4 rounded-lg border border-white/10 hover:border-accent/40 transition-all">
              <div className="text-3xl flex-shrink-0">{item.status}</div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">{item.label}</h3>
                <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function MethodSection() {
  return (
    <Section className="bg-primary/60">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Méthode : Terrain → Preuve → Verdict
          </h2>
          <p className="text-lg text-gray-200">
            Trois étapes incontournables pour une décision fondée et traçable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {methodSteps.map((step, idx) => (
            <div key={step.title} className="relative">
              <Card className="glass-card h-full">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-gray-200 leading-relaxed">{step.description}</p>
              </Card>
              {idx < 2 && (
                <div className="absolute -right-3 top-1/2 hidden md:flex text-2xl text-accent/50 transform -translate-y-1/2">
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

function PrerequisitesSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Pré-requis (simple)
          </h2>
          <p className="text-lg text-gray-200">
            Quelques vérifications rapides pour que la session se déroule au mieux.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl">
          {simplePrerequisites.map((item, idx) => (
            <div key={idx} className="flex gap-3 items-start p-4 rounded-lg border border-accent/20 bg-accent/5">
              <span className="text-xl text-accent flex-shrink-0">✓</span>
              <span className="text-gray-200">{item.text}</span>
            </div>
          ))}
        </div>
        <Card className="glass-card border border-amber-500/30 bg-amber-500/10 max-w-2xl">
          <div className="flex gap-3 items-start">
            <span className="text-2xl flex-shrink-0">🛑</span>
            <div>
              <h3 className="font-bold text-amber-200">Stop & Call</h3>
              <p className="mt-2 text-sm text-amber-100">{stopAndCallNote}</p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function StartSection() {
  return (
    <Section className="bg-gradient-to-br from-accent/10 via-primary to-primary border-t border-accent/20">
      <Container className="space-y-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-white md:text-4xl" id="demarrer">
            Démarrer FAST Remote
          </h2>
          <p className="text-lg text-gray-200">
            Donne-nous les infos essentielles sur ta situation et on te propose un créneau rapide.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
          <Link
            href="/contact?objet=fast-remote"
            className="btn btn-primary inline-block"
          >
            Accéder au formulaire
          </Link>
          <Link
            href="/contact#appel"
            className="btn btn-secondary inline-block"
          >
            Appel rapide 10 min
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// CTA to Centralized Form
// =============================================================================
function CTAFormSection() {
  return (
    <Section id="demarrer" className="bg-primary/60">
      <Container className="space-y-8">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Prêt à démarrer ?
          </h2>
          <p className="text-lg text-gray-200">
            Accédez au formulaire FAST Remote pour une pré-qualification immédiate. Réponse sous 2 heures ouvrables.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact?objet=fast-remote"
            className="btn btn-primary inline-block text-center"
          >
            Démarrer FAST Remote
          </Link>
          <Link
            href="/contact"
            className="btn btn-secondary inline-block text-center"
          >
            Voir tous les formulaires
          </Link>
        </div>
      </Container>
    </Section>
  );
}

