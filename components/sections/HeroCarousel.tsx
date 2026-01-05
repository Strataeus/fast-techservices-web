/**
 * Hero Carousel Component - Multi-slide hero section
 * CarServ-style carousel: 2-3 slides with smooth transitions
 * 
 * Slides:
 * 1. Dépannage premium (ponts/compresseurs/cabines)
 * 2. FAST Remote diagnostic visio
 * 3. (Optional) TERRAIN→PREUVE→VERDICT philosophy
 * 
 * Uses HeroSection component for each slide's content
 * Adds carousel navigation (prev/next, auto-rotate)
 */

"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { colors, spacing } from "@/lib/design/tokens";

interface Slide {
  id: string;
  headline: string;
  subheadline: string;
  backgroundImage: string;
}

const slides: Slide[] = [
  {
    id: "slide-1",
    headline: "Dépannage premium d'équipements de garage",
    subheadline:
      "Ponts élévateurs, compresseurs d'air, cabines de peinture, stations de lavage. Expertise mécatronique sur site ou à distance (FAST Remote).",
    backgroundImage: "/hero/home/hero.webp",
  },
  {
    id: "slide-2",
    headline: "FAST Remote — Diagnostic à distance en visio",
    subheadline:
      "Pas besoin d'attendre une intervention. Connectez-vous en visio et obtenez un diagnostic clair : prochain pas, coûts, timeline. Réponse sous 4h ouvrées.",
    backgroundImage: "/hero/home/hero.webp",
  },
  {
    id: "slide-3",
    headline: "Terrain → Preuve → Verdict",
    subheadline:
      "Pas de preuve = pas fait. Chaque intervention est documentée avec mesures, photos et tests de sortie. Vous recevez un dossier clair, défendable et opposable.",
    backgroundImage: "/hero/home/hero.webp",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const currentSlide = slides[currentIndex];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate]);

  const goToPrevious = () => {
    setAutoRotate(false);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setAutoRotate(false);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setAutoRotate(false);
    setCurrentIndex(index);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Carousel Slides */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Current Slide */}
        <div
          key={currentSlide.id}
          style={{
            animation: "fadeIn 0.6s ease-in-out",
          }}
        >
          <HeroSection
            headline={currentSlide.headline}
            subheadline={currentSlide.subheadline}
            backgroundImage={currentSlide.backgroundImage}
            showSLA={currentIndex === 0} // Show SLA on first slide only
            showSecondaryButton={currentIndex === 0}
          />
        </div>

        {/* Prev Button */}
        <button
          onClick={goToPrevious}
          style={{
            position: "absolute",
            left: spacing[4],
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 50,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "none",
            color: colors.white,
            fontSize: "2rem",
            padding: `${spacing[2]} ${spacing[3]}`,
            borderRadius: "0.375rem",
            cursor: "pointer",
            transition: "background-color 150ms ease-in-out",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(0, 0, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(0, 0, 0, 0.5)";
          }}
          aria-label="Slide précédent"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          style={{
            position: "absolute",
            right: spacing[4],
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 50,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "none",
            color: colors.white,
            fontSize: "2rem",
            padding: `${spacing[2]} ${spacing[3]}`,
            borderRadius: "0.375rem",
            cursor: "pointer",
            transition: "background-color 150ms ease-in-out",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(0, 0, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "rgba(0, 0, 0, 0.5)";
          }}
          aria-label="Slide suivant"
        >
          ›
        </button>
      </div>

      {/* Carousel Indicators (Dots) */}
      <div
        style={{
          position: "absolute",
          bottom: spacing[4],
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          gap: spacing[2],
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentIndex === index ? "24px" : "12px",
              height: "12px",
              borderRadius: "6px",
              backgroundColor:
                currentIndex === index
                  ? colors.cyan[500]
                  : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 300ms ease-in-out",
            }}
            aria-label={`Aller à slide ${index + 1}`}
            aria-current={currentIndex === index}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
