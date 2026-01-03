import PageHero from "../components/PageHero";
import Section from "../components/ui/Section";
import CTA from "../components/CTA";

export default function NotFound() {
  return (
    <>
      <PageHero
        badgeLabel="Erreur 404"
        title="Page non trouvée"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Consultez la navigation pour explorer nos services et solutions."
        imageUrl="/hero/not-found-404.svg"
        accentColor="bright"
      />
      <Section className="bg-primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-white">Naviguer sur le site</h2>
          <p className="mt-4 text-gray-300">
            Explorez nos services, consultez les cas clients ou découvrez notre méthode.
          </p>
          <div className="mt-6">
            <CTA text="Retour à l'accueil" href="/" primary />
          </div>
        </div>
      </Section>
    </>
  );
}
