import Container from "../Container";

const tones = {
  deep: "band band--deep",
  tech: "band band--tech",
  neutral: "band band--neutral",
} as const;

type Tone = keyof typeof tones;

interface SectionBandProps {
  id?: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}

export default function SectionBand({
  id,
  tone = "tech",
  children,
  className = "",
}: SectionBandProps) {
  return (
    <section id={id} className={`section scroll-mt-32`}>
      <Container>
        <div
          className={`${tones[tone]} relative overflow-hidden rounded-2xl px-6 py-10 md:px-10 ${className}`}
        >
          <div className="absolute inset-0 tech-grid opacity-15" />
          <div className="relative">{children}</div>
        </div>
      </Container>
    </section>
  );
}
