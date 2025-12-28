import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import Container from "../../components/Container";
import { siteConfig } from "../../lib/site";

export const metadata = {
  title: "Confidentialité | FAST Tech Services",
  description: "Politique de confidentialité et protection des données.",
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
                eyebrow="Confidentialité"
                title="Politique de confidentialité"
                subtitle={
                  "Cette page décrit la collecte, l'usage et la protection des données personnelles."
                }
                align="left"
              />

              <div className="space-y-5 text-sm text-gray-200">
                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Responsable de traitement</h2>
                  <p>FAST Tech Services (raison sociale complète: TODO).</p>
                  <p>Adresse: TODO.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Données collectées</h2>
                  <p>Formulaire de contact: nom, société, email, téléphone, type d'équipement, message.</p>
                  <p>Données techniques: journaux de serveur et données de navigation (si activés).</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Finalités</h2>
                  <p>Traitement des demandes, suivi technique, prise de rendez-vous et support.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Base légale</h2>
                  <p>Intérêt légitime (réponse aux demandes) et exécution de mesures précontractuelles.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Destinataires</h2>
                  <p>Personnel habilité et prestataires techniques nécessaires à l'exploitation du site.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Durée de conservation</h2>
                  <p>Données de contact: 3 ans après le dernier échange.</p>
                  <p>Journaux techniques (sécurité/maintenance): 12 mois maximum.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Cookies</h2>
                  <p>Le site n'utilise pas de cookies publicitaires.</p>
                  <p>Cookies techniques strictement nécessaires, durée maximale: 13 mois.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Sécurité</h2>
                  <p>Mesures techniques et organisationnelles raisonnables pour protéger les données.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Vos droits</h2>
                  <p>Accès, rectification, suppression, opposition et limitation du traitement.</p>
                  <p>Réponse sous 30 jours, conformément au RGPD.</p>
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Contact</h2>
                  {siteConfig.contact.email ? (
                    <p>Email: {siteConfig.contact.email}</p>
                  ) : (
                    <p>TODO: renseigner l'email de contact.</p>
                  )}
                </section>

                <section className="space-y-2">
                  <h2 className="text-sm font-semibold text-white">Mise à jour</h2>
                  <p>Dernière mise à jour: {updatedAt}.</p>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
