import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Méthode FAST — Diagnostic rigoureux",
  description: "Découvrez la méthode FAST : expertise, preuves, diagnostic clair.",
};

export default function MethodePage() {
  return (
    <main>
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#0f172a", color: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            Méthode FAST
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "600px", color: "#ccc" }}>
            Expertise rigoureuse. Preuves documentées. Diagnostic clair. Plan d&apos;action traçable.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}>
            5 Étapes de la Méthode
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              { num: 1, title: "Cadrage", desc: "Périmètre, prérequis, objectif clair" },
              { num: 2, title: "Preuves", desc: "Mesures et constats avant action" },
              { num: 3, title: "Tests", desc: "Tests discriminants et décisionnels" },
              { num: 4, title: "Action", desc: "Intervention propre et sécurisée" },
              { num: 5, title: "Verdict", desc: "Résultats documentés et traçables" },
            ].map((step) => (
              <div key={step.num} style={{ padding: "1.5rem", backgroundColor: "#f3f4f6", borderRadius: "0.5rem" }}>
                <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#0ea5e9", marginBottom: "0.5rem" }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#666" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
