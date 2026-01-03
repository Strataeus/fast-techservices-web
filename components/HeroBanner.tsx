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
    <section className="relative w-full aspect-[3/2] max-h-[350px] sm:max-h-[450px] md:max-h-[550px] lg:max-h-[650px] bg-primary-dark overflow-hidden">
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
