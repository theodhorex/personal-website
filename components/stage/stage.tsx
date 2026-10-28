"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StageProps {
  children: React.ReactNode;
  className?: string;
}

interface SceneInfo {
  id: string;
  label: string;
}

const DEFAULT_SCENES: SceneInfo[] = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Stage({ children, className }: StageProps) {
  const [activeId, setActiveId] = useState<string>("hero");
  const activeIdRef = useRef<string>(activeId);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  const scrollToScene = (id: string, from: "above" | "below" = "above") => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = prefersReduced ? "auto" : "smooth";
    // A scene with rest points opens on one of them (first when entered from
    // above, last when entered from below) so the next key press moves on.
    const stopsEl = el.querySelector<HTMLElement>("[data-stops]");
    const stops = (stopsEl?.dataset.stops ?? "").split(",").map(Number).filter((v) => !Number.isNaN(v));
    if (stopsEl && stops.length > 0) {
      const stop = from === "above" ? stops[0] : stops[stops.length - 1];
      const top = stopsEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (stopsEl.offsetHeight - window.innerHeight) * stop, behavior });
    } else {
      el.scrollIntoView({ behavior, block: "start" });
    }
    if (window.history.pushState) {
      window.history.pushState(null, "", `#${id}`);
    }
    setActiveId(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // A zero-height band at the viewport centre: whichever scene crosses it
        // is active, regardless of scene height (works for the tall pinned one).
        const crossing = entries.find((entry) => entry.isIntersecting);
        if (crossing?.target.id) {
          const id = crossing.target.id;
          setActiveId(id);
          // Keep the URL hash in step with the scene being read.
          const url = id === "hero" ? window.location.pathname + window.location.search : `#${id}`;
          window.history.replaceState(null, "", url);
        }
      },
      {
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    DEFAULT_SCENES.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tagName = target.tagName;
      if (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT" ||
        target.isContentEditable
      ) {
        return;
      }

      const isInteractive =
        tagName === "BUTTON" ||
        tagName === "A" ||
        target.getAttribute("role") === "button";

      const isLeftRight = e.key === "ArrowLeft" || e.key === "ArrowRight";

      if (isInteractive && !isLeftRight) {
        return;
      }

      const currentIdx = DEFAULT_SCENES.findIndex(
        (s) => s.id === activeIdRef.current,
      );
      const safeIdx = currentIdx >= 0 ? currentIdx : 0;

      // Tall scenes keep native scrolling until their edge is reached;
      // left/right always jump between scenes.
      const rect = document
        .getElementById(DEFAULT_SCENES[safeIdx].id)
        ?.getBoundingClientRect();
      const EDGE = 4;
      const moreBelow = !!rect && rect.bottom > window.innerHeight + EDGE;
      const moreAbove = !!rect && rect.top < -EDGE;

      // Scenes with data-stops (the Journey) step through rest points first.
      const stopsEl = document
        .getElementById(DEFAULT_SCENES[safeIdx].id)
        ?.querySelector<HTMLElement>("[data-stops]");
      const isNext = e.key === "ArrowDown" || e.key === " " || e.key === "Spacebar" || e.key === "PageDown";
      const isPrev = e.key === "ArrowUp" || e.key === "PageUp";
      if (stopsEl && (isNext || isPrev)) {
        const stops = (stopsEl.dataset.stops ?? "").split(",").map(Number);
        const wr = stopsEl.getBoundingClientRect();
        const distance = stopsEl.offsetHeight - window.innerHeight;
        const progress = -wr.top / distance;
        const inside = wr.top <= EDGE && wr.bottom >= window.innerHeight - EDGE;
        const eps = 0.02;
        const stop = inside || (wr.top < 0 && wr.bottom > 0)
          ? isNext
            ? stops.find((v) => v > progress + eps)
            : [...stops].reverse().find((v) => v < progress - eps)
          : undefined;
        if (stop !== undefined) {
          e.preventDefault();
          window.scrollTo({
            top: stopsEl.getBoundingClientRect().top + window.scrollY + distance * stop,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          });
          return;
        }
      }

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " " ||
        e.key === "Spacebar" ||
        e.key === "PageDown"
      ) {
        if (e.key !== "ArrowRight" && moreBelow && !stopsEl) return;
        if (safeIdx < DEFAULT_SCENES.length - 1) {
          e.preventDefault();
          scrollToScene(DEFAULT_SCENES[safeIdx + 1].id);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
        if (e.key === "ArrowUp" && moreAbove && !stopsEl) return;
        if (safeIdx > 0) {
          e.preventDefault();
          scrollToScene(DEFAULT_SCENES[safeIdx - 1].id, "below");
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToScene(DEFAULT_SCENES[0].id);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToScene(DEFAULT_SCENES[DEFAULT_SCENES.length - 1].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={cn("relative w-full", className)}>
      {children}

      {/* Floating Dot Navigation (Right edge, hidden < 640px) */}
      <nav
        aria-label="Scenes"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-0.5 p-1 rounded-full border border-line bg-bg-2"
      >
        {DEFAULT_SCENES.map((scene) => {
          const isActive = activeId === scene.id;
          return (
            <a
              key={scene.id}
              href={`#${scene.id}`}
              aria-label={scene.label}
              aria-current={isActive ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToScene(
                  scene.id,
                  DEFAULT_SCENES.findIndex((d) => d.id === scene.id) <
                    DEFAULT_SCENES.findIndex((d) => d.id === activeId)
                    ? "below"
                    : "above",
                );
              }}
              className="group relative flex size-7 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 after:absolute after:-inset-1.5 touch-manipulation"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "block size-2.5 rounded-full border transition-all duration-150",
                  isActive
                    ? "border-accent bg-accent scale-125"
                    : "border-muted bg-transparent group-hover:border-ink group-hover:bg-ink",
                )}
              />
            </a>
          );
        })}
      </nav>

      {/* Floating Helper Button (Bottom right, hidden < 640px and hidden on touch devices) */}
      <div
        role="region"
        aria-label="Stage mode keyboard shortcuts: use arrow keys or space to navigate scenes"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 z-40 hidden sm:[@media(hover:hover)_and_(pointer:fine)]:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-bg-2 text-muted font-mono text-[11px] tracking-wide select-none [@media(hover:none)]:hidden [@media(pointer:coarse)]:hidden"
      >
        <span>Stage mode: → ← Space</span>
      </div>
    </div>
  );
}
