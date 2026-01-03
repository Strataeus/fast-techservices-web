import Image from "next/image";

interface HeroBannerProps {
  src: string;
  alt: string;
  height?: "sm" | "md" | "lg" | "xl";
}

export default function HeroBanner({
  src,
  alt,
  height = "lg",
}: HeroBannerProps) {
  const heightClasses = {
    sm: "h-[20vh]",
    md: "h-[30vh]",
    lg: "h-[40vh]",
    xl: "h-[50vh]",
  };

  const responsiveHeights = {
    sm: `${heightClasses.sm} sm:h-[25vh] md:h-[35vh] lg:h-[45vh]`,
    md: `${heightClasses.md} sm:h-[35vh] md:h-[40vh] lg:h-[50vh]`,
    lg: `${heightClasses.lg} sm:h-[40vh] md:h-[45vh] lg:h-[55vh]`,
    xl: `${heightClasses.xl} sm:h-[50vh] md:h-[55vh] lg:h-[60vh]`,
  };

  return (
    <section className={`relative w-full ${responsiveHeights[height]} overflow-hidden bg-primary-dark`}>
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
