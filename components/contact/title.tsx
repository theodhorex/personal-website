"use client";

import { useEffect, useRef } from "react";

import { usePointerVars } from "@/components/stage/use-pointer";

const WDTH = 110; // fixed font-variation wdth (animating the font axis forces re-shaping)
const TINY_OFFSET = 8; // px a letter may lift at the pointer
const REST_OPACITY = 0.68; // letters brighten to 1 near the pointer
const EASE = "cubic-bezier(0.22,1,0.36,1)";

interface ContactTitleProps {
  line1: string;
  line2: string;
}

/**
 * Giant display title whose letters brighten and lift toward the cursor
 * (transform and opacity only). Coordinates come from usePointerVars (--mx/--my on this same
 * element), so the update runs through one rAF-throttled writer. Letters are
 * decorative; the h2 exposes the full text to assistive tech. With reduced
 * motion or a coarse pointer the letters stay at rest.
 */
export function ContactTitle({ line1, line2 }: ContactTitleProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  usePointerVars(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const letters = lettersRef.current;
    const last = letters.map(() => -1);
    let raf = 0;

    const apply = () => {
      raf = 0;
      const raw = root.style.getPropertyValue("--mx");
      const mx = parseFloat(raw); // NaN before the first pointermove
      if (Number.isNaN(mx)) return;

      // Read every rect first, then write, to avoid layout thrash.
      const rb = root.getBoundingClientRect();
      const centers = letters.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return r.left - rb.left + r.width / 2;
      });
      const reach = Math.max(160, rb.width * 0.24);
      letters.forEach((el, i) => {
        if (!el) return;
        const t = Math.max(0, 1 - Math.abs(mx - centers[i]) / reach);
        const step = Math.round(t * 20); // quantised so we only write on visible change
        if (last[i] !== step) {
          last[i] = step;
          el.style.transform = `translateY(${(-t * TINY_OFFSET).toFixed(1)}px)`;
          el.style.opacity = (REST_OPACITY + t * (1 - REST_OPACITY)).toFixed(2);
        }
      });
    };

    const onMove = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const reset = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      letters.forEach((el, i) => {
        last[i] = -1;
        if (!el) return;
        el.style.transform = "translateY(0px)";
        el.style.opacity = String(REST_OPACITY);
      });
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", reset);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  let letterIndex = 0;

  const renderLine = (text: string, muted: boolean) => (
    <span aria-hidden="true" className={muted ? "block text-muted/80" : "block"}>
      {text.split("").map((ch, i) => {
        if (ch === " ") {
          return <span key={`s-${i}`}> </span>;
        }
        const k = letterIndex++;
        return (
          <span
            key={k}
            ref={(el) => {
              lettersRef.current[k] = el;
            }}
            className="inline-block transition-[transform,opacity] duration-500"
            style={{
              fontVariationSettings: `"wdth" ${WDTH}`,
              opacity: REST_OPACITY,
              transitionTimingFunction: EASE,
            }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );

  return (
    <div ref={rootRef}>
      <h2
        aria-label={`${line1} ${line2}`}
        className="font-display text-[clamp(2.75rem,10.5vw,8.25rem)] font-black leading-[0.92] tracking-tight [font-variation-settings:'wdth'_80]"
      >
        {renderLine(line1, false)}
        {renderLine(line2, true)}
      </h2>
    </div>
  );
}
