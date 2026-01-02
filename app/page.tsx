import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import SectionBand from "../components/ui/SectionBand";
import VideoIntro from "../components/VideoIntro";

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
];

// =============================================================================
// Assurances et promesses
// =============================================================================
const reassurance = [
  "Réponse rapide",
  "Méthode rigoureuse",
  "Sécurité d'abord",
  "Traçabilité complète",
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* VIDEO INTRO */}
      <VideoIntro enabled={true} />

      {/* A) HERO */}
      <HeroSection />

      {/* B) Pourquoi FAST Remote */}
      <WhyRemoteSection />

      {/* C) Cas d'usage */}
      <UseCasesSection />

      {/* D) Comment ça marche */}
      <ProcessSection />

      {/* E) Équipements couverts */}
      <EquipmentsSection />

      {/* F) Offres */}
      <OfferingsSection />

      {/* G) FAQ */}
      <FAQSection />

      {/* H) CTA final */}
      <CTAFinalSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}

// =============================================================================
// A) HERO SECTION
// =============================================================================
function HeroSection() {
  return (
    <>
      {/* Image hero bandeau pur - sans texte */}
      <section id="top" className="relative w-full h-[35vh] md:h-[45vh] overflow-hidden">
        <Image
          src="/hero/home/fast-hero.png"
          alt="FAST Remote : diagnostic à distance"
          fill
          priority
          className="object-cover object-center"
        />
      </section>

      {/* Texte et CTA en dessous du hero */}
      <Section className="bg-primary/95">
        <Container className="space-y-8">
          <div className="space-y-4">
            <Badge className="w-fit bg-accent/20 text-white">FAST TECH SERVICES</Badge>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Diagnostic, maintenance &amp; dépannage pour équipements de garage
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-100 md:text-xl">
              Spécialistes en diagnostic à distance et interventions terrain pour <strong>ponts élévateurs, compresseurs, cabines de peinture</strong> et automatismes associés. 
              Approche structurée, preuves documentées, verdicts rapides.
            </p>
          </div>

          {/* Micro reassurance */}
          <div className="flex flex-wrap gap-2">
            {reassurance.map((item) => (
              <Badge key={item} className="bg-white/10 text-white/90">
                {item}
              </Badge>
            ))}
          </div>

          {/* CTA primaire & secondaire */}
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link href="/fast-remote" className="btn btn-primary">
              Démarrer FAST Remote
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Demander une intervention sur site
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

// =============================================================================
// B) POURQUOI FAST REMOTE (3 bénéfices)
// =============================================================================
function WhyRemoteSection() {
  return (
    <Section id="avantages" className="bg-primary/75">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow text-accent">Avantages clés</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Pourquoi FAST Remote ?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {remoteBenefits.map((benefit) => (
            <Card key={benefit.title} className="glass-card border border-accent/20 p-6">
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="font-semibold text-white text-lg">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// C) CAS D'USAGE (3 cartes)
// =============================================================================
function UseCasesSection() {
  return (
    <Section id="cas-usage">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow text-accent">Situations typiques</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Cas d&apos;usage
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="glass-card border border-white/10 p-6 hover:border-accent/40 transition">
              <div className="text-3xl mb-3">{useCase.icon}</div>
              <h3 className="font-semibold text-white text-lg">{useCase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// D) COMMENT ÇA MARCHE (4 étapes)
// =============================================================================
function ProcessSection() {
  return (
    <Section id="process" className="bg-primary/60">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow text-accent">Processus</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Comment ça marche
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((step) => (
            <Card key={step.number} className="glass-card border border-accent/20 p-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 border border-accent/40 mb-4">
                <span className="text-lg font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-center text-gray-100">
            ⏱️ Durée totale : <strong>1-4h entre pré-qualification et verdict</strong>
          </p>
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
    <Section id="equipements">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow text-accent">Spécialités</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Équipements couverts
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {equipmentsCovered.map((equipment) => (
            <Card key={equipment} className="flex items-center gap-3 glass-card border border-white/10 p-4">
              <span className="text-accent font-bold text-xl flex-shrink-0">✓</span>
              <span className="text-gray-100">{equipment}</span>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-lg bg-accent/10 border border-accent/20">
          <p className="text-center text-gray-100">
            Autres équipements ? <strong>Contactez-nous pour valider la faisabilité.</strong>
          </p>
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// F) OFFRES (3 cartes)
// =============================================================================
function OfferingsSection() {
  return (
    <Section id="offres" className="bg-primary/60">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow text-accent">Tarification</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Nos offres
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offer) => (
            <Card
              key={offer.title}
              className={`relative p-8 rounded-xl border transition ${
                offer.primary
                  ? "bg-gradient-to-br from-accent/20 to-accent/5 border-accent/40 ring-2 ring-accent/20"
                  : "glass-card border-white/10 hover:border-accent/40"
              }`}
            >
              {offer.badge && (
                <Badge className={offer.primary ? "bg-accent/30 text-accent" : "bg-white/10 text-white/80"}>
                  {offer.badge}
                </Badge>
              )}

              <h3 className="mt-4 text-xl font-semibold text-white">{offer.title}</h3>
              <p className="mt-2 text-2xl font-bold text-accent">{offer.price}</p>
              <p className="mt-2 text-sm text-gray-200">{offer.description}</p>

              <ul className="mt-6 space-y-3">
                {offer.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-gray-100">
                    <span className="text-accent flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={offer.href}
                className={`mt-8 block w-full rounded-md px-4 py-3 text-center font-semibold transition-colors ${
                  offer.primary
                    ? "bg-action text-white hover:bg-action-strong"
                    : "border border-accent/50 text-accent hover:border-accent-soft hover:text-accent-soft"
                }`}
              >
                {offer.cta}
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// =============================================================================
// G) FAQ COURTE
// =============================================================================
function FAQSection() {
  return (
    <Section id="faq">
      <Container className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow text-accent">Questions fréquentes</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            FAQ
          </h2>
        </div>

        <div className="grid gap-4 max-w-3xl">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:border-accent/30"
            >
              <summary className="cursor-pointer font-semibold text-white group-open:text-accent transition">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-gray-200">
                {faq.a}
              </p>
            </details>
          ))}
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
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Prêt à résoudre votre problème ?
        </h2>
        <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-200">
          Démarrez <strong>FAST Remote immédiatement</strong> ou demandez une intervention terrain.
          <br />
          Réponse garantie dans les <strong>2 heures</strong>.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-4">
          <Link href="/fast-remote" className="btn btn-primary">
            Démarrer FAST Remote
          </Link>
          <Link href="/contact" className="btn btn-secondary">
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
    <Section id="contact">
      <Container className="space-y-6">
        <div className="glass-card rounded-xl p-8 border border-white/10 text-center">
          <p className="eyebrow">Prêt à commencer ?</p>
          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Contactez FAST Tech Services
          </h3>
          <p className="mt-3 text-gray-200">
            Besoin de clarifier un détail avant de démarrer ? Nos experts sont là pour vous guider.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact?objet=fast-remote" className="btn btn-primary">
              Accéder au formulaire
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
