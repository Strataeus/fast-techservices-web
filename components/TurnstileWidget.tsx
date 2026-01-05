/**
 * Turnstile Captcha Component
 * Cloudflare's lightweight CAPTCHA (better UX than Google reCAPTCHA)
 * Requires NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local
 */

"use client";

import { Turnstile } from "@marsidev/react-turnstile";
import { colors } from "@/lib/design/tokens";

interface TurnstileWidgetProps {
  onToken: (token: string) => void;
  onError?: () => void;
}

export function TurnstileWidget({ onToken, onError }: TurnstileWidgetProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    console.warn(
      "[Turnstile] NEXT_PUBLIC_TURNSTILE_SITE_KEY not configured. CAPTCHA disabled."
    );
    return null;
  }

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        padding: "1rem",
        backgroundColor: colors.slate[50],
        borderRadius: "0.5rem",
        border: `1px solid ${colors.slate[200]}`,
      }}
    >
      <Turnstile
        siteKey={siteKey}
        onSuccess={(token) => {
          onToken(token);
        }}
        onError={() => {
          onError?.();
        }}
        options={{
          theme: "light",
          size: "normal",
          language: "fr",
        }}
      />
      <p
        style={{
          fontSize: "0.75rem",
          color: colors.slate[500],
          marginTop: "0.5rem",
          marginBottom: 0,
        }}
      >
        Protégé par Cloudflare Turnstile
      </p>
    </div>
  );
}
