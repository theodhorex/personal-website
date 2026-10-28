"use client";

import { useReducedMotion } from "@/components/stage/use-reduced-motion";
import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { CaseStudy } from "@/lib/projects";
import { Reveal } from "@/components/stage/reveal";
import { usePointerVars } from "@/components/stage/use-pointer";
import { ProjectDiagram } from "@/components/projects/diagram";
import { EASE, pad, ProjectRow } from "@/components/projects/index-row";

/* ------------------------------------------------------------------ header */

function ProjectsHeader({ total }: { total: number }) {
  return (
    <header className="mb-8 grid gap-6 md:mb-10 md:grid-cols-12 md:items-end">
      <div className="md:col-span-9">
        <p className="mb-2 font-mono text-xs lowercase tracking-widest text-muted">
          {pad(total)} / projects
        </p>
        <h2 className="font-display text-[clamp(2.6rem,8.5vw,6.75rem)] font-black uppercase leading-[0.9] tracking-tight [font-variation-settings:'wdth'_80]">
          Selected
          <br />
          works
        </h2>
      </div>
      <p className="max-w-[46ch] font-mono text-xs leading-relaxed text-muted lg:col-span-3 lg:justify-self-end lg:pb-2 lg:text-right">
        DeFi routing, edge streaming, event indexing, Solidity tooling, and a
        WebGL particle canvas.
      </p>
    </header>
  );
}

/* ------------------------------------------------------------------ section */

export function ProjectsSection({ projects }: { projects: CaseStudy[] }) {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const rowRefs = useRef(new Map<string, HTMLButtonElement>());
  const listRef = useRef<HTMLUListElement>(null);
  usePointerVars(listRef);

  /* Tag filter: real counts computed from the data, top 6 shown. */
  const tagCounts = new Map<string, number>();
  for (const p of projects) {
    for (const t of p.tech) {
      tagCounts.set(t, (tagCounts.get(t) ?? 0) + 1);
    }
  }
  const filterTags = [...tagCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 6);

  const visible = activeTag
    ? projects.filter((p) => p.tech.includes(activeTag))
    : projects;

  const selectTag = (t: string | null) => {
    setActiveTag(t);
    setOpenId((cur) => {
      if (!cur || !t) return null;
      return projects.find((p) => p.id === cur)?.tech.includes(t) ? cur : null;
    });
  };

  const setRowRef = useCallback(
    (id: string) => (el: HTMLButtonElement | null) => {
      if (el) rowRefs.current.set(id, el);
      else rowRefs.current.delete(id);
    },
    [],
  );

  const onRowEnter = useCallback((el: HTMLButtonElement, id: string) => {
    setHoveredId(id);
    const list = listRef.current;
    if (list) {
      list.style.setProperty(
        "--row-y",
        `${el.offsetTop + el.offsetHeight / 2}px`,
      );
    }
  }, []);

  const onRowLeave = useCallback(() => setHoveredId(null), []);

  const hovered = projects.find((p) => p.id === hoveredId) ?? null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Escape" || !openId) return;
    setOpenId(null);
    rowRefs.current.get(openId)?.focus();
  };

  if (projects.length === 0) {
    return (
      <div className="mx-auto w-full max-w-5xl">
        <ProjectsHeader total={0} />
        <div role="status" className="border-line border-t py-16">
          <p className="font-mono text-xs lowercase tracking-widest text-muted">00 / projects</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
            Nothing indexed yet
          </h3>
          <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted">
            Add a case study and it will be published here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <ProjectsHeader total={projects.length} />

      {projects.length > 1 && filterTags.length > 1 && (
        <ul className="mb-5 flex flex-wrap items-baseline gap-x-5 gap-y-1.5 font-mono text-xs md:mb-8">
          {filterTags.map(([tag, count]) => (
            <li key={tag}>
              <button
                type="button"
                aria-pressed={activeTag === tag}
                onClick={() => selectTag(activeTag === tag ? null : tag)}
                className={
                  activeTag === tag
                    ? "cursor-pointer text-accent"
                    : "cursor-pointer text-muted transition-colors duration-300 hover:text-ink"
                }
              >
                {tag.toLowerCase()}
                <span className="ml-1.5 font-mono text-[11px] text-muted">
                  {count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <ul
        ref={listRef}
        className="relative border-line border-t"
        onKeyDown={onKeyDown}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.id}
              layout={reduce ? false : true}
              exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.18 } }}
              transition={{ layout: { duration: reduce ? 0 : 0.4, ease: EASE } }}
            >
              <Reveal delay={i * 0.06} y={20}>
                <ProjectRow
                  p={p}
                  i={i}
                  open={openId === p.id}
                  buttonRef={setRowRef(p.id)}
                  onToggle={() => setOpenId(openId === p.id ? null : p.id)}
                  onEnter={onRowEnter}
                  onLeave={onRowLeave}
                />
              </Reveal>
              <motion.div
                aria-hidden="true"
                className="bg-line h-px w-full origin-left"
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: EASE }}
              />
            </motion.li>
          ))}
        </AnimatePresence>

        {/* Floating hover preview: rides the pointer, clamped inside the list.
            Only exists on hover-capable, fine pointers. */}
        <li aria-hidden="true" className="contents">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
          style={{
            left: "clamp(20px, calc(var(--mx, 60%) + 28px), calc(100% - 344px))",
            top: "clamp(130px, var(--row-y, 40%), calc(100% - 130px))",
            transform: "translateY(calc(-100% - 22px))",
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {hovered && (
              <motion.div
                key={hovered.id}
                initial={reduce ? false : { opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 6 }}
                transition={{ duration: reduce ? 0 : 0.22, ease: EASE }}
                className="w-80 rounded-md border border-line bg-panel p-4"
              >
                <div
                  style={{
                    transform:
                      "translate3d(calc(var(--px, 0) * 7px), calc(var(--py, 0) * 5px), 0)",
                  }}
                >
                  <span className="block h-44 text-ink">
                    <ProjectDiagram project={hovered} />
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-3 border-line border-t pt-3">
                  <span className="truncate font-display text-sm font-bold [font-variation-settings:'wdth'_95]">
                    {hovered.title}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-muted">
                    {hovered.year}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </li>
      </ul>
    </div>
  );
}
