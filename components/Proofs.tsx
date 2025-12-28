import Link from "next/link";
import SectionBand from "./ui/SectionBand";
import { proofs } from "../lib/content/proofs";

export default function Proofs() {
  return (
    <SectionBand id="preuves" tone="neutral" className="animate-fade-up">
      <div className="text-center">
        <p className="eyebrow">Preuves / Réalisations</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Preuves techniques, décisions tracées
        </h2>
        <p className="mt-4 text-gray-200 md:mx-auto md:max-w-3xl">
          Exemples anonymisés. Chaque dossier suit un protocole identique :
          symptôme, mesure, action, test de sortie.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {proofs.map((item) => (
          <article key={item.slug} className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <span className="rounded-full border border-accent/40 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-accent">
                Vérifié
              </span>
            </div>
            <dl className="mt-4 space-y-3 text-sm text-gray-200">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                  Symptôme
                </dt>
                <dd className="mt-1">{item.symptom}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                  Mesure
                </dt>
                <dd className="mt-1">{item.measure}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                  Action
                </dt>
                <dd className="mt-1">{item.action}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                  Test sortie
                </dt>
                <dd className="mt-1">{item.test}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/preuves" className="btn-secondary">
          Voir toutes les preuves →
        </Link>
      </div>
    </SectionBand>
  );
}
