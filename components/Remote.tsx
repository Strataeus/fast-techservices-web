/**
 * ⚠️ COMPOSANT OBSOLÈTE - NE PAS UTILISER
 *
 * Ce composant est une ancienne implémentation de la section FAST Remote.
 * 
 * **Remplacé par** :
 * - Page complète : app/fast-remote/page.tsx (PR3 - Refonte premium)
 * - Composant : Intégré directement dans les pages
 *
 * **Status** : À supprimer lors de la prochaine version majeure
 * **Date création** : Version initiale (PR0)
 * **Raison dépréciation** : Refonte complète de la page /fast-remote avec copy premium
 *
 * ⚠️ Ne pas importer ce composant dans le code actif.
 */

import Link from "next/link";
import SectionBand from "./ui/SectionBand";

const bullets = [
  "Diagnostic guidé, humain-in-the-loop.",
  "Preuve exigée à chaque étape.",
  "Verdict écrit et traçable.",
];

const process = [
  { label: "Terrain" },
  { label: "Preuve" },
  { label: "Verdict" },
];

export default function Remote() {
  return (
    <SectionBand id="remote" tone="tech" className="animate-fade-up">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <span className="eyebrow text-xs">Différenciation majeure</span>
        <Link
          href="/services/fast-remote"
          className="btn-primary w-full md:w-auto"
          aria-label="Découvrir FAST Remote"
        >
          Découvrir FAST Remote
        </Link>
      </div>
      <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="eyebrow">FAST Remote</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Diagnostic assisté à distance, piloté par l&apos;expert
          </h2>
          <p className="mt-4 text-gray-200">
            Moins d&apos;immobilisation, plus de preuves. Un protocole d&apos;assistance
            à distance renforcé par l&apos;IA, validé par un technicien référent.
          </p>
        </div>
        <div className="glass-card rounded-xl p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-300">Processus en 3 points</p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-[0.7rem] uppercase tracking-[0.2em] text-gray-200">
            {process.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 text-accent">
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="6" cy="6" r="4" />
                  </svg>
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-3 text-sm text-gray-200">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-xs uppercase tracking-[0.25em] text-accent">
            Verdict écrit + traçabilité systématique
          </div>
        </div>
      </div>
    </SectionBand>
  );
}
