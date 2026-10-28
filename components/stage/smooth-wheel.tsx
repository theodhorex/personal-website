"use client";

import { useEffect } from "react";

const LINE_PX = 32; // wheel deltas reported in lines
const EASING = 0.14; // fraction of the remaining distance covered per frame
const NOTCH_MIN = 40; // smaller deltas are trackpads/precision devices: left native

/**
 * Eases stepped mouse-wheel scrolling (the 100px-per-notch jumps that read as
 * stiff) into a short glide. Trackpads, touch, keyboard and the scrollbar keep
 * their native behaviour, and it stays off under reduced motion.
 */
export function SmoothWheel() {
  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceQuery.matches) return;

    let target = window.scrollY;
    let current = window.scrollY;
    let raf = 0;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const frame = () => {
      const remaining = target - current;
      if (Math.abs(remaining) < 0.5) {
        current = target;
        window.scrollTo({ top: current, behavior: "instant" });
        raf = 0;
        return;
      }
      current += remaining * EASING;
      window.scrollTo({ top: current, behavior: "instant" });
      raf = requestAnimationFrame(frame);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented) return; // pinch-zoom or already handled
      const el = e.target as HTMLElement | null;
      if (el?.closest("textarea, select, [data-native-scroll]")) return;
      const delta = e.deltaMode === 1 ? e.deltaY * LINE_PX : e.deltaY;
      if (e.deltaMode === 0 && Math.abs(delta) < NOTCH_MIN) return;

      e.preventDefault();
      if (!raf) {
        current = window.scrollY;
        target = current;
      }
      target = Math.min(maxScroll(), Math.max(0, target + delta));
      if (!raf) raf = requestAnimationFrame(frame);
    };

    // Keep in sync when something else moves the page (keyboard, scrollbar, anchors).
    const onScroll = () => {
      if (!raf) {
        current = window.scrollY;
        target = current;
      }
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      current = window.scrollY;
      target = current;
    };
    const onReduceChange = () => {
      if (reduceQuery.matches) stop();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", stop, { passive: true });
    window.addEventListener("pointerdown", stop, { passive: true });
    reduceQuery.addEventListener("change", onReduceChange);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", stop);
      window.removeEventListener("pointerdown", stop);
      reduceQuery.removeEventListener("change", onReduceChange);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
