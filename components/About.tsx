import SectionBand from "./ui/SectionBand";

const focusItems = [
  "Garages professionnels",
  "Équipements industriels",
  "Électromécanique",
  "Automatismes",
];

const credibility = ["Constructeurs", "Réseaux pro", "Assureurs", "Certifications"];

export default function About() {
  return (
    <SectionBand id="apropos" tone="tech" className="animate-fade-up">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>
      <div className="relative text-center">
        <p className="eyebrow">À propos</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Expertise terrain, exigence industrielle
        </h2>
        <p className="mt-4 text-gray-200 md:mx-auto md:max-w-3xl">
          FAST Tech Services est spécialisé dans les interventions techniques à haute exigence :
          électromécanique, automatismes, systèmes industriels.
        </p>
      </div>
      <div className="relative mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {focusItems.map((item) => (
          <div
            key={item}
            className="glass-card rounded-xl px-4 py-6 text-center text-xs uppercase tracking-[0.2em] text-gray-200"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="relative mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {credibility.map((item) => (
          <div
            key={item}
            className="glass-card rounded-xl px-4 py-4 text-center text-xs uppercase tracking-[0.2em] text-gray-400"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionBand>
  );
}
