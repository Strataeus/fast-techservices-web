/**
 * Loading Skeleton Component
 * Performant skeleton loaders for data fetching states
 */

"use client";

import { colors, spacing } from "@/lib/design/tokens";

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: "sm" | "md" | "lg" | "full";
  count?: number;
  animate?: boolean;
}

export function Skeleton({
  width = "100%",
  height = "1rem",
  rounded = "md",
  count = 1,
  animate = true,
}: SkeletonProps) {
  const radiusMap = {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  };

  const skeletonStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor: colors.slate[800],
    borderRadius: radiusMap[rounded],
    marginBottom: spacing[2],
    animation: animate ? "shimmer 2s infinite" : undefined,
    backgroundImage: animate
      ? `linear-gradient(
          90deg,
          ${colors.slate[800]} 25%,
          ${colors.slate[700]} 50%,
          ${colors.slate[800]} 75%
        )`
      : undefined,
    backgroundSize: animate ? "200% 100%" : undefined,
    backgroundPosition: animate ? "200% 0" : undefined,
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={skeletonStyle} />
      ))}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}

/**
 * Skeleton variants for common patterns
 */

export function SkeletonText() {
  return <Skeleton height="0.875rem" count={3} />;
}

export function SkeletonCard() {
  return (
    <div style={{ padding: spacing[4], backgroundColor: colors.slate[800], borderRadius: "0.5rem" }}>
      <Skeleton height="2rem" rounded="lg" />
      <Skeleton height="1rem" count={2} rounded="md" />
    </div>
  );
}

export function SkeletonImage() {
  return <Skeleton width="100%" height="300px" rounded="lg" />;
}

export function SkeletonFormInput() {
  return <Skeleton height="2.5rem" rounded="md" />;
}
