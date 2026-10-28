export function HeroCursor() {
  return (
    <div
      aria-hidden="true"
      className="hero-cursor-indicator pointer-events-none absolute top-0 left-0 z-20 size-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-transparent opacity-0"
    >
      <style>{`
        .hero-cursor-indicator {
          transform: translate3d(
            calc(var(--mx, -100px) - 5px),
            calc(var(--my, -100px) - 5px),
            0
          );
          transition: transform 0.14s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
          will-change: transform;
        }
        *:hover > .hero-cursor-indicator,
        [data-hero]:hover .hero-cursor-indicator {
          opacity: 1;
        }
        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          .hero-cursor-indicator {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
