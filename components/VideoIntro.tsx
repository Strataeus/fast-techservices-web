"use client";

import { useEffect, useRef, useState } from "react";
import { introMedia } from "../lib/content/media";

interface VideoIntroProps {
  enabled?: boolean;
}

export default function VideoIntro({ enabled = false }: VideoIntroProps) {
  const [visible, setVisible] = useState(false);
  const [canPlay, setCanPlay] = useState(true);
  const endTimerRef = useRef<number | null>(null);

  const closeIntro = () => {
    if (endTimerRef.current) {
      window.clearTimeout(endTimerRef.current);
      endTimerRef.current = null;
    }
    setVisible(false);
  };

  useEffect(() => {
    if (!enabled || typeof window === "undefined") {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const showTimer = window.setTimeout(() => {
      setCanPlay(true);
      setVisible(true);
    }, 0);

    return () => {
      window.clearTimeout(showTimer);
      if (endTimerRef.current) {
        window.clearTimeout(endTimerRef.current);
        endTimerRef.current = null;
      }
    };
  }, [enabled]);

  if (!visible || !canPlay) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Introduction FAST Tech Services"
      onClick={closeIntro}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.2),transparent_55%)]" />
      <div className="absolute inset-0 tech-grid opacity-15" />
      <video
        className="relative max-h-[80vh] w-full max-w-3xl rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(0,200,255,0.25)]"
        autoPlay
        muted
        playsInline
        onLoadedMetadata={(event) => {
          const duration = event.currentTarget.duration;
          if (Number.isFinite(duration) && duration > 0) {
            if (endTimerRef.current) {
              window.clearTimeout(endTimerRef.current);
            }
            endTimerRef.current = window.setTimeout(() => {
              closeIntro();
            }, duration * 1000 + 200);
          }
        }}
        onEnded={closeIntro}
        onError={() => {
          setCanPlay(false);
          closeIntro();
        }}
        poster={introMedia.home.poster || undefined}
      >
        {introMedia.home.webm ? (
          <source src={introMedia.home.webm} type="video/webm" />
        ) : null}
        {introMedia.home.mp4 ? (
          <source src={introMedia.home.mp4} type="video/mp4" />
        ) : null}
      </video>
      <button
        type="button"
        onClick={closeIntro}
        className="absolute right-6 top-6 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-200 transition-colors hover:border-accent/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label="Passer l'introduction"
      >
        Passer
      </button>
    </div>
  );
}
