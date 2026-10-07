"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon } from "./icons";
import { useLanguage } from "./language-provider";

import { type CaseStudy, defaultProjects } from "@/lib/projects";

interface BouayabenWorkProps {
  projects?: CaseStudy[];
}

export function BouayabenWork({ projects = defaultProjects }: BouayabenWorkProps) {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);
  const displayProjects = projects && projects.length > 0 ? projects : defaultProjects;

  // Close on Escape key
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
    <section id="work" className="bg-white dark:bg-[#0e0e12] py-14 sm:py-20 md:py-28 border-b border-[#e5e7eb] dark:border-[#2e2e38] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Head matching bouayaben.com: Label Left, Count Right */}
        <Reveal delay={50} distance={16}>
          <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-[#17171c] dark:border-[#2e2e38] transition-colors">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#17171c] dark:text-[#f4f4f7] font-semibold">
              {t("work_section_title")}
            </h2>
            <p className="font-mono text-xs text-[#75758a] dark:text-[#93939f]" aria-hidden="true">
              ({String(displayProjects.length).padStart(2, "0")})
            </p>
          </div>
        </Reveal>

        {/* Work List matching bouayaben.com .work-list */}
        <ul className="divide-y divide-[#d9d9dd] dark:divide-[#2e2e38] transition-colors">
          {displayProjects.map((project, idx) => (
            <li key={project.id} className="group">
              <Reveal delay={idx * 70} distance={20}>
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full text-left py-5 sm:py-7 md:py-8 -mx-3 sm:-mx-5 px-3 sm:px-5 rounded-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all duration-200 hover:bg-[#faf9f6] dark:hover:bg-[#16161f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1863dc]"
                >
                  <div className="flex items-baseline gap-3 sm:gap-8 min-w-0">
                    {/* Work Index */}
                    <span className="font-mono text-xs text-[#93939f] dark:text-[#78788a] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] transition-colors duration-200 w-5 sm:w-6 flex-shrink-0">
                      {project.index}
                    </span>

                    {/* Work Title & Meta */}
                    <div className="min-w-0">
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#17171c] dark:text-[#f4f4f7] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] transition-colors duration-200 tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[11px] sm:text-xs text-[#75758a] dark:text-[#93939f] mt-1 group-hover:text-[#424242] dark:group-hover:text-[#c5c5d2] transition-colors duration-200">
                        {project.meta}
                      </p>
                    </div>
                  </div>

                  {/* Year & Arrow */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-10 pl-8 sm:pl-0 flex-shrink-0 pt-1 sm:pt-0">
                    <span className="font-mono text-xs text-[#93939f] dark:text-[#78788a] group-hover:text-[#616161] dark:group-hover:text-[#a0a0b2] transition-colors duration-200">
                      {project.year}
                    </span>
                    <span className="font-mono text-lg text-[#17171c] dark:text-[#f4f4f7] group-hover:text-[#1863dc] dark:group-hover:text-[#3b82f6] group-hover:translate-x-2 transition-all duration-200">
                      →
                    </span>
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide-over Case Study Drawer matching bouayaben.com depth */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-xs transition-opacity animate-backdrop-fade"
          ></div>

          {/* Drawer Panel */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#121218] h-full shadow-2xl z-10 overflow-y-auto flex flex-col justify-between p-5 sm:p-8 md:p-10 border-l border-[#d9d9dd] dark:border-[#2e2e38] animate-slide-in-right transition-colors">
            {/* Drawer Header */}
            <div>
              <div className="flex items-start sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-[#e5e7eb] dark:border-[#2e2e38] transition-colors">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="font-mono text-[11px] sm:text-xs text-[#ff7759] font-medium uppercase">
                    {t("drawer_case_study")} // {activeProject.index}
                  </span>
                  <span className="text-[#93939f] text-xs">•</span>
                  <span className="font-mono text-[11px] sm:text-xs text-[#75758a] dark:text-[#93939f]">
                    {activeProject.category}
                  </span>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 -mr-1.5 rounded-full hover:bg-[#eeece7] dark:hover:bg-[#1f1f2b] text-[#17171c] dark:text-white hover:rotate-90 transition-all duration-200 flex-shrink-0"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Summary */}
              <div className="pt-6 sm:pt-8">
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-[#17171c] dark:text-[#f4f4f7] tracking-tight leading-tight">
                  {activeProject.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#616161] dark:text-[#93939f] font-sans leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              {/* Meta Grid */}
              <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-[14px] sm:rounded-[16px] bg-[#eeece7] dark:bg-[#181822] border border-[#d9d9dd] dark:border-[#2e2e38] font-mono text-xs transition-colors">
                <div>
                  <div className="text-[#75758a] dark:text-[#93939f] text-[10px] uppercase mb-0.5">{t("drawer_context")}</div>
                  <div className="text-[#17171c] dark:text-[#f4f4f7] font-medium text-xs sm:text-[13px]">{activeProject.client}</div>
                </div>
                <div>
                  <div className="text-[#75758a] dark:text-[#93939f] text-[10px] uppercase mb-0.5">{t("drawer_role")}</div>
                  <div className="text-[#17171c] dark:text-[#f4f4f7] font-medium text-xs sm:text-[13px]">{activeProject.role}</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[#75758a] dark:text-[#93939f] text-[10px] uppercase mb-0.5">{t("drawer_timeline")}</div>
                  <div className="text-[#17171c] dark:text-[#f4f4f7] font-medium text-xs sm:text-[13px]">{activeProject.year}</div>
                </div>
              </div>

              {/* The Constraint */}
              <div className="mt-8 sm:mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#75758a] dark:text-[#93939f] mb-2.5 sm:mb-3">
                  {t("drawer_constraint")}
                </h4>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#212121] dark:text-[#d0d0d8] leading-relaxed">
                  {activeProject.constraint.map((c, i) => (
                    <p key={i} className="p-3 sm:p-3.5 rounded-[12px] bg-zinc-50 dark:bg-[#181822] hover:bg-white dark:hover:bg-[#1f1f2b] border border-[#e5e7eb] dark:border-[#2e2e38] hover:border-[#1863dc]/30 dark:hover:border-[#3b82f6]/40 hover:shadow-xs transition-all duration-200">
                      {c}
                    </p>
                  ))}
                </div>
              </div>

              {/* Architectural Decisions */}
              <div className="mt-8 sm:mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#003c33] dark:text-[#a3f3cb] font-medium mb-2.5 sm:mb-3">
                  {t("drawer_decisions")}
                </h4>
                <div className="space-y-3.5 sm:space-y-4">
                  {activeProject.decisions.map((d, i) => (
                    <div key={i} className="border-l-2 border-[#003c33] dark:border-[#10b981] hover:border-[#1863dc] dark:hover:border-[#3b82f6] pl-3.5 sm:pl-4 py-1 hover:pl-5 transition-all duration-200 cursor-default">
                      <div className="font-display text-sm sm:text-base font-medium text-[#17171c] dark:text-[#f4f4f7]">
                        {d.title}
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-[#616161] dark:text-[#93939f] leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantified Outcomes */}
              <div className="mt-8 sm:mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#75758a] dark:text-[#93939f] mb-2.5 sm:mb-3">
                  {t("drawer_outcomes")}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {activeProject.outcomes.map((o, i) => (
                    <div key={i} className="p-3.5 sm:p-4 rounded-[12px] bg-[#eeece7] dark:bg-[#181822] hover:bg-white dark:hover:bg-[#1f1f2b] border border-[#d9d9dd] dark:border-[#2e2e38] hover:border-[#1863dc]/40 dark:hover:border-[#3b82f6]/50 hover:-translate-y-1 hover:shadow-xs text-center transition-all duration-200 cursor-default">
                      <div className="font-display text-xl sm:text-2xl font-medium text-[#17171c] dark:text-[#f4f4f7]">
                        {o.value}
                      </div>
                      <div className="font-mono text-[10px] text-[#75758a] dark:text-[#93939f] mt-1 leading-tight">
                        {o.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Pills */}
              <div className="mt-8 sm:mt-10">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#75758a] dark:text-[#93939f] mb-2">
                  {t("drawer_tech")}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="font-mono text-[11px] sm:text-xs bg-white dark:bg-[#181822] text-[#212121] dark:text-[#e4e4e8] px-2.5 py-1 rounded-[6px] border border-[#d9d9dd] dark:border-[#2e2e38] hover:bg-[#17171c] dark:hover:bg-white hover:text-white dark:hover:text-[#0e0e12] hover:border-[#17171c] dark:hover:border-white hover:scale-105 active:scale-95 transition-all duration-150 cursor-default shadow-xs"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Actions */}
            <div className="mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-[#e5e7eb] dark:border-[#2e2e38] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-0 transition-colors">
              <a
                href={activeProject.githubUrl || "https://github.com/theodhorex"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-interactive inline-flex items-center justify-center gap-2 bg-[#17171c] dark:bg-white hover:bg-black dark:hover:bg-[#e4e4e8] text-white dark:text-[#0e0e12] text-xs font-medium px-5 py-3 sm:py-2.5 rounded-[32px] group transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{t("drawer_source_repo")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>

              <button
                onClick={() => setActiveProject(null)}
                className="text-xs font-mono text-[#75758a] dark:text-[#93939f] hover:text-[#17171c] dark:hover:text-white transition-colors text-center py-2 sm:py-0"
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
