"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Compact closing footer for the contact scene. The year is initialised as a
 * static string — identical on server and client, so no hydration mismatch —
 * and corrected to the real current year in a client effect.
 */
export function ContactFooter({ name = "Theodhore" }: { name?: string }) {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    // Async so hydration finishes first (repo lint forbids sync setState in effects).
    const t = window.setTimeout(() => setYear(String(new Date().getFullYear())), 0);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <footer className="border-line mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t pt-4 md:mt-12">
      <p className="font-mono text-[11px] lowercase tracking-widest text-muted">
        {name.toLowerCase()} © {year}
      </p>
      <a
        href="#hero"
        className="group inline-flex cursor-pointer items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors duration-300 hover:text-ink"
      >
        back to top
        <ArrowUp
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1"
        />
      </a>
    </footer>
  );
}
