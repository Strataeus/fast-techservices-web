"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroVideoProps {
  poster: string;
  webmSrc?: string;
  mp4Src?: string;
  mobilePoster?: string;
  mobileWebmSrc?: string;
  mobileMp4Src?: string;
  alt: string;
  overlayStrength?: number;
}

export default function HeroVideo({
  poster,
  webmSrc,
  mp4Src,
  alt,
  overlayStrength = 0.7,
}: HeroVideoProps) {
  const [allowVideo, setAllowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (
      navigator as { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const saveData = Boolean(connection?.saveData);
    const slowConnection =
      connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(mobileQuery.matches);
    updateMobile();

    const timer = window.setTimeout(() => {
      setAllowVideo(!reduceMotion && !saveData && !slowConnection);
    }, 0);

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", updateMobile);
    } else {
      mobileQuery.addListener(updateMobile);
    }

    return () => {
      window.clearTimeout(timer);
      if (mobileQuery.removeEventListener) {
        mobileQuery.removeEventListener("change", updateMobile);
      } else {
        mobileQuery.removeListener(updateMobile);
      }
    };
  }, []);

  const resolvedPoster = isMobile && mobilePoster ? mobilePoster : poster;
  const resolvedWebm = isMobile && mobileWebmSrc ? mobileWebmSrc : webmSrc;
  const resolvedMp4 = isMobile && mobileMp4Src ? mobileMp4Src : mp4Src;

  return (
    <div className="absolute inset-0">
      {allowVideo && (resolvedWebm || resolvedMp4) ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={resolvedPoster}
          aria-hidden="true"
        >
          {resolvedWebm ? <source src={resolvedWebm} type="video/webm" /> : null}
          {resolvedMp4 ? <source src={resolvedMp4} type="video/mp4" /> : null}
        </video>
      ) : (
        <Image
          src={resolvedPoster}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"
        style={{ opacity: overlayStrength }}
      />
      <div className="absolute inset-0 tech-grid opacity-25" />
    </div>
  );
}
