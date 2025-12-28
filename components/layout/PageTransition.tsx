"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
  };

  const transition = { duration: 0.3, ease: "easeOut" };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        {...(reduceMotion
          ? { initial: false, animate: { opacity: 1, y: 0 } }
          : {
              initial: "initial",
              animate: "animate",
              exit: "exit",
              variants,
              transition,
            })}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
