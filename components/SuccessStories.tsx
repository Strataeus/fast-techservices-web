"use client";

import Container from "./Container";
import Section from "./ui/Section";
import ImagePlaceholder from "./ImagePlaceholder";

const successStories = [
  {
    title: "Diagnostic express équipement",
    situation: "Panne imprévue",
    timeline: "2-4 heures",
    outcome: "Verdict précis, preuves documentées",
    icon: "⚡",
  },
  {
    title: "Suivi préventif mensuel",
    situation: "Maintenance régulière",
    timeline: "1h par mois",
    outcome: "Alertes précoces, évite les arrêts",
    icon: "🛡️",
  },
  {
    title: "Intervention terrain",
    situation: "Réparation complexe",
    timeline: "24-48h sur site (IDF)",
    outcome: "Diagnostic + réparation complète",
    icon: "🔧",
  },
];

export default function SuccessStories() {
  return (
    <Section id="success-stories" className="bg-primary-dark">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <div className="inline-block rounded-full bg-action/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-action border border-action/30">
              📊 Nos impacts
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              De la panne au <span className="bg-gradient-to-r from-action to-green-400 bg-clip-text text-transparent">diagnostic fiable</span>
            </h2>

            <p className="text-lg text-gray-300">
              Voir comment FAST Remote transforme l'incertitude en clarté pour les équipes techniques.
            </p>
          </div>

          {/* Success flows */}
          <div className="grid gap-8 md:grid-cols-3">
            {successStories.map((story, idx) => (
              <div key={idx} className="space-y-4">
                {/* Story card */}
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition-all duration-300 hover:border-action/40 hover:bg-gradient-to-b hover:from-white/10 hover:to-transparent">
                  {/* Icon */}
                  <div className="text-3xl mb-4">{story.icon}</div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">{story.title}</h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-action font-bold mt-1">→</span>
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wide">Situation</p>
                          <p className="text-white font-semibold">{story.situation}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <span className="text-accent font-bold mt-1">⏱</span>
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wide">Délai</p>
                          <p className="text-white font-semibold">{story.timeline}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 pt-2">
                        <span className="text-green-400 font-bold mt-1">✓</span>
                        <div>
                          <p className="text-white/70 text-xs uppercase tracking-wide">Résultat</p>
                          <p className="text-white font-semibold">{story.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Large visual section - Avant/Après */}
          <div className="mt-12 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              En images : la transformation
            </h3>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* AVANT */}
              <div className="space-y-3">
                <div className="text-sm font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span> Avant le diagnostic
                </div>
                <ImagePlaceholder
                  label="Équipement défaillant"
                  height="h-80"
                  className="border-red-500/20 hover:border-red-500/40"
                />
                <p className="text-sm text-gray-400">
                  Incertitude, temps d'arrêt, coûts imprévisibles. L'équipe ne sait pas par où commencer.
                </p>
              </div>

              {/* ARROW */}
              <div className="hidden md:flex justify-center">
                <div className="text-5xl">→</div>
              </div>

              {/* APRÈS */}
              <div className="space-y-3 md:col-start-2 md:row-start-1">
                <div className="text-sm font-bold uppercase tracking-wider text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span> Après FAST Remote
                </div>
                <ImagePlaceholder
                  label="Diagnostic clair & plan d'action"
                  height="h-80"
                  className="border-green-500/20 hover:border-green-500/40"
                />
                <p className="text-sm text-gray-400">
                  Verdict documenté, preuves visuelles, plan de réparation clair. L'équipe agit avec confiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
