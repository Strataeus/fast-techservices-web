import { GenericHero } from "@/components/sections/GenericHero";
import Container from "../../components/Container";
import { proofs } from "../../lib/content/proofs";

export const metadata = {
  title: "Preuves & réalisations | FAST Tech Services",
  description: "Exemples anonymisés d'interventions techniques.",
};

export default function ProofsHubPage() {
  return (
    <div className="relative">
      <GenericHero
        badgeLabel="Preuves & réalisations"
        title="Exemples d'interventions"
        subtitle="Cas anonymisés à des fins de démonstration. Structure identique : symptôme, mesure, action et test de sortie."
      />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative">
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {proofs.map((item, idx) => (
                  <article key={idx} className="glass-card rounded-xl p-6">
                    <h2 className="text-base font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm text-gray-200">{item.symptom}</p>
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
