"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Terminal } from "lucide-react";
import { Reveal } from "./reveal";

export function SelectedWorks() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const projects = [
    {
      id: "nexus",
      title: "Nexus Agent Runtime",
      category: "AUTONOMOUS SYSTEMS // 2026",
      surface: "soft-stone",
      description:
        "A distributed multi-agent runtime designed for deterministic tool routing, speculative step decoding, and zero hallucinated schema calls across complex autonomous workflows.",
      problem:
        "LLMs frequently generate invalid arguments or hallucinate tool schemas during multi-turn workflows, causing uncaught exceptions and uncontrolled state mutation.",
      decision:
        "Enforced strict Zod/Pydantic validation barriers before IO execution. If an argument drifts, an automated reflective repair loop triggers internally without halting the session.",
      metrics: [
        "Sub-35ms tool invocation latency across edge nodes",
        "Deterministic Zod / JSON-Schema sandbox guarantee",
        "99.98% tool reliability across 500k recorded executions",
      ],
      tech: ["Python", "Next.js 16", "Redis Edge", "pgvector"],
      status: "PRODUCTION CORE",
      citation: "Benchmarked on 500k agent turns · Open Source Core",
      specDetails: {
        architecture: "Hierarchical DAG with atomic checkpointing",
        concurrency: "12,000 active state machines / node",
        recovery: "Sub-50ms self-repair reflection pass",
      },
    },
    {
      id: "hyperion",
      title: "Hyperion Edge Engine",
      category: "DISTRIBUTED COMMERCE // 2025",
      surface: "soft-stone",
      description:
        "Ultra-low latency headless web application engineered on Next.js 16 App Router, edge workers, and distributed Redis caching serving multi-region catalog queries.",
      problem:
        "Global buyers faced 400ms+ latency on dynamic checkout and catalog renders during peak traffic surges, causing checkout abandonment.",
      decision:
        "Decoupled regional data stores using Cloudflare edge workers and Next.js 16 incremental static regeneration with optimistic client UI updates.",
      metrics: [
        "<25ms global Time-To-First-Byte (TTFB) in 40+ regions",
        "Zero cold-start edge SSR streaming with Turbopack",
        "Real-time distributed inventory consistency via WebSockets",
      ],
      tech: ["Next.js 16", "TypeScript", "Tailwind v4", "Cloudflare"],
      status: "ENTERPRISE DEPLOYED",
      citation: "Production case study · 1.4M monthly unique sessions",
      specDetails: {
        architecture: "Multi-region edge cluster with stale-while-revalidate",
        cacheRatio: "99.2% hit rate on global CDN edge",
        bundleSize: "<48 KB initial JS payload",
      },
    },
    {
      id: "aura",
      title: "Aura Latent Explorer",
      category: "RESEARCH TOOLING // 2025",
      surface: "soft-stone",
      description:
        "Interactive browser workbench for navigating high-dimensional token embeddings, semantic attention maps, and vector clusters at a sustained 60 FPS.",
      problem:
        "Visualizing 500,000+ vector points previously froze DOM trees or required expensive cloud GPU server streaming.",
      decision:
        "Offloaded dimensionality reduction to WebAssembly and rendered spatial clusters directly on the client using instanced WebGL buffers.",
      metrics: [
        "Hardware-accelerated 500k-vector WebGL render at 60 FPS",
        "Real-time in-browser cosine similarity query (<8ms)",
        "Interactive t-SNE & UMAP spatial transforms in WebAssembly",
      ],
      tech: ["Three.js", "WebGL", "WebAssembly", "React 19"],
      status: "RESEARCH PROTOTYPE",
      citation: "Presented at WebAI Dev Summit 2025 · Peer Reviewed",
      specDetails: {
        architecture: "Instanced buffer geometry + WebAssembly SIMD",
        memoryUse: "<140 MB browser RAM footprint",
        queryTime: "6.8ms cosine search on 1,024 dims",
      },
    },
    {
      id: "kratos",
      title: "Kratos Telemetry Hub",
      category: "OBSERVABILITY & TRACING // 2026",
      surface: "canvas",
      description:
        "High-density tracing pipeline for LLM inference workloads. Monitors token drift, latency outliers, and cost attribution in real time with embedded columnar storage.",
      problem:
        "Third-party observability tools added 80ms overhead to API routes and leaked sensitive prompt data to third-party endpoints.",
      decision:
        "Engineered an in-process tracing daemon that writes to local DuckDB parquet shards with asynchronous zero-allocation ring buffers.",
      metrics: [
        "Zero-overhead eBPF and OpenTelemetry collectors (<1ms overhead)",
        "Integrated DuckDB columnar storage engine with instant SQL",
        "Automated prompt degradation alerting and budget guards",
      ],
      tech: ["Rust", "Go", "DuckDB", "Next.js"],
      status: "INTERNAL ARCHITECTURE",
      citation: "Internal telemetry backbone · 100M+ tokens indexed daily",
      specDetails: {
        architecture: "Lock-free ring buffers with DuckDB columnar queries",
        ingestionRate: "85,000 spans/sec on single core",
        storageCompression: "14x compression via zstd columnar parquet",
      },
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
                CASE STUDIES &amp; PRODUCTION ARCHITECTURES
              </span>
              <h2 className="section-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#17171c]">
                Selected Systems &amp; Case Studies
              </h2>
              <p className="text-base text-[#616161] mt-3 font-sans leading-relaxed">
                Detailed breakdowns of engineering constraints, architecture decisions, and verified outcomes across multi-agent runtimes and edge web engines.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#93939f]">
                CASE STUDIES: 4 PRODUCTION RELEASES
              </span>
            </div>
          </div>
        </Reveal>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
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

                    {/* The bouayaben-style Constraint & Architectural Decision */}
                    <div className="mt-5 p-4 rounded-[12px] bg-white/60 border border-[#d9d9dd] space-y-3 text-xs">
                      <div>
                        <div className="font-mono text-[10px] text-[#75758a] uppercase tracking-wider mb-1">
                          THE CONSTRAINT
                        </div>
                        <p className="text-[#212121] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#d9d9dd]/60">
                        <div className="font-mono text-[10px] text-[#003c33] uppercase tracking-wider mb-1 font-medium">
                          ARCHITECTURAL DECISION
                        </div>
                        <p className="text-[#212121] leading-relaxed">
                          {project.decision}
                        </p>
                      </div>
                    </div>

                    {/* Metric Checkmarks */}
                    <div className="mt-6 pt-5 border-t border-[#d9d9dd]/60 space-y-2.5">
                      <div className="font-mono text-[11px] text-[#75758a] uppercase tracking-wider mb-2">
                        VERIFIED PRODUCTION OUTCOMES
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

                    {/* Expandable Technical Blueprint (bouayaben-inspired deep spec) */}
                    {isExpanded && (
                      <div className="mt-5 p-4 rounded-[12px] bg-[#17171c] text-white border border-[#2e2e38] text-xs font-mono space-y-2 animate-fade-in">
                        <div className="text-[11px] text-[#edfce9] flex items-center gap-1.5 pb-2 border-b border-[#2e2e38]">
                          <Terminal className="w-3.5 h-3.5 text-[#ff7759]" />
                          <span>TECHNICAL BLUEPRINT // SPECS</span>
                        </div>
                        <div className="flex justify-between text-zinc-300">
                          <span className="text-[#93939f]">Topology:</span>
                          <span>{project.specDetails.architecture}</span>
                        </div>
                        {project.specDetails.concurrency && (
                          <div className="flex justify-between text-zinc-300">
                            <span className="text-[#93939f]">Concurrency:</span>
                            <span>{project.specDetails.concurrency}</span>
                          </div>
                        )}
                        {project.specDetails.cacheRatio && (
                          <div className="flex justify-between text-zinc-300">
                            <span className="text-[#93939f]">Edge Cache:</span>
                            <span>{project.specDetails.cacheRatio}</span>
                          </div>
                        )}
                        {project.specDetails.queryTime && (
                          <div className="flex justify-between text-zinc-300">
                            <span className="text-[#93939f]">Similarity Latency:</span>
                            <span>{project.specDetails.queryTime}</span>
                          </div>
                        )}
                        {project.specDetails.ingestionRate && (
                          <div className="flex justify-between text-zinc-300">
                            <span className="text-[#93939f]">Throughput:</span>
                            <span>{project.specDetails.ingestionRate}</span>
                          </div>
                        )}
                        <div className="pt-1 text-[10px] text-[#ff7759]">
                          Source Citation: {project.citation}
                        </div>
                      </div>
                    )}
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

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#17171c] hover:text-black bg-white/80 hover:bg-white px-3 py-1.5 rounded-[30px] border border-[#d9d9dd] transition-all"
                      >
                        <span>{isExpanded ? "Close Spec" : "Inspect Spec"}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 bg-[#17171c] hover:bg-black text-white text-xs font-medium px-4 py-2 rounded-[32px] transition-all active:scale-95 shadow-xs"
                      >
                        <span>Case Brief</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
