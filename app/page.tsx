import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
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

      {/* SUCCESS STORIES - Avant/Après */}
      <SuccessStories />

      {/* E) Équipements couverts */}
      <EquipmentsSection />

      {/* F) Offres */}
      <OfferingsSection />

      {/* TÉMOIGNAGES - Cas réussis */}
      <Testimonials />

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
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Avantages clés</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Pourquoi choisir <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">FAST Remote</span> ?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Une approche révolutionnaire pour diagnostic et maintenance d'équipements industriels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {remoteBenefits.map((benefit) => (
            <Card key={benefit.title} className="glass-card border border-accent/20 p-8 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,200,255,0.15)] transition-all">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-white text-xl">{benefit.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
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
// C) CAS D'USAGE (3 cartes + image)
// =============================================================================
function UseCasesSection() {
  return (
    <Section id="cas-usage" className="bg-primary/60">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Situations typiques</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Cas d&apos;usage <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">courants</span>
          </h2>
          <p className="text-lg text-gray-300">
            Vous reconnaissez l'une de ces situations ? Nous avons la réponse.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="glass-card border border-white/10 p-8 hover:border-accent/40 transition-all hover:shadow-[0_0_20px_rgba(0,200,255,0.1)]">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="font-bold text-white text-xl">{useCase.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Illustration placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden">
          <ImagePlaceholder 
            label="Galerie photos des équipements" 
            height="h-96"
            className="border-accent/20 hover:border-accent/40"
          />
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
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Processus</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Comment <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">ça marche</span>
          </h2>
          <p className="text-lg text-gray-300">
            Un processus clair, transparent et optimisé du diagnostic au verdict.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step) => (
            <Card key={step.number} className="glass-card border border-accent/20 p-8 hover:border-accent/50 transition-all">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/40 mb-6">
                <span className="text-xl font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="font-bold text-white text-lg">{step.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-8 rounded-lg bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30">
          <div className="text-center">
            <p className="text-lg text-gray-100">
              ⏱️ <strong>Durée totale : 1-4h</strong> entre pré-qualification et verdict écrit
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Disponibilité : 24-72h. Urgences : nous consulter directement.
            </p>
          </div>
        </div>

        {/* Process visual placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden">
          <ImagePlaceholder 
            label="Diagramme du processus FAST Remote" 
            height="h-96"
            className="border-accent/30 hover:border-accent/50"
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
    <Section id="equipements" className="bg-primary/75">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Spécialités</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Équipements <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">couverts</span>
          </h2>
          <p className="text-lg text-gray-300">
            Nous maîtrisons le diagnostic de tous les équipements industriels majeurs de garage.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {equipmentsCovered.map((equipment) => (
            <Card key={equipment} className="flex items-center gap-4 glass-card border border-white/10 p-6 hover:border-accent/40 transition-all">
              <span className="text-2xl font-bold text-accent flex-shrink-0">✓</span>
              <span className="text-base text-gray-100 leading-tight">{equipment}</span>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-8 rounded-lg bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30 text-center">
          <p className="text-gray-100 text-lg">
            Autres équipements ? <strong>Contactez-nous pour valider la faisabilité.</strong>
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
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Tarification</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Nos offres <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">transparentes</span>
          </h2>
          <p className="text-lg text-gray-300">
            Aucun frais caché. Devis précis avant chaque intervention.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offerings.map((offer) => (
            <Card
              key={offer.title}
              className={`relative p-10 rounded-2xl border transition-all ${
                offer.primary
                  ? "bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50 ring-2 ring-accent/30 shadow-[0_0_40px_rgba(0,200,255,0.2)]"
                  : "glass-card border-white/10 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,200,255,0.1)]"
              }`}
            >
              {offer.badge && (
                <Badge className={offer.primary ? "bg-accent/30 text-accent font-bold" : "bg-white/10 text-white/80"}>
                  {offer.badge}
                </Badge>
              )}

              <h3 className="mt-6 text-2xl font-bold text-white">{offer.title}</h3>
              <p className="mt-3 text-3xl font-bold text-accent">{offer.price}</p>
              <p className="mt-4 text-base text-gray-200">{offer.description}</p>

              <ul className="mt-8 space-y-4">
                {offer.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-base text-gray-100">
                    <span className="text-accent flex-shrink-0 font-bold text-lg">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={offer.href}
                className={`mt-10 block w-full rounded-lg px-6 py-4 text-center font-bold transition-all text-lg ${
                  offer.primary
                    ? "bg-gradient-to-r from-action to-green-500 text-white hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                    : "border-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10"
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
    <Section id="faq" className="bg-primary/75">
      <Container className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <p className="eyebrow text-accent uppercase tracking-wider">Questions fréquentes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            FAQ <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">& questions</span>
          </h2>
          <p className="text-lg text-gray-300">
            Réponses rapides aux questions les plus courantes.
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:border-accent/30 cursor-pointer"
            >
              <summary className="font-bold text-lg text-white group-open:text-accent transition flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-accent group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-gray-200">
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
      <div className="space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Résolvez votre <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">problème aujourd'hui</span>
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
    <Section id="contact">
      <Container className="space-y-8">
        <div className="glass-card rounded-2xl p-12 border border-accent/30 text-center max-w-3xl mx-auto">
          <p className="eyebrow text-accent uppercase tracking-wider">Prêt à commencer ?</p>
          <h3 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Contactez <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">FAST Tech Services</span>
          </h3>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Besoin de clarifier un détail avant de démarrer ? Nos experts sont là pour vous guider et valider la faisabilité de votre demande.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact?objet=fast-remote" className="btn btn-primary px-8 py-4 text-lg">
              Accéder au formulaire de contact
            </Link>
            <Link href="#avantages" className="btn btn-secondary px-8 py-4 text-lg">
              Remonter au contenu
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
