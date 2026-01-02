import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { services } from "../../lib/content/services";

export const metadata: Metadata = {
  title: "Services | FAST Tech Services",
  description:
    "Vue d'ensemble des services FAST Tech Services : diagnostic, maintenance, interventions terrain, FAST Remote.",
};

export default function ServicesHubPage() {
  return (
    <div className="relative">
      {/* Bandeau remote-first en haut */}
      <Section className="bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border-b border-accent/30">
        <Container className="text-center">
          <Badge className="w-fit bg-accent/10 text-white border border-accent/30">Approche recommandée</Badge>
          <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            Le plus rapide : commencer par FAST Remote
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-gray-300">
            Pré-qualification à distance, preuves capturées, préparation de l'intervention terrain.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/fast-remote" className="btn btn-primary">
              Démarrer FAST Remote →
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Ou nous contacter
            </Link>
          </div>
        </Container>
      </Section>

      {/* Liste des services */}
      <Section>
        <Container className="space-y-6">
          <Badge className="w-fit bg-accent/10 text-white">Services</Badge>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Services de maintenance garage
          </h1>
          <p className="max-w-3xl text-lg text-gray-200">
            Diagnostic, maintenance et interventions terrain pour ponts élévateurs, compresseurs et
            cabines. Même méthode : Terrain → Preuve → Verdict, livrables documentés.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.slug} className="glass-card">
                <p className="text-sm uppercase tracking-[0.2em] text-accent">Service</p>
                <h2 className="mt-2 text-lg font-semibold text-white">{service.title}</h2>
                <p className="mt-2 text-sm text-gray-200">{service.shortDescription}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent">
                  {service.result}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Voir le détail →
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
