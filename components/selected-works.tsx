import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./reveal";

export function SelectedWorks() {
  const projects = [
    {
      id: "nexus",
      title: "Nexus Agent Runtime",
      category: "AUTONOMOUS SYSTEMS // 2026",
      surface: "soft-stone",
      description:
        "A distributed multi-agent runtime designed for deterministic tool routing, speculative step decoding, and zero hallucinated schema calls.",
      metrics: [
        "Sub-35ms tool invocation latency",
        "Deterministic Zod / JSON-Schema sandbox",
        "99.98% tool reliability across 500k executions",
      ],
      tech: ["Python", "Next.js", "Redis", "pgvector"],
      status: "PRODUCTION CORE",
      stars: "Open Source",
      link: "#",
    },
    {
      id: "hyperion",
      title: "Hyperion Edge Engine",
      category: "DISTRIBUTED COMMERCE // 2025",
      surface: "soft-stone",
      description:
        "Ultra-low latency headless web application engineered on Next.js 16 App Router, edge workers, and distributed Redis caching.",
      metrics: [
        "<25ms global Time-To-First-Byte (TTFB)",
        "Zero cold-start edge SSR streaming",
        "Real-time distributed state consistency",
      ],
      tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Cloudflare"],
      status: "ENTERPRISE DEPLOYED",
      stars: "Client Case",
      link: "#",
    },
    {
      id: "aura",
      title: "Aura Latent Explorer",
      category: "RESEARCH TOOLING // 2025",
      surface: "soft-stone",
      description:
        "Interactive browser workbench for navigating high-dimensional token embeddings, semantic attention maps, and vector clusters at 60 FPS.",
      metrics: [
        "Hardware-accelerated 500k-vector WebGL render",
        "Real-time in-browser cosine similarity query",
        "Interactive t-SNE & UMAP spatial transforms",
      ],
      tech: ["Three.js", "WebGL", "WebAssembly", "React 19"],
      status: "RESEARCH PROTOTYPE",
      stars: "Scientific UI",
      link: "#",
    },
    {
      id: "kratos",
      title: "Kratos Telemetry Hub",
      category: "OBSERVABILITY & TRACING // 2026",
      surface: "canvas",
      description:
        "High-density tracing pipeline for LLM inference workloads. Monitors token drift, latency outliers, and cost attribution in real time.",
      metrics: [
        "Zero-overhead eBPF and OpenTelemetry collectors",
        "Integrated DuckDB columnar storage engine",
        "Automated prompt degradation alerting",
      ],
      tech: ["Rust", "Go", "DuckDB", "Next.js"],
      status: "INTERNAL ARCHITECTURE",
      stars: "Core Infrastructure",
      link: "#",
    },
  ];

  return (
    <section id="work" className="bg-white py-20 sm:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#e5e7eb]">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-2.5 py-1 rounded-[4px] border border-[#d9d9dd] inline-block mb-3">
                FLAGSHIP ARCHITECTURES
              </span>
              <h2 className="section-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#17171c]">
                Selected Systems &amp; Software
              </h2>
              <p className="text-base text-[#616161] mt-3 font-sans">
                Autonomous runtimes, production web engines, and telemetry tools built with uncompromising performance.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#93939f]">
                FILTER: ALL RELEASES (4)
              </span>
            </div>
          </div>
        </Reveal>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 130}>
              <div
                className={`rounded-[22px] p-8 sm:p-9 flex flex-col justify-between h-full transition-all group cohere-card-lift ${
                  project.surface === "soft-stone"
                    ? "bg-[#eeece7] border border-[#d9d9dd] hover:border-[#17171c]/50 hover:shadow-md"
                    : "bg-white border border-[#d9d9dd] hover:border-[#17171c]/50 hover:shadow-md"
                }`}
              >
                <div>
                  {/* Header Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#d9d9dd]/70">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#75758a]">
                      {project.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#17171c] font-medium bg-white/80 px-2 py-0.5 rounded-[4px] border border-[#d9d9dd]">
                      {project.status}
                    </span>
                  </div>

                  {/* Card Title & Desc */}
                  <div className="pt-6">
                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#17171c] tracking-tight group-hover:text-black">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#616161] font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metric Checkmarks */}
                  <div className="mt-6 pt-6 border-t border-[#d9d9dd]/60 space-y-2.5">
                    <div className="font-mono text-[11px] text-[#75758a] uppercase tracking-wider mb-2">
                      VERIFIED SPECIFICATIONS
                    </div>
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2.5 text-xs text-[#212121]">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#17171c] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#1863dc] transition-colors">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-8 pt-6 border-t border-[#d9d9dd]/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] bg-white text-[#616161] px-2 py-0.5 rounded-[4px] border border-[#d9d9dd]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 bg-[#17171c] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-[32px] transition-all active:scale-95 shadow-xs"
                  >
                    <span>Review System</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
