import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/ui/Section";
import SectionBand from "../components/ui/SectionBand";
import VideoIntro from "../components/VideoIntro";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Testimonials from "../components/Testimonials";
import SuccessStories from "../components/SuccessStories";

export const metadata: Metadata = {
  title: "FAST Remote — Diagnostic & assistance à distance pour équipements de garage automobile",
  description:
    "FAST Remote : diagnostic et assistance à distance pour équipements de garage. Visio guidée par expert, tests terrain, preuves documentées. Réponse rapide • Méthode rigoureuse • Sécurité.",
};

// =============================================================================
// Bénéfices "Pourquoi FAST Remote" (section B)
// =============================================================================
const remoteBenefits = [
  {
    icon: "⚡",
    title: "Réduction drastique des immobilisations",
    description: "Diagnostic en 1-2h sans attendre une intervention terrain. Moins d'arrêt, plus de réactivité.",
  },
  {
    icon: "✓",
    title: "Décision documentée et traçable",
    description: "Verdict écrit, preuves visuelles, photos, mesures. Pas d'ambiguïté, plan d'action clair.",
  },
  {
    icon: "🛡️",
    title: "Sécurité maximale, responsabilité partagée",
    description: "Protocole strict, arrêt immédiat si risque, expertise humaine + guidage. Traçabilité complète.",
  },
];

// =============================================================================
// Cas d'usage (section C)
// =============================================================================
const useCases = [
  {
    icon: "🚡",
    title: "Pont élévateur bloqué",
    description: "Panne électrique, capteur défaillant, sécurité déclenchée ? Diagnostic visio + verdict en quelques heures.",
  },
  {
    icon: "💨",
    title: "Compresseur qui ne produit pas",
    description: "Fuite d'air, pression faible, bruit anormal ? Analyse guidée, tests de débit, plan de réparation.",
  },
  {
    icon: "🎨",
    title: "Cabine de peinture défaillante",
    description: "Ventilation insuffisante, capteurs de dépression, électrovanne ? Diagnostic complet et recommandations.",
  },
];

// =============================================================================
// Processus "Comment ça marche" (section D)
// =============================================================================
const processSteps = [
  {
    number: "1",
    title: "Pré-qualification",
    description: "Formulaire rapide : équipement, symptôme, contexte. Faisabilité évaluée instantanément.",
  },
  {
    number: "2",
    title: "Appel technicien",
    description: "Échange avec l'expert : questions complémentaires, planning établi, accès visio confirmé.",
  },
  {
    number: "3",
    title: "Session de diagnostic",
    description: "Visio live guidée par l'expert. Vous capturez preuves, photos, mesures. Tests terrain en direct.",
  },
  {
    number: "4",
    title: "Verdict écrit & plan d'action",
    description: "Rapport complet : cause identifiée, recommandations, plan de réparation ou remplacement.",
  },
];

// =============================================================================
// Équipements couverts (section E)
// =============================================================================
const equipmentsCovered = [
  "Ponts élévateurs (2, 4 colonnes, ciseaux)",
  "Compresseurs et réseaux d'air comprimé",
  "Cabines de peinture et ventilation",
  "Systèmes électromécaniques de garage",
  "Automatismes simples et sécurités",
  "Détection de défauts électriques",
];

// =============================================================================
// Offres (section F)
// =============================================================================
const offerings = [
  {
    badge: "Phare",
    title: "FAST Remote",
    price: "À partir de 290€",
    description: "Diagnostic guidé à distance, verdict en 2-4h, rapide et documenté.",
    benefits: [
      "Visio guidée par expert",
      "Tests terrain en direct",
      "Preuves capturées (photos/mesures)",
      "Verdict écrit et plan d'action",
      "Disponible 24-72h",
    ],
    cta: "Démarrer maintenant",
    href: "/fast-remote",
    primary: true,
  },
  {
    badge: "Sur site",
    title: "Intervention terrain",
    price: "Sur devis",
    description: "Intervention physique pour réparation complexe, validée par FAST Remote.",
    benefits: [
      "Diagnostic complet sur place",
      "Réparation immédiate possible",
      "Région parisienne (IDF)",
      "Disponibilité 24-48h",
      "Rapport technique détaillé",
    ],
    cta: "Demander une intervention",
    href: "/contact",
    primary: false,
  },
  {
    badge: "Prévention",
    title: "Plan préventif",
    price: "À partir de 150€/mois",
    description: "Suivi régulier de vos équipements, alertes précoces, éviter les pannes.",
    benefits: [
      "Check-up mensuel ou trimestriel",
      "Alertes d'usure anticipées",
      "Documentation de l'historique",
      "Continuité d'exploitation",
      "Tarif réduit interventions",
    ],
    cta: "En savoir plus",
    href: "/contact",
    primary: false,
  },
];

// =============================================================================
// FAQ courte (section G)
// =============================================================================
const faqs = [
  {
    q: "Combien de temps pour un diagnostic FAST Remote ?",
    a: "Généralement 1-2h de session visio. Le verdict est livré immédiatement ou sous 24h après consolidation des preuves.",
  },
  {
    q: "Quel est vraiment le coût d'une intervention FAST Remote ?",
    a: "Tarif transparent selon la durée et la complexité. Première session diagnostic : à partir de 290€. Devis précis fourni lors de la pré-qualification.",
  },
  {
    q: "Vous couvrez toute la France ? Et pour une intervention terrain ?",
    a: "FAST Remote : oui, France entière. Interventions terrain : région parisienne (IDF) principalement. Mobilisations exceptionnelles possibles sur demande.",
  },
  {
    q: "Et si c'est vraiment urgent (ce week-end, en pleine nuit) ?",
    a: "Contactez-nous directement. Nous évaluerons une mobilisation rapide ou une session FAST Remote en extrême urgence.",
  },
  {
    q: "Mon pont élévateur ne monte plus – comment ça marche ?",
    a: "Vous nous décrivez le symptôme. Nous validons la faisabilité d'un diagnostic visio. En session : test capteurs, circuit hydraulique, commandes électriques. Verdict écrit + plan d'action en 2-3h.",
  },
  {
    q: "Le compresseur perd de la pression. Est-ce une fuite ?",
    a: "Possiblement, mais pas certain. Nos experts diagnostiquent via visio : test de débit, analyse de pression, identification de fuites. Coût réparation évalué avec précision.",
  },
  {
    q: "La cabine de peinture a mauvaise dépression – risque de conformité ?",
    a: "Risque majeur oui. Nous diagnostiquons en visio : capteurs dépression, ventilation, filtration. Rapport certifié et plan de mise en conformité fourni.",
  },
  {
    q: "Vous garantissez quoi exactement ?",
    a: "Diagnostic complet et documenté. Si pas de prise en charge possible, remboursement 100%. Délai de réponse garanti 24-72h. Preuves visuelles livrées sous 24h.",
  },
];

// =============================================================================
// =============================================================================

export default function HomePage() {
  return (
    <div className="relative">
      {/* VIDEO INTRO */}
      <VideoIntro enabled={true} />

      {/* A) HERO */}
      <HeroSection />

      {/* PROBLEM - La raison d'être */}
      <ProblemSection />

      {/* B) Pourquoi FAST Remote - 3 avantages clés */}
      <WhyRemoteSection />

      {/* C) Cas d'usage - Les 3 équipements principaux */}
      <UseCasesSection />

      {/* D) Comment ça marche - Process 4 étapes */}
      <ProcessSection />

      {/* SUCCESS STORIES - Avant/Après & ROI */}
      <SuccessStories />

      {/* TÉMOIGNAGES - Clients satisfaits */}
      <Testimonials />

      {/* E) Découvrir plus - Passerelles vers pages secondaires */}
      <DiscoverySection />

      {/* F) FAQ Compacte */}
      <FAQCompactSection />

      {/* H) CTA final */}
      <CTAFinalSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}

// =============================================================================
// A) HERO SECTION - Maximum impact
// =============================================================================
function HeroSection() {
  return (
    <>
      {/* Image hero bandeau pur - sans texte */}
      <section id="top" className="relative w-full h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[45vh] overflow-hidden">
        <Image
          src="/hero/home/hero.webp"
          alt="FAST Remote : diagnostic à distance"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* Value proposition - Direct & Clear */}
      <Section className="bg-gradient-to-b from-primary/95 to-primary-dark">
        <Container className="space-y-10 max-w-4xl">
          <div className="space-y-6 animate-fade-in-up">
            {/* Main headline - problem/solution */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Équipement bloqué?
              <br />
              <span className="text-accent-bright">Diagnostic en 2h</span>
            </h1>

            {/* Subheading - value */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-medium">
              Depuis 2010, <strong className="text-accent-bright">FAST Tech Services</strong> maîtrise la <strong>mécatronique industrielle</strong> appliquée aux équipements critiques. Cabines de peinture, ponts élévateurs, compresseurs d&apos;air comprimé—nous dominons les trois piliers de votre production. Installation, maintenance, retrofit, mise en conformité : nous couvrons tout. Mais c&apos;est dans l&apos;urgence que nous excellons.
              <br className="hidden md:block" />
              <strong className="text-accent-gold">Quand la production s&apos;arrête, FAST Tech Services diagnostique à distance en 2h. Verdict documenté. Solutions prêtes à déployer.</strong>
            </p>

            {/* Trust badges - Social proof micro */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-semibold text-gray-300">Réponse <strong>24-72h</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm font-semibold text-gray-300">Dès <strong>290€</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm font-semibold text-gray-300"><strong>Sécurité</strong> maximale</span>
              </div>
            </div>
          </div>

          {/* Primary CTA - BIG & VISIBLE */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link 
              href="/fast-remote" 
              className="btn btn-primary px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all transform hover:scale-105 text-center"
            >
              Démarrer FAST Remote
            </Link>
            <Link 
              href="#process" 
              className="btn btn-secondary px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-lg hover:bg-white/10 transition-all text-center"
            >
              Voir comment ça marche
            </Link>
          </div>

          {/* Optional: Quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-accent-gold font-bold">50+</p>
              <p className="text-xs text-gray-400">Garages</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-accent-bright font-bold">1000+</p>
              <p className="text-xs text-gray-400">Diagnostics</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-accent-gold font-bold">4.9/5</p>
              <p className="text-xs text-gray-400">Rating</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

// =============================================================================
// B) THE PROBLEM SECTION - Show the pain
// =============================================================================
function ProblemSection() {
  return (
    <Section id="problem" className="bg-primary-darker">
      <Container className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
          <p className="eyebrow text-accent-gold uppercase tracking-wider">Le défi</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Une panne d&apos;équipement = <span className="text-red-400">48h-1 semaine perdue</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Attendre un diagnostic terrain, c&apos;est du temps d&apos;immobilisation. De l&apos;argent qui s&apos;envole. De l&apos;incertitude.
          </p>
        </div>

        {/* Pain points - visuel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-12 px-4 sm:px-0">
          {/* AVANT */}
          <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-400">❌ Sans FAST Remote</p>
            <ul className="space-y-3">
              {[
                "Appel tech → attente 24-48h",
                "Intervention = coûts élevés",
                "Pas de preuves documentées",
                "Incertitude sur la cause",
                "Équipement immobilisé",
                "Budget imprévisible"
              ].map(item => (
                <li key={item} className="text-gray-300 flex gap-2">
                  <span>→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* APRÈS */}
          <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-green-500/20 bg-green-500/5">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-green-400">✓ Avec FAST Remote</p>
            <ul className="space-y-3">
              {[
                "Diagnostic en 1-2h, même jour",
                "À distance = économies",
                "Photos, mesures, preuves",
                "Cause identifiée clairement",
                "Plan d'action immédiat",
                "Prix transparent dès 290€"
              ].map(item => (
                <li key={item} className="text-gray-300 flex gap-2">
                  <span>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <Link href="/fast-remote" className="btn btn-primary px-8 py-4 text-lg">
            Arrêter l&apos;hémorragie →
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// B) POURQUOI FAST TECH SERVICES (Différenciation + Certifications)
// =============================================================================
function WhyRemoteSection() {
  return (
    <Section id="avantages" className="bg-gradient-to-b from-primary-dark via-primary/75 to-primary-darker">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Pourquoi FAST Tech Services</p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            14 ans d&apos;excellence <span className="text-accent-bright">en mécatronique</span>
          </h2>
          <p className="text-lg text-gray-300">
            Depuis 2010, nous sommes le partenaire de confiance pour les dépannages critiques. Expertise reconnue. Certifications. Garanties.
          </p>
        </div>

        {/* Certifications & Credibility Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-y border-white/10">
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-bright">14+</div>
            <p className="text-xs sm:text-sm text-gray-300">Ans d&apos;expertise</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-gold">1000+</div>
            <p className="text-xs sm:text-sm text-gray-300">Diagnostics</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-bright">4.9/5</div>
            <p className="text-xs sm:text-sm text-gray-300">Satisfaction</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-accent-gold">92%</div>
            <p className="text-xs sm:text-sm text-gray-300">1er appel</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-stagger">
          {remoteBenefits.map((benefit, idx) => (
            <div key={benefit.title} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="glass-card border border-accent/20 p-6 sm:p-8 rounded-2xl hover:border-accent/50 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] transition-all space-y-4">
                <div className="text-4xl sm:text-5xl">{benefit.icon}</div>
                <h3 className="font-bold text-white text-lg sm:text-xl">{benefit.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual breakdown */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-accent/30 bg-accent/5">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Voici le processus</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { num: "1", label: "Formulaire", desc: "Décrivez votre panne" },
                { num: "2", label: "Validation", desc: "Expert évalue" },
                { num: "3", label: "Visio", desc: "Session en direct" },
                { num: "4", label: "Verdict", desc: "Plan d'action" }
              ].map((step) => (
                <div key={step.num} className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-accent-bright">{step.num}</div>
                  <p className="font-semibold text-white text-sm sm:text-base">{step.label}</p>
                  <p className="text-xs text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs sm:text-sm text-gray-400 pt-4">⏱️ <strong>Total: 1-4 heures</strong></p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// C) CAS D'USAGE (3 cartes + image)
// =============================================================================
function UseCasesSection() {
  return (
    <Section id="cas-usage" className="bg-gradient-to-b from-primary/60 to-primary-darker">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent-gold uppercase tracking-wider">✓ Exemples concrets</p>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Équipements que nous <span className="text-accent-gold">sauvons chaque jour</span>
          </h2>
          <p className="text-lg text-gray-300">
            Du réfrigérateur à la machine de précision, nous diagnostiquons et solutionnons tout à distance.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3 animate-stagger">
          {useCases.map((useCase, idx) => (
            <div key={useCase.title} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="glass-card border border-accent-gold/30 p-6 sm:p-8 rounded-xl hover:border-accent-gold/60 hover:shadow-[0_0_40px_rgba(255,154,46,0.15)] transition-all h-full flex flex-col">
                <div className="text-4xl sm:text-5xl mb-4">{useCase.icon}</div>
                <h3 className="font-bold text-white text-lg sm:text-xl mb-3">{useCase.title}</h3>
                <p className="text-gray-200 leading-relaxed flex-1 text-sm sm:text-base">
                  {useCase.description}
                </p>
                <div className="mt-4 pt-4 border-t border-accent-gold/20 text-xs sm:text-sm text-accent-gold">
                  → Résolu en 2-4h
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Illustration placeholder with better positioning */}
        <div className="mt-12 sm:mt-16 rounded-2xl overflow-hidden border border-accent-gold/30">
          <ImagePlaceholder 
            label="🛠️ Équipements professionnels couverts" 
            height="h-64 sm:h-96"
            className="border-accent-gold/40 hover:border-accent-gold/60"
          />
        </div>

        {/* Quick stats under image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent-bright">500+</div>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Modèles</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent-bright">92%</div>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">1er appel</p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-accent-bright">7j</div>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Garantie</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// C+) PORTFOLIO DES 3 ÉQUIPEMENTS CLÉS
// =============================================================================
function EquipmentPortfolioSection() {
  const equipments = [
    {
      icon: "🚡",
      name: "Ponts Élévateurs",
      expertise: "4 colonnes • Ciseaux • 2 colonnes",
      description: "Diagnostic des systèmes hydrauliques, capteurs de sécurité, commandes électriques. Pannes récurrentes : défaut capteur, fuite hydraulique, sécurité bloquée.",
      commonIssues: [
        "Ne monte plus ou descente lente",
        "Sécurité se déclenche sans raison",
        "Bruit hydraulique anormal",
        "Verrouillage impossible"
      ],
      solutionTime: "2-3h",
      href: "/services/ponts-elevateurs"
    },
    {
      icon: "💨",
      name: "Compresseurs d'Air Comprimé",
      expertise: "Vis • Piston • Vis rotative",
      description: "Spécialistes des réseaux pneumatiques haute performance. Détection de fuites, analyse de pression, efficacité énergétique. Maintenance préventive et dépannage urgence.",
      commonIssues: [
        "Pression insuffisante",
        "Fuite d'air comprimé",
        "Débit faible ou instable",
        "Surchauffe du compresseur"
      ],
      solutionTime: "2-4h",
      href: "/services/compresseurs"
    },
    {
      icon: "🎨",
      name: "Cabines de Peinture",
      expertise: "Ventilation • Filtration • Dépression",
      description: "Garantir le respect des normes de dépression, circulation d'air, filtration. Problèmes électriques, pneumatiques, capteurs. Certification conformité incluse.",
      commonIssues: [
        "Dépression insuffisante",
        "Ventilation faible ou bruyante",
        "Coupure de la sécurité",
        "Capteur défaillant"
      ],
      solutionTime: "3-4h",
      href: "/services/cabines-peinture"
    }
  ];

  return (
    <Section id="equipements-cles" className="bg-primary-dark">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent-bright uppercase tracking-wider">⭐ Notre spécialisation</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Les 3 piliers de votre <span className="text-accent-gold">production</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Maîtrise complète de la mécatronique industrielle appliquée. Expertise en diagnostic, maintenance et retrofit.
          </p>
        </div>

        {/* 3 Equipment cards with detailed info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-stagger px-4 sm:px-0">
          {equipments.map((eq, idx) => (
            <Link key={eq.name} href={eq.href}>
              <div 
                className="h-full glass-card border border-accent-gold/30 rounded-2xl p-6 sm:p-8 hover:border-accent-gold/60 hover:shadow-[0_0_40px_rgba(255,154,46,0.2)] hover:scale-105 transition-all cursor-pointer space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Header */}
                <div>
                  <div className="text-4xl sm:text-5xl mb-4">{eq.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{eq.name}</h3>
                  <p className="text-xs sm:text-sm text-accent-gold mt-2 font-semibold uppercase tracking-wide">{eq.expertise}</p>
                </div>

                {/* Description */}
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                  {eq.description}
                </p>

                {/* Common issues */}
                <div className="space-y-2 pt-4 border-t border-accent-gold/20">
                  <p className="text-xs sm:text-sm font-bold text-accent-gold uppercase">Pannes courantes</p>
                  <ul className="space-y-1">
                    {eq.commonIssues.map((issue) => (
                      <li key={issue} className="text-sm text-gray-300 flex gap-2">
                        <span className="text-accent-bright">→</span> {issue}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution time */}
                <div className="p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/30">
                  <p className="text-sm font-bold text-accent-gold">
                    ⚡ Diagnostic en {eq.solutionTime}
                  </p>
                </div>

                {/* CTA */}
                <div className="text-accent-bright font-bold text-sm uppercase tracking-wide">
                  → En savoir plus
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Assurance section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-accent-gold/10 to-accent-bright/10 border border-accent-gold/30">
          <div className="space-y-3">
            <div className="text-2xl sm:text-3xl">🔒</div>
            <h4 className="font-bold text-white text-sm sm:text-base">Diagnostic Garanti</h4>
            <p className="text-xs sm:text-sm text-gray-300">Ou remboursement 100%</p>
          </div>
          <div className="space-y-3">
            <div className="text-2xl sm:text-3xl">✓</div>
            <h4 className="font-bold text-white text-sm sm:text-base">Preuves Documentées</h4>
            <p className="text-xs sm:text-sm text-gray-300">Photos, mesures, rapports PDF</p>
          </div>
          <div className="space-y-3">
            <div className="text-2xl sm:text-3xl">⏱️</div>
            <h4 className="font-bold text-white text-sm sm:text-base">Réponse Rapide</h4>
            <p className="text-xs sm:text-sm text-gray-300">24-72h garantis</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// D) COMMENT ÇA MARCHE (4 étapes + timeline visuel)
// =============================================================================
function ProcessSection() {
  return (
    <Section id="process" className="bg-primary-dark">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent-bright uppercase tracking-wider">⚡ Rapide & transparent</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            4 étapes seulement <span className="text-accent-bright">pour votre verdict</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Pas de délai d&apos;attente, pas de pièces inutiles commandées. Juste l&apos;expertise directe.
          </p>
        </div>

        {/* Timeline visual layout */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative">
                {/* Arrow connector (hidden on mobile) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[25%] h-px bg-gradient-to-r from-accent-bright to-transparent"></div>
                )}
                
                <div className="glass-card border border-accent-bright/30 p-6 sm:p-8 rounded-xl hover:border-accent-bright/60 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] transition-all">
                  <div className="inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-lg bg-gradient-to-br from-accent-bright/40 to-accent-bright/10 border border-accent-bright/50 mb-6">
                    <span className="text-lg sm:text-2xl font-bold text-accent-bright">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg">{step.title}</h3>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-200">
                    {step.description}
                  </p>
                  {/* Timing badge */}
                  <div className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-accent-bright/20 text-accent-bright">
                    {idx === 0 ? "5-10 min" : idx === 1 ? "24h" : idx === 2 ? "30-60 min" : "24h"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline breakdown box */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-accent-bright/10 to-accent-gold/10 border border-accent-bright/30">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <span className="text-xl sm:text-2xl">⏱️</span>
              Chronologie complète
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="text-accent-bright font-bold whitespace-nowrap">Jour 0</span>
                <span className="text-gray-300">Envoi formulaire (5 min)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-bright font-bold whitespace-nowrap">+24h</span>
                <span className="text-gray-300">Validation & confirmation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-bright font-bold whitespace-nowrap">+1-3j</span>
                <span className="text-gray-300">Séance de diagnostic</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-bright font-bold whitespace-nowrap">+24h</span>
                <span className="text-gray-300">Rapport écrit</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-accent-bright font-semibold mt-4">
              🎯 Délai total: <strong>2-4 jours</strong>
            </p>
          </div>
        </div>

        {/* Process diagram placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-accent-bright/30">
          <ImagePlaceholder 
            label="📊 Diagramme du flux FAST Remote" 
            height="h-96"
            className="border-accent-bright/40 hover:border-accent-bright/60"
          />
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// E) ÉQUIPEMENTS COUVERTS
// =============================================================================
function EquipmentsSection() {
  return (
    <Section id="equipements" className="bg-gradient-to-b from-primary/75 to-primary-darker">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent-gold uppercase tracking-wider">🔧 Notre gamme</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            500+ modèles <span className="text-accent-gold">diagnostiqués</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Tous les équipements critiques du secteur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 px-4 sm:px-0">
          {equipmentsCovered.map((equipment) => (
            <div key={equipment} className="flex items-center gap-3 glass-card border border-accent-gold/20 p-4 rounded-lg hover:border-accent-gold/40 hover:bg-accent-gold/5 transition-all">
              <span className="text-xl text-accent-gold flex-shrink-0">✓</span>
              <span className="text-base text-gray-100">{equipment}</span>
            </div>
          ))}
        </div>

        {/* Image gallery */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-accent-gold/30">
          <ImagePlaceholder 
            label="📸 Galerie des équipements diagnostiqués" 
            height="h-64 sm:h-80"
            className="border-accent-gold/40 hover:border-accent-gold/60"
          />
        </div>

        <div className="p-8 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-center">
          <p className="text-gray-100 text-lg font-medium">
            Équipement non listé ? <span className="text-accent-gold font-bold">Nous contactez directement</span> pour valider la faisabilité.
          </p>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// F) OFFRES (3 cartes de pricing)
// =============================================================================
function OfferingsSection() {
  return (
    <Section id="offres" className="bg-primary-dark">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent uppercase tracking-wider">Tarification</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Nos offres <span className="text-accent-bright">transparentes</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Aucun frais caché. Devis précis avant chaque intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {offerings.map((offer) => (
            <div
              key={offer.title}
              className={`relative p-6 sm:p-10 rounded-2xl border transition-all flex flex-col ${
                offer.primary
                  ? "bg-gradient-to-br from-accent-bright/20 to-accent-bright/5 border-accent-bright/50 ring-2 ring-accent-bright/30 shadow-[0_0_40px_rgba(0,217,255,0.3)] sm:scale-105"
                  : "glass-card border-white/10 hover:border-accent-bright/40 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)]"
              }`}
            >
              {offer.badge && (
                <div className={`inline-block w-fit px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 ${
                  offer.primary 
                    ? "bg-accent-bright/30 text-accent-bright border border-accent-bright/50" 
                    : "bg-white/10 text-white/80 border border-white/10"
                }`}>
                  {offer.badge}
                </div>
              )}

              <h3 className="text-2xl sm:text-3xl font-bold text-white">{offer.title}</h3>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-accent-bright">{offer.price}</p>
              <p className="mt-4 text-gray-200 flex-1 text-sm sm:text-base">{offer.description}</p>

              <ul className="mt-8 space-y-3 mb-10">
                {offer.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm sm:text-base text-gray-100">
                    <span className="text-accent-bright flex-shrink-0 font-bold text-lg">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={offer.href}
                className={`w-full rounded-lg px-6 py-4 text-center font-bold transition-all text-base ${
                  offer.primary
                    ? "bg-gradient-to-r from-accent-bright to-accent-gold text-primary hover:shadow-[0_0_40px_rgba(0,217,255,0.5)]"
                    : "border-2 border-accent-bright/50 text-accent-bright hover:border-accent-bright hover:bg-accent-bright/10"
                }`}
              >
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// SERVICE GUARANTEE SECTION
// =============================================================================
function ServiceGuaranteeSection() {
  const guarantees = [
    {
      icon: "🔒",
      title: "Diagnostic Garanti",
      description: "Ou remboursement 100% si la prise en charge n'est pas possible. Votre risque = zéro.",
    },
    {
      icon: "✓",
      title: "Preuves Documentées",
      description: "Photos, mesures, rapports PDF livrés immédiatement après la session. Traçabilité complète.",
    },
    {
      icon: "⏱️",
      title: "Délai Garanti 24-72h",
      description: "Réponse de validation de faisabilité dans ce délai. Pas d'attente infinie.",
    },
    {
      icon: "💯",
      title: "Expertise Reconnue",
      description: "14+ ans en mécatronique industrielle. 1000+ diagnostics. 4.9/5 de satisfaction client.",
    },
    {
      icon: "⚡",
      title: "Diagnostic 2h Maxium",
      description: "Votre session visio dure 1-2h. Verdict immédiat ou consolidé en 24h maximum.",
    },
    {
      icon: "🎯",
      title: "Solution Actionnable",
      description: "Plan d'action clair : réparer, remplacer, maintenir. Avec coûts estimés et timeline.",
    },
  ];

  return (
    <Section className="bg-primary-dark">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent-bright uppercase tracking-wider">🛡️ Nos garanties</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Pas de risque. <span className="text-accent-gold">Que du résultat</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Nous nous engageons sur la qualité de notre diagnostic.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-stagger px-4 sm:px-0">
          {guarantees.map((guarantee, idx) => (
            <div 
              key={guarantee.title}
              className="glass-card border border-accent-gold/30 p-6 sm:p-8 rounded-2xl hover:border-accent-gold/60 hover:shadow-[0_0_40px_rgba(255,154,46,0.15)] transition-all animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl mb-4">{guarantee.icon}</div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-3">{guarantee.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-accent-bright/40 bg-gradient-to-r from-accent-bright/15 to-accent-gold/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent-bright mb-2">1000+</p>
              <p className="text-sm sm:text-base text-gray-200">Diagnostics</p>
              <p className="text-xs text-gray-400">sans incident</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-accent-gold mb-2">4.9★</p>
              <p className="text-sm sm:text-base text-gray-200">Satisfaction</p>
              <p className="text-xs text-gray-400">moyenne</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent-bright mb-2">100%</p>
              <p className="text-gray-200">Transparence</p>
              <p className="text-xs text-gray-400">prix inclus</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// G) FAQ COURTE
// =============================================================================
// =============================================================================
// DISCOVERY SECTION - Passerelles vers pages secondaires
// =============================================================================
function DiscoverySection() {
  return (
    <Section className="bg-gradient-to-b from-primary-dark via-primary/50 to-primary-darker">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent-bright uppercase tracking-wider">🔍 Découvrir plus</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Approfondissez votre <span className="text-accent-gold">compréhension</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Carte 1: Services détaillés */}
          <Link href="/services" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-primary/60 to-primary-darker/60 p-8 hover:border-accent-gold/50 hover:bg-gradient-to-br hover:from-primary/80 hover:to-primary-darker/80 transition-all">
            <div className="space-y-4">
              <div className="text-4xl">⚙️</div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition">Services Complets</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Diagnostic, maintenance préventive, interventions terrain. Tous nos services détaillés.</p>
              <div className="flex items-center gap-2 text-accent-bright text-sm font-semibold pt-2">
                Voir services <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>

          {/* Carte 2: FAST Remote détail */}
          <Link href="/fast-remote" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-primary/60 to-primary-darker/60 p-8 hover:border-accent-bright/50 hover:bg-gradient-to-br hover:from-primary/80 hover:to-primary-darker/80 transition-all">
            <div className="space-y-4">
              <div className="text-4xl">💻</div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent-bright transition">FAST Remote Avancé</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Process détaillé, offres tarifaires, prérequis techniques, et bien plus.</p>
              <div className="flex items-center gap-2 text-accent-bright text-sm font-semibold pt-2">
                Découvrir FAST Remote <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>

          {/* Carte 3: Cas clients */}
          <Link href="/preuves" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-primary/60 to-primary-darker/60 p-8 hover:border-accent-gold/50 hover:bg-gradient-to-br hover:from-primary/80 hover:to-primary-darker/80 transition-all">
            <div className="space-y-4">
              <div className="text-4xl">📊</div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition">Cas Clients & Preuves</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Études de cas anonymisées montrant notre méthodologie en action.</p>
              <div className="flex items-center gap-2 text-accent-bright text-sm font-semibold pt-2">
                Voir cas clients <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Carte 4: Méthode */}
          <Link href="/methode" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-primary/60 to-primary-darker/60 p-8 hover:border-accent-bright/50 hover:bg-gradient-to-br hover:from-primary/80 hover:to-primary-darker/80 transition-all">
            <div className="space-y-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent-bright transition">Méthode FAST</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Terrain → Preuve → Verdict. Comprendre notre philosophie et approche.</p>
              <div className="flex items-center gap-2 text-accent-bright text-sm font-semibold pt-2">
                Lire la méthode <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>

          {/* Carte 5: Zones */}
          <Link href="/zones" className="group rounded-2xl border border-white/10 bg-gradient-to-br from-primary/60 to-primary-darker/60 p-8 hover:border-accent-gold/50 hover:bg-gradient-to-br hover:from-primary/80 hover:to-primary-darker/80 transition-all">
            <div className="space-y-4">
              <div className="text-4xl">📍</div>
              <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition">Zones d&apos;Intervention</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Couverture géographique FAST Remote (France) et interventions terrain.</p>
              <div className="flex items-center gap-2 text-accent-bright text-sm font-semibold pt-2">
                Voir zones <span className="group-hover:translate-x-1 transition">→</span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// FAQ COMPACT - Seulement 4-5 questions essentielles
// =============================================================================
function FAQCompactSection() {
  const compactFaqs = faqs.slice(0, 4); // Seulement les 4 premières FAQ

  return (
    <Section id="faq" className="bg-gradient-to-b from-primary/75 to-primary-darker">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent-gold uppercase tracking-wider">❓ Vos questions</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Les réponses <span className="text-accent-gold">essentielles</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 max-w-4xl px-4 sm:px-0">
          {compactFaqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-accent-gold/20 bg-white/5 p-4 sm:p-6 transition hover:bg-accent-gold/5 hover:border-accent-gold/40 cursor-pointer"
            >
              <summary className="font-semibold text-base sm:text-lg text-white group-open:text-accent-gold transition flex justify-between items-center gap-4">
                <span className="text-left">{faq.q}</span>
                <span className="text-accent-gold group-open:rotate-45 transition text-xl sm:text-2xl flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-200">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* More questions CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-center px-4 sm:px-8">
          <p className="text-gray-100 text-base sm:text-lg">
            Plus de questions ? Consultez <Link href="/fast-remote" className="text-accent-gold font-bold hover:underline">la page FAST Remote complète</Link> ou <Link href="/contact" className="text-accent-gold font-bold hover:underline">contactez-nous directement</Link>.
          </p>
        </div>
      </Container>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section id="faq" className="bg-gradient-to-b from-primary/75 to-primary-darker">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl px-4 sm:px-0">
          <p className="eyebrow text-accent-gold uppercase tracking-wider">❓ Les réponses clés</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            Questions <span className="text-accent-gold">les plus posées</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Tout ce que vous devez savoir pour bien démarrer.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 max-w-4xl px-4 sm:px-0">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-accent-gold/20 bg-white/5 p-4 sm:p-6 transition hover:bg-accent-gold/5 hover:border-accent-gold/40 cursor-pointer"
            >
              <summary className="font-semibold text-base sm:text-lg text-white group-open:text-accent-gold transition flex justify-between items-center gap-4">
                <span className="text-left">{faq.q}</span>
                <span className="text-accent-gold group-open:rotate-45 transition text-xl sm:text-2xl flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-200">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* Remaining questions CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-accent-gold/10 border border-accent-gold/30 text-center px-4 sm:px-8">
          <p className="text-gray-100 text-base sm:text-lg">
            Question spécifique ? <span className="text-accent-gold font-bold">Contactez nos experts</span> pour une réponse en direct.
          </p>
          <Link href="/contact" className="inline-block mt-4 px-6 py-2 bg-accent-gold/20 border border-accent-gold/40 text-accent-gold text-sm sm:text-base rounded-lg hover:bg-accent-gold/30 transition">
            Nous contacter
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// H) CTA FINAL BLOC
// =============================================================================
function CTAFinalSection() {
  return (
    <SectionBand tone="tech" className="text-center">
      <div className="space-y-8">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
          Résolvez votre <span className="text-accent-gold">problème aujourd&apos;hui</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-200">
          Démarrez <strong>FAST Remote immédiatement</strong> pour un diagnostic en 1-4h. 
          <br />
          Ou demandez une <strong>intervention terrain</strong> pour les réparations complexes.
          <br />
          <strong className="text-accent">Réponse garantie : 2 heures</strong>
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-6">
          <Link href="/fast-remote" className="btn btn-primary px-8 py-4 text-lg">
            Démarrer FAST Remote
          </Link>
          <Link href="/contact" className="btn btn-secondary px-8 py-4 text-lg">
            Demander une intervention
          </Link>
        </div>
      </div>
    </SectionBand>
  );
}

// =============================================================================
// Contact CTA
// =============================================================================
function ContactSection() {
  return (
    <Section id="contact" className="bg-gradient-to-b from-primary/50 to-primary-darker">
      <Container className="space-y-8">
        <div className="glass-card rounded-2xl p-12 border border-accent-bright/30 bg-gradient-to-br from-accent-bright/10 to-accent-gold/5 text-center max-w-3xl mx-auto">
          <p className="eyebrow text-accent-bright uppercase tracking-wider">🚀 Prêt à démarrer?</p>
          <h3 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Contactez <span className="text-accent-bright">FAST Tech Services</span>
          </h3>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Besoin de valider votre cas ou clarifier un détail ? Nos experts répondent en <strong>moins de 2 heures</strong> pour confirmer la faisabilité et dimensionner votre diagnostic.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact?objet=fast-remote" className="px-10 py-5 text-lg font-bold bg-gradient-to-r from-accent-bright to-accent-gold text-primary rounded-lg hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-all transform hover:scale-105">
              Accéder au formulaire
            </Link>
            <Link href="#avantages" className="px-10 py-5 text-lg font-bold border-2 border-accent-bright/50 text-accent-bright rounded-lg hover:border-accent-bright hover:bg-accent-bright/10 transition-all">
              Remonter au contenu
            </Link>
          </div>

          {/* Support info */}
          <div className="mt-8 pt-8 border-t border-accent-bright/20">
            <p className="text-sm text-gray-400">
              💬 Support disponible <strong>du lundi au samedi</strong> • 📞 <strong>Réponse: 24-72h</strong> • 💻 <strong>Accès visio immédiat</strong>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
