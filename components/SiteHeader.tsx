"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "../lib/site";
import Container from "./Container";

export default function SiteHeader() {
  const [active, setActive] = useState<string>("#top");
  const [open, setOpen] = useState(false);
  const items = useMemo(() => siteConfig.nav, []);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      return;
    }

    // Find all sections - seulement chercher les ancres valides (qui commencent par #)
    const sectionsMap = new Map<string, HTMLElement>();
    items.forEach((item) => {
      // Ne chercher que les ancres CSS valides (ex: #top, #services, #contact)
      // Ignorer les liens vers des pages (ex: /fast-remote)
      if (!item.href.startsWith("#")) {
        return;
      }
      
      const element = document.querySelector(item.href);
      if (element instanceof HTMLElement) {
        sectionsMap.set(item.href, element);
      }
    });

    // If no sections found, don't set up observer
    if (sectionsMap.size === 0) {
      return;
    }

    // Create observer with improved threshold handling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { 
        rootMargin: "-45% 0px -45% 0px", 
        threshold: [0, 0.2, 0.5, 1] 
      }
    );

    // Observe all found sections
    sectionsMap.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isHome, items]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/85 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-white/90 hover:text-accent transition-colors"
        >
          FAST TECH SERVICES
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation">
          {items.map((item) => {
            // Toujours transformer les ancres en routes réelles pour navigation cohérente
            let href = item.href;
            let isActive = false;
            
            // Vérifier si le lien est actif
            if (isHome) {
              // Sur HOME : comparer les chemins
              isActive = pathname === item.href;
            } else {
              // Sur d'autres pages : comparer les chemins
              isActive = pathname === item.href;
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? "text-accent"
                    : "text-gray-300 hover:text-accent-soft"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.cta.primary.href}
            className="btn btn-primary hidden px-4 py-2 text-xs md:inline-flex"
            aria-label={siteConfig.cta.primary.label}
          >
            {siteConfig.cta.primary.label}
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </Container>
      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-primary/95 px-4 pb-4 pt-2 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <Container className="flex flex-col gap-3">
          {items.map((item) => {
            // Sur HOME : garder les routes normales (plus d'ancres en config)
            let href = item.href;
            let isActive = false;
            
            // Vérifier si le lien est actif
            if (isHome) {
              // Sur HOME : comparer les chemins
              isActive = pathname === href;
            } else {
              // Sur d'autres pages : comparer les chemins
              isActive = pathname === href;
            }
            
            return (
              <Link
                key={item.href}
                href={href}
                className={`text-sm transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive ? "text-accent" : "text-gray-300"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={siteConfig.cta.primary.href}
            className="btn btn-primary mt-2 w-full min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen(false)}
            aria-label={siteConfig.cta.primary.label}
          >
            {siteConfig.cta.primary.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
