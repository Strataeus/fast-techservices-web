import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import HeroVideo from "../../components/hero/HeroVideo";
import Container from "../../components/Container";
import Services from "../../components/Services";
import { heroMedia } from "../../lib/content/media";

export const metadata = {
  title: "Services | FAST Tech Services",
  description: "Vue d'ensemble des services FAST Tech Services.",
};

export default function ServicesHubPage() {
  return (
    <div className="relative">
      <Background variant="services" />
      <section className="relative overflow-hidden">
        <div className="relative min-h-[60vh] w-full">
          <HeroVideo
            poster={heroMedia.services.poster}
            webmSrc={heroMedia.services.webm}
            mp4Src={heroMedia.services.mp4}
            mobilePoster={heroMedia.services.mobilePoster}
            mobileWebmSrc={heroMedia.services.mobileWebm}
            mobileMp4Src={heroMedia.services.mobileMp4}
            alt="Services FAST Tech Services"
            overlayStrength={0.75}
          />
          <Container className="relative flex min-h-[60vh] items-center py-20">
            <HeroBase
              eyebrow="Services"
              title="Interventions techniques industrielles"
              subtitle={
                "Diagnostic, maintenance et conformité des équipements critiques. Chaque service suit une méthode traçable et une validation claire."
              }
              align="left"
            />
          </Container>
        </div>
      </section>
      <main className="py-16">
        <Services />
      </main>
    </div>
  );
}
