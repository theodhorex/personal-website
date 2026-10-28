import type { CaseStudy } from "@/lib/projects";

/**
 * Single-line technical schematics, derived deterministically from each
 * project's data (no randomness, no external images). Bone hairline strokes
 * with exactly one accent element per drawing — nothing more.
 * Geometry varies with the real data: tech count, decisions count, outcomes.
 */

const VB = { w: 240, h: 160 };

function hashId(id: string): number {
  let h = 0;
  for (const ch of id) h += ch.charCodeAt(0);
  return h;
}

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n));

/** Bone stroke for lines, bone fill for hollow-but-open shapes. */
const line = "stroke-current text-ink opacity-90";
const faint = "stroke-current text-muted opacity-70";
const fill = "fill-none";
const accentStroke = "stroke-current text-accent";
const accentFill = "fill-accent stroke-none";

/* 01 — switchboard: one input routing into parallel lanes (DeFi routing). */
function Switchboard({ p }: { p: CaseStudy }) {
  const lanes = clamp(p.tech.length, 3, 5);
  const accent = hashId(p.id) % lanes;
  const ys = Array.from({ length: lanes }, (_, i) =>
    VB.h / 2 + (i - (lanes - 1) / 2) * (96 / Math.max(lanes - 1, 1)),
  );
  return (
    <g className={line} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill={fill}>
      <circle className="fill-panel" stroke="currentColor" cx={30} cy={80} r={6} />
      <path d="M36 80h14" />
      {ys.map((y, i) => {
        const node = i === accent;
        return (
          <g key={y}>
            <path className={node ? accentStroke : undefined} d={`M50 ${80}c10 0 10 ${y - 80} 18 ${y - 80}`} />
            <path d={`M68 ${y}h108`} />
            {i % 2 === 0 ? (
              <circle className={node ? accentFill : "fill-panel"} stroke={node ? "none" : "currentColor"} cx={100 + i * 9} cy={y} r={2.5} />
            ) : (
              <rect className={node ? accentFill : "fill-panel"} stroke={node ? "none" : "currentColor"} x={98 + i * 9} y={y - 4.5} width={9} height={9} />
            )}
            <path d={`M176 ${y}c8 0 8 ${80 - y} 18 ${80 - y}`} />
          </g>
        );
      })}
      <circle className="fill-panel" stroke="currentColor" cx={210} cy={80} r={6} />
      <path d="M216 80h8" />
    </g>
  );
}

/* 02 — lattice: one trunk line with data taps hanging off it (edge network). */
function Lattice({ p }: { p: CaseStudy }) {
  const taps = clamp(p.tech.length, 3, 6);
  const accent = hashId(p.id) % taps;
  const xs = Array.from({ length: taps }, (_, i) => 52 + i * ((168 - 52) / Math.max(taps - 1, 1)));
  return (
    <g className={line} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill={fill}>
      <circle className="fill-panel" stroke="currentColor" cx={26} cy={92} r={6} />
      <path d="M32 92h184" />
      {xs.map((x, i) => {
        const node = i === accent;
        return (
          <g key={x} className={node ? accentStroke : undefined}>
            <path d={`M${x} 92V56`} />
            <circle
              className={node ? accentFill : "fill-panel"}
              stroke={node ? "none" : "currentColor"}
              cx={x}
              cy={50}
              r={3.5}
            />
            <path className={faint} d={`M${x - 7} 42h14`} />
          </g>
        );
      })}
      <path d="M216 92h8" />
    </g>
  );
}

/* 03 — cascade: a descending pipeline of processing stages. */
function Cascade({ p }: { p: CaseStudy }) {
  const steps = clamp(p.outcomes.length + 1, 3, 5);
  const accent = hashId(p.id) % steps;
  const dx = (192 - 36) / steps;
  const dy = (132 - 40) / steps;
  let x = 28;
  let y = 40;
  const segs: string[] = [];
  for (let i = 0; i < steps; i += 1) {
    const nx = x + dx;
    const ny = y + dy;
    segs.push(`M${x} ${y}H${nx}`);
    segs.push(`M${nx} ${y}V${ny}`);
    x = nx;
    y = ny;
  }
  return (
    <g className={line} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill={fill}>
      <circle className="fill-panel" stroke="currentColor" cx={26} cy={40} r={6} />
      {segs.map((d, i) => {
        const accentSeg = i === accent * 2;
        return <path key={d} className={accentSeg ? accentStroke : undefined} d={d} />;
      })}
      <circle
        className={accent === 0 ? accentFill : "fill-panel"}
        stroke={accent === 0 ? "none" : "currentColor"}
        cx={x}
        cy={y}
        r={3.5}
      />
    </g>
  );
}

/* 04 — core loop: a compiler core cycling its output back in. */
function CoreLoop({ p }: { p: CaseStudy }) {
  const ticks = clamp(p.decisions.length + 2, 3, 5);
  const accent = hashId(p.id) % 2 === 0;
  return (
    <g className={line} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill={fill}>
      <rect className="fill-panel" stroke="currentColor" x={56} y={40} width={112} height={80} />
      <rect
        className={accent ? accentFill : "fill-panel"}
        stroke={accent ? "none" : "currentColor"}
        x={96}
        y={68}
        width={32}
        height={24}
      />
      {Array.from({ length: ticks }, (_, i) => (
        <path className={faint} key={i} d={`M64 ${52 + i * 20}h16`} />
      ))}
      <path d="M168 80h24c6 0 6-36 0-36h-72" />
      <path d="M120 44l8-4-8-4" className={accentStroke} />
      <path d="M56 80H32" />
    </g>
  );
}

/* 05 — field: a measurement grid crossed by one signal wave. */
function Field({ p }: { p: CaseStudy }) {
  const cols = 5;
  const rows = clamp(Math.round(p.tech.length / 2), 3, 4);
  const accentCol = hashId(p.id) % cols;
  const dots: { x: number; y: number }[] = [];
  for (let gy = 0; gy < rows; gy += 1) {
    for (let gx = 0; gx < cols; gx += 1) {
      dots.push({ x: 40 + gx * 40, y: 40 + gy * (80 / Math.max(rows - 1, 1)) });
    }
  }
  return (
    <g className={line} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {dots.map((d, i) => (
        <circle
          key={i}
          className={i % cols === accentCol ? accentFill : "fill-panel"}
          stroke={i % cols === accentCol ? "none" : "currentColor"}
          cx={d.x}
          cy={d.y}
          r={2}
        />
      ))}
      <path className={accentStroke} d={`M24 96c36-56 72 32 108-24 18-28 48-16 84-8`} />
    </g>
  );
}

const VARIANTS = [Switchboard, Lattice, Cascade, CoreLoop, Field];

/**
 * Draws the schematic for one project. Schematic family follows the project's
 * data index, geometry follows its own data — unique and stable per entry.
 */
export function ProjectDiagram({ project }: { project: CaseStudy }) {
  const order = Number(project.index) - 1;
  const Variant = VARIANTS[Number.isFinite(order) ? clamp(order, 0, VARIANTS.length - 1) : hashId(project.id) % VARIANTS.length];
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      fill="none"
      className="h-full w-full"
      focusable="false"
    >
      <Variant p={project} />
    </svg>
  );
}
