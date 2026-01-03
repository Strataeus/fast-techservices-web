import Image from "next/image";

interface HeroBannerProps {
  src: string;
  alt: string;
  aspectRatio?: "3/2" | "16/9";
}

export default function HeroBanner({
  src,
  alt,
  aspectRatio = "3/2",
}: HeroBannerProps) {
  // Calcul des hauteurs selon le ratio
  const heightMap = {
    "3/2": { mobile: 200, tablet: 280, desktop: 360, lg: 420 },
    "16/9": { mobile: 210, tablet: 360, desktop: 480, lg: 540 },
  };

  const heights = heightMap[aspectRatio];

  return (
    <section 
      className="relative w-full bg-primary-dark overflow-hidden"
      style={{
        height: `${heights.mobile}px`,
      }}
    >
      <style>{`
        @media (min-width: 640px) {
          #hero-banner-${aspectRatio.replace("/", "-")} {
            height: ${heights.tablet}px;
          }
        }
        @media (min-width: 768px) {
          #hero-banner-${aspectRatio.replace("/", "-")} {
            height: ${heights.desktop}px;
          }
        }
        @media (min-width: 1024px) {
          #hero-banner-${aspectRatio.replace("/", "-")} {
            height: ${heights.lg}px;
          }
        }
      `}</style>
      <div id={`hero-banner-${aspectRatio.replace("/", "-")}`} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-contain object-center"
        />
      </div>
      {/* Overlay gradient subtil pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
}
