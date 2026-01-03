import Background from "../../components/layout/Background";
import Container from "../../components/Container";
import PageHero from "../../components/PageHero";
import { zones } from "../../lib/content/zones";

export const metadata = {
  title: "Zones d'intervention | FAST Tech Services",
  description: "Zones d'intervention et couverture des services FAST Tech Services.",
};

export default function ZonesHubPage() {
  return (
    <div className="relative">
      <Background variant="services" />
      <PageHero
        badgeLabel="ZONES"
        title="Zones d'intervention"
        description="Interventions terrain par zone géographique. ⚠️ FAST Remote (diagnostic à distance) couvre la France entière en 1-2h."
        imageUrl="/hero/zones/hero.svg"
        imageAlt="Zones d'intervention FAST Tech Services"
      />
      <main className="py-16">
        <Container>
          <div id="ile-de-france" className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative">
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {zones.map((zone, idx) => (
                  <article key={idx} className="glass-card rounded-xl p-6">
                    <h2 className="text-base font-semibold text-white">{zone.title}</h2>
                    <p className="mt-3 text-sm text-gray-200">{zone.description}</p>
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
