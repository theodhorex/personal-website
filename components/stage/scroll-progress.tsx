"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { useReducedMotion } from "@/components/stage/use-reduced-motion";

/** Thin page-wide reading progress bar pinned to the top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const scaleX = reduce ? scrollYProgress : smooth;
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-accent"
    />
  );
}
