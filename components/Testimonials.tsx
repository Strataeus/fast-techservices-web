"use client";

import Card from "./ui/Card";
import Container from "./Container";
import Section from "./ui/Section";

const testimonials = [
  {
    garage: "Garage Lafont - Paris",
    role: "Responsable atelier",
    challenge: "Pont élévateur bloqué",
    result: "Diagnostic 2h, économie 1500€",
    impact: "↓ 48h immobilisation",
    color: "from-accent/10 to-accent/5",
  },
  {
    garage: "Compressair Services - Lyon",
    role: "Directeur technique",
    challenge: "Compresseur fuite air",
    result: "Preuves documentées",
    impact: "✓ Client rassuré",
    color: "from-green-500/10 to-green-500/5",
  },
  {
    garage: "Cabines Peinture Pro - Marseille",
    role: "Chef d'atelier",
    challenge: "Ventilation défaillante",
    result: "Plan d'action clair",
    impact: "→ Prochaine réparation",
    color: "from-blue-500/10 to-blue-500/5",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gradient-to-b from-primary-darker via-primary-dark to-primary-darker">
      <Container>
        <div className="space-y-6">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent border border-accent/30">
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
                className={`group relative rounded-2xl bg-gradient-to-br ${testimonial.color} border border-white/10 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,200,255,0.15)]`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 h-1 w-8 bg-gradient-to-r from-accent to-blue-400 rounded-b-full transition-all duration-300 group-hover:w-12" />

                <div className="space-y-4 pt-2">
                  {/* Garage name */}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent">📍 {testimonial.garage}</p>
                    <p className="text-xs text-white/60">{testimonial.role}</p>
                  </div>

                  {/* Challenge */}
                  <div className="space-y-1 border-l-2 border-accent/30 pl-4">
                    <p className="text-xs uppercase tracking-wider text-white/70">Défi</p>
                    <p className="text-sm font-semibold text-white">{testimonial.challenge}</p>
                  </div>

                  {/* Result */}
                  <div className="space-y-1 border-l-2 border-green-500/30 pl-4">
                    <p className="text-xs uppercase tracking-wider text-white/70">Résultat</p>
                    <p className="text-sm font-semibold text-white">{testimonial.result}</p>
                  </div>

                  {/* Impact badge */}
                  <div className="pt-2 inline-block rounded-lg bg-white/5 px-3 py-2 border border-white/10">
                    <p className="text-xs font-bold text-accent">{testimonial.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 text-center">
            <p className="text-sm text-gray-400 mb-4">
              Votre garage pourrait être la prochaine success story. Parlons-en.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-strong text-primary font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]"
            >
              Démarrer un diagnostic
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
