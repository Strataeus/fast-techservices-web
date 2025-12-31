import Link from "next/link";
import type { ReactNode } from "react";
import SectionBand from "./ui/SectionBand";
import { services, ServiceSlug } from "../lib/content/services";

const icons: Record<ServiceSlug, ReactNode> = {
  "diagnostic-depannage": (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h16M6 7v10m12-10v10M4 17h16"
      />
    </svg>
  ),
  "maintenance-industrielle": (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m3.2-6.2 2.1 2.1m10.4 10.4 2.1 2.1m0-14.6-2.1 2.1M8.3 18.3l-2.1 2.1"
      />
    </svg>
  ),
  "interventions-terrain": (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 5h10v10H5V5Zm10 10 4 4"
      />
    </svg>
  ),
  "fast-remote": (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16v9H4V6Zm4 12h8"
      />
    </svg>
  ),
};

export default function Services() {
  return (
    <SectionBand id="services" tone="tech" className="animate-fade-up">
      <div className="text-center">
        <div className="mx-auto mb-6 h-px w-24 bg-accent/70 shadow-[0_0_18px_rgba(0,200,255,0.45)]" />
        <p className="eyebrow">Nos services</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Diagnostic &amp; maintenance d&apos;équipements industriels
        </h2>
        <p className="mt-4 max-w-2xl text-gray-200 md:mx-auto">
          Chaque intervention suit un protocole de contrôle et de traçabilité
          adapté à l&apos;équipement.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.slug}
            className="glass-card group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_rgba(0,200,255,0.2)] motion-reduce:transform-none"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-primary/70 text-accent shadow-[0_0_20px_rgba(0,200,255,0.2)]">
              {icons[service.slug]}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
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
          </article>
        ))}
      </div>
    </SectionBand>
  );
}
