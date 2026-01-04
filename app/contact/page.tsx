import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — FAST Tech Services",
  description: "Contactez-nous pour vos besoins en diagnostic et maintenance d'équipements industriels.",
};

export default function ContactPage() {
  return (
    <main>
      <section style={{ padding: "3rem 1.5rem", backgroundColor: "#0f172a", color: "white" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact</h1>
          <p style={{ fontSize: "1.125rem", color: "#ccc" }}>
            Envoyez-nous un message et nous vous répondrons dans les 2 heures.
          </p>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
