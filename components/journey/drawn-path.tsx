"use client";

import type { ReactNode } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

export type Progress = MotionValue<number>;

/** A path ("d") that draws itself as `progress` moves from `from` to `to`. */
export function DrawnPath({
  d,
  progress,
  from = 0,
  to = 1,
  className,
  strokeWidth = 1.5,
}: {
  d: string;
  progress: Progress;
  from?: number;
  to?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const pathLength = useTransform(progress, [from, to], [0, 1]);
  return (
    <motion.path
      d={d}
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ pathLength }}
      className={className}
    />
  );
}

/** Fades `children` in over one window of `progress`. */
export function FadeRange({
  progress,
  from,
  to,
  children,
}: {
  progress: Progress;
  from: number;
  to: number;
  children: ReactNode;
}) {
  const opacity = useTransform(progress, [from, to], [0, 1]);
  return <motion.g style={{ opacity }}>{children}</motion.g>;
}

/** Builds a full-circle path string centered on (cx, cy). */
export function circlePath(cx: number, cy: number, r: number) {
  return `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;
}

/** Builds a rounded-rectangle path string. Composition is exact, not forged. */
export function rrect(x: number, y: number, w: number, h: number, r = 4) {
  const rx = Math.min(r, w / 2, h / 2);
  return [
    `M ${x + rx} ${y}`,
    `h ${w - 2 * rx}`,
    `a ${rx} ${rx} 0 0 1 ${rx} ${rx}`,
    `v ${h - 2 * rx}`,
    `a ${rx} ${rx} 0 0 1 -${rx} ${rx}`,
    `h ${-(w - 2 * rx)}`,
    `a ${rx} ${rx} 0 0 1 -${rx} -${rx}`,
    `v ${-(h - 2 * rx)}`,
    `a ${rx} ${rx} 0 0 1 ${rx} -${rx}`,
    "z",
  ].join(" ");
}
