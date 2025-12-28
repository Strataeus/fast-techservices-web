import Link from "next/link";

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
}

interface HeroBaseProps {
  eyebrow?: string;
  title: string;
  subtitle: React.ReactNode;
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  badges?: string[];
  align?: "center" | "left";
}

export default function HeroBase({
  eyebrow,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  badges,
  align = "center",
}: HeroBaseProps) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="glow-text mt-4 text-4xl font-semibold text-white md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 text-lg leading-snug text-gray-100">{subtitle}</p>
      {primaryCTA ? (
        <div
          className={`mt-8 flex flex-col gap-4 ${
            align === "left" ? "items-start" : "items-center"
          } sm:flex-row`}
        >
          <Link
            href={primaryCTA.href}
            className={primaryCTA.variant === "secondary" ? "btn-secondary" : "btn-primary"}
            aria-label={primaryCTA.ariaLabel ?? primaryCTA.label}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA ? (
            <Link
              href={secondaryCTA.href}
              className={secondaryCTA.variant === "secondary" ? "btn-secondary" : "btn-primary"}
              aria-label={secondaryCTA.ariaLabel ?? secondaryCTA.label}
            >
              {secondaryCTA.label}
            </Link>
          ) : null}
        </div>
      ) : null}
      {badges && badges.length ? (
        <div className="mt-10 grid grid-cols-1 gap-3 text-xs uppercase tracking-[0.28em] text-gray-300 sm:grid-cols-3">
          {badges.map((badge) => (
            <span key={badge} className="glass-card rounded-full px-4 py-2">
              {badge}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
