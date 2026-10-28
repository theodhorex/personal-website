"use client";

import { useReducedMotion } from "@/components/stage/use-reduced-motion";
import { useEffect, useRef, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const REACH_PX = 190; // distance at which the magnet stops pulling
const MAX_SHIFT = 16; // px the button may drift toward the cursor
const NOTE_MS = 2200;

interface EmailActionsProps {
  email: string;
  className?: string;
}

/** execCommand fallback copy for browsers without the async clipboard API. */
function copyText(text: string): boolean {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  ta.remove();
  return ok;
}

export function EmailActions({ email, className }: EmailActionsProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const noteTimer = useRef(0);
  const reduce = useReducedMotion();
  const [note, setNote] = useState("");
  const [noteBad, setNoteBad] = useState(false);

  /* Magnetic pull: the mailto button drifts toward the pointer inside the
     zone and springs back on leave. rAF-throttled; fine pointers only. */
  useEffect(() => {
    const zone = zoneRef.current;
    const link = linkRef.current;
    if (!zone || !link || reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let raf = 0;
    let latest: PointerEvent | null = null;

    const apply = () => {
      raf = 0;
      if (!latest) return;
      const lr = link.getBoundingClientRect();
      const dx = latest.clientX - (lr.left + lr.width / 2);
      const dy = latest.clientY - (lr.top + lr.height / 2);
      const gap = Math.hypot(dx, dy);
      const pull = Math.max(0, 1 - gap / REACH_PX);
      const ox = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, dx * 0.35)) * pull;
      const oy = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, dy * 0.35)) * pull;
      link.style.transform = `translate3d(${ox.toFixed(1)}px, ${oy.toFixed(1)}px, 0)`;
    };

    const onMove = (e: PointerEvent) => {
      latest = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      latest = null;
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      link.style.transform = "translate3d(0, 0, 0)";
    };

    zone.addEventListener("pointermove", onMove, { passive: true });
    zone.addEventListener("pointerleave", onLeave);
    return () => {
      zone.removeEventListener("pointermove", onMove);
      zone.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduce]);

  useEffect(
    () => () => {
      window.clearTimeout(noteTimer.current);
    },
    [],
  );

  const copyEmail = async () => {
    window.clearTimeout(noteTimer.current);
    const previous = document.activeElement as HTMLElement | null;
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      ok = copyText(email);
    }
    previous?.focus?.(); // the execCommand fallback steals focus
    setNote(ok ? "Copied" : "Copy failed");
    setNoteBad(!ok);
    noteTimer.current = window.setTimeout(() => {
      setNote("");
      setNoteBad(false);
    }, NOTE_MS);
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center",
        className,
      )}
    >
      {/* Oversized hit zone (-m/p) so the magnet engages before hover. */}
      <div ref={zoneRef} className="relative w-full sm:w-auto -m-2 p-2 sm:-m-3 sm:p-3">
        <a
          ref={linkRef}
          href={`mailto:${email}`}
          className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-accent px-5 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-on-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none sm:w-auto"
        >
          email me
          <ArrowUpRight aria-hidden="true" strokeWidth={2} className="size-4" />
        </a>
      </div>

      <div className="relative w-full sm:w-auto">
        <button
          type="button"
          onClick={copyEmail}
          className="w-full cursor-pointer rounded-md border border-line px-4 py-3 font-mono text-xs uppercase tracking-wider text-muted transition-[border-color,color] duration-300 hover:border-ink hover:text-ink sm:w-auto"
        >
          Copy email
        </button>
        <p
          aria-live="polite"
          className={cn(
            "absolute right-0 top-full z-10 mt-2 whitespace-nowrap rounded border border-line bg-panel px-2.5 py-1.5 font-mono text-[11px] transition-opacity duration-300",
            note ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "mr-1.5 inline-block size-1.5 translate-y-[-1px]",
              noteBad ? "bg-coral" : "bg-accent",
            )}
          />
          {note}
        </p>
      </div>
    </div>
  );
}
