import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import Container from "../../components/Container";
import { siteConfig } from "../../lib/site";

export const metadata = {
  title: "Confidentialit? | FAST Tech Services",
  description: "Politique de confidentialit? et protection des donn?es.",
};

export default function ConfidentialitePage() {
  const updatedAt = new Date().toLocaleDateString("fr-FR");

  return (
    <div className="relative">
      <Background variant="contact" />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative space-y-6">
              <HeroBase
                eyebrow="Confidentialit?"
                title="Politique de confidentialit?"
                subtitle={
                  "Cette page d?crit la collecte, l'usage et la protection des donn?es personnelles."
                }
                align="left"
              />

              <div className="space-y-5 text-sm text-gray-200">
                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Responsable de traitement</h2>
                  <p>FAST Tech Services (raison sociale compl?te: TODO).</p>
                  <p>Adresse: TODO.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Donn?es collect?es</h2>
                  <p>
                    Formulaire de contact: nom, soci?t?, email, t?l?phone, type d&apos;?quipement,
                    message.
                  </p>
                  <p>Donn?es techniques: journaux de serveur et donn?es de navigation (si activ?s).</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Finalit?s</h2>
                  <p>Traitement des demandes, suivi technique, prise de rendez-vous et support.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Base l?gale</h2>
                  <p>
                    Int?r?t l?gitime (r?ponse aux demandes) et ex?cution de mesures
                    pr?contractuelles.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Destinataires</h2>
                  <p>
                    Personnel habilit? et prestataires techniques n?cessaires ? l&apos;exploitation du
                    site.
                  </p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Dur?e de conservation</h2>
                  <p>Donn?es de contact: 3 ans apr?s le dernier ?change.</p>
                  <p>Journaux techniques (s?curit?/maintenance): 12 mois maximum.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Cookies</h2>
                  <p>Le site n&apos;utilise pas de cookies publicitaires.</p>
                  <p>Cookies techniques strictement n?cessaires, dur?e maximale: 13 mois.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">S?curit?</h2>
                  <p>Mesures techniques et organisationnelles raisonnables pour prot?ger les donn?es.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Vos droits</h2>
                  <p>Acc?s, rectification, suppression, opposition et limitation du traitement.</p>
                  <p>R?ponse sous 30 jours, conform?ment au RGPD.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Contact</h2>
                  {siteConfig.contact.email ? (
                    <p>Email: {siteConfig.contact.email}</p>
                  ) : (
                    <p>TODO: renseigner l&apos;email de contact.</p>
                  )}
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Mise ? jour</h2>
                  <p>Derni?re mise ? jour: {updatedAt}.</p>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
