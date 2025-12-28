import Background from "../../components/layout/Background";
import HeroBase from "../../components/hero/HeroBase";
import Container from "../../components/Container";
import { siteConfig } from "../../lib/site";

export const metadata = {
  title: "Mentions légales | FAST Tech Services",
  description: "Mentions légales et informations éditeur.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="relative">
      <Background variant="contact" />
      <main className="py-16">
        <Container>
          <div className="band band--neutral relative overflow-hidden rounded-2xl px-6 py-10 md:px-10">
            <div className="absolute inset-0 tech-grid opacity-10" />
            <div className="relative space-y-6">
              <HeroBase
                eyebrow="Mentions légales"
                title="Mentions légales"
                subtitle={
                  "Les informations légales ci-dessous sont à compléter avec les éléments officiels de la société."
                }
                align="left"
              />
              <div className="space-y-3 text-sm text-gray-200">
                <p>
                  <span className="text-gray-100">Raison sociale :</span> TODO
                </p>
                <p>
                  <span className="text-gray-100">Adresse :</span> TODO
                </p>
                <p>
                  <span className="text-gray-100">SIRET :</span> TODO
                </p>
                <p>
                  <span className="text-gray-100">Directeur de publication :</span> TODO
                </p>
                <p>
                  <span className="text-gray-100">Hébergeur :</span> TODO
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-200">
                {siteConfig.contact.email ? (
                  <p>
                    <span className="text-gray-100">Contact :</span>{" "}
                    {siteConfig.contact.email}
                  </p>
                ) : null}
                {siteConfig.contact.phone ? (
                  <p>
                    <span className="text-gray-100">Téléphone :</span>{" "}
                    {siteConfig.contact.phone}
                  </p>
                ) : null}
              </div>
              <p className="text-xs text-gray-400">
                TODO: Renseigner les données légales et l&apos;hébergeur.
              </p>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
