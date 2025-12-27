import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container className="flex flex-col items-center gap-6 text-xs text-gray-400">
        <span className="uppercase tracking-[0.3em] text-white/80">
          FAST Tech Services
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
          <span className="text-gray-500">Mentions légales</span>
        </div>
        <span>© {new Date().getFullYear()} FAST Tech Services.</span>
      </Container>
    </footer>
  );
}
