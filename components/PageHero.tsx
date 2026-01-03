import Image from "next/image";
import Container from "./Container";
import Section from "./ui/Section";
import Badge from "./ui/Badge";

interface PageHeroProps {
  badgeLabel: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  accentColor?: "bright" | "gold";
}

export default function PageHero({
  badgeLabel,
  title,
  description,
  imageUrl,
  imageAlt = "Illustration de la page",
  accentColor = "bright",
}: PageHeroProps) {
  const accentClass =
    accentColor === "gold" ? "bg-accent-gold/10" : "bg-accent-bright/10";

  return (
    <Section className="py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-6 lg:order-1">
            <Badge className={`w-fit ${accentClass} text-white`}>
              {badgeLabel}
            </Badge>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>
          </div>

          {/* Espace pour image */}
          <div className="lg:order-2">
            {imageUrl ? (
              <div 
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900"
                style={{
                  aspectRatio: '3 / 2',
                  width: '100%',
                }}
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="w-full h-full object-contain"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
            ) : (
              <div 
                className="relative rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-primary-dark/50 to-primary-darker/50 flex items-center justify-center backdrop-blur"
                style={{
                  aspectRatio: '3 / 2',
                  width: '100%',
                }}
              >
                <div className="text-center space-y-3">
                  <div className="text-6xl">🖼️</div>
                  <p className="text-gray-400 text-sm font-medium">
                    Espace pour image
                  </p>
                  <p className="text-gray-500 text-xs max-w-xs">
                    Image à ajouter: {imageAlt}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
