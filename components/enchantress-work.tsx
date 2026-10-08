"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Check, ExternalLink, X } from "lucide-react";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";
import { GithubIcon } from "./icons";
import { type CaseStudy, defaultProjects } from "@/lib/projects";

interface EnchantressWorkProps {
  projects?: CaseStudy[];
}

export function EnchantressWork({ projects = defaultProjects }: EnchantressWorkProps) {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);
  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  // Visual gradients for cards
  const cardGradients = [
    "from-purple-950/70 via-indigo-950/40 to-black/90",
    "from-blue-950/70 via-slate-950/40 to-black/90",
    "from-amber-950/70 via-stone-950/40 to-black/90",
    "from-emerald-950/70 via-teal-950/40 to-black/90",
    "from-rose-950/70 via-zinc-950/40 to-black/90",
  ];

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    if (activeProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section id="work" className="landing-section">
      <Reveal delay={60} distance={18}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-500 font-semibold">
              {"// PORTFOLIO SHOWCASE"}
            </span>
            <h2 className="section-heading mt-1">{t("work_section_title")}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              {t("work_section_sub")}
            </p>
          </div>
          <span className="font-mono text-xs text-zinc-500 self-start sm:self-end">
            ({String(displayProjects.length).padStart(2, "0")} Selected)
          </span>
        </div>
      </Reveal>

      {/* Enchantress Step-Strip Horizontal Snap Cards Carousel */}
      <div className="step-strip-wrap">
        <div className="step-strip">
          {displayProjects.map((project, idx) => (
            <Reveal
              key={project.id}
              delay={idx * 80}
              distance={20}
              className="h-full"
            >
              <div
                onClick={() => setActiveProject(project)}
                className="step-card group h-full cursor-pointer select-none"
              >
                {/* Background Gradient Texture */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    cardGradients[idx % cardGradients.length]
                  } opacity-90 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Subtle Grid Accent */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Card Header & Content */}
                <div className="step-card-copy relative z-10">
                  <span className="step-card-label text-amber-300 dark:text-amber-400">
                    {project.index} · {project.category}
                  </span>
                  <h3 className="step-card-title text-white group-hover:text-amber-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm line-clamp-3 mt-1 font-sans">
                    {project.summary}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-white/90 border border-white/15 backdrop-blur-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Circular Arrow Badge */}
                <div className="step-card-arrow relative z-10 mt-6" aria-hidden="true">
                  ↗
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Slide-Over Case Study Drawer */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs animate-backdrop-fade cursor-pointer"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0f0e15] h-full shadow-2xl z-10 overflow-y-auto flex flex-col justify-between p-6 sm:p-10 border-l border-zinc-200 dark:border-zinc-800 animate-slide-in-right">
            <div>
              {/* Drawer Header */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-500 font-semibold">
                    {t("drawer_case_study")} // {activeProject.index}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white mt-1">
                    {activeProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all hover:rotate-90"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Summary */}
              <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {activeProject.summary}
              </p>

              {/* Meta Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 font-mono text-xs">
                <div>
                  <div className="text-zinc-400 text-[10px] uppercase mb-0.5">
                    {t("drawer_context")}
                  </div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">
                    {activeProject.client}
                  </div>
                </div>
                <div>
                  <div className="text-zinc-400 text-[10px] uppercase mb-0.5">
                    {t("drawer_role")}
                  </div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">
                    {activeProject.role}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-zinc-400 text-[10px] uppercase mb-0.5">
                    {t("drawer_timeline")}
                  </div>
                  <div className="font-medium text-zinc-900 dark:text-zinc-100">
                    {activeProject.year}
                  </div>
                </div>
              </div>

              {/* Constraint & Challenge */}
              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-3">
                  {t("drawer_constraint")}
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  {activeProject.constraint.map((c, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Decisions */}
              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-amber-500 font-semibold mb-3">
                  {t("drawer_decisions")}
                </h4>
                <div className="space-y-4">
                  {activeProject.decisions.map((d, i) => (
                    <div
                      key={i}
                      className="border-l-2 border-amber-500/80 pl-4 py-1"
                    >
                      <div className="font-medium text-sm text-zinc-900 dark:text-white">
                        {d.title}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Outcomes */}
              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-3">
                  {t("drawer_outcomes")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeProject.outcomes.map((o, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-center"
                    >
                      <div className="font-display text-xl sm:text-2xl font-bold text-amber-500">
                        {o.value}
                      </div>
                      <div className="font-mono text-[10px] text-zinc-500 mt-1 leading-tight">
                        {o.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-2">
                  {t("drawer_tech")}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <a
                href={activeProject.githubUrl || "https://github.com/theodhorex"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-signup"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{t("drawer_source_repo")}</span>
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </a>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                {t("drawer_close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
