"use client";

import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";

export function DarkFeatureBand() {
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [activeStage, setActiveStage] = useState(2);

  // Automated pipeline signal trace
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 6);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

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

  const stages = [
    { num: "01", label: "Query Ingress" },
    { num: "02", label: "Vector Shard" },
    { num: "03", label: "Schema Guard" },
    { num: "04", label: "Sandbox Tool" },
    { num: "05", label: "Token Stream" },
    { num: "06", label: "Audit Commit" },
  ];

  return (
    <section id="architecture" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* The Cohere Deep Green Band Container */}
          <div className="bg-[#003c33] text-white rounded-[22px] p-8 sm:p-12 lg:p-16 border border-[#005247] shadow-2xl relative overflow-hidden">
            {/* Subtle Ambient Background Grain/Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#edfce9]/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Section Header */}
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-xs uppercase tracking-wider bg-[#edfce9] text-[#003c33] px-3 py-1 rounded-full font-medium inline-block mb-4 shadow-sm">
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
                  className={`cursor-pointer rounded-[16px] p-7 transition-all duration-300 border ${
                    selectedPillar === idx
                      ? "bg-[#071829]/90 border-white/50 shadow-xl -translate-y-1"
                      : "bg-black/20 hover:bg-black/35 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-sm text-[#edfce9] font-medium">
                      {"// " + pillar.id}
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
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-200">
                    ACTIVE INVARIANT PIPELINE TRACE
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  CURRENT VERIFICATION: {stages[activeStage].label}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
                {stages.map((stage, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <div
                      key={stage.num}
                      onClick={() => setActiveStage(idx)}
                      className={`cursor-pointer border p-3 rounded-[8px] text-center transition-all duration-300 ${
                        isActive
                          ? "bg-black/70 border-emerald-400 text-[#edfce9] shadow-md scale-102"
                          : "bg-black/30 border-white/10 hover:border-white/20 text-zinc-300"
                      }`}
                    >
                      <div className={`text-[10px] ${isActive ? "text-emerald-400 font-medium" : "text-zinc-500"}`}>
                        STAGE {stage.num}
                      </div>
                      <div className="mt-1 font-medium truncate">
                        {stage.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
