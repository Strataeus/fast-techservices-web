/**
 * Dark Mode / Theme Toggle
 * Simple theme switcher with localStorage persistence
 */

/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { colors } from "@/lib/design/tokens";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Apply theme helper - moved outside component
function applyThemeToDOM(newTheme: Theme) {
  const root = document.documentElement;
  if (newTheme === "dark") {
    root.style.colorScheme = "dark";
    root.classList.add("dark-mode");
  } else {
    root.style.colorScheme = "light";
    root.classList.remove("dark-mode");
  }
  localStorage.setItem("theme", newTheme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (prefersDark ? "dark" : "light");

    setThemeState(initialTheme);
    applyThemeToDOM(initialTheme);
    setIsMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      applyThemeToDOM(newTheme);
      return newTheme;
    });
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    applyThemeToDOM(newTheme);
  }, []);

  // Prevent hydration mismatch
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

/**
 * Theme Toggle Button
 */

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        background: "none",
        border: "none",
        padding: "0.5rem",
        cursor: "pointer",
        fontSize: "1.25rem",
        color: colors.slate[100],
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.375rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colors.slate[800];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

/**
 * Color Scheme CSS variables
 * These override colors based on light/dark mode
 */

export const themeStyles = `
  :root {
    --color-background: ${colors.slate[900]};
    --color-surface: ${colors.slate[800]};
    --color-text: ${colors.slate[100]};
    --color-text-secondary: ${colors.slate[400]};
    --color-border: ${colors.slate[700]};
    --color-accent: ${colors.cyan[600]};
  }

  .dark-mode {
    --color-background: ${colors.slate[900]};
    --color-surface: ${colors.slate[800]};
    --color-text: ${colors.slate[100]};
    --color-text-secondary: ${colors.slate[400]};
    --color-border: ${colors.slate[700]};
    --color-accent: ${colors.cyan[600]};
  }

  @media (prefers-color-scheme: light) {
    :root:not(.dark-mode) {
      --color-background: ${colors.slate[50]};
      --color-surface: ${colors.slate[100]};
      --color-text: ${colors.slate[900]};
      --color-text-secondary: ${colors.slate[600]};
      --color-border: ${colors.slate[200]};
      --color-accent: ${colors.cyan[600]};
    }
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
  }
`;

/**
 * Theme-aware color getter
 */

export function getThemeColor(
  darkColor: string,
  lightColor: string,
  isDark: boolean = true
): string {
  return isDark ? darkColor : lightColor;
}

/**
 * Theme-aware component wrapper
 */

interface ThemeAwareProps {
  darkBg?: string;
  lightBg?: string;
  darkText?: string;
  lightText?: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function ThemeAware({
  darkBg = colors.slate[900],
  lightBg = colors.slate[50],
  darkText = colors.slate[100],
  lightText = colors.slate[900],
  children,
  className,
  style,
}: ThemeAwareProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={className}
      style={{
        backgroundColor: isDark ? darkBg : lightBg,
        color: isDark ? darkText : lightText,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * System preference listener hook
 */

export function useSystemThemePreference() {
  const [preference, setPreference] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const pref = mediaQuery.matches ? "dark" : "light";
    setPreference(pref);

    const handleChange = (e: MediaQueryListEvent) => {
      setPreference(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return preference;
}

/**
 * Sync theme with system preference hook
 */

export function useSyncSystemTheme() {
  const { setTheme } = useTheme();
  const preference = useSystemThemePreference();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (!stored) {
      // Only auto-sync if user hasn't manually set a preference
      setTheme(preference);
    }
  }, [preference, setTheme]);
}
