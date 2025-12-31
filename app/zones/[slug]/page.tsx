import Link from "next/link";
import { notFound } from "next/navigation";
import Background from "../../../components/layout/Background";
import HeroBase from "../../../components/hero/HeroBase";
import Container from "../../../components/Container";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { zones, zoneBySlug, ZoneSlug } from "../../../lib/content/zones";

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export function generateMetadata({ params }: { params: { slug: ZoneSlug } }) {
  const zone = zoneBySlug[params.slug];

  if (!zone) {
    return { title: "Zone d'intervention | FAST Tech Services" };
  }

  return {
    title: `${zone.title} | FAST Tech Services`,
    description: zone.description,
  };
}

interface ZonePageProps {
  params: { slug: ZoneSlug };
}

export default function ZonePage({ params }: ZonePageProps) {
  const zone = zoneBySlug[params.slug];

  if (!zone) {
    notFound();
  }

  return (
    <div className="relative">
      <Background variant="services" />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative space-y-6">
              <Breadcrumbs
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Zones", href: "/zones" },
                  { label: zone.title },
                ]}
              />
              <Link
                href="/"
                className="inline-flex text-xs uppercase tracking-[0.3em] text-gray-300 transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Retour à l&apos;accueil
              </Link>
              <HeroBase
                eyebrow="Zone"
                title={zone.title}
                subtitle={zone.description}
                align="left"
              />
              <p className="text-sm text-gray-200">{zone.coverageNote}</p>
              <p className="text-sm text-gray-400">{zone.perimeter}</p>
              <ul className="space-y-2 text-sm text-gray-200">
                {zone.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-primary">
                  Demander un diagnostic
                </Link>
                <Link href="/zones" className="btn-secondary">
                  Retour aux zones
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
