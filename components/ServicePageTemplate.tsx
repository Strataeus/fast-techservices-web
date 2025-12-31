import Link from "next/link";
import Container from "./Container";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import type { ServiceItem } from "../lib/content/services";

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="relative">
      <Hero service={service} />
      <Section>
        <Container className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="glass-card">
            <h2 className="text-xl font-semibold text-white">Ce que c&apos;est</h2>
            <p className="mt-3 text-gray-200">{service.whatIs}</p>
          </Card>
          <Card className="glass-card">
            <h3 className="text-base font-semibold text-white">Livrables</h3>
            <ul className="mt-3 space-y-2 text-gray-200">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section className="bg-primary/60">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="glass-card">
            <h3 className="text-base font-semibold text-white">Inclus</h3>
            <ul className="mt-3 space-y-2 text-gray-200">
              {service.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="glass-card">
            <h3 className="text-base font-semibold text-white">Non inclus</h3>
            <ul className="mt-3 space-y-2 text-gray-200">
              {service.notIncluded.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <div>
            <p className="eyebrow">Déroulé</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Étapes clés</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.steps.map((step, idx) => (
              <Card key={step.title} className="glass-card">
                <div className="flex items-center gap-3">
                  <Badge className="bg-accent/10 text-white">Étape {String(idx + 1).padStart(2, "0")}</Badge>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                </div>
                <p className="mt-2 text-sm text-gray-200">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-primary/60">
        <Container className="space-y-4">
          <div>
            <p className="eyebrow">FAQ</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Questions fréquentes</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {service.faq.map((item) => (
              <Card key={item.question} className="glass-card">
                <p className="text-sm font-semibold text-white">{item.question}</p>
                <p className="mt-2 text-sm text-gray-200">{item.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="glass-card text-center">
          <p className="eyebrow">Prendre rendez-vous</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Besoin d&apos;un diagnostic pour {service.title} ?
          </h3>
          <p className="mt-2 text-gray-200">
            Preuves exigées, verdict documenté, plan d&apos;actions clair.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/#contact" className="btn btn-primary">
              Demander un diagnostic
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Voir les autres services
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function Hero({ service }: { service: ServiceItem }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.14),transparent_55%)]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
      </div>
      <Container className="relative flex min-h-[60vh] flex-col justify-center gap-6 py-16">
        <Badge className="w-fit bg-accent/10 text-white">Service</Badge>
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          {service.title}
        </h1>
        <p className="max-w-3xl text-lg text-gray-200">{service.heroBenefit}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/#contact" className="btn btn-primary">
            Demander un diagnostic
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Retour aux services
          </Link>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: "Objectif", text: service.result },
            { label: "Preuves", text: "Mesures, captures, traçabilité" },
            { label: "Décision", text: "Verdict écrit et actions" },
          ].map((item) => (
            <Card key={item.label} className="glass-card">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.label}</p>
              <p className="mt-1 text-sm text-gray-200">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
