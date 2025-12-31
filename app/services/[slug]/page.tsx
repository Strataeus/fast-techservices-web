import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Container from "../../../components/Container";
import ServicePageTemplate from "../../../components/ServicePageTemplate";
import { services, serviceBySlug, type ServiceSlug } from "../../../lib/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: ServiceSlug }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    return {
      title: "Service | FAST Tech Services",
      description: "Service FAST Tech Services.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
    twitter: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

interface ServicePageProps {
  params: Promise<{ slug: ServiceSlug }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceBySlug[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative">
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </Container>
      <ServicePageTemplate service={service} />
    </div>
  );
}
