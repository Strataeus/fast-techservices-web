import Link from "next/link";
import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import Container from "../../components/Container";
import { proofs } from "../../lib/content/proofs";

export const metadata = {
  title: "Preuves & réalisations | FAST Tech Services",
  description: "Exemples anonymisés d'interventions techniques.",
};

export default function ProofsHubPage() {
  return (
    <div className="relative">
      <Background variant="services" />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative">
              <HeroBase
                eyebrow="Preuves / Réalisations"
                title="Exemples d'interventions"
                subtitle={
                  "Cas anonymisés à des fins de démonstration. Structure identique : symptôme, mesure, action et test de sortie."
                }
                align="left"
              />
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {proofs.map((item) => (
                  <article key={item.slug} className="glass-card rounded-xl p-6">
                    <h2 className="text-base font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm text-gray-200">{item.symptom}</p>
                    <Link
                      href={`/preuves/${item.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Voir le dossier →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
