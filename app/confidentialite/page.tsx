import Background from "../../components/layout/Background";
import Container from "../../components/Container";
import Section from "../../components/ui/Section";
import HeroBanner from "../../components/HeroBanner";
import { siteConfig } from "../../lib/site";

export const metadata = {
  title: "Confidentialité | FAST Tech Services",
  description: "Politique de confidentialité et protection données",
};

export default function ConfidentialitePage() {
  return (
    <div className="relative">
      <Background variant="contact" />
      {/* Hero Banner full-width */}
      <HeroBanner
        src="/hero/confidentialite/hero.webp"
        alt="Politique de confidentialité"
      />
      
      {/* Hero Content Section */}
      <Section className="bg-gradient-to-b from-primary/95 to-primary-dark">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-accent-bright/20 text-accent-bright text-sm font-medium">
              Confidentialité
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Politique de confidentialité
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Protection de vos données personnelles
            </p>
          </div>
        </Container>
      </Section>
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative space-y-6">
              <div className="space-y-6 text-sm text-gray-200">
                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Responsable de traitement</h2>
                  <p>FAST Tech Services - {siteConfig.contact.email || "contact@fast-techservices.fr"}</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Données collectées</h2>
                  <p>Formulaires: nom, email, téléphone, entreprise, équipements, symptômes</p>
                  <p>Techniques: IP, navigation, cookies</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Finalités</h2>
                  <p>Traitement demandes, prise contact, amélioration service, conformité légale</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Vos droits RGPD</h2>
                  <p>Accès, rectification, suppression, portabilité, opposition. Contactez-nous à {siteConfig.contact.email || "contact@fast-techservices.fr"}.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Cookies</h2>
                  <p>Essentiels, analytics et consentement. Gérez via banneau consentement.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Sécurité</h2>
                  <p>HTTPS, hébergement sécurisé, no données sensibles côté client</p>
                </section>

                <p className="text-xs text-gray-400 border-t border-white/10 pt-4">
                  Dernière mise à jour: Janvier 2026
                </p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
