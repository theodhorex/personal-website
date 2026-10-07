"use client";

import { useState, useEffect } from "react";
import { Play, RotateCw, CheckCircle2, Cpu, Database, Activity, Sparkles, Terminal } from "lucide-react";

export function AgentConsole() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "benchmarks" | "telemetry">("pipeline");
  const [isRunning, setIsRunning] = useState(false);
  const [latency, setLatency] = useState(38);
  const [activeStep, setActiveStep] = useState(3);
  const [simProgress, setSimProgress] = useState(100);

  // Subtle telemetry heartbeat animation
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isRunning) {
        setLatency((prev) => {
          const delta = (Math.random() - 0.5) * 4;
          return Math.max(30, Math.min(46, Math.round(prev + delta)));
        });
      }
    }, 3800);
    return () => clearInterval(timer);
  }, [isRunning]);

  const runSimulation = () => {
    setIsRunning(true);
    setActiveStep(1);
    setSimProgress(33);

    setTimeout(() => {
      setActiveStep(2);
      setSimProgress(66);
    }, 550);

    setTimeout(() => {
      setActiveStep(3);
      setSimProgress(100);
      setLatency(Math.floor(32 + Math.random() * 8));
      setIsRunning(false);
    }, 1100);
  };

  return (
    <div className="bg-[#17171c] text-white rounded-[22px] p-6 sm:p-7 border border-[#2e2e38] shadow-2xl flex flex-col justify-between h-full cohere-card-lift relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1863dc]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Console Header Bar */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#2e2e38]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff7759] inline-block animate-pulse"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#edfce9] inline-block"></span>
            </div>
            <span className="font-mono text-xs text-[#93939f] tracking-wide">
              theo-runtime-node-01 // v2.6.4
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[30px] bg-[#003c33] border border-[#005247] text-[#edfce9] text-[11px] font-mono transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-[#edfce9] animate-ping"></span>
              <span>DETERMINISTIC SANDBOX</span>
            </span>
            <span className="font-mono text-[11px] text-[#93939f] transition-all">
              {latency}ms
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-[#2e2e38]/60 text-xs">
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`px-3 py-1.5 rounded-[8px] transition-all flex items-center gap-1.5 font-medium ${
              activeTab === "pipeline"
                ? "bg-white/10 text-white border border-white/20 shadow-sm"
                : "text-[#93939f] hover:text-white hover:bg-white/5"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-[#ff7759]" />
            <span>Agent Pipeline</span>
          </button>
          <button
            onClick={() => setActiveTab("benchmarks")}
            className={`px-3 py-1.5 rounded-[8px] transition-all flex items-center gap-1.5 font-medium ${
              activeTab === "benchmarks"
                ? "bg-white/10 text-white border border-white/20 shadow-sm"
                : "text-[#93939f] hover:text-white hover:bg-white/5"
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-[#1863dc]" />
            <span>Benchmarks</span>
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-3 py-1.5 rounded-[8px] transition-all flex items-center gap-1.5 font-medium ${
              activeTab === "telemetry"
                ? "bg-white/10 text-white border border-white/20 shadow-sm"
                : "text-[#93939f] hover:text-white hover:bg-white/5"
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-[#edfce9]" />
            <span>Telemetry</span>
          </button>
        </div>

        {/* Console Body based on Tab */}
        <div className="py-5">
          {activeTab === "pipeline" && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-black/40 rounded-[12px] p-3.5 border border-[#2e2e38] font-mono text-xs">
                <div className="text-[#93939f] text-[11px] mb-1 uppercase tracking-wider flex items-center justify-between">
                  <span>DISPATCH QUERY</span>
                  <span className="text-[#1863dc]">MODEL: COMMAND-R-2026</span>
                </div>
                <div className="text-zinc-200">
                  &quot;Verify invariant state across distributed vector shards and execute deterministic reconcile.&quot;
                </div>
              </div>

              {/* Execution Steps */}
              <div className="space-y-2.5">
                {/* Step 1 */}
                <div
                  className={`p-3 rounded-[10px] border transition-all duration-300 ${
                    activeStep >= 1
                      ? "bg-[#071829]/70 border-[#1863dc]/50 text-white shadow-sm"
                      : "bg-white/5 border-white/5 text-[#75758a]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Database className={`w-3.5 h-3.5 ${activeStep >= 1 ? "text-[#1863dc]" : "text-[#75758a]"}`} />
                      <span className="font-mono font-medium">01 // Shard Vector Retrieval</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#93939f]">
                      {activeStep >= 1 ? "1,024 dims • 12ms" : "queued"}
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  className={`p-3 rounded-[10px] border transition-all duration-300 ${
                    activeStep >= 2
                      ? "bg-[#003c33]/70 border-[#005247] text-white shadow-sm"
                      : "bg-white/5 border-white/5 text-[#75758a]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className={`w-3.5 h-3.5 ${activeStep >= 2 ? "text-[#edfce9]" : "text-[#75758a]"}`} />
                      <span className="font-mono font-medium">02 // Schema Invariant Verification</span>
                    </div>
                    <span className="font-mono text-[11px] text-[#edfce9]">
                      {activeStep >= 2 ? "Zod Strict Validated" : "queued"}
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div
                  className={`p-3 rounded-[10px] border transition-all duration-300 ${
                    activeStep >= 3
                      ? "bg-black/50 border-emerald-500/40 text-white shadow-sm"
                      : "bg-white/5 border-white/5 text-[#75758a]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${activeStep >= 3 ? "text-emerald-400" : "text-[#75758a]"}`} />
                      <span className="font-mono font-medium">03 // Deterministic Tool Commit</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400">
                      {activeStep >= 3 ? "0 errors // 100% pass" : "pending"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "benchmarks" && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 p-3.5 rounded-[12px] border border-[#2e2e38] transition-all hover:border-[#1863dc]/40">
                  <div className="text-[11px] font-mono text-[#93939f] uppercase">Time-To-First-Token</div>
                  <div className="text-2xl font-display font-medium text-white mt-1">28ms</div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Top 1% percentile</div>
                </div>
                <div className="bg-black/40 p-3.5 rounded-[12px] border border-[#2e2e38] transition-all hover:border-[#1863dc]/40">
                  <div className="text-[11px] font-mono text-[#93939f] uppercase">Throughput Rate</div>
                  <div className="text-2xl font-display font-medium text-white mt-1">142 t/s</div>
                  <div className="text-[10px] text-[#1863dc] font-mono mt-0.5">Streaming enabled</div>
                </div>
              </div>

              <div className="bg-black/30 p-3 rounded-[10px] border border-[#2e2e38] text-xs font-mono space-y-2">
                <div className="flex justify-between text-[#93939f]">
                  <span>VRAM Footprint</span>
                  <span className="text-white">1.8 GB / 16 GB</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#ff7759] h-full rounded-full w-[22%] transition-all duration-500"></div>
                </div>

                <div className="flex justify-between text-[#93939f] pt-1">
                  <span>Cache Hit Ratio</span>
                  <span className="text-white">99.4% (Redis Edge)</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#edfce9] h-full rounded-full w-[99%] transition-all duration-500"></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="bg-black/60 rounded-[12px] p-3.5 border border-[#2e2e38] font-mono text-[11px] space-y-1.5 text-zinc-300 animate-fade-in">
              <div className="text-[#93939f]">[12:15:02.108] INGRESS request_id=theo_994a type=POST /api/orchestrator</div>
              <div className="text-[#1863dc]">[12:15:02.119] ROUTING edge_worker=sng-01 status=COLD_START_BYPASS</div>
              <div className="text-[#edfce9]">[12:15:02.131] EMBEDDING model=multilingual-v3 tokens=48 dim=1024</div>
              <div className="text-amber-300">[12:15:02.140] VECTOR_MATCH cosine_similarity=0.942 index=knowledge_base</div>
              <div className="text-emerald-400">[12:15:02.146] RESPONSE status=200 ok duration=38ms ttfb=19ms</div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar during simulation */}
      {isRunning && (
        <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mb-3">
          <div
            className="bg-emerald-400 h-full transition-all duration-300"
            style={{ width: `${simProgress}%` }}
          ></div>
        </div>
      )}

      {/* Console Bottom Action Bar */}
      <div className="pt-4 border-t border-[#2e2e38] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-[11px] text-[#93939f]">Cluster: ID-WEST-1</span>
        </div>

        <button
          onClick={runSimulation}
          disabled={isRunning}
          className="inline-flex items-center gap-1.5 bg-white text-[#17171c] hover:bg-zinc-200 text-xs font-medium px-4 py-2 rounded-[32px] transition-all disabled:opacity-50 active:scale-95 shadow-sm hover:shadow"
        >
          {isRunning ? (
            <>
              <RotateCw className="w-3.5 h-3.5 animate-spin" />
              <span>Simulating...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Trigger Test Loop</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
