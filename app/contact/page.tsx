'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import Badge from "../../components/ui/Badge";
import FormFastRemote from "../../components/FormFastRemote";
import { siteConfig } from "../../lib/site";

export default function ContactPage() {
  return (
    <div className="relative">
      <HeroSection />
      <FormSection />
      <DetailsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <Section>
      <Container className="space-y-6 text-center">
        <Badge className="w-fit mx-auto bg-accent/10 text-white">CONTACT</Badge>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Contactez FAST Tech Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Choisissez votre type de demande : FAST Remote pour diagnostic immédiat, intervention terrain pour la région parisienne, ou contrat/audit.
        </p>
      </Container>
    </Section>
  );
}

function FormSection() {
  return (
    <Suspense fallback={<div className="text-center py-12">Chargement…</div>}>
      <FormSectionContent />
    </Suspense>
  );
}

function FormSectionContent() {
  const searchParams = useSearchParams();
  const objet = searchParams.get("objet");
  const initialTab = objet === "fast-remote" ? "fast-remote" : "fast-remote";

  return (
    <Section className="bg-primary/60">
      <Container className="space-y-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="eyebrow text-accent">Formulaire</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Décrivez votre besoin
            </h2>
            <p className="mt-2 text-gray-300">
              Remplis le formulaire adapté à ta situation. Nous te recontacterons rapidement.
            </p>
          </div>
          
          <FormFastRemote initialSelectedTab={initialTab as "fast-remote" | "onsite" | "maintenance"} />
        </div>
      </Container>
    </Section>
  );
}

function DetailsSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <p className="eyebrow text-accent">Informations</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Nous sommes à l&rsquo;écoute
            </h2>
            <p className="mt-4 text-gray-300">
              Que tu aies une urgence ou une question générale, nous nous engageons à répondre rapidement et professionnellement.
            </p>

            <div className="mt-8 space-y-6">
              {siteConfig.contact.email && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                    Email
                  </p>
                  <p className="mt-2 text-lg text-white">{siteConfig.contact.email}</p>
                </div>
              )}

              {siteConfig.contact.phone && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                    Téléphone
                  </p>
                  <p className="mt-2 text-lg text-white">
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </div>
              )}

              {siteConfig.contact.area && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                    Zone d&rsquo;intervention
                  </p>
                  <p className="mt-2 text-gray-300">{siteConfig.contact.area}</p>
                </div>
              )}
            </div>
          </div>

          {/* Call to action */}
          <div className="glass-card border border-accent/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Urgence immédiate ?
            </h3>
            <p className="text-gray-300 mb-6">
              Si tu es en situation critique, appelle-nous directement. Un expert FAST peut lancer une séance FAST Remote en quelques minutes.
            </p>
            {siteConfig.contact.phone && (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="inline-block px-6 py-3 bg-accent hover:bg-accent-light text-primary font-semibold rounded transition-colors"
              >
                Appeler maintenant
              </a>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
