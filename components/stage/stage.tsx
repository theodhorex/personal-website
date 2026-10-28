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

  const scrollToScene = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
    if (window.history.pushState) {
      window.history.pushState(null, "", `#${id}`);
    }
    setActiveId(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: [0.1, 0.3, 0.6],
        rootMargin: "-10% 0px -10% 0px",
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

      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " " ||
        e.key === "Spacebar"
      ) {
        if (e.key !== "ArrowRight" && moreBelow) return;
        if (safeIdx < DEFAULT_SCENES.length - 1) {
          e.preventDefault();
          scrollToScene(DEFAULT_SCENES[safeIdx + 1].id);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (e.key === "ArrowUp" && moreAbove) return;
        if (safeIdx > 0) {
          e.preventDefault();
          scrollToScene(DEFAULT_SCENES[safeIdx - 1].id);
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
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-3 p-2 rounded-full border border-line bg-bg-2"
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
                scrollToScene(scene.id);
              }}
              className={cn(
                "block w-2.5 h-2.5 rounded-full border border-muted transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
                isActive
                  ? "bg-accent border-accent scale-125"
                  : "bg-transparent hover:border-ink hover:bg-ink",
              )}
            />
          );
        })}
      </nav>

      {/* Floating Helper Button (Bottom right, hidden < 640px) */}
      <div
        role="region"
        aria-label="Stage mode keyboard shortcuts: use arrow keys or space to navigate scenes"
        className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-bg-2 text-muted font-mono text-[11px] tracking-wide select-none"
      >
        <span>Stage mode: → ← Space</span>
      </div>
    </div>
  );
}
