"use client";

import { ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";

export function AboutCapabilities() {
  const capabilities = [
    {
      domain: "01 // Autonomous Agent Architectures",
      role: "Core Specialization",
      items: [
        "Deterministic JSON-Schema & Zod validation barriers",
        "Multi-step speculative decoding and reflective self-repair",
        "Episodic vs semantic long-term memory partitioning",
        "Tool sandbox containment & atomic transaction rollbacks",
      ],
    },
    {
      domain: "02 // High-Throughput Edge Web",
      role: "Platform Engineering",
      items: [
        "Next.js 16 App Router streaming SSR & Turbopack builds",
        "Sub-30ms global Time-to-First-Byte across multi-region CDNs",
        "Optimistic client synchronization with zero layout shift",
        "Zero-cold-start distributed edge workers & Redis caching",
      ],
    },
    {
      domain: "03 // Vector Retrieval & Embeddings",
      role: "Applied Machine Learning",
      items: [
        "Hybrid sparse-dense retrieval (BM25 + Cohere Embed v3)",
        "Quantization optimization (FP8 & INT4 SIMD acceleration)",
        "pgvector HNSW index tuning across millions of embeddings",
        "High-dimensional latent space visualizers in WebGL",
      ],
    },
    {
      domain: "04 // Systems Reliability & Telemetry",
      role: "Production Resilience",
      items: [
        "In-process tracing daemons with DuckDB columnar storage",
        "OpenTelemetry distributed span correlation across microservices",
        "Automated prompt drift detection and token degradation guards",
        "Tamper-proof, content-addressed append-only audit graphs",
      ],
    },
  ];

  const fieldNotes = [
    {
      title: "Where a warning becomes a failure is an invariant call",
      body: "In non-deterministic agent workflows, models often drift toward plausible hallucinations. Establishing non-negotiable contract boundaries outside the model is the only way to ensure production reliability.",
    },
    {
      title: "Decouple perceptual speed from generative physics",
      body: "Token generation takes physics time; UI interactivity should not. By streaming initial shell frames within 25ms and buffering speculative steps, users never feel the weight of deep neural compute.",
    },
    {
      title: "Treat state as an immutable audit sequence",
      body: "When an agent fails in production, reproducing the failure without full state graphs is impossible. We record every token prompt, context retrieval, and IO mutation into immutable hash chains.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20 sm:py-28 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Lede (bouayaben-inspired) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-2.5 py-1 rounded-[4px] border border-[#d9d9dd] inline-block mb-3">
                OPERATIONAL DOCTRINE // ABOUT
              </span>
              <h2 className="section-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#17171c] leading-[1.05]">
                Engineering robust systems for complex, high-concurrency realities.
              </h2>

              <p className="mt-6 text-base text-[#616161] font-sans leading-relaxed">
                I’m Theodore (Theo), a full-stack engineer and AI systems architect based in Indonesia (UTC+7),
                working with distributed teams worldwide. I focus on the hard boundary where probabilistic AI models
                must interface with deterministic production software.
              </p>

              <div className="mt-8 p-5 rounded-[16px] bg-[#eeece7] border border-[#d9d9dd] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#d9d9dd]">
                  <span className="text-[#75758a] uppercase">VERIFIED IDENTITY</span>
                  <span className="text-[#003c33] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>L3/L4 ARCHITECT</span>
                  </span>
                </div>
                <div className="flex justify-between text-[#212121]">
                  <span className="text-[#75758a]">Availability:</span>
                  <span className="font-medium text-[#17171c]">Select 2026 Strategic Advisory</span>
                </div>
                <div className="flex justify-between text-[#212121]">
                  <span className="text-[#75758a]">Timezone:</span>
                  <span>UTC+7 (Seamless Asia/EU/US overlap)</span>
                </div>
                <div className="flex justify-between text-[#212121]">
                  <span className="text-[#75758a]">PGP Fingerprint:</span>
                  <span className="text-zinc-600">4A9F 11C2 98E0 2026</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Capabilities Matrix & Field Notes */}
          <div className="lg:col-span-7 space-y-16">
            {/* Capabilities Matrix */}
            <Reveal delay={100}>
              <div>
                <div className="pb-4 border-b border-[#d9d9dd] flex items-center justify-between mb-8">
                  <h3 className="font-display text-2xl font-normal text-[#17171c]">
                    Capabilities Matrix
                  </h3>
                  <span className="font-mono text-xs text-[#75758a]">
                    4 CORE CAPABILITY SHARDS
                  </span>
                </div>

                <div className="space-y-6">
                  {capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-[16px] bg-[#eeece7]/50 border border-[#d9d9dd] hover:border-[#17171c]/40 transition-all cohere-card-lift"
                    >
                      <div className="flex items-center justify-between pb-3 border-b border-[#d9d9dd]/60 mb-4">
                        <span className="font-mono text-xs font-semibold text-[#17171c] uppercase tracking-wider">
                          {cap.domain}
                        </span>
                        <span className="font-mono text-[11px] text-[#003c33] bg-[#edfce9] px-2 py-0.5 rounded-[4px] border border-[#d9d9dd]">
                          {cap.role}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {cap.items.map((item, iIdx) => (
                          <div key={iIdx} className="flex items-start gap-2 text-[#212121]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1863dc] mt-1.5 flex-shrink-0"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Field Notes & Architectural Principles (bouayaben-inspired .about-notes) */}
            <Reveal delay={200}>
              <div>
                <div className="pb-4 border-b border-[#d9d9dd] flex items-center justify-between mb-8">
                  <h3 className="font-display text-2xl font-normal text-[#17171c]">
                    Field Notes &amp; Production Principles
                  </h3>
                  <span className="font-mono text-xs text-[#ff7759] font-medium">
                    OBSERVATIONS FROM REAL BUILDS
                  </span>
                </div>

                <div className="divide-y divide-[#d9d9dd]">
                  {fieldNotes.map((note, idx) => (
                    <div key={idx} className="py-6 first:pt-0 last:pb-0">
                      <div className="font-mono text-[11px] text-[#75758a] uppercase mb-1">
                        PRINCIPLE // 0{idx + 1}
                      </div>
                      <h4 className="font-display text-lg sm:text-xl font-normal text-[#17171c]">
                        {note.title}
                      </h4>
                      <p className="mt-2 text-sm text-[#616161] font-sans leading-relaxed">
                        {note.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
