import Container from "./Container";

const steps = [
  { label: "Terrain", text: "Constats sur site, contexte et symptômes." },
  { label: "Preuve", text: "Mesures, tests, preuves et traçabilité." },
  { label: "Verdict", text: "Décision technique claire et actionnable." },
];

export default function MethodFAST() {
  return (
    <section id="method" className="scroll-mt-32 py-20">
      <Container>
        <div className="section-surface rounded-2xl px-6 py-10 md:px-10 animate-fade-up">
          <div className="text-center">
            <p className="eyebrow">Méthode FAST</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Structurée. Fiable. Traçable.
            </h2>
            <p className="mt-3 text-sm text-gray-200">
              Réduire l&apos;incertitude technique à zéro.
            </p>
            <div className="glow-line" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Pas de preuve = pas de conclusion
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.label}
                className="glass-card rounded-xl p-6 text-left animate-fade-up"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.label}</h3>
                <p className="mt-2 text-sm text-gray-200">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="tech-panel rounded-xl p-6 animate-fade-up">
              <p className="eyebrow">STOP &amp; CALL</p>
              <p className="mt-3 text-sm text-gray-200">
                En cas de doute ou de preuves insuffisantes, l&apos;intervention est stoppée
                et requalifiée pour garantir une décision fiable.
              </p>
            </div>
            <div className="tech-panel rounded-xl p-6 animate-fade-up">
              <p className="eyebrow">SAFE-BY-DEFAULT</p>
              <p className="mt-3 text-sm text-gray-200">
                Priorité à la sécurité et à la conformité avant toute remise en service.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
