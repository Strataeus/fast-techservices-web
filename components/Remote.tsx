import Link from "next/link";
import Container from "./Container";

const bullets = [
  "Diagnostic guidé, humain-in-the-loop.",
  "Preuve exigée à chaque étape.",
  "Verdict écrit et traçable.",
];

export default function Remote() {
  return (
    <section id="remote" className="scroll-mt-32 py-20">
      <Container>
        <div className="section-surface grid gap-8 rounded-2xl px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-center md:px-10 animate-fade-up">
          <div>
            <p className="eyebrow">FAST Remote</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Diagnostic assisté à distance, piloté par l&apos;expert
            </h2>
            <p className="mt-4 text-gray-200">
              Moins d&apos;immobilisation, plus de preuves. Un protocole d&apos;assistance
              à distance renforcé par l&apos;IA, validé par un technicien référent.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <ul className="space-y-3 text-sm text-gray-200">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Découvrir FAST Remote →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
