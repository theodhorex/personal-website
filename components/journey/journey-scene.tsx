"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { CHAPTERS, PROJECT_COUNT, STACK, TAGS, bioP2, bioP3 } from "./chapters";
import { JourneyRail } from "./journey-rail";
import { ContractBlocks } from "./contract-blocks";
import { DeployLine } from "./deploy-line";
import { IdeaSketch } from "./idea-sketch";
import { InterfaceWireframe } from "./interface-wireframe";
import { usePointerVars } from "@/components/stage/use-pointer";

const EASE = [0.22, 1, 0.36, 1] as const;
const CHAPTER_COUNT = CHAPTERS.length;
const TOTAL_HEIGHT = 500; // 4 chapters x 100svh of scroll + the pinned viewport

/**
 * Scene "about": one sticky stage pinned over ~500svh, four chapters driven
 * by scroll progress. Reduced motion shows the same chapters stacked, static.
 */
export function JourneyScene() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  usePointerVars(stageRef);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  const full = useMotionValue(1);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const chapter = Math.min(
      CHAPTER_COUNT - 1,
      Math.max(0, Math.floor(value * CHAPTER_COUNT)),
    );
    setActive((current) => (current === chapter ? current : chapter));
  });

  const jumpTo = (index: number) => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const distance = wrap.offsetHeight - window.innerHeight;
    const targetProgress = index === 0 ? 0 : (index + 0.05) / CHAPTER_COUNT;
    window.scrollTo({
      top: top + distance * targetProgress,
      behavior: "smooth",
    });
  };

  if (reduce) {
    return (
      <div className="relative">
        <h2 className="sr-only">About — the way I build</h2>
        {CHAPTERS.map((chapter, i) => (
          <article
            key={chapter.id}
            className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-8 sm:py-24"
          >
            <ChapterMeta index={i} />
            <div className="mt-8 grid items-center gap-8 sm:grid-cols-12">
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

  return (
    <div ref={wrapperRef} className="relative" style={{ height: `${TOTAL_HEIGHT}svh` }}>
      <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden">
        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col px-4 pb-14 pt-8 sm:px-8 sm:pb-12 sm:pt-16">
          <h2 className="sr-only">About — the way I build</h2>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-1/2 z-0 -translate-y-[62%] select-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="block font-display font-medium leading-none text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(235, 232, 223, 0.15)",
                  fontVariationSettings: '"wdth" 140',
                  fontSize: "clamp(8rem, 24vw, 20rem)",
                  transform:
                    "translate3d(calc(var(--px, 0) * -12px), calc(var(--py, 0) * -8px), 0)",
                }}
              >
                {CHAPTERS[active].index}
              </motion.span>
            </AnimatePresence>
          </span>

          <div className="relative z-10 grid min-h-0 flex-1 content-start sm:content-center gap-4 grid-cols-1 sm:grid-cols-12 sm:items-center sm:gap-8">
            <ChapterText chapterIndex={active} animated />
            <div className="relative h-36 min-h-0 sm:col-span-7 sm:h-72 lg:h-[22.5rem] pointer-events-none">
              {CHAPTERS.map((chapter, i) => (
                <FigureLayer key={chapter.id} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </div>

          <JourneyRail active={active} onSelect={jumpTo} />
        </div>
      </div>
    </div>
  );
}

/** Text column of the sticky stage: animates between chapters. */
function ChapterText({ chapterIndex, animated }: { chapterIndex: number; animated?: boolean }) {
  const chapter = CHAPTERS[chapterIndex];
  const body = (
    <>
      <ChapterMeta index={chapterIndex} />
      <div className="overflow-hidden">
        <motion.h3
          variants={titleVariants}
          className="mt-4 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.01em] text-ink"
          style={{
            transform:
              "translate3d(calc(var(--px, 0) * 3px), calc(var(--py, 0) * 2px), 0)",
          }}
        >
          {chapter.title}
        </motion.h3>
      </div>
      <motion.p
        variants={fadeVariants}
        className="mt-3 max-w-[46ch] text-[13px] leading-relaxed text-muted sm:mt-4 sm:text-[15px] sm:leading-[1.7]"
      >
        {chapter.text}
      </motion.p>
      {chapterIndex === CHAPTER_COUNT - 1 && <ShipExtras />}
    </>
  );

  if (!animated) {
    return <div className="min-w-0 sm:col-span-5">{body}</div>;
  }

  return (
    <div className="min-w-0 sm:col-span-5">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={chapter.id}
          className="relative"
          initial="hidden"
          animate="show"
          exit="exit"
          transition={{ duration: 0.45, ease: EASE, staggerChildren: 0.08 }}
        >
          {body}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** Chapter meta row: index and figure caption, split on a hairline. */
function ChapterMeta({ index }: { index: number }) {
  const chapter = CHAPTERS[index];
  return (
    <motion.div
      variants={metaVariants}
      className="flex items-baseline justify-between gap-4 border-b border-line pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:text-[11px]"
    >
      <span>
        {chapter.index} / {String(CHAPTER_COUNT).padStart(2, "0")}
      </span>
      <span>{chapter.fig}</span>
    </motion.div>
  );
}

const metaVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const titleVariants = {
  hidden: { y: "115%", opacity: 0 },
  show: { y: "0%", opacity: 1 },
  exit: { y: "-120%", opacity: 0 },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

/** Bio, honest counts and tag texts carried over from the old About section. */
function ShipExtras() {
  return (
    <motion.div variants={fadeVariants} className="mt-4 border-t border-line pt-3">
      <div className="space-y-2.5 text-[12px] leading-relaxed text-muted sm:space-y-3 sm:text-[13.5px] sm:leading-[1.65]">
        <p>{bioP2}</p>
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

      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em]">
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

      <p className="mt-2.5 text-[12px] leading-relaxed text-muted sm:text-[13px]">
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
    </motion.div>
  );
}

/**
 * One of the four illustration layers. Handles the cross-fade/scale between
 * chapters and hands the chapter's own draw progress (0..1) to the SVG below.
 */
function FigureLayer({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const start = index / CHAPTER_COUNT;
  const end = (index + 1) / CHAPTER_COUNT;
  const isFirst = index === 0;
  const isLast = index === CHAPTER_COUNT - 1;
  const enterFrom = isFirst ? start : start - 0.045;
  const enterTo = isFirst ? start + 0.006 : start + 0.012;
  // The last layer never leaves, so it gets no exit keyframes (offsets must stay within 0..1).
  const exitFrom = end - 0.045;
  const exitTo = end - 0.008;

  const inputs = isLast
    ? [enterFrom, enterTo]
    : [enterFrom, enterTo, exitFrom, exitTo];
  const opacity = useTransform(
    progress,
    inputs,
    isLast ? [isFirst ? 1 : 0, 1] : [isFirst ? 1 : 0, 1, 1, 0],
  );
  const scale = useTransform(
    progress,
    inputs,
    isLast ? [isFirst ? 1 : 0.965, 1] : [isFirst ? 1 : 0.965, 1, 1, 0.98],
  );
  const draw = useTransform(
    progress,
    [start + 0.02, isLast ? end - 0.02 : end - 0.07],
    [0, 1],
  );

  return (
    <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity, scale }}>
      <ChapterIllustration index={index} progress={draw} pulse />
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
