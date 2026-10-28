"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { CaseStudy } from "@/lib/projects";
import { ProjectDiagram } from "@/components/projects/diagram";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const pad = (n: number) => String(n).padStart(2, "0");

/* One numbered index row: a full-row disclosure button with an expandable
 * detail panel (description, facts ledger, tag chips, links, staged steps). */

export function ProjectRow({
  p,
  i,
  open,
  buttonRef,
  onToggle,
  onEnter,
  onLeave,
}: {
  p: CaseStudy;
  i: number;
  open: boolean;
  buttonRef: (el: HTMLButtonElement | null) => void;
  onToggle: () => void;
  onEnter: (el: HTMLButtonElement, id: string) => void;
  onLeave: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div>
      <button
        type="button"
        id={`projects-row-${p.id}`}
        ref={buttonRef}
        aria-expanded={open}
        aria-controls={`projects-panel-${p.id}`}
        onClick={onToggle}
        onPointerEnter={(e) => onEnter(e.currentTarget, p.id)}
        onPointerLeave={onLeave}
        onFocus={(e) => onEnter(e.currentTarget, p.id)}
        onBlur={onLeave}
        className="group grid w-full cursor-pointer grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3 py-5 text-left sm:grid-cols-[2.5rem_1fr_auto_auto] sm:gap-x-5 sm:py-6"
      >
        <span
          className={
            open
              ? "font-mono text-xs text-accent sm:text-sm"
              : "font-mono text-xs text-muted transition-colors duration-300 group-hover:text-ink sm:text-sm"
          }
        >
          {p.index || pad(i + 1)}
        </span>
        <span className="font-display text-[clamp(1.35rem,3vw,2.1rem)] font-bold leading-[1.05] tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [font-variation-settings:'wdth'_95] group-hover:translate-x-2 sm:text-balance">
          {p.title}
        </span>
        <span className="hidden items-center gap-4 sm:flex sm:gap-6">
          <span className="max-w-44 truncate font-mono text-xs text-muted transition-colors duration-300 group-hover:text-ink">
            {p.category}
          </span>
          <span className="font-mono text-xs text-muted">{p.year}</span>
        </span>
        <motion.span
          aria-hidden="true"
          className="sr-only font-mono text-muted sm:not-sr-only sm:text-sm"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
        >
          +
        </motion.span>
        {/* Touch devices have no hover preview: show a compact one inline. */}
        <span className="col-span-full hidden items-center gap-4 pt-1 [@media(hover:none)]:flex">
          <span className="h-10 w-20 text-ink">
            <ProjectDiagram project={p} />
          </span>
          <span className="font-mono text-[11px] text-ink">{p.year}</span>
          <span className="font-mono text-[11px] lowercase text-muted">/ {p.category}</span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            id={`projects-panel-${p.id}`}
            role="region"
            aria-label={`Details for ${p.title}`}
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -4 }}
            transition={{ duration: reduce ? 0 : 0.24, ease: EASE }}
            className="grid gap-8 pb-8 pt-1 md:grid-cols-12 md:gap-10 md:pb-10"
          >
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] leading-relaxed text-muted">
                {p.meta}
              </p>
              <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted">
                {p.summary}
              </p>
              <dl className="mt-5 grid max-w-[58ch] grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 font-mono text-[11px]">
                <dt className="text-muted">role</dt>
                <dd className="text-ink">{p.role}</dd>
                <dt className="text-muted">client</dt>
                <dd className="text-ink">{p.client}</dd>
              </dl>
              {p.outcomes?.length > 0 && (
                <ul className="mt-5 grid max-w-[58ch] gap-1 font-mono text-xs text-muted">
                  {p.outcomes.map((o) => (
                    <li key={o.label} className="flex items-baseline gap-2">
                      <span className="shrink-0 text-ink">{o.value}</span>
                      <span
                        aria-hidden="true"
                        className="min-w-3 flex-1 self-center border-b border-dotted border-ink/30"
                      />
                      <span className="text-right">{o.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li key={t} className="chip text-[11px] leading-4">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.liveUrl || p.githubUrl) && (
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                    >
                      live site
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                    >
                      source
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="md:col-span-5">
              <p className="mb-3 font-mono text-[11px] lowercase tracking-widest text-muted">
                key decisions
              </p>
              <ol>
                {p.decisions.map((d, i2) => (
                  <motion.li
                    key={d.title}
                    initial={reduce ? { opacity: 1 } : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.3,
                      delay: reduce ? 0 : 0.12 + i2 * 0.09,
                      ease: EASE,
                    }}
                    className="grid grid-cols-[2rem_1fr] gap-x-3 border-line border-t py-3 last:border-b"
                  >
                    <span className="font-mono text-[11px] text-muted">{pad(i2 + 1)}</span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{d.title}</p>
                      <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-muted">
                        {d.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
