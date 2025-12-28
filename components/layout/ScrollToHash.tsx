"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(hash: string) {
  if (!hash) {
    return;
  }

  const id = hash.replace("#", "");
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => scrollToHash(window.location.hash);

    const timer = window.setTimeout(handle, 0);
    window.addEventListener("hashchange", handle);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", handle);
    };
  }, [pathname]);

  return null;
}
