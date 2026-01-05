/**
 * useScrollAnimation Hook
 * Triggers animations when elements enter viewport
 * Lightweight, performance-optimized
 */

import { useEffect, useRef, useState, RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number; // 0-1, default 0.1
  rootMargin?: string; // default "-50px"
  once?: boolean; // trigger only once, default true
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}): { 
  ref: RefObject<HTMLDivElement | null>; 
  isVisible: boolean 
} {
  const {
    threshold = 0.1,
    rootMargin = "-50px",
    once = true,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
