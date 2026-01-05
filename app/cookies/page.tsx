import type { Metadata } from "next";
import { GenericHero } from "@/components/sections/GenericHero";
import { spacing } from "@/lib/design/tokens";

export const metadata: Metadata = {
  title: "Politique Cookies — FAST Tech Services",
  description: "Politique de gestion des cookies et données personnelles sur le site FAST Tech Services.",
};

export default function CookiesPage() {
  return (
    <main>
      <GenericHero
        badgeLabel="Cookies"
        title="Politique Cookies"
        subtitle="Gestion des cookies et traçabilité des données."
      />
      <article style={{ maxWidth: "900px", margin: "0 auto", padding: `${spacing[12]} ${spacing[6]}` }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "2rem", color: "#ffffff" }}>
          Politique Cookies
        </h1>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#00d9ff" }}>
            Qu&apos;est-ce qu&apos;un cookie ?
          </h2>
          <p style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.8", marginBottom: "1rem" }}>
            Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site.
            Les cookies permettent de mémoriser vos préférences et d&apos;améliorer votre expérience utilisateur.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#00d9ff" }}>
            Cookies utilisés sur ce site
          </h2>
          <p style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.8", marginBottom: "1.5rem" }}>
            FAST Tech Services utilise <strong>uniquement les cookies strictement nécessaires</strong> au fonctionnement du site :
          </p>
          <ul style={{ color: "#ccc", lineHeight: "1.8", paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Cookies de session</strong> : pour gérer votre connexion et navigation (durée : fin de session).
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Cookies de préférence</strong> : pour mémoriser vos choix (langue, préférences d&apos;affichage).
            </li>
            <li>
              <strong>Aucun cookie publicitaire</strong> : nous ne profilons pas vos données à des fins commerciales.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#00d9ff" }}>
            Votre consentement
          </h2>
          <p style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.8", marginBottom: "1rem" }}>
            Par défaut, seuls les cookies <strong>strictement nécessaires</strong> sont activés. Aucun consentement supplémentaire n&apos;est demandé.
          </p>
          <p style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.8" }}>
            Vous pouvez contrôler ou supprimer les cookies dans les paramètres de votre navigateur à tout moment.
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#00d9ff" }}>
            Questions ?
          </h2>
          <p style={{ fontSize: "1rem", color: "#ccc", lineHeight: "1.8" }}>
            Consultez notre{" "}
            <a href="/confidentialite" style={{ color: "#00d9ff", textDecoration: "none" }}>
              Politique de confidentialité
            </a>{" "}
            ou{" "}
            <a href="/contact" style={{ color: "#00d9ff", textDecoration: "none" }}>
              contactez-nous
            </a>{" "}
            pour plus d&apos;informations.
          </p>
        </section>

        <p style={{ fontSize: "0.875rem", color: "#888", marginTop: "3rem", borderTop: "1px solid #333", paddingTop: "2rem" }}>
          Dernière mise à jour : 4 janvier 2026
        </p>
      </article>
    </main>
  );
}
