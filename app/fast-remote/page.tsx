import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "FAST Remote — Diagnostic visio",
  description: "Diagnostic et assistance technique en visioconférence. Réponse garantie en 2h.",
};

export default function FastRemotePage() {
  return (
    <main>
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#0f172a", color: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
            FAST Remote
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "600px", color: "#ccc", marginBottom: "2rem" }}>
            Diagnostic et assistance technique en visioconférence avec preuves documentées et verdict clair en 2h.
          </p>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}

