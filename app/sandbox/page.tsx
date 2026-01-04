/**
 * Sandbox Page - Component preview (not in navigation)
 */

import { HeroSection } from "@/components/sections/HeroSection";
import { EquipmentGrid } from "@/components/sections/EquipmentGrid";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { CaseStudiesTeaser } from "@/components/sections/CaseStudiesTeaser";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Sandbox - FAST Tech Services",
  robots: "noindex,nofollow", // Hidden from search engines
};

export default function SandboxPage() {
  return (
    <main>
      <section style={{ padding: "2rem", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          🧪 Sandbox - Component Preview
        </h1>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#64748b" }}>
          Not in site navigation. Used for component development and design review.
        </p>
      </section>

      <HeroSection />
      <EquipmentGrid />
      <MethodSteps />
      <CaseStudiesTeaser />
      <ContactForm />
    </main>
  );
}
