"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUp, CircleCheck } from "lucide-react";

import { cn } from "@/lib/utils";

export type OrbitRing = "outer" | "inner";

interface OrbitBase {
  ring: OrbitRing;
  angle: number;
}

export interface OrbitAvatarItem extends OrbitBase {
  kind: "avatar";
  src: string;
  alt?: string;
  size?: number;
}

export interface OrbitPillItem extends OrbitBase {
  kind: "pill";
  icon: ReactNode;
  label: string;
}

export interface OrbitCardItem extends OrbitBase {
  kind: "card";
  emoji: string;
  badge?: string | number;
}

export interface OrbitStatusItem extends OrbitBase {
  kind: "status";
  label: string;
}

export interface OrbitCheckItem extends OrbitBase {
  kind: "check";
}

export type OrbitItem =
  | OrbitAvatarItem
  | OrbitPillItem
  | OrbitCardItem
  | OrbitStatusItem
  | OrbitCheckItem;

export interface OrbitStat {
  value: string;
  label: string;
}

export interface OrbitTag {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface CommunityOrbitProps {
  items: OrbitItem[];
  stats: OrbitStat[];
  headline: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  children?: ReactNode;
  tags?: OrbitTag[];
  minScale?: number;
  className?: string;
}

const STAGE_W = 1200;
const STAGE_H = 490;
const CENTER = { x: 600, y: 620 };
const RADIUS: Record<OrbitRing, number> = { outer: 492, inner: 404 };

// Floating chips share one surface so they follow the site's light/dark tokens.
const chip =
  "border border-border bg-background text-muted-foreground shadow-sm";

function positionOnRing(ring: OrbitRing, angle: number): CSSProperties {
  const rad = (angle * Math.PI) / 180;
  const r = RADIUS[ring];
  return {
    left: CENTER.x + r * Math.cos(rad),
    top: CENTER.y - r * Math.sin(rad),
  };
}

// Arc running from the left edge, over the top, to the right edge.
function arcPath(r: number) {
  const dy = CENTER.y - STAGE_H;
  const dx = Math.sqrt(r * r - dy * dy);
  return `M ${CENTER.x - dx} ${STAGE_H} A ${r} ${r} 0 0 1 ${CENTER.x + dx} ${STAGE_H}`;
}

function OrbitAvatar({ src, alt, size = 72 }: OrbitAvatarItem) {
  return (
    <div
      className={cn("rounded-full p-[3px] ring-4 ring-background", chip)}
      style={{ width: size, height: size }}
    >
      <div className="h-full w-full overflow-hidden rounded-full bg-secondary">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ""}
          draggable={false}
          className="h-full w-full select-none object-cover"
        />
      </div>
    </div>
  );
}

function OrbitPill({ icon, label }: OrbitPillItem) {
  return (
    <div
      className={cn(
        "flex min-h-[27px] items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-[5px] text-[12.5px] font-medium",
        chip,
      )}
    >
      <span className="flex shrink-0 items-center text-[13px] leading-none">
        {icon}
      </span>
      <span className="leading-none">{label}</span>
    </div>
  );
}

function OrbitCard({ emoji, badge }: OrbitCardItem) {
  return (
    <div
      className={cn(
        "relative flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-secondary text-[22px] leading-none",
        chip,
      )}
    >
      <span className="select-none">{emoji}</span>
      {badge !== undefined && (
        <span
          className={cn(
            "absolute -bottom-[5px] -right-2 flex h-[18px] items-center gap-0.5 rounded-[5px] px-1.5 text-[10px] font-medium leading-none",
            chip,
          )}
        >
          <ArrowUp size={9} strokeWidth={2.2} />
          {badge}
        </span>
      )}
    </div>
  );
}

function OrbitStatus({ label }: OrbitStatusItem) {
  return (
    <div className="flex h-[30px] items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 text-[13.5px] font-medium text-emerald-700 shadow-sm dark:text-emerald-300">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </div>
  );
}

function OrbitCheck() {
  return (
    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 shadow-sm dark:text-emerald-300">
      <CircleCheck size={20} strokeWidth={2} />
    </div>
  );
}

function renderItem(item: OrbitItem) {
  switch (item.kind) {
    case "avatar":
      return <OrbitAvatar {...item} />;
    case "pill":
      return <OrbitPill {...item} />;
    case "card":
      return <OrbitCard {...item} />;
    case "status":
      return <OrbitStatus {...item} />;
    case "check":
      return <OrbitCheck />;
  }
}

function splitValue(value: string) {
  const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!m) return null;
  const raw = m[2].replace(/,/g, "");
  const decimals = (raw.split(".")[1] ?? "").length;
  return { prefix: m[1], target: parseFloat(raw), decimals, suffix: m[3] };
}

function CountUp({
  value,
  delay,
  active,
}: {
  value: string;
  delay: number;
  active: boolean;
}) {
  const parts = splitValue(value);
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!parts || reduce) return;
    if (!active) return;
    const controls = animate(0, parts.target, {
      delay,
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, delay, reduce, active]);

  if (!parts) return <>{value}</>;
  return (
    <>
      {parts.prefix}
      {(reduce ? parts.target : n).toFixed(parts.decimals)}
      {parts.suffix}
    </>
  );
}

// Elements animate in once, the first time they scroll into view.
const viewport = { once: true, amount: 0.25 } as const;

const reveal = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function CommunityOrbit({
  items,
  stats,
  headline,
  eyebrow,
  description,
  children,
  tags = [],
  minScale = 0.6,
  className,
}: CommunityOrbitProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: true });

  // Render the stage at a fixed size, then scale it down to fit its frame.
  useLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () =>
      setScale(Math.min(1, Math.max(minScale, frame.clientWidth / STAGE_W)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(frame);
    return () => ro.disconnect();
  }, [minScale]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative w-full overflow-hidden bg-background px-4 pb-20 pt-24 text-foreground",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />

      {eyebrow && (
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="relative mb-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          {eyebrow}
        </motion.p>
      )}

      <div
        ref={frameRef}
        className="relative mx-auto w-full max-w-[1200px] overflow-hidden"
        style={{ height: STAGE_H * scale }}
      >
        <div
          className="absolute left-1/2 top-0"
          style={{
            width: STAGE_W,
            height: STAGE_H,
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0"
            width={STAGE_W}
            height={STAGE_H}
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            fill="none"
            aria-hidden="true"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 62%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 62%, transparent 100%)",
            }}
          >
            <motion.path
              d={arcPath(RADIUS.outer)}
              className="stroke-border"
              strokeWidth={2}
              initial={{ pathLength: reduce ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={viewport}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <motion.path
              d={arcPath(RADIUS.inner)}
              className="stroke-muted-foreground/30"
              strokeWidth={3}
              initial={{ pathLength: reduce ? 1 : 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={viewport}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            />
          </svg>

          {items.map((item, i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={positionOnRing(item.ring, item.angle)}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -4, 0] }}
                transition={{
                  duration: 4 + (i % 4) * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i * 0.4) % 2,
                }}
                whileHover={{ scale: 1.06 }}
              >
                {renderItem(item)}
              </motion.div>
            </motion.div>
          ))}

          <div className="absolute left-1/2 top-[393px] grid -translate-x-1/2 auto-cols-fr grid-flow-col gap-7">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  delay: 0.9 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="text-[48px] font-medium leading-none tracking-[-0.02em] tabular-nums text-foreground">
                  <CountUp
                    key={String(inView)}
                    value={s.value}
                    delay={0.9 + i * 0.12}
                    active={inView}
                  />
                </span>
                <span className="mt-[15px] text-[14px] leading-none text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.h2
        className="relative mx-auto mt-2 max-w-[600px] text-center text-[26px] font-[450] leading-[1.18] tracking-[-0.01em] sm:text-[34px]"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {headline}
      </motion.h2>

      {description && (
        <motion.p
          className="relative mx-auto mt-5 max-w-[560px] text-center text-base leading-relaxed text-muted-foreground"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
      )}

      {tags.length > 0 && (
        <div className="relative mx-auto mt-9 flex max-w-[760px] flex-wrap justify-center gap-3">
          {tags.map((t, i) => {
            const Tag = (t.href ? motion.a : motion.button) as typeof motion.a;
            return (
              <Tag
                key={t.label}
                {...(t.href ? { href: t.href } : { type: "button" as const })}
                onClick={t.onClick}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{
                  duration: 0.5,
                  delay: 1.6 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="group flex h-10 items-center gap-2.5 rounded-full border border-border bg-background pl-1.5 pr-4 text-[14px] font-medium text-foreground/80 shadow-sm transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground [&>svg]:h-[15px] [&>svg]:w-[15px]">
                  {t.icon}
                </span>
                {t.label}
              </Tag>
            );
          })}
        </div>
      )}
      {children && (
        <motion.div
          className="relative mx-auto mt-16 w-full max-w-5xl"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}

export { CommunityOrbit as Component };
