import Link from "next/link";
import { siteConfig } from "../lib/site";

export default function StickyCTA() {
  return (
    <>
      <div className="fixed bottom-5 right-6 z-[70] hidden md:flex md:flex-col md:gap-3">
        <Link
          href={siteConfig.cta.primary.href}
          className="btn btn-primary px-5 py-3 text-xs uppercase tracking-[0.28em] shadow-[0_0_24px_rgba(34,197,94,0.35)] whitespace-nowrap"
          aria-label={siteConfig.cta.primary.label}
        >
          {siteConfig.cta.primary.label}
        </Link>
        <Link
          href="/contact"
          className="btn btn-secondary px-5 py-3 text-xs uppercase tracking-[0.28em] border border-white/20 text-white/80 hover:text-white transition-colors whitespace-nowrap"
          aria-label="Appel rapide 10 min"
        >
          Appel 10 min
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[70] md:hidden">
        <div className="flex gap-2 p-3 bg-primary/95 border-t border-white/10 shadow-[0_-6px_18px_rgba(0,0,0,0.35)]">
          <Link
            href={siteConfig.cta.primary.href}
            className="flex-1 bg-action px-4 py-3 text-center text-sm font-semibold text-white rounded-md transition-colors hover:bg-action-strong min-h-[44px] flex items-center justify-center"
            aria-label={siteConfig.cta.primary.label}
          >
            {siteConfig.cta.primary.label}
          </Link>
          <Link
            href="/contact"
            className="flex-1 border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white rounded-md transition-colors hover:border-white/40 min-h-[44px] flex items-center justify-center"
            aria-label="Appel rapide 10 min"
          >
            Appel
          </Link>
        </div>
      </div>
    </>
  );
}
