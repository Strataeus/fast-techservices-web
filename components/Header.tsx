 "use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-primary/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90"
        >
          FAST TECH SERVICES
        </Link>
        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-6 md:flex">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/fast-remote"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
              >
                FAST Remote
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/methode"
                className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
              >
                Méthode
              </Link>
            </li>
            <li>
              <Link
                href="/preuves"
                className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
              >
                Preuves
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden md:block">
            <Button href="/fast-remote" variant="primary">
              Démarrer FAST Remote
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-primary/95 px-4 pb-4 pt-2 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
          >
            Accueil
          </Link>
          <Link
            href="/fast-remote"
            className="text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
          >
            FAST Remote
          </Link>
          <Link
            href="/services"
            className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
          >
            Services
          </Link>
          <Link
            href="/methode"
            className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
          >
            Méthode
          </Link>
          <Link
            href="/preuves"
            className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
          >
            Preuves
          </Link>
          <Link
            href="/contact"
            className="text-sm text-gray-300 transition-colors hover:text-accent-soft"
          >
            Contact
          </Link>
          <div className="mt-3 pt-3 border-t border-white/10">
            <Link href="/fast-remote" className="btn btn-primary w-full inline-block text-center">
              Démarrer FAST Remote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
