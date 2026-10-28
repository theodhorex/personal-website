"use client";

export function HeroDiagram({ className }: { className?: string }) {
  return (
    <figure
      aria-label="Figure 01: Distributed State Pipeline technical schematic"
      className={`hero-diagram-wrap relative w-full select-none ${className ?? ""}`}
    >
      <div className="hero-diagram-parallax rounded-xs border border-line bg-panel p-3 sm:p-4 lg:p-5 [@media(max-height:720px)]:p-3 [@media(max-height:720px)]:pb-2.5">
        {/* Technical Header / Figure Metadata */}
        <div className="mb-2.5 [@media(max-height:720px)]:mb-2 flex items-center justify-between border-b border-line/60 pb-2 [@media(max-height:720px)]:pb-1.5 font-mono text-[9.5px] sm:text-[10.5px] uppercase tracking-wider text-muted overflow-hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="font-bold text-ink shrink-0">FIG. 01</span>
            <span className="text-line shrink-0" aria-hidden="true">
              /
            </span>
            <span className="truncate whitespace-nowrap">DISTRIBUTED STATE PIPELINE</span>
          </div>
          <span className="hidden lg:inline text-muted shrink-0 text-[10px] pl-2">ILLUSTRATIVE</span>
        </div>

        {/* Inline Technical SVG Schematic */}
        <svg
          viewBox="0 0 520 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-ink"
          aria-hidden="true"
        >
          {/* Subtle Background Guide Grid Lines (Hairline) */}
          <line x1="20" y1="20" x2="500" y2="20" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="20" y1="115" x2="500" y2="115" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="20" y1="210" x2="500" y2="210" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="160" y1="10" x2="160" y2="220" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="360" y1="10" x2="360" y2="220" stroke="var(--line)" strokeWidth="0.75" strokeDasharray="3 3" />

          {/* Connected Bus Line (1.5px solid monochrome) */}
          <path
            d="M 120 115 L 200 115 L 200 70 L 320 70 L 320 115 L 400 115"
            stroke="var(--ink)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />

          {/* Animated Data Stream Line (runs along the bus) */}
          <path
            d="M 120 115 L 200 115 L 200 70 L 320 70 L 320 115 L 400 115"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="6 20"
            className="hero-data-flow"
          />

          {/* Secondary Branch Line */}
          <path
            d="M 260 70 L 260 160 L 360 160"
            stroke="var(--ink)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.4"
          />

          {/* Node 01: Client Engine */}
          <rect
            x="20"
            y="80"
            width="100"
            height="70"
            rx="2"
            stroke="var(--ink)"
            strokeWidth="1.5"
            fill="var(--bg-2)"
          />
          <text x="30" y="102" fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.08em">
            NODE_01
          </text>
          <text x="30" y="120" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.05em">
            CLIENT_UI
          </text>
          <text x="30" y="136" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="7">
            NEXT.JS 16
          </text>

          {/* Node 02: Execution & Relay */}
          <rect
            x="200"
            y="35"
            width="120"
            height="70"
            rx="2"
            stroke="var(--ink)"
            strokeWidth="1.5"
            fill="var(--bg-2)"
          />
          <text x="210" y="57" fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.08em">
            ROUTING_RELAY
          </text>
          <text x="210" y="75" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.05em">
            VIEM / PERMIT2
          </text>
          <text x="210" y="91" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="7">
            SYNC
          </text>

          {/* Node 03: Consensus & State (Has the Single Accent Indicator) */}
          <rect
            x="400"
            y="80"
            width="100"
            height="70"
            rx="2"
            stroke="var(--ink)"
            strokeWidth="1.5"
            fill="var(--bg-2)"
          />
          <text x="410" y="102" fill="var(--ink)" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.08em">
            STATE_EVM
          </text>
          <text x="410" y="120" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.05em">
            ON-CHAIN LOGS
          </text>
          <text x="410" y="136" fill="var(--accent)" fontFamily="var(--font-mono)" fontSize="7" fontWeight="600">
            FINALIZED
          </text>

          {/* The ONE Accent Point (Pulsing telemetry beacon) */}
          <circle cx="484" cy="98" r="3.5" fill="var(--accent)" />
          <circle cx="484" cy="98" r="7" stroke="var(--accent)" strokeWidth="1" opacity="0.6" className="hero-accent-pulse" />

          {/* Node 04 Sub-branch: Indexer */}
          <rect
            x="360"
            y="145"
            width="90"
            height="32"
            rx="2"
            stroke="var(--line)"
            strokeWidth="1.5"
            fill="var(--bg)"
          />
          <text x="370" y="165" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="0.05em">
            RUST_INDEXER
          </text>
        </svg>

        {/* Technical Footer Telemetry Bar */}
        <div className="mt-2.5 [@media(max-height:720px)]:mt-1.5 flex items-center justify-between border-t border-line/60 pt-2 [@media(max-height:720px)]:pt-1.5 font-mono text-[9px] sm:text-[10px] text-muted">
          <span>CLIENT</span>
          <span className="text-muted">RELAY</span>
          <span className="font-semibold text-accent">CHAIN</span>
        </div>
      </div>

      <style>{`
        @keyframes heroDataFlow {
          0% { stroke-dashoffset: 52; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes heroAccentPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 0.3; }
        }
        .hero-data-flow {
          animation: heroDataFlow 2.4s linear infinite;
        }
        .hero-accent-pulse {
          transform-origin: 484px 98px;
          animation: heroAccentPulse 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .hero-diagram-parallax {
          transform: translate3d(
            calc(var(--px, 0) * -12px),
            calc(var(--py, 0) * -8px),
            0
          );
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-data-flow,
          .hero-accent-pulse {
            animation: none !important;
          }
          .hero-diagram-parallax {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </figure>
  );
}
