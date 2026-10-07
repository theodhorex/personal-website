"use client";

import { useState } from "react";
import { ShieldCheck, Zap, GitCommit, ArrowRight, CheckCircle2 } from "lucide-react";

export function DarkFeatureBand() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: "01",
      title: "Sandboxed Determinism",
      subtitle: "Zero Hallucinated Tool Executions",
      description:
        "Every generative action is filtered through strict schema contracts (Zod & Pydantic). If an argument deviates from the contract, the runtime automatically initiates an internal self-repair reflection pass before touching system IO.",
      guarantee: "100% schema type-safety",
      spec: "RFC-7807 compliant error contracts",
    },
    {
      id: "02",
      title: "Edge-First Streaming",
      subtitle: "Sub-50ms Perceptual Latency",
      description:
        "We decouple token generation physics from perceptual UI speed. Next.js 16 App Router streaming, speculative prefetching, and edge caching guarantee the client receives initial UI frames in under 40 milliseconds globally.",
      guarantee: "<40ms global Time-to-First-Byte",
      spec: "HTTP/3 multiplexed event streams",
    },
    {
      id: "03",
      title: "Immutable Audit Graphs",
      subtitle: "Full State Reproducibility",
      description:
        "Every prompt variation, token embedding, tool invocation, and memory graph update is recorded into immutable, content-addressed append-only logs. Any anomalous agent action can be replayed and inspected frame-by-frame.",
      guarantee: "Deterministic replayability",
      spec: "Cryptographic hash chain tracing",
    },
  ];

  return (
    <section id="architecture" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The Cohere Deep Green Band Container */}
        <div className="bg-[#003c33] text-white rounded-[22px] p-8 sm:p-12 lg:p-16 border border-[#005247] shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Grain/Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#edfce9]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section Header */}
          <div className="max-w-3xl relative z-10">
            <span className="font-mono text-xs uppercase tracking-wider bg-[#edfce9] text-[#003c33] px-3 py-1 rounded-full font-medium inline-block mb-4">
              SYSTEMS ARCHITECTURE &amp; METHODOLOGY
            </span>

            <h2 className="section-display text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.05]">
              Deterministic control beneath non-deterministic intelligence.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-emerald-100/80 font-sans leading-relaxed">
              Foundation models are inherently probabilistic; the engineering harness wrapping them must be
              deterministic, measurable, and fault-tolerant. Here is the operational philosophy behind my software.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 relative z-10">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`cursor-pointer rounded-[16px] p-7 transition-all border ${
                  selectedPillar === idx
                    ? "bg-[#071829]/90 border-white/40 shadow-xl"
                    : "bg-black/20 hover:bg-black/35 border-white/10"
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-sm text-[#edfce9] font-medium">
                    // {pillar.id}
                  </span>
                  {selectedPillar === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#edfce9] animate-ping"></span>
                  )}
                </div>

                <h3 className="font-display text-2xl font-normal text-white mt-5">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-emerald-200/80 mt-1">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed mt-4">
                  {pillar.description}
                </p>

                <div className="mt-6 pt-5 border-t border-white/10 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#edfce9]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{pillar.guarantee}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {pillar.spec}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Pipeline Sequence Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-200">
                ACTIVE INVARIANT PIPELINE TRACE
              </span>
              <span className="font-mono text-xs text-zinc-400">
                STATUS: ENFORCING CONTINUOUS CHECKS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
              <div className="bg-black/40 border border-white/10 p-3 rounded-[8px] text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 01</div>
                <div className="text-white mt-1 font-medium">Query Ingress</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-[8px] text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 02</div>
                <div className="text-white mt-1 font-medium">Vector Shard</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-[8px] text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 03</div>
                <div className="text-[#edfce9] mt-1 font-medium">Schema Guard</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-[8px] text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 04</div>
                <div className="text-white mt-1 font-medium">Sandbox Tool</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-[8px] text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 05</div>
                <div className="text-white mt-1 font-medium">Token Stream</div>
              </div>
              <div className="bg-black/40 border border-white/10 p-3 rounded-[8px] text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 06</div>
                <div className="text-emerald-400 mt-1 font-medium">Audit Commit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
