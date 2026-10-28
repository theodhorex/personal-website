"use client";

import { DrawnPath, FadeRange, circlePath, rrect, type Progress } from "./drawn-path";

/** Chapter 01 — the idea sketch, drawn on paper, self-drawing with scroll. */
export function IdeaSketch({ progress }: { progress: Progress }) {
  const crosses: [number, number][] = [
    [54, 50],
    [506, 50],
    [54, 370],
    [506, 370],
  ];
  const hairlines: [number, number, number][] = [
    [212, 190, 340],
    [212, 204, 300],
    [212, 218, 348],
  ];

  return (
    <svg
      viewBox="0 0 560 420"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawnPath d={rrect(22, 16, 516, 388, 6)} progress={progress} from={0.03} to={0.16} className="stroke-ink/50" />
        {crosses.map(([cx, cy], i) => (
          <DrawnPath
            key={cx + cy}
            d={`M ${cx - 4.5} ${cy} H ${cx + 4.5} M ${cx} ${cy - 4.5} V ${cy + 4.5}`}
            progress={progress}
            from={0.14 + i * 0.012}
            to={0.2 + i * 0.012}
            className="stroke-muted"
          />
        ))}

        {/* What the product is */}
        <DrawnPath d={rrect(196, 148, 168, 104, 4)} progress={progress} from={0.18} to={0.32} className="stroke-ink/80" />
        <DrawnPath d="M 196 170 H 364" progress={progress} from={0.3} to={0.36} className="stroke-ink/80" />
        <FadeRange progress={progress} from={0.36} to={0.46}>
          <text x={280} y={163} textAnchor="middle" fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.18em" }}>
            PRODUCT
          </text>
        </FadeRange>
        {hairlines.map(([x1, y, x2], i) => (
          <DrawnPath
            key={y}
            d={`M ${x1} ${y} H ${x2}`}
            progress={progress}
            from={0.34 + i * 0.02}
            to={0.42 + i * 0.02}
            className="stroke-ink/40"
          />
        ))}

        {/* Who it serves / data it needs / what can go wrong */}
        <DrawnPath d={circlePath(96, 128, 24)} progress={progress} from={0.4} to={0.46} className="stroke-ink/70" />
        <DrawnPath d={circlePath(464, 128, 24)} progress={progress} from={0.45} to={0.51} className="stroke-ink/70" />
        <DrawnPath d={circlePath(96, 312, 24)} progress={progress} from={0.5} to={0.56} className="stroke-ink/70" />
        <FadeRange progress={progress} from={0.44} to={0.52}>
          <text x={96} y={132} textAnchor="middle" fontSize={13} className="fill-ink font-mono">WHO</text>
        </FadeRange>
        <FadeRange progress={progress} from={0.49} to={0.57}>
          <text x={464} y={132} textAnchor="middle" fontSize={13} className="fill-ink font-mono">DATA</text>
        </FadeRange>
        <FadeRange progress={progress} from={0.54} to={0.62}>
          <text x={96} y={316} textAnchor="middle" fontSize={13} className="fill-ink font-mono">RISK</text>
        </FadeRange>

        {/* Leaders into the product box; the WHO arrow is the single accent */}
        <DrawnPath d="M 117 139 L 186 176" progress={progress} from={0.52} to={0.62} className="stroke-accent" />
        <DrawnPath d="M 180 169 L 189 176 L 180 182" progress={progress} from={0.6} to={0.64} className="stroke-accent" />
        <DrawnPath d="M 442 137 L 370 170" progress={progress} from={0.56} to={0.66} className="stroke-ink/60" />
        <DrawnPath d="M 378 164 L 369 170 L 379 173" progress={progress} from={0.64} to={0.68} className="stroke-ink/60" />
        <DrawnPath d="M 118 302 L 244 253" progress={progress} from={0.62} to={0.72} className="stroke-ink/60" />
        <DrawnPath d="M 236 249 L 245 253 L 237 259" progress={progress} from={0.7} to={0.74} className="stroke-ink/60" />

        <FadeRange progress={progress} from={0.78} to={0.9}>
          <text x={36} y={396} fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            on paper, scale 1:1
          </text>
          <text x={524} y={396} textAnchor="end" fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            fig. 1: scoped before code
          </text>
        </FadeRange>
      </g>
    </svg>
  );
}

export default IdeaSketch;
