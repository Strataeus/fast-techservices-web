/**
 * WhatsApp Business Button Component
 * Sticky CTA + Footer link for direct messaging
 * Premium B2B conversion improvement
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

interface WhatsAppButtonProps {
  variant?: "sticky" | "inline" | "footer";
  phoneNumber?: string;
}

export function WhatsAppButton({
  variant = "sticky",
  phoneNumber = "+33612345678",
}: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    "Bonjour FAST Tech Services, j'aimerais en savoir plus sur vos services."
  );
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${message}`;

  if (variant === "sticky") {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "28px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          zIndex: 40,
          transition: "all 200ms ease-in-out",
          textDecoration: "none",
        }}
        title="Contactez-nous sur WhatsApp"
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1.1)";
          el.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.25)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
        }}
      >
        💬
      </a>
    );
  }

  if (variant === "footer") {
    return (
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: spacing[2],
          padding: `${spacing[2]} ${spacing[4]}`,
          backgroundColor: colors.slate[100],
          color: "#25D366",
          fontWeight: 600,
          borderRadius: "0.375rem",
          textDecoration: "none",
          transition: "all 150ms ease-in-out",
          fontSize: "0.9rem",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = "#25D366";
          el.style.color = "white";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.backgroundColor = colors.slate[100];
          el.style.color = "#25D366";
        }}
      >
        <span>💬</span>
        WhatsApp
      </a>
    );
  }

  // inline variant
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: `${spacing[3]} ${spacing[6]}`,
        backgroundColor: "#25D366",
        color: "white",
        fontWeight: 600,
        borderRadius: "0.375rem",
        textDecoration: "none",
        transition: "all 150ms ease-in-out",
        fontSize: "0.95rem",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = "#20BA5A";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.backgroundColor = "#25D366";
      }}
    >
      Discuter sur WhatsApp
    </a>
  );
}
