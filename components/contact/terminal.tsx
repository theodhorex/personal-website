"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const LINES = [
  "$ whoami",
  "theodhore — web developer /",
  "web3 engineer",
  "$ cat contact.log",
  "built: defi routing, edge",
  "streaming, event indexing,",
  "solidity tooling. stack:",
  "next.js, typescript,",
  "wagmi / viem, solidity.",
  "$ open mailto:theodhore.dev@gmail.com",
] as const;

const TYPE_MS = 13;

const FULL_TEXT = LINES.join("\n");
const START_DELAY_MS = 350;

/**
 * Small terminal panel that types its greeting line by line, once, when it
 * enters the viewport. Screen readers get the static text instead; with
 * reduced motion the visible text is complete immediately (no typing).
 */
export function ContactTerminal({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        io.disconnect();
        if (reduce) {
          setTyped(FULL_TEXT);
          return;
        }
        let i = 0;
        const tick = () => {
          i += 1;
          setTyped(FULL_TEXT.slice(0, i));
          if (i < FULL_TEXT.length) timer = window.setTimeout(tick, TYPE_MS);
        };
        timer = window.setTimeout(tick, START_DELAY_MS);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [reduce]);

  return (
    <div
      ref={panelRef}
      className={cn("rounded-md border border-line bg-panel", className)}
    >
      <div className="flex items-center justify-between border-line border-b px-4 py-2">
        <span className="font-mono text-[11px] lowercase tracking-widest text-muted">
          contact.log
        </span>
        <span aria-hidden="true" className="font-mono text-[11px] text-muted">
          fig. 04
        </span>
      </div>
      <div className="px-4 py-3">
        {/* Typed copy is decorative; the static text below is what AT reads. */}
        <div
          aria-hidden="true"
          className="min-h-[13rem] whitespace-pre-wrap font-mono text-xs leading-relaxed text-muted"
        >
          {typed}
          {!reduce && typed.length < FULL_TEXT.length && (
            <span className="animate-pulse ml-0.5 inline-block h-3 w-2 translate-y-0.5 bg-accent" />
          )}
        </div>
        <p className="sr-only font-mono text-xs leading-relaxed text-muted">
          {FULL_TEXT}
        </p>
      </div>
    </div>
  );
}
