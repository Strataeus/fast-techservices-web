import HeroVideo from "./hero/HeroVideo";
import { heroMedia } from "../lib/content/media";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative min-h-[100vh] w-full">
        <HeroVideo
          poster={heroMedia.home.poster}
          webmSrc={heroMedia.home.webm}
          mp4Src={heroMedia.home.mp4}
          mobilePoster={heroMedia.home.mobilePoster}
          mobileWebmSrc={heroMedia.home.mobileWebm}
          mobileMp4Src={heroMedia.home.mobileMp4}
          alt="FAST Tech Services"
          overlayStrength={0}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.18),transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(0,200,255,0.22),transparent_70%)]" />
      </div>
    </section>
  );
}
