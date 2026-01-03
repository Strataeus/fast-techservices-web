"use client";

import Container from "./Container";
import Section from "./ui/Section";
import ImagePlaceholder from "./ImagePlaceholder";

const testimonials = [
  {
    garage: "Garage Lafont - Paris",
    role: "Responsable atelier",
    challenge: "Pont élévateur bloqué",
    result: "Diagnostic 2h, économie 1500€",
    impact: "↓ 48h immobilisation",
  },
  {
    garage: "Compressair Services - Lyon",
    role: "Directeur technique",
    challenge: "Compresseur fuite air",
    result: "Preuves documentées",
    impact: "✓ Client rassuré",
  },
  {
    garage: "Cabines Peinture Pro - Marseille",
    role: "Chef d'atelier",
    challenge: "Ventilation défaillante",
    result: "Plan d'action clair",
    impact: "→ Prochaine réparation",
  },
];

// ROI-focused testimonials for conversion
const roiTestimonials = [
  {
    author: "Jean Martin",
    company: "Garage Martin SARL",
    role: "Gérant",
    location: "Île-de-France",
    image: "👨‍💼",
    quote: "Notre pont était bloqué depuis 4 jours. Coût estimé de perte : 8000€. FAST Remote a diagnostiqué un simple défaut capteur en 2h pour 500€. Production relancée le jour même.",
    roiMetrics: [
      { label: "Économie", value: "7500€" },
      { label: "Temps gagné", value: "3 jours" },
      { label: "Investissement", value: "500€" }
    ],
    rating: 5
  },
  {
    author: "Sophie Laurent",
    company: "Centre de Maintenance Automobiles",
    role: "Responsable Technique",
    location: "Région Parisienne",
    image: "👩‍💼",
    quote: "Avant FAST Remote, chaque panne équipement = 24-48h d'arrêt minimum. Maintenant : diagnostic en 2h, décision en 4h. Notre productivité a augmenté de 15%.",
    roiMetrics: [
      { label: "Productivité", value: "+15%" },
      { label: "Coûts d'arrêt", value: "-60%" },
      { label: "Temps diagnostic", value: "2h" }
    ],
    rating: 5
  },
  {
    author: "Thierry Dupont",
    company: "Atelier Spécialisé",
    role: "Chef d'Atelier",
    location: "Rhône-Alpes",
    image: "👨‍🔧",
    quote: "J'avais besoin de valider si la réparation valait le coup. FAST a diagnostiqué le problème (fusible + relais) pour 290€. Nous avons pu réparer nous-mêmes pour 50€.",
    roiMetrics: [
      { label: "Diagnostic", value: "290€" },
      { label: "Réparation", value: "50€" },
      { label: "Évité", value: "2000€+" }
    ],
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <div className="inline-block rounded-full bg-accent-bright/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent-bright border border-accent-bright/30">
              ✓ Résultats concrets
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Diagnostics qui ont <span className="text-accent-bright">sauvé du temps et de l'argent</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Découvrez comment FAST Remote a transformé les urgences en solutions documentées et rentables.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl bg-gradient-to-br from-accent-bright/10 to-accent-bright/5 border border-accent-bright/20 p-8 transition-all duration-300 hover:border-accent-bright/50 hover:shadow-[0_0_40px_rgba(0,217,255,0.2)] h-full flex flex-col`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 h-1 w-8 bg-gradient-to-r from-accent-bright to-accent-gold rounded-b-full transition-all duration-300 group-hover:w-12" />

                <div className="space-y-4 pt-2 flex-1">
                  {/* Garage name */}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent-bright">📍 {testimonial.garage}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>

                  {/* Challenge */}
                  <div className="space-y-1 border-l-2 border-accent-bright/30 pl-4">
                    <p className="text-xs uppercase tracking-wider text-white/60">Défi</p>
                    <p className="text-sm font-semibold text-white">{testimonial.challenge}</p>
                  </div>

                  {/* Result */}
                  <div className="space-y-1 border-l-2 border-accent-gold/30 pl-4">
                    <p className="text-xs uppercase tracking-wider text-white/60">Résultat</p>
                    <p className="text-sm font-semibold text-white">{testimonial.result}</p>
                  </div>
                </div>

                {/* Impact badge */}
                <div className="pt-6 inline-block rounded-lg bg-accent-bright/10 px-4 py-2 border border-accent-bright/30">
                  <p className="text-sm font-bold text-accent-bright">{testimonial.impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Testimonials Section */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              L'impact en <span className="text-accent-gold">chiffres</span>
            </h3>

            <div className="grid gap-8 md:grid-cols-3">
              {roiTestimonials.map((testimonial, idx) => (
                <div key={idx} className="rounded-2xl border border-accent-gold/40 bg-gradient-to-br from-accent-gold/10 to-primary-dark p-8 hover:border-accent-gold/60 hover:shadow-[0_0_40px_rgba(255,154,46,0.2)] transition-all">
                  {/* Header with avatar and star rating */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <p className="font-bold text-white text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-accent-gold font-semibold">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-lg">⭐</span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-200 italic text-sm mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* ROI Metrics */}
                  <div className="space-y-3 pt-6 border-t border-accent-gold/20">
                    {testimonial.roiMetrics.map((metric, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-lg font-bold text-accent-gold">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Company */}
                  <div className="mt-6 pt-4 border-t border-accent-gold/20">
                    <p className="text-xs font-semibold text-accent-gold uppercase">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery of garages */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-accent-bright/30">
            <ImagePlaceholder 
              label="📸 Nos partenaires garages" 
              height="h-64"
              className="border-accent-bright/40 hover:border-accent-bright/60"
            />
          </div>

          {/* CTA */}
          <div className="pt-8 text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Votre garage pourrait être la <span className="font-bold text-accent-bright">prochaine success story</span>
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-bright to-accent-gold text-primary font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.4)]"
            >
              Démarrer un diagnostic
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
