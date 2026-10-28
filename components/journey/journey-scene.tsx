"use client";

import { useReducedMotion } from "@/components/stage/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";

import { CHAPTERS, PROJECT_COUNT, STACK, TAGS, bioP2, bioP3 } from "./chapters";
import { JourneyRail } from "./journey-rail";
import { ContractBlocks } from "./contract-blocks";
import { DeployLine } from "./deploy-line";
import { IdeaSketch } from "./idea-sketch";
import { InterfaceWireframe } from "./interface-wireframe";
import { usePointerVars } from "@/components/stage/use-pointer";

const CHAPTER_COUNT = CHAPTERS.length;
// Keyboard/rail rest point inside each chapter: text is in and the drawing is
// finished (draw ends at +0.11, text leaves at +0.205).
const STOP_OFFSET = 0.16;
const TOTAL_HEIGHT = 700; // ~150svh of scroll per chapter + the pinned viewport

/**
 * Scene "about": one sticky stage pinned over ~500svh, four chapters driven
 * by scroll progress. Reduced motion shows the same chapters stacked, static.
 */
export function JourneyScene() {
  const reduce = useReducedMotion();
  return reduce ? <JourneyStatic /> : <JourneyPinned />;
}

/** Reduced motion: the same four chapters stacked, no pinning and no animation. */
function JourneyStatic() {
  const full = useMotionValue(1);
  return (
    <div className="relative">
      <h2 className="sr-only">About — the way I build</h2>
      {CHAPTERS.map((chapter, i) => (
        <article
          key={chapter.id}
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-24"
        >
          <div className="grid items-center gap-8 sm:grid-cols-12">
            <ChapterText chapterIndex={i} />
            <div className="relative h-56 sm:col-span-7 sm:h-80">
              <ChapterIllustration index={i} progress={full} pulse={false} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Presence window of one chapter on the smoothed 0..1 progress. Chapters
 * overlap while crossing so text, number and figure are never out of step:
 * fast scrolling just moves through the same continuous crossfade.
 * The first chapter has no entrance and the last has no exit; offsets stay
 * inside 0..1 and strictly increase (framer-motion requires it).
 */
function usePresence(
  progress: MotionValue<number>,
  index: number,
  kind: "text" | "figure" = "text",
) {
  const first = index === 0;
  const last = index === CHAPTER_COUNT - 1;
  const start = index / CHAPTER_COUNT;
  const end = (index + 1) / CHAPTER_COUNT;
  // Text hands over in sequence (old fades out, a short gap, new fades in) so
  // two big titles are never legible on top of each other; figures overlap
  // briefly because a line drawing crossfades cleanly.
  const sequential = kind === "text";
  const inFrom = sequential ? start + 0.012 : start - 0.025;
  const inTo = sequential ? start + 0.045 : start + 0.02;
  const outFrom = sequential ? end - 0.045 : end - 0.025;
  const outTo = sequential ? end - 0.012 : end + 0.02;

  let xs: number[];
  let alpha: number[];
  let lift: number[];
  if (first && last) {
    xs = [0, 1];
    alpha = [1, 1];
    lift = [0, 0];
  } else if (first) {
    xs = [outFrom, outTo];
    alpha = [1, 0];
    lift = [0, -28];
  } else if (last) {
    xs = [inFrom, inTo];
    alpha = [0, 1];
    lift = [32, 0];
  } else {
    xs = [inFrom, inTo, outFrom, outTo];
    alpha = [0, 1, 1, 0];
    lift = [32, 0, 0, -28];
  }
  const opacity = useTransform(progress, xs, alpha);
  const y = useTransform(progress, xs, lift);
  return { opacity, y };
}

function JourneyPinned() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  usePointerVars(stageRef);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  // Soft-follow the raw scroll so stepped mouse-wheel notches glide.
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.6,
    restDelta: 0.0005,
  });
  const [active, setActive] = useState(0);

  useMotionValueEvent(progress, "change", (value) => {
    const chapter = Math.min(
      CHAPTER_COUNT - 1,
      Math.max(0, Math.floor(value * CHAPTER_COUNT + 0.01)),
    );
    setActive((current) => (current === chapter ? current : chapter));
  });

  // Scroll-settle: if the reader stops inside a handover gap (text mostly
  // faded), ease to the nearest rest point in the direction they were going.
  useEffect(() => {
    let timer: number | undefined;
    let lastY = window.scrollY;
    let dir = 1;
    const settle = () => {
      const wrap = wrapperRef.current;
      if (!wrap) return;
      const distance = wrap.offsetHeight - window.innerHeight;
      const rect = wrap.getBoundingClientRect();
      const p = -rect.top / distance;
      if (p <= 0.005 || p >= 0.93) return;
      const local = (p * CHAPTER_COUNT) % 1;
      if (local > 0.2 && local < 0.8) return;
      const stops = Array.from({ length: CHAPTER_COUNT }, (_, i) => (i + STOP_OFFSET * CHAPTER_COUNT) / CHAPTER_COUNT);
      const target = dir > 0 ? stops.find((v) => v > p) : [...stops].reverse().find((v) => v < p);
      if (target === undefined) return;
      window.scrollTo({ top: rect.top + window.scrollY + distance * target, behavior: "smooth" });
    };
    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) dir = y > lastY ? 1 : -1;
      lastY = y;
      window.clearTimeout(timer);
      timer = window.setTimeout(settle, 220);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  const jumpTo = (index: number) => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const distance = wrap.offsetHeight - window.innerHeight;
    const targetProgress = (index + STOP_OFFSET * CHAPTER_COUNT) / CHAPTER_COUNT;
    window.scrollTo({
      top: top + distance * targetProgress,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={wrapperRef}
      data-stops={Array.from({ length: CHAPTER_COUNT }, (_, i) => (i / CHAPTER_COUNT + STOP_OFFSET).toFixed(4)).join(",")}
      className="relative"
      style={{ height: `${TOTAL_HEIGHT}svh` }}
    >
      <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col px-4 pt-6 pb-[calc(3.5rem_+_env(safe-area-inset-bottom))] sm:px-8 sm:pb-14 xl:pb-12 sm:pt-16">
          <h2 className="sr-only">About — the way I build</h2>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-0 hidden -translate-y-[62%] select-none lg:block"
          >
            {CHAPTERS.map((chapter, i) => (
              <ChapterNumber key={chapter.id} index={i} progress={progress} />
            ))}
          </span>

          <div className={cn("relative z-10 grid min-h-0 flex-1 content-start gap-6 sm:content-center grid-cols-1 lg:grid-cols-12 lg:items-center sm:gap-8", active < CHAPTER_COUNT - 1 && "max-sm:pt-[7svh]")}>
            {/* Chapter texts share one grid cell and crossfade on progress. */}
            <div className="relative grid min-w-0 lg:col-span-5">
              {CHAPTERS.map((chapter, i) => (
                <ChapterLayer
                  key={chapter.id}
                  index={i}
                  progress={progress}
                  active={active === i}
                />
              ))}
            </div>
            <div className="relative pointer-events-none aspect-[4/3] w-full min-h-0 lg:col-span-7 sm:aspect-auto sm:mx-0 sm:h-[clamp(18rem,34svh,26rem)] sm:w-auto sm:max-w-none lg:h-[22.5rem] xl:pr-16">
              {CHAPTERS.map((chapter, i) => (
                <FigureLayer key={chapter.id} index={i} progress={progress} active={active === i} />
              ))}
            </div>
          </div>

          <JourneyRail active={active} onSelect={jumpTo} />
        </div>
      </div>
    </div>
  );
}

/** Giant outlined chapter number behind the stage; crossfades with its chapter. */
function ChapterNumber({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const { opacity, y } = usePresence(progress, index);
  return (
    <motion.span
      className="absolute left-0 top-0 block font-display font-medium leading-none text-transparent"
      style={{
        opacity,
        y,
        WebkitTextStroke: "1px color-mix(in srgb, var(--ink) 15%, transparent)",
        fontVariationSettings: '"wdth" 140',
        fontSize: "clamp(8rem, 24vw, 20rem)",
        transform: "translate3d(calc(var(--px, 0) * -12px), calc(var(--py, 0) * -8px), 0)",
      }}
    >
      {CHAPTERS[index].index}
    </motion.span>
  );
}

/** One chapter's text block, scroll-linked. Inactive links are made inert. */
function ChapterLayer({
  index,
  progress,
  active,
}: {
  index: number;
  progress: MotionValue<number>;
  active: boolean;
}) {
  const { opacity, y } = usePresence(progress, index);
  const titleY = useTransform(y, (v) => v * 1.7);
  const hasLinks = index === CHAPTER_COUNT - 1;
  return (
    <motion.div
      // On phones only the active chapter takes space, so the figure sits right
      // under its text instead of below the tallest chapter's height.
      className={cn("min-w-0", !active && "max-sm:absolute max-sm:inset-x-0 max-sm:top-0")}
      style={{ gridArea: "1 / 1", opacity }}
      inert={hasLinks && !active ? true : undefined}
    >
      <ChapterText chapterIndex={index} titleY={titleY} bodyY={y} />
    </motion.div>
  );
}

/** Text column content for one chapter. Motion values are optional (static mode passes none). */
function ChapterText({
  chapterIndex,
  titleY,
  bodyY,
}: {
  chapterIndex: number;
  titleY?: MotionValue<number>;
  bodyY?: MotionValue<number>;
}) {
  const chapter = CHAPTERS[chapterIndex];
  return (
    <div className="min-w-0 lg:col-span-5">
      <ChapterMeta index={chapterIndex} />
      <div className="overflow-hidden">
        <motion.div style={{ y: titleY }}>
          <h3
            className="mt-3 font-display text-[clamp(2.2rem,10.5vw,3.5rem)] sm:text-[clamp(2rem,8vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.01em] text-ink sm:mt-4"
            style={{
              transform:
                "translate3d(calc(var(--px, 0) * 3px), calc(var(--py, 0) * 2px), 0)",
            }}
          >
            {chapter.title}
          </h3>
        </motion.div>
      </div>
      <motion.div style={{ y: bodyY }}>
        <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.65] text-muted sm:mt-4 sm:text-[15px] sm:leading-[1.7]">
          {chapter.text}
        </p>
        {chapterIndex === CHAPTER_COUNT - 1 && <ShipExtras />}
      </motion.div>
    </div>
  );
}

/** Chapter meta row: index and figure caption, split on a hairline. */
function ChapterMeta({ index }: { index: number }) {
  const chapter = CHAPTERS[index];
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:text-[11px]">
      <span>
        {chapter.index} / {String(CHAPTER_COUNT).padStart(2, "0")}
      </span>
      <span>{chapter.fig}</span>
    </div>
  );
}

/** Bio, honest counts and tag texts carried over from the old About section. */
function ShipExtras() {
  return (
    <div className="mt-4 border-t border-line pt-3">
      <div className="space-y-2.5 text-[12px] leading-relaxed text-muted sm:space-y-3 sm:text-[13.5px] sm:leading-[1.65]">
        <p className="[@media(max-height:900px)]:hidden">{bioP2}</p>
        <p>
          {bioP3}{" "}
          <a
            href="mailto:theodhore.dev@gmail.com"
            className="font-semibold text-accent underline underline-offset-4 transition-colors hover:text-coral"
          >
            {"let's talk"}
          </a>
          .
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] [@media(max-height:780px)]:hidden">
        <span className="text-muted">
          Projects <span className="text-accent">{String(PROJECT_COUNT).padStart(2, "0")}</span>
        </span>
        <span className="text-muted">
          Stack <span className="text-ink">{String(STACK.length).padStart(2, "0")}</span>
        </span>
        {STACK.map((tool) => (
          <span key={tool} className="text-ink/80">
            {tool}
          </span>
        ))}
      </div>

      <p className="mt-2.5 text-[12px] leading-relaxed text-muted sm:text-[13px] [@media(max-height:780px)]:hidden">
        {TAGS.map((tag, i) => (
          <span key={tag.label}>
            <a
              href={tag.href}
              className="text-ink/85 underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {tag.label}
            </a>
            {i < TAGS.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      <a
        href="#projects"
        className="mt-3 inline-block font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent underline underline-offset-4 transition-colors hover:text-ink"
      >
        See the case studies
      </a>
    </div>
  );
}

/**
 * One of the four illustration layers. Crossfades with the same presence
 * window as its text and hands the chapter's own draw progress (0..1) to the SVG.
 */
function FigureLayer({ index, progress, active }: { index: number; progress: MotionValue<number>; active: boolean }) {
  const start = index / CHAPTER_COUNT;
  const { opacity } = usePresence(progress, index, "figure");
  const scale = useTransform(opacity, [0, 1], [0.97, 1]);
  // The drawing plays on a slow timer once its chapter becomes active (so it
  // also completes after a reload or a key jump) instead of being tied to the
  // scroll distance. It resets when the reader is back before the chapter.
  const draw = useMotionValue(0);
  useEffect(() => {
    if (active) {
      const controls = animate(draw, 1, { duration: 2.6, ease: [0.22, 0.61, 0.36, 1], delay: 0.15 });
      return () => controls.stop();
    }
    if (progress.get() < start) draw.set(0);
  }, [active, draw, progress, start]);

  return (
    <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity, scale }}>
      <ChapterIllustration index={index} progress={draw} pulse={active} />
    </motion.div>
  );
}

/** Maps a chapter slot to its line illustration. */
function ChapterIllustration({
  index,
  progress,
  pulse,
}: {
  index: number;
  progress: MotionValue<number>;
  pulse?: boolean;
}) {
  switch (index) {
    case 0:
      return <IdeaSketch progress={progress} />;
    case 1:
      return <ContractBlocks progress={progress} />;
    case 2:
      return <InterfaceWireframe progress={progress} />;
    default:
      return <DeployLine progress={progress} pulse={pulse} />;
  }
}

export default JourneyScene;
