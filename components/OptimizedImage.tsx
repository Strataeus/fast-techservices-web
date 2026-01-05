/**
 * Image Optimization Component
 * Wrapper for next/image with preset sizes and optimization
 */

"use client";

import Image from "next/image";
import { colors, spacing } from "@/lib/design/tokens";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
  className?: string;
  style?: React.CSSProperties;
  fallback?: React.ReactNode;
}

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  quality = 80,
  sizes,
  objectFit = "cover",
  className,
  style,
  fallback,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <>{fallback}</>;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: colors.slate[800],
        ...style,
      }}
      className={className}
    >
      {isLoading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: colors.slate[800],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "2rem",
              border: `2px solid ${colors.slate[700]}`,
              borderTop: `2px solid ${colors.cyan[600]}`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        style={{
          objectFit,
          width: "100%",
          height: "auto",
          display: isLoading ? "none" : "block",
        }}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}

/**
 * Responsive Image Presets
 */

export const ImagePresets = {
  // Hero images (full width)
  hero: {
    width: 1920,
    height: 1080,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px",
    quality: 85,
  },

  // Section images (container width)
  section: {
    width: 1200,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px",
    quality: 80,
  },

  // Thumbnail/card images
  thumbnail: {
    width: 400,
    height: 300,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
    quality: 75,
  },

  // Service/product images
  service: {
    width: 800,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px",
    quality: 80,
  },

  // Small icons/logos
  icon: {
    width: 200,
    height: 200,
    sizes: "200px",
    quality: 90,
  },

  // Inline/article images
  inline: {
    width: 800,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px",
    quality: 80,
  },
};

/**
 * Image Gallery Component
 */

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3 | 4;
  gap?: string;
}

export function ImageGallery({ images, columns = 3, gap = spacing[4] }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const colsMap = {
    2: "repeat(2, 1fr)",
    3: "repeat(auto-fit, minmax(250px, 1fr))",
    4: "repeat(auto-fit, minmax(200px, 1fr))",
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: colsMap[columns],
          gap,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              cursor: "pointer",
              overflow: "hidden",
              borderRadius: "0.5rem",
            }}
            onClick={() => setSelectedIndex(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              {...ImagePresets.thumbnail}
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Modal isOpen={true} onClose={() => setSelectedIndex(null)}>
          <div style={{ position: "relative", width: "90vw", maxWidth: "900px" }}>
            <OptimizedImage
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              {...ImagePresets.hero}
              objectFit="contain"
            />
            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: spacing[2],
                right: spacing[2],
                backgroundColor: colors.slate[900] + "dd",
                color: colors.slate[100],
                border: "none",
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

/**
 * Simple Modal Component
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: colors.black + "dd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colors.slate[900],
          borderRadius: "0.75rem",
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Lazy-loaded Background Image Component
 */

interface LazyBackgroundImageProps {
  src: string;
  alt: string;
  children: React.ReactNode;
  height?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}

export function LazyBackgroundImage({
  src,
  alt,
  children,
  height = "400px",
  overlay = true,
  overlayColor = colors.black,
  overlayOpacity = 0.5,
}: LazyBackgroundImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height,
        backgroundImage: isLoaded ? `url('${src}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: colors.slate[800],
      }}
    >
      {/* Preload image */}
      <img
        src={src}
        alt={alt}
        style={{ display: "none" }}
        onLoad={() => setIsLoaded(true)}
      />

      {overlay && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
            zIndex: 1,
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>{children}</div>
    </div>
  );
}
