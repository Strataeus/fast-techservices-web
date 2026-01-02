import Link from "next/link";
import { notFound } from "next/navigation";
import Background from "../../../components/layout/Background";
import HeroBase from "../../../components/hero/HeroBase";
import Container from "../../../components/Container";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { proofs, proofBySlug, ProofSlug } from "../../../lib/content/proofs";

export function generateStaticParams() {
  return proofs.map((proof) => ({ slug: proof.slug }));
}

export function generateMetadata({ params }: { params: { slug: ProofSlug } }) {
  const proof = proofBySlug[params.slug];

  if (!proof) {
    return { title: "Preuve | FAST Tech Services" };
  }

  return {
    title: `${proof.title} | FAST Tech Services`,
    description: proof.symptom,
  };
}

interface ProofPageProps {
  params: { slug: ProofSlug };
}

export default function ProofPage({ params }: ProofPageProps) {
  const proof = proofBySlug[params.slug];

  if (!proof) {
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
                  { label: "Preuves", href: "/preuves" },
                  { label: proof.title },
                ]}
              />
              <Link
                href="/"
                className="inline-flex text-xs uppercase tracking-[0.3em] text-gray-300 transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Retour à l&apos;accueil
              </Link>
              <HeroBase
                eyebrow="Preuve"
                title={proof.title}
                subtitle="Structure identique : symptôme, mesure, action et test de sortie."
                align="left"
              />
              <dl className="space-y-4 text-sm text-gray-200">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                    Symptôme
                  </dt>
                  <dd className="mt-1">{proof.symptom}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                    Mesure
                  </dt>
                  <dd className="mt-1">{proof.measure}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                    Action
                  </dt>
                  <dd className="mt-1">{proof.action}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-accent">
                    Test sortie
                  </dt>
                  <dd className="mt-1">{proof.test}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3">
                <Link href="/preuves" className="btn-secondary">
                  Retour aux preuves
                </Link>
                <Link href="/fast-remote" className="btn-primary">
                  Démarrer FAST Remote
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
