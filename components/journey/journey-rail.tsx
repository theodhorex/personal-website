"use client";

import { cn } from "@/lib/utils";

import { CHAPTERS } from "./chapters";

interface JourneyRailProps {
  active: number;
  onSelect: (index: number) => void;
}

/**
 * Progress rail on the stage edge: a hairline with four labelled dots.
 * Horizontal dots under the stage on small screens, vertical on sm+.
 * Dots are buttons: click/keyboard jumps to that chapter.
 */
export function JourneyRail({ active, onSelect }: JourneyRailProps) {
  return (
    <nav
      aria-label="Journey chapters"
      className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 sm:bottom-auto sm:left-auto sm:right-0 sm:top-1/2 sm:flex-col sm:items-stretch sm:translate-x-0 sm:-translate-y-1/2 sm:gap-1"
    >
      {/* Track hairlines: horizontal on mobile, vertical on desktop */}
      <span
        aria-hidden="true"
        className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-px bg-line sm:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute right-[7px] top-3 bottom-3 hidden w-px bg-line sm:block"
      />
      {CHAPTERS.map((chapter, i) => {
        const isActive = active === i;
        return (
          <button
            key={chapter.id}
            type="button"
            aria-label={`Chapter ${chapter.index}. ${chapter.label}`}
            aria-current={isActive ? "step" : undefined}
            onClick={() => onSelect(i)}
            className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-full p-2 sm:justify-end sm:px-1.5 sm:py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span
              className={cn(
                "hidden font-mono text-[10px] uppercase tracking-[0.22em] transition-colors sm:inline",
                isActive ? "text-ink" : "text-muted group-hover:text-ink",
              )}
            >
              {chapter.label}
            </span>
            <span className="relative z-10 flex size-3 items-center justify-center">
              <span
                aria-hidden="true"
                className={cn(
                  "size-2 rounded-full border transition-colors duration-200",
                  isActive
                    ? "border-accent bg-accent"
                    : "border-muted/70 bg-bg group-hover:border-ink",
                )}
              />
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default JourneyRail;
