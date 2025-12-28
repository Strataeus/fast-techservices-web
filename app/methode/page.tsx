import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import HeroVideo from "../../components/hero/HeroVideo";
import Container from "../../components/Container";
import MethodFAST from "../../components/MethodFAST";
import { heroMedia } from "../../lib/content/media";

export const metadata = {
  title: "Méthode FAST | FAST Tech Services",
  description: "Méthode d'analyse, preuves et verdict FAST Tech Services.",
};

export default function MethodePage() {
  return (
    <div className="relative">
      <Background variant="services" />
      <section className="relative overflow-hidden">
        <div className="relative min-h-[60vh] w-full">
          <HeroVideo
            poster={heroMedia.methode.poster}
            webmSrc={heroMedia.methode.webm}
            mp4Src={heroMedia.methode.mp4}
            mobilePoster={heroMedia.methode.mobilePoster}
            mobileWebmSrc={heroMedia.methode.mobileWebm}
            mobileMp4Src={heroMedia.methode.mobileMp4}
            alt="Méthode FAST"
            overlayStrength={0.75}
          />
          <Container className="relative flex min-h-[60vh] items-center py-20">
            <HeroBase
              eyebrow="Méthode"
              title="Méthode FAST"
              subtitle="Structurée. Fiable. Traçable. Pas de preuve = pas de conclusion."
              align="left"
            />
          </Container>
        </div>
      </section>
      <main className="py-16">
        <MethodFAST />
      </main>
    </div>
  );
}
