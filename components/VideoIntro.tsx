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
      className="fixed inset-0 z-[90] overflow-hidden bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Introduction FAST Tech Services"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 tech-grid opacity-15" />
      
      {/* Video container with responsive max-width */}
      <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-6xl">
          <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              className="absolute inset-0 h-full w-full object-contain"
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
              {typeof introMedia.home === "object" && "webm" in introMedia.home && introMedia.home.webm ? (
                <source src={String(introMedia.home.webm)} type="video/webm" />
              ) : null}
              {introMedia.home.mp4 ? <source src={introMedia.home.mp4} type="video/mp4" /> : null}
            </video>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 pointer-events-none" />
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
