import Link from "next/link";
import { notFound } from "next/navigation";
import Background from "../../../components/layout/Background";
import HeroBase from "../../../components/hero/HeroBase";
import Container from "../../../components/Container";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { services, serviceBySlug, ServiceSlug } from "../../../lib/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: ServiceSlug } }) {
  const service = serviceBySlug[params.slug];

  if (!service) {
    return { title: "Service | FAST Tech Services" };
  }

  return {
    title: `${service.detailTitle} | FAST Tech Services`,
    description: service.detailDescription,
  };
}

interface ServicePageProps {
  params: { slug: ServiceSlug };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceBySlug[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative">
      <Background variant="services" />
      <main className="py-16">
        <Container>
          <div className="band band--tech relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-15" />
            <div className="relative space-y-6">
              <Breadcrumbs
                items={[
                  { label: "Accueil", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: service.detailTitle },
                ]}
              />
              <Link
                href="/"
                className="inline-flex text-xs uppercase tracking-[0.3em] text-gray-300 transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Retour à l&apos;accueil
              </Link>
              <HeroBase
                eyebrow="Service"
                title={service.detailTitle}
                subtitle={service.detailDescription}
                align="left"
              />
              <ul className="mt-2 space-y-2 text-sm text-gray-200">
                {service.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-primary">
                  Demander un devis
                </Link>
                <Link href="/services" className="btn-secondary">
                  Retour aux services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
