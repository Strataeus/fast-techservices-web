import type { Metadata } from "next";
import { GenericHero } from "@/components/sections/GenericHero";
import { colors, spacing } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "Confidentialité — FAST Tech Services",
  description: "Politique de confidentialité et protection des données.",
};

export default function ConfidentialitePage() {
  return (
    <main>
      <GenericHero
        badgeLabel="Confidentialité"
        title="Politique de Confidentialité"
        subtitle="Protection des données et respect du RGPD."
      />
      <div style={{ padding: `${spacing[12]} ${spacing[6]}`, maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem" }}>
          Politique de Confidentialité
        </h1>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Protection des données
          </h2>
          <p>
            FAST Tech Services s&apos;engage à protéger vos données personnelles conformément à la réglementation en vigueur (RGPD).
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Données collectées
          </h2>
          <p>Nous collectons les données que vous nous fournissez volontairement via nos formulaires de contact.</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Utilisation des données
          </h2>
          <p>
            Vos données sont utilisées exclusivement pour vous contacter et traiter votre demande. Elles ne sont jamais partagées avec des tiers sans votre consentement.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Droits
          </h2>
          <p>
            Vous avez le droit d&apos;accéder, corriger ou supprimer vos données personnelles. Contactez-nous pour exercer ces droits.
          </p>
        </section>
      </div>
    </main>
  );
}
