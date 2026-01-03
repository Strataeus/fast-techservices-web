import Image from "next/image";

interface HeroBannerProps {
  src: string;
  alt: string;
  aspectRatio?: "3/2" | "16/9";
}

export default function HeroBanner({
  src,
  alt,
  aspectRatio = "16/9",
}: HeroBannerProps) {
  // Calcul des hauteurs selon le ratio
  const heightMap = {
    "3/2": "h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px]",
    "16/9": "h-[170px] sm:h-[290px] md:h-[385px] lg:h-[430px]",
  };

  return (
    <section className={`relative w-full ${heightMap[aspectRatio]} bg-primary-dark overflow-hidden`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay gradient subtil pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
}
