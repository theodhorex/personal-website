"use client";

import { ArrowUpRight, Code2, Cpu, Zap } from "lucide-react";
import { Reveal } from "./reveal";
import { GithubIcon } from "./icons";

export function AboutBrief() {
  const stack = [
    {
      category: "Frontend & Creative",
      icon: Code2,
      tools: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "WebGL", "Turbopack"],
      desc: "Fast, accessible, and kinetic interfaces engineered with microsecond precision.",
    },
    {
      category: "Backend & Systems",
      icon: Cpu,
      tools: ["Python", "Rust", "Node.js", "Docker", "PostgreSQL", "Redis Edge"],
      desc: "High-throughput APIs, streaming architectures, and distributed edge workers.",
    },
    {
      category: "AI & Vector Search",
      icon: Zap,
      tools: ["Multi-Agent Loops", "Zod Validation", "pgvector", "Cohere API", "LangGraph"],
      desc: "Deterministic safeguards wrapped around foundation models for production reliability.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-24 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Short Personal Statement */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-2.5 py-1 rounded-[4px] border border-[#d9d9dd] inline-block mb-3">
                ABOUT &amp; CAPABILITIES
              </span>

              <h2 className="section-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#17171c] leading-[1.08]">
                Obsessed with speed, precision, and craftsmanship.
              </h2>

              <p className="mt-6 text-base text-[#616161] font-sans leading-relaxed">
                I’m Theodore (Theo) — a full-stack engineer and AI builder operating across Indonesia (UTC+7)
                and working with teams worldwide.
              </p>

              <p className="mt-4 text-base text-[#616161] font-sans leading-relaxed">
                I build software end-to-end: from interactive client-side physics and sleek responsive interfaces,
                down to streaming edge APIs and autonomous multi-agent pipelines.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/theodhorex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#17171c] hover:bg-black text-white text-xs font-medium px-4 py-2.5 rounded-[32px] transition-all shadow-xs active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub @theodhorex</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[32px] border border-[#d9d9dd] bg-[#edfce9] text-[#003c33] font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#003c33] animate-pulse"></span>
                  <span>Available for 2026 builds</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Stack & Arsenal */}
          <div className="lg:col-span-7 space-y-5">
            {stack.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.category} delay={idx * 100}>
                  <div className="p-6 sm:p-7 rounded-[22px] bg-[#eeece7] border border-[#d9d9dd] hover:border-[#17171c]/40 transition-all cohere-card-lift">
                    <div className="flex items-center justify-between pb-3 border-b border-[#d9d9dd]/70">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#d9d9dd] text-[#17171c]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-lg font-medium text-[#17171c]">
                          {item.category}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] text-[#75758a] uppercase">
                        {idx + 1}/3 ARSENAL
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-[#616161] font-sans">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[11px] bg-white text-[#212121] px-2.5 py-1 rounded-[6px] border border-[#d9d9dd] shadow-2xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
