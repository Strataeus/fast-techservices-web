"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INTRO_KEY = "fast_intro_seen";
const TOTAL_DURATION_MS = 2800;
const EXIT_DURATION_MS = 500;
const REDUCED_DURATION_MS = 800;

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timersRef = useRef<number[]>([]);
  const skipRef = useRef<HTMLButtonElement>(null);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (sessionStorage.getItem(INTRO_KEY) === "1") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(mediaQuery.matches);

    updateMotion();
    const showTimer = window.setTimeout(() => setVisible(true), 0);
    timersRef.current.push(showTimer);
    sessionStorage.setItem(INTRO_KEY, "1");

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotion);
    } else {
      mediaQuery.addListener(updateMotion);
    }

    return () => {
      clearTimers();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMotion);
      } else {
        mediaQuery.removeListener(updateMotion);
      }
    };
  }, [clearTimers]);

  useEffect(() => {
    if (!visible || typeof window === "undefined") {
      return;
    }

    skipRef.current?.focus();
    clearTimers();

    const heroVideo = document.querySelector<HTMLVideoElement>("[data-hero-video]");
    heroVideo?.load();

    if (reducedMotion) {
      const timer = window.setTimeout(() => {
        setVisible(false);
      }, REDUCED_DURATION_MS);
      timersRef.current.push(timer);
      return;
    }

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, TOTAL_DURATION_MS - EXIT_DURATION_MS);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, TOTAL_DURATION_MS);

    timersRef.current.push(exitTimer, hideTimer);
  }, [clearTimers, reducedMotion, visible]);

  const handleSkip = () => {
    clearTimers();

    if (reducedMotion) {
      setVisible(false);
      return;
    }

    setExiting(true);
    const timer = window.setTimeout(() => setVisible(false), EXIT_DURATION_MS);
    timersRef.current.push(timer);
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`intro-overlay !fixed inset-0 !z-[80] flex items-center justify-center bg-black/80 px-6 text-center transition-[opacity,filter] duration-500 ease-out motion-reduce:transition-none ${
        exiting ? "opacity-0 blur-sm" : "opacity-100 blur-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Introduction FAST Tech Services"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-accent/60 blur-sm motion-safe:animate-[scanline_2.8s_linear_infinite] motion-reduce:opacity-0" />
      <button
        ref={skipRef}
        type="button"
        onClick={handleSkip}
        className="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-200 transition-colors hover:border-accent/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Passer l'introduction"
      >
        Passer
      </button>
      <div className="relative flex flex-col items-center gap-4">
        <span className="text-[0.65rem] uppercase tracking-[0.45em] text-accent/70">
          FAST TECH SERVICES
        </span>
        <div className="relative">
          <div className="glow-text text-5xl font-semibold tracking-[0.4em] text-white sm:text-6xl md:text-7xl">
            FAST
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-full bg-accent/10 blur-2xl motion-safe:animate-pulse motion-reduce:opacity-0" />
        </div>
        <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gray-300">
          Expertise mécatronique
        </span>
      </div>
      <div className="absolute bottom-8 text-[0.65rem] uppercase tracking-[0.5em] text-accent/80">
        TERRAIN → PREUVE → VERDICT
      </div>
    </div>
  );
}
