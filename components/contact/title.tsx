"use client";

import { useEffect, useRef } from "react";

import { usePointerVars } from "@/components/stage/use-pointer";

const BASE_WDTH = 80; // resting font-variation wdth
const WDTH_SPREAD = 70; // extra wdth at the pointer (80 → 150)
const TINY_OFFSET = 4; // px a letter may lift at the pointer
const EASE = "cubic-bezier(0.22,1,0.36,1)";

interface ContactTitleProps {
  line1: string;
  line2: string;
}

/**
 * Giant display title whose letters sharpen (wdth 80 → 150) and lift toward
 * the cursor. Coordinates come from usePointerVars (--mx/--my on this same
 * element), so the update runs through one rAF-throttled writer. Letters are
 * decorative; the h2 exposes the full text to assistive tech. With reduced
 * motion or a coarse pointer the letters stay at their resting width.
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
        const wdth = Math.round(BASE_WDTH + t * WDTH_SPREAD);
        if (Math.abs(last[i] - wdth) > 1) {
          last[i] = wdth;
          el.style.fontVariationSettings = `"wdth" ${wdth}`;
          el.style.transform = `translateY(${(-t * TINY_OFFSET).toFixed(1)}px)`;
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
        el.style.fontVariationSettings = `"wdth" ${BASE_WDTH}`;
        el.style.transform = "translateY(0px)";
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
            className="inline-block transition-[font-variation-settings,transform] duration-500 will-change-[font-variation-settings,transform]"
            style={{
              fontVariationSettings: `"wdth" ${BASE_WDTH}`,
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
