import Image from "next/image";

interface HeroBannerProps {
  src: string;
  alt: string;
}

export default function HeroBanner({
  src,
  alt,
}: HeroBannerProps) {
  return (
    <section className="relative w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] bg-primary-dark overflow-hidden">
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
