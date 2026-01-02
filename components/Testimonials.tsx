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

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <div className="inline-block rounded-full bg-accent-bright/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent-bright border border-accent-bright/30">
              ✓ Cas réussis
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Des garages qui <span className="text-accent-bright">nous font confiance</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Des diagnostics rapides qui ont sauvé du temps et des budgets. Voici comment FAST Remote a transformé des problèmes en solutions.
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
