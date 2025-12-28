import Image from "next/image";

const variants = {
  home: "bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.18),transparent_60%)]",
  services:
    "bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.14),transparent_55%)]",
  remote:
    "bg-[radial-gradient(circle_at_20%_20%,rgba(0,200,255,0.2),transparent_50%)]",
  contact:
    "bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.12),transparent_60%)]",
} as const;

type BackgroundVariant = keyof typeof variants;

interface BackgroundProps {
  variant: BackgroundVariant;
  imageSrc?: string;
  videoSrc?: string;
  overlayStrength?: number;
}

export default function Background({
  variant,
  imageSrc,
  videoSrc,
  overlayStrength = 0.65,
}: BackgroundProps) {
  return (
    <div className="page-bg">
      {videoSrc ? (
        <video
          className="absolute inset-0 hidden h-full w-full object-cover motion-safe:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/webm" />
        </video>
      ) : null}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={variant === "home"}
        />
      ) : null}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"
        style={{ opacity: overlayStrength }}
      />
      <div className={`absolute inset-0 ${variants[variant]} opacity-80`} />
      <div className="absolute inset-0 tech-grid opacity-20" />
    </div>
  );
}
