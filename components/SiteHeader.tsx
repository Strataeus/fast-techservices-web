"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "../lib/site";
import Container from "./Container";

export default function SiteHeader() {
  const [active, setActive] = useState<string>("#top");
  const [open, setOpen] = useState(false);
  const items = useMemo(() => siteConfig.nav, []);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="#top"
          className="text-xs font-semibold uppercase tracking-[0.35em] text-white/90"
        >
          FAST TECH SERVICES
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                active === item.href
                  ? "text-accent"
                  : "text-gray-300 hover:text-accent-soft"
              }`}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="btn-primary hidden px-4 py-2 text-xs md:inline-flex"
          >
            Demander un devis
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
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 transition-colors hover:text-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="btn-primary mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
        </Container>
      </div>
    </header>
  );
}
