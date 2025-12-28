import Link from "next/link";
import Background from "../components/layout/Background";
import VideoIntro from "../components/VideoIntro";
import Hero from "../components/Hero";
import Remote from "../components/Remote";
import Services from "../components/Services";
import MethodFAST from "../components/MethodFAST";
import Proofs from "../components/Proofs";
import About from "../components/About";
import Contact from "../components/Contact";
import Container from "../components/Container";

export default function HomePage() {
  return (
    <div className="relative">
      <Background variant="home" />
      <VideoIntro enabled />
      <Hero />
      <section className="py-16">
        <Container className="text-center">
          <p className="eyebrow text-white">FAST TECH SERVICES</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
            Dépannage &amp; maintenance d&apos;équipements mécatroniques
          </h1>
          <p className="mt-6 text-lg text-white">
            Méthode rigoureuse. Preuves techniques. Diagnostic clair.
            <span className="mt-2 block text-white">
              Intervention maîtrisée et documentée.
            </span>
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#contact" className="btn-primary" aria-label="Demander un devis">
              Demander un devis
            </Link>
            <Link href="#services" className="btn-secondary" aria-label="Voir les services">
              Voir les services
            </Link>
          </div>
        </Container>
      </section>
      <Remote />
      <Services />
      <MethodFAST />
      <Proofs />
      <About />
      <Contact />
    </div>
  );
}
