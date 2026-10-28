"use client";

import { motion, useTransform } from "framer-motion";

import { DrawnPath, FadeRange, rrect, type Progress } from "./drawn-path";

// Four Solidity blocks that drop into a stack and lock, one per scroll step.
const BLOCKS: { y: number; code: string; rule?: [number, number, number] }[] = [
  { y: 64, code: "GET /api/orders -> Order[]", rule: [166, 106, 300] },
  { y: 146, code: "type Order = { id: string }", rule: [166, 188, 286] },
  { y: 228, code: "  event Deposit(address a, uint v);", rule: [166, 270, 340] },
  { y: 310, code: "// one shape, every layer" },
];

const LOCK_X = 436;
const LOCK_MID = LOCK_X + 6;

/** Chapter 02 — contract blocks assembling and locking one by one. */
export function ContractBlocks({ progress }: { progress: Progress }) {
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
            one block, one job
          </text>
        </FadeRange>

        {BLOCKS.map((block, i) => (
          <ContractBlock key={block.y} progress={progress} block={block} index={i} />
        ))}

        {/* Chain rail connecting the lock points */}
        {BLOCKS.slice(0, -1).map((block, i) => (
          <DrawnPath
            key={block.y}
            d={`M ${LOCK_MID} ${block.y + 35} V ${BLOCKS[i + 1].y + 23}`}
            progress={progress}
            from={0.06 + i * 0.2 + 0.15}
            to={0.06 + i * 0.2 + 0.2}
            className="stroke-ink/40"
          />
        ))}

        <FadeRange progress={progress} from={0.88} to={0.96}>
          <text x={34} y={396} fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            typed from API to chain
          </text>
          <text x={524} y={396} textAnchor="end" fontSize={10} className="fill-muted font-mono" style={{ letterSpacing: "0.08em" }}>
            fig. 2: contracts before ui
          </text>
        </FadeRange>
      </g>
    </svg>
  );
}

function ContractBlock({
  progress,
  block,
  index,
}: {
  progress: Progress;
  block: (typeof BLOCKS)[number];
  index: number;
}) {
  const t0 = 0.06 + index * 0.2;
  const y = useTransform(progress, [t0, t0 + 0.07], [-18, 0]);
  const opacity = useTransform(progress, [t0, t0 + 0.05], [0, 1]);
  const isLast = index === BLOCKS.length - 1;

  return (
    <motion.g style={{ y, opacity }}>
      <DrawnPath d={rrect(150, block.y, 260, 58, 4)} progress={progress} from={t0 + 0.03} to={t0 + 0.12} className="stroke-ink/80" />
      <FadeRange progress={progress} from={t0 + 0.09} to={t0 + 0.15}>
        <text x={166} y={block.y + 29} fontSize={11} className="fill-ink/90 font-mono">
          {block.code}
        </text>
      </FadeRange>
      {block.rule && (
        <DrawnPath
          d={`M ${block.rule[0]} ${block.rule[1]} H ${block.rule[2]}`}
          progress={progress}
          from={t0 + 0.11}
          to={t0 + 0.17}
          className="stroke-ink/30"
        />
      )}
      {/* Lock point on the chain rail; the final block's lock is the one accent */}
      <DrawnPath d={rrect(LOCK_X, block.y + 23, 12, 12, 2)} progress={progress} from={t0 + 0.13} to={t0 + 0.19} className={isLast ? "stroke-accent" : "stroke-ink/60"} />
      <DrawnPath d={`M ${LOCK_MID} ${block.y + 23} V ${block.y + 29}`} progress={progress} from={t0 + 0.15} to={t0 + 0.2} className={isLast ? "stroke-accent" : "stroke-muted"} />
    </motion.g>
  );
}

export default ContractBlocks;
