"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "../lib/site";
import Container from "./Container";

type NavItem = (typeof siteConfig.nav)[number];
type SubMenuItem = { label: string; href: string; desc: string };

export default function SiteHeader() {
  const [active, setActive] = useState<string>("#top");
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const items = useMemo(() => siteConfig.nav, []);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Track scroll progress and header shadow
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledAmount = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolledAmount / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(scrolledAmount > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sectionsMap = new Map<string, HTMLElement>();
    items.forEach((item) => {
      if (!item.href.startsWith("#")) {
        return;
      }
      
      const element = document.querySelector(item.href);
      if (element instanceof HTMLElement) {
        sectionsMap.set(item.href, element);
      }
    });

    if (sectionsMap.size === 0) {
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
      { 
        rootMargin: "-45% 0px -45% 0px", 
        threshold: [0, 0.2, 0.5, 1] 
      }
    );

    sectionsMap.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isHome, items]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileSubmenuOpen(null);
  }, [pathname]);

  const hasSubmenu = (item: NavItem): item is NavItem & { submenu: NonNullable<any> } => {
    return "submenu" in item && Array.isArray((item as any).submenu) && (item as any).submenu.length > 0;
  };

  return (
    <>
      {/* Animated progress bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-bright via-accent-gold to-accent-bright z-[51]" 
        style={{ width: `${scrollProgress}%`, transition: "width 0.2s ease-out" }} 
      />
      
      {/* Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" 
            : "border-b border-white/5"
        } bg-primary/95 backdrop-blur-md`}
      >
        <Container className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo - Responsive */}
          <Link
            href="/"
            className="group flex items-center gap-2 transition-all hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-bright/20 to-accent-gold/20 rounded-lg blur group-hover:blur-md transition-all" />
              <span className="relative text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/90 group-hover:text-accent-bright transition-colors">
                <span className="hidden sm:inline">FAST TECH</span>
                <span className="sm:hidden">FAST</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
            {items.map((item) => {
              const isItemActive = pathname === item.href;
              const showSubmenu = hasSubmenu(item);
              
              return (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => showSubmenu && setActiveSubmenu(item.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      isItemActive
                        ? "text-accent-bright"
                        : "text-gray-300 hover:text-accent-bright"
                    }`}
                  >
                    {item.label}
                    {showSubmenu && <span className="ml-1 text-xs">▼</span>}
                    
                    {/* Animated underline */}
                    <span 
                      className={`absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-accent-bright to-accent-gold transition-all duration-300 ${
                        isItemActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>

                  {/* Megamenu Dropdown */}
                  {showSubmenu && (
                    <div
                      className={`absolute left-0 top-full mt-1 bg-gradient-to-b from-primary-dark/98 to-primary-darker/98 rounded-xl border border-accent-gold/30 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-lg transition-all duration-300 min-w-[280px] ${
                        activeSubmenu === item.href
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="p-2 space-y-1">
                        {item.submenu!.map((sub: SubMenuItem) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-3 rounded-lg hover:bg-accent-bright/10 transition-colors group/sub border-l-2 border-transparent hover:border-accent-gold"
                          >
                            <p className="font-semibold text-sm text-accent-bright group-hover/sub:text-white transition-colors">
                              {sub.label}
                            </p>
                            <p className="text-xs text-gray-400 group-hover/sub:text-gray-300 transition-colors mt-0.5">
                              {sub.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right side - CTA + Mobile menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={siteConfig.cta.primary.href}
              className="group relative hidden px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-primary bg-gradient-to-r from-accent-bright to-accent-gold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] lg:inline-flex items-center gap-2"
            >
              <span className="relative z-10">⚡ {siteConfig.cta.primary.label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-bright/0 to-accent-gold/20 rounded-lg group-hover:to-accent-gold/40 transition-all" />
            </Link>

            {/* Mobile Menu Button - Animated Hamburger */}
            <button
              type="button"
              className="lg:hidden inline-flex flex-col items-center justify-center gap-1.5 px-3 py-2 group"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Menu mobile"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span 
                className={`block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : "group-hover:bg-accent-bright"
                }`} 
              />
              <span 
                className={`block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${
                  open ? "opacity-0" : "group-hover:bg-accent-bright"
                }`} 
              />
              <span 
                className={`block w-6 h-0.5 bg-white/80 rounded-full transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : "group-hover:bg-accent-bright"
                }`} 
              />
            </button>
          </div>
        </Container>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden border-t border-white/10 bg-gradient-to-b from-primary/95 to-primary-dark/95 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
            open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <Container className="flex flex-col gap-2 py-4">
            {items.map((item) => {
              const isItemActive = pathname === item.href;
              const showSubmenu = hasSubmenu(item);
              const isSubmenuOpen = mobileSubmenuOpen === item.href;

              return (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => {
                      if (showSubmenu) {
                        setMobileSubmenuOpen(isSubmenuOpen ? null : item.href);
                      } else {
                        setOpen(false);
                      }
                    }}
                    className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      isItemActive
                        ? "bg-accent-bright/10 text-accent-bright border-l-2 border-accent-bright"
                        : "text-gray-300 hover:bg-white/5 border-l-2 border-transparent"
                    }`}
                  >
                    <span className="font-semibold text-sm">{item.label}</span>
                    {showSubmenu && (
                      <span className={`text-xs transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {showSubmenu && isSubmenuOpen && (
                    <div className="mt-1 space-y-1 bg-white/5 rounded-lg p-2 ml-2">
                      {item.submenu!.map((sub: SubMenuItem) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-3 py-2 text-xs rounded hover:bg-accent-bright/20 transition-colors text-gray-300 hover:text-accent-bright"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href={siteConfig.cta.primary.href}
              className="btn btn-primary mt-3 w-full py-3 flex items-center justify-center gap-2 text-sm font-bold"
              onClick={() => setOpen(false)}
            >
              <span>⚡</span> {siteConfig.cta.primary.label}
            </Link>
          </Container>
        </div>
      </header>
    </>
  );
}
