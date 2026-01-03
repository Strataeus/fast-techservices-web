import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import Container from "../../components/Container";
import PageHero from "../../components/PageHero";
import { siteConfig } from "../../lib/site";

export const metadata = {
  title: "Mentions légales | FAST Tech Services",
  description: "Mentions légales et informations éditeur",
};

export default function MentionsPage() {
  return (
    <div className="relative">
      <Background variant="contact" />
      <PageHero
        badgeLabel="Mentions légales"
        title="Mentions légales"
        description="Informations légales et administratives"
        imageAlt="Mentions légales"
      />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative space-y-6">
              <div className="space-y-6 text-sm text-gray-200">
                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Éditeur</h2>
                  <p><strong>FAST Tech Services</strong></p>
                  <p>Email: {siteConfig.contact.email || "contact@fast-techservices.fr"}</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Hébergeur</h2>
                  <p><strong>Vercel Inc.</strong></p>
                  <p>440 N Barranca Ave, Covina, CA 91723, USA</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Propriété intellectuelle</h2>
                  <p>Tous contenus propriété FAST Tech Services. Reproduction interdite sans autorisation.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Responsabilité</h2>
                  <p>Déclinons responsabilité pour indisponibilité, erreurs ou pertes données.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-lg font-semibold text-white">Confidentialité</h2>
                  <p>Consultez notre <a href="/confidentialite" className="text-accent">politique de confidentialité</a>.</p>
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
