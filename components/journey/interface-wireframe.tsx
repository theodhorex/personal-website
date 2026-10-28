"use client";

import { DrawnPath, FadeRange, rrect, type Progress } from "./drawn-path";

const TRAFFIC: number[] = [70, 84, 98];
const NAV: number[] = [96, 116, 136];

/** Chapter 03 — a UI wireframe assembled component by component. */
export function InterfaceWireframe({ progress }: { progress: Progress }) {
  return (
    <svg
      viewBox="0 0 560 420"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {/* Window shell, then the chrome */}
        <DrawnPath d={rrect(56, 44, 448, 300, 6)} progress={progress} from={0.04} to={0.16} className="stroke-ink" />
        <DrawnPath d="M 56 74 H 504" progress={progress} from={0.14} to={0.2} className="stroke-ink/70" />
        {TRAFFIC.map((x, i) => (
          <DrawnPath
            key={x}
            d={rrect(x, 56, 8, 8, 2)}
            progress={progress}
            from={0.18 + i * 0.02}
            to={0.22 + i * 0.02}
            className="stroke-ink/50"
          />
        ))}

        {/* Sidebar and nav items */}
        <DrawnPath d="M 108 74 V 344" progress={progress} from={0.2} to={0.26} className="stroke-ink/70" />
        {NAV.map((y, i) => (
          <DrawnPath
            key={y}
            d={`M 72 ${y} H ${[98, 92, 96][i]}`}
            progress={progress}
            from={0.24 + i * 0.02}
            to={0.28 + i * 0.02}
            className="stroke-ink/40"
          />
        ))}

        {/* Hero banner */}
        <DrawnPath d={rrect(126, 94, 210, 60, 4)} progress={progress} from={0.26} to={0.36} className="stroke-ink/80" />
        <DrawnPath d="M 140 116 H 270" progress={progress} from={0.3} to={0.36} className="stroke-ink/40" />
        <DrawnPath d="M 140 132 H 232" progress={progress} from={0.32} to={0.38} className="stroke-ink/40" />

        {/* Two content blocks */}
        <DrawnPath d={rrect(126, 180, 150, 86, 4)} progress={progress} from={0.34} to={0.42} className="stroke-ink/80" />
        <DrawnPath d="M 140 206 H 234" progress={progress} from={0.38} to={0.44} className="stroke-ink/40" />
        <DrawnPath d="M 140 222 H 206" progress={progress} from={0.4} to={0.46} className="stroke-ink/40" />
        <DrawnPath d={rrect(306, 180, 150, 86, 4)} progress={progress} from={0.4} to={0.48} className="stroke-ink/80" />
        <DrawnPath d="M 320 206 H 414" progress={progress} from={0.44} to={0.5} className="stroke-ink/40" />
        <DrawnPath d="M 320 222 H 380" progress={progress} from={0.46} to={0.52} className="stroke-ink/40" />

        {/* The main action is the single accent */}
        <DrawnPath d={rrect(126, 288, 96, 26, 3)} progress={progress} from={0.5} to={0.58} className="stroke-accent" />
        <FadeRange progress={progress} from={0.56} to={0.64}>
          <text x={174} y={306} textAnchor="middle" fontSize={10} className="fill-accent font-mono" style={{ letterSpacing: "0.18em" }}>
            START
          </text>
        </FadeRange>
        <FadeRange progress={progress} from={0.6} to={0.7}>
          <text x={244} y={306} fontSize={9} className="fill-muted font-mono" style={{ letterSpacing: "0.1em" }}>
            focus stays visible
          </text>
        </FadeRange>

        <FadeRange progress={progress} from={0.72} to={0.86}>
          <text x={36} y={396} fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            next.js 16, one component at a time
          </text>
          <text x={524} y={396} textAnchor="end" fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            fig. 3
          </text>
        </FadeRange>
      </g>
    </svg>
  );
}

export default InterfaceWireframe;
