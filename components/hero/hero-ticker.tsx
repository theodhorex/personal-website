"use client";

import { useReducedMotion } from "@/components/stage/use-reduced-motion";
import { useEffect, useState } from "react";


const TECH_ITEMS = [
  "Next.js 16",
  "React",
  "TypeScript",
  "Tailwind v4",
  "Edge runtime",
  "WebSockets",
  "Wagmi / Viem",
  "Solidity",
];

function CountUp({ to }: { to: number }) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(() => (reduce ? to : 0));

  useEffect(() => {
    if (reduce) return;
    const duration = 750;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setVal(Math.round(eased * to));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, reduce]);

  return <span>{reduce ? to : val}</span>;
}

export function HeroTicker({ projectCount }: { projectCount: number }) {
  const techCount = TECH_ITEMS.length;

  return (
    <aside
      aria-label="Technology and production telemetry"
      className="w-full border-t border-line bg-bg-2 select-none"
    >
      <div className="flex h-9 sm:h-10 [@media(max-height:720px)]:h-8 items-center justify-between overflow-hidden">
        {/* Real Data Telemetry Badges (Static Anchors) */}
        <div className="z-10 flex shrink-0 items-center gap-3 border-r border-line bg-bg-2 px-3 sm:px-4 font-mono text-[11px] [@media(max-height:720px)]:text-[10px] uppercase tracking-wider">
          <div className="flex items-center gap-1.5 text-muted">
            <span className="font-bold text-accent">
              <CountUp to={projectCount} />
            </span>
            <span className="hidden sm:inline">CASE STUDIES</span>
          </div>
          <span className="text-line" aria-hidden="true">
            /
          </span>
          <div className="flex items-center gap-1.5 text-muted">
            <span className="font-bold text-ink">
              <CountUp to={techCount} />
            </span>
            <span className="hidden sm:inline">CORE TECHNOLOGIES</span>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)]">
          <div className="hero-ticker-track flex w-max items-center gap-6 font-mono text-[11px] uppercase tracking-widest text-muted hover:[animation-play-state:paused]">
            {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                aria-hidden={i >= TECH_ITEMS.length ? true : undefined}
                className="inline-flex items-center gap-6"
              >
                <span className="hover:text-ink transition-colors">{tech}</span>
                <span className="text-line" aria-hidden="true">
                  {"//"}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroTickerLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-ticker-track {
          animation: heroTickerLoop 28s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-ticker-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
