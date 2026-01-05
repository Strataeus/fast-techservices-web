/**
 * Design System Tokens - FAST Tech Services Premium
 * 
 * Doctrine: Minimal, coherent, reusable.
 * Dark graphite base + cyan/blue accent.
 * Performance-first: CSS-friendly, no JS overhead.
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors = {
  // Primary: Dark graphite (premium, professional, accessible)
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },

  // Accent: Cyan/Blue (energy, trust, call-to-action)
  cyan: {
    50: "#ecf9ff",
    100: "#cff0ff",
    200: "#a5e7ff",
    300: "#75deff",
    400: "#00d9ff",
    500: "#00d4ff", // Primary accent
    600: "#00b8d4",
    700: "#0099b0",
    800: "#00768c",
    900: "#005568",
  },

  // Status colors (minimal, semantic)
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",

  // Utility
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
};

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  // Font stacks (system fonts for performance, no web fonts)
  fontFamily: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "'Courier New', Courier, monospace",
  },

  // Font sizes (responsive scale)
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights (for readability)
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
};

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: "0",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
};

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const radius = {
  none: "0",
  sm: "0.25rem",   // 4px (sharp)
  md: "0.375rem", // 6px (subtle)
  lg: "0.5rem",    // 8px (buttons/cards)
  xl: "1rem",      // 16px (large cards)
  full: "9999px",  // Fully rounded (pills)
};

// ============================================================================
// SHADOWS (minimal, performant)
// ============================================================================

export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

// ============================================================================
// BREAKPOINTS (mobile-first)
// ============================================================================

export const breakpoints = {
  sm: "640px",   // iPhone 12+
  md: "768px",   // iPad
  lg: "1024px",  // Laptop
  xl: "1280px",  // Desktop
  "2xl": "1536px", // Ultra-wide
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  tooltip: 500,
  notification: 600,
};

// ============================================================================
// GRADIENTS (brand identity)
// ============================================================================

export const gradients = {
  cyanToBluePrimary: "linear-gradient(135deg, #00d4ff 0%, #3b82f6 100%)",
  cyanToBlueLight: "linear-gradient(135deg, #a5e7ff 0%, #93c5fd 100%)",
  darkSlate: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
  heroOverlay: "linear-gradient(180deg, rgba(15, 23, 42, 0.7) 0%, rgba(15, 23, 42, 0.3) 100%)",
};

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  fast: "150ms ease-in-out",
  normal: "300ms ease-in-out",
  slow: "500ms ease-in-out",
  smooth: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  bounce: "400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
};

// ============================================================================
// ANIMATION KEYFRAMES (CSS-in-JS friendly)
// ============================================================================

export const animations = {
  fadeIn: `@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }`,
  slideUp: `@keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }`,
  pulse: `@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }`,
  shimmer: `@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }`,
  glow: `@keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(0, 212, 255, 0.3); }
    50% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.6); }
  }`,
  ctaPulse: `@keyframes ctaPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 212, 255, 0.7); }
    50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0, 212, 255, 0); }
  }`,
};

// ============================================================================
// COMPLETE DESIGN SYSTEM EXPORT
// ============================================================================

export const designSystem = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  gradients,
  breakpoints,
  zIndex,
  transitions,
  animations,
};
