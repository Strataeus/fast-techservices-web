import Link from "next/link";
import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import Container from "../../components/Container";
import { zones } from "../../lib/content/zones";

export const metadata = {
  title: "Zones d'intervention | FAST Tech Services",
  description: "Zones d'intervention et couverture des services FAST Tech Services.",
};

export default function ZonesHubPage() {
  return (
    <div className="relative">
      <Background variant="services" />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative">
              <HeroBase
                eyebrow="Zones"
                title="Zones d'intervention"
                subtitle={
                  "Interventions terrain par zone géographique. ⚠️ FAST Remote (diagnostic à distance) couvre la France entière en 1-2h."
                }
                align="left"
              />
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {zones.map((zone) => (
                  <article key={zone.slug} className="glass-card rounded-xl p-6">
                    <h2 className="text-base font-semibold text-white">{zone.title}</h2>
                    <p className="mt-3 text-sm text-gray-200">{zone.description}</p>
                    <Link
                      href={`/zones/${zone.slug}`}
                      className="mt-4 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Voir la zone →
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
