import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative min-h-[78vh] w-full">
        <Image
          src="/brand/fast-hero.png"
          alt="FAST Tech Services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.25),transparent_55%)]" />
        <div className="absolute inset-0 tech-grid opacity-25" />
        <Container className="relative flex min-h-[78vh] items-center justify-center py-24">
          <div className="max-w-3xl text-center">
            <p className="eyebrow">FAST TECH SERVICES</p>
            <h1 className="glow-text mt-4 text-4xl font-semibold text-white md:text-6xl">
              Dépannage &amp; maintenance d&apos;équipements industriels
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Méthode rigoureuse. Preuves techniques. Diagnostic clair.
              <span className="mt-2 block">Intervention maîtrisée et documentée.</span>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="#contact" className="btn-primary">
                Demander un devis
              </Link>
              <Link href="#services" className="btn-secondary">
                Voir les services
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-3 text-xs uppercase tracking-[0.28em] text-gray-300 sm:grid-cols-3">
              <span className="glass-card rounded-full px-4 py-2">Traçabilité</span>
              <span className="glass-card rounded-full px-4 py-2">Conformité</span>
              <span className="glass-card rounded-full px-4 py-2">Sécurité</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
