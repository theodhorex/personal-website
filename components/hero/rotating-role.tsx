"use client";

import { useReducedMotion } from "@/components/stage/use-reduced-motion";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = [
  "Full-Stack Developer",
  "Frontend Engineer",
  "Web3 Developer",
];

export function RotatingRole() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <span className="inline-block text-ink">
        Full-Stack Web Developer
      </span>
    );
  }

  return (
    <span className="relative inline-flex h-[1.15em] overflow-hidden align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-accent whitespace-nowrap"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
