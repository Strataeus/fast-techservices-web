import Section from "../components/ui/Section";
import CTA from "../components/CTA";

export default function NotFound() {
  return (
    <Section className="bg-primary">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-semibold text-white">Page non trouvée</h1>
        <p className="mt-4 text-gray-300">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <CTA text="Retour à l'accueil" href="/" primary />
        </div>
      </div>
    </Section>
  );
}
