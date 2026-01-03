import Background from "../../components/layout/Background";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import HeroBanner from "../../components/HeroBanner";
import { zones } from "../../lib/content/zones";

export const metadata = {
  title: "Zones d'intervention | FAST Tech Services",
  description: "Zones d'intervention et couverture des services FAST Tech Services.",
};

export default function ZonesHubPage() {
  return (
    <div className="relative">
      <Background variant="services" />
      {/* Hero Banner full-width */}
      <HeroBanner
        src="/hero/zones/hero.webp"
        alt="Zones d'intervention FAST Tech Services"
      />
      
      {/* Hero Content Section */}
      <Section className="bg-gradient-to-b from-primary/95 to-primary-dark">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-accent-bright/20 text-accent-bright text-sm font-medium">
              ZONES
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Zones d&apos;intervention
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Interventions terrain par zone géographique. ⚠️ FAST Remote (diagnostic à distance) couvre la France entière en 1-2h.
            </p>
          </div>
        </Container>
      </Section>

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
