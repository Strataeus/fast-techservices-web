import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "../lib/site";

function isRealContact(value: string | undefined) {
  return Boolean(value && value !== "A renseigner");
}

export default function SiteFooter() {
  const contactItems = [
    isRealContact(siteConfig.contact.email)
      ? `Email: ${siteConfig.contact.email}`
      : null,
    isRealContact(siteConfig.contact.phone)
      ? `Téléphone: ${siteConfig.contact.phone}`
      : null,
  ].filter(Boolean) as string[];

  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="flex flex-col items-center gap-6 text-xs text-gray-400">
        {contactItems.length ? (
          <div className="glass-card flex flex-wrap items-center justify-center gap-4 rounded-full px-6 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-gray-200">
            {contactItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
        <span className="uppercase tracking-[0.3em] text-white/80">
          FAST Tech Services
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={siteConfig.cta.primary.href}
            className="transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent font-semibold text-accent"
            aria-label={siteConfig.cta.primary.label}
          >
            {siteConfig.cta.primary.label}
          </Link>
          <Link
            href="/mentions-legales"
            className="transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Mentions légales
          </Link>
          <Link
            href="/confidentialite"
            className="transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Confidentialité
          </Link>
        </div>
        <span>© {new Date().getFullYear()} FAST Tech Services.</span>
      </Container>
    </footer>
  );
}
