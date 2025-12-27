import Container from "./Container";

const focusItems = [
  "Garages professionnels",
  "Équipements industriels",
  "Électromécanique",
  "Automatismes",
];

const credibility = ["Constructeurs", "Réseaux pro", "Assureurs", "Certifications"];

export default function About() {
  return (
    <section id="apropos" className="scroll-mt-32 py-20">
      <Container>
        <div className="section-surface rounded-2xl px-6 py-10 md:px-10 animate-fade-up">
          <div className="text-center">
            <p className="eyebrow">À propos</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
              Expertise terrain, exigence industrielle
            </h2>
            <p className="mt-4 text-gray-200 md:mx-auto md:max-w-3xl">
              FAST Tech Services est spécialisé dans les interventions techniques à haute exigence :
              électromécanique, automatismes, systèmes industriels.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {focusItems.map((item) => (
              <div
                key={item}
                className="glass-card rounded-xl px-4 py-6 text-center text-xs uppercase tracking-[0.2em] text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {credibility.map((item) => (
              <div
                key={item}
                className="glass-card rounded-xl px-4 py-4 text-center text-xs uppercase tracking-[0.2em] text-gray-400"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
