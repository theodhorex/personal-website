"use client";

import { motion } from "framer-motion";

import { DrawnPath, FadeRange, circlePath, type Progress } from "./drawn-path";

// Checkpoints along the release path before the accent "live" point.
const CHECKPOINTS: { x: number; label: string }[] = [
  { x: 120, label: "commit" },
  { x: 240, label: "build" },
  { x: 360, label: "verify" },
];

const LIVE = { x: 470, y: 210 };

/** Chapter 04 — deploy line drawing to the accent "live" point. */
export function DeployLine({
  progress,
  pulse = true,
}: {
  progress: Progress;
  pulse?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 560 420"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <FadeRange progress={progress} from={0.02} to={0.12}>
          <text x={34} y={34} fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            release path
          </text>
        </FadeRange>

        <DrawnPath d={`M 52 202 V 218`} progress={progress} from={0.06} to={0.1} className="stroke-ink/60" />
        <DrawnPath d="M 52 210 H 470" progress={progress} from={0.05} to={0.5} className="stroke-ink" />

        {CHECKPOINTS.map((c, i) => (
          <g key={c.x}>
            <DrawnPath
              d={`M ${c.x} 203 l 7 7 l -7 7 l -7 -7 Z`}
              progress={progress}
              from={0.12 + i * 0.1}
              to={0.17 + i * 0.1}
              className="stroke-ink/70"
            />
            <FadeRange progress={progress} from={0.15 + i * 0.1} to={0.21 + i * 0.1}>
              <text x={c.x} y={236} textAnchor="middle" fontSize={10} className="fill-muted font-mono">
                {c.label}
              </text>
            </FadeRange>
          </g>
        ))}

        {/* The endpoint is the one accent; it pulses when the line arrives */}
        <DrawnPath d={circlePath(LIVE.x, LIVE.y, 6)} progress={progress} from={0.5} to={0.56} className="stroke-accent" />
        {pulse && (
          <motion.circle
            cx={LIVE.x}
            cy={LIVE.y}
            r={12}
            fill="none"
            strokeWidth={1.5}
            className="stroke-accent"
            style={{ transformOrigin: `${LIVE.x}px ${LIVE.y}px` }}
            animate={{ scale: [0.6, 1.5], opacity: [0.9, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
          />
        )}
        <FadeRange progress={progress} from={0.56} to={0.66}>
          <text x={LIVE.x} y={244} textAnchor="middle" fontSize={11} className="fill-accent font-mono" style={{ letterSpacing: "0.2em" }}>
            LIVE
          </text>
        </FadeRange>

        <FadeRange progress={progress} from={0.74} to={0.88}>
          <text x={34} y={396} fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            verify, then ship
          </text>
          <text x={524} y={396} textAnchor="end" fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            fig. 4
          </text>
        </FadeRange>
      </g>
    </svg>
  );
}

export default DeployLine;
