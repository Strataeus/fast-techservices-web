/**
 * Image Optimization Hooks
 * Utilities for image loading, lazy loading, and srcset generation
 */

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook for lazy loading images with Intersection Observer
 */
export function useLazyImage(ref: React.RefObject<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          setIsLoaded(true);
          observer.unobserve(img);
        }
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isLoaded;
}

/**
 * Hook for generating responsive srcset strings
 */
export function useSrcSet(baseUrl: string, widths: number[] = [320, 640, 960, 1200, 1920]) {
  return useCallback(() => {
    return widths
      .map((width) => {
        // Handle different image sources (local vs external)
        if (baseUrl.startsWith("http")) {
          return `${baseUrl}?w=${width} ${width}w`;
        }
        // For local images, just use the URL as-is
        return `${baseUrl} ${width}w`;
      })
      .join(", ");
  }, [baseUrl, widths]);
}

/**
 * Hook for tracking image load performance
 */
export function useImagePerformance(imageId: string) {
  const startTimeRef = useRef<number | null>(null);

  const reportMetrics = useCallback(() => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
      return;
    }

    const loadTime = Date.now() - startTimeRef.current;

    // Log to analytics or console
    if (typeof window !== "undefined") {
      const gtagFn = (window as Record<string, unknown>).gtag as
        | ((action: string, eventName: string, eventParams: Record<string, unknown>) => void)
        | undefined;
      if (gtagFn) {
        gtagFn("event", "image_load", {
          image_id: imageId,
          load_time_ms: loadTime,
        });
      }
    }

    console.debug(`[Image Performance] ${imageId} loaded in ${loadTime}ms`);
  }, [imageId]);

  return reportMetrics;
}

/**
 * Hook for preloading critical images
 */
export function usePreloadImage(src: string) {
  useEffect(() => {
    if (!src) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;

    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [src]);
}

/**
 * Hook for responsive images with media queries
 */
interface ResponsiveImageConfig {
  mobile: string;
  tablet: string;
  desktop: string;
}

export function useResponsiveImage(config: ResponsiveImageConfig) {
  const [src, setSrc] = useState(config.desktop);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setSrc(config.mobile);
      } else if (width < 1024) {
        setSrc(config.tablet);
      } else {
        setSrc(config.desktop);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => window.removeEventListener("resize", handleResize);
  }, [config]);

  return src;
}

/**
 * Hook for image error handling and retries
 */
export function useImageWithRetry(src: string, maxRetries = 3) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isError, setIsError] = useState(false);
  const retryCountRef = useRef(0);

  const handleError = useCallback(() => {
    if (retryCountRef.current < maxRetries) {
      retryCountRef.current++;
      // Retry by appending a cache-bust parameter
      setCurrentSrc(`${src}?retry=${retryCountRef.current}`);
    } else {
      setIsError(true);
    }
  }, [src, maxRetries]);

  const resetError = useCallback(() => {
    retryCountRef.current = 0;
    setCurrentSrc(src);
    setIsError(false);
  }, [src]);

  return { src: currentSrc, isError, handleError, resetError };
}

/**
 * Hook for image intersection and visibility tracking
 */
export function useImageVisibility(ref: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasBeenVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return { isVisible, hasBeenVisible };
}

/**
 * Hook for background image optimization
 */
export function useBackgroundImageOptimization(imageUrl: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = imageUrl;
  }, [imageUrl]);

  return {
    backgroundImage: isLoaded ? `url('${imageUrl}')` : "none",
    isLoaded,
  };
}
