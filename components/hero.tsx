import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { AgentConsole } from "./agent-console";
import { ProfileCard } from "./profile-card";

export function Hero() {
  return (
    <section id="overview" className="bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-3 py-1 rounded-[4px] border border-[#d9d9dd] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1863dc]"></span>
            <span>SYSTEM PERSPECTIVE // 2026</span>
          </span>
          <span className="text-xs text-[#93939f] font-mono hidden sm:inline">
            // RESILIENT INFRASTRUCTURE
          </span>
        </div>

        {/* Monumental Display Headline */}
        <div className="max-w-5xl">
          <h1 className="hero-display text-4xl sm:text-6xl md:text-7xl lg:text-[82px] text-[#17171c] font-normal tracking-[-0.035em] leading-[1.02]">
            Architecting intelligent systems with mathematical precision and editorial clarity.
          </h1>

          {/* Lead Paragraph */}
          <p className="mt-8 text-lg sm:text-xl text-[#616161] max-w-3xl font-sans leading-relaxed">
            I design and build enterprise-grade agent runtimes, deterministic tool validation layers,
            and high-throughput web software on Next.js. Turning non-deterministic foundation models into
            observable, production-grade applications.
          </p>

          {/* Actions Bar */}
          <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[#17171c] hover:bg-[#000000] text-white text-sm font-medium px-7 py-3.5 rounded-[32px] transition-all shadow-none group"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#212121] hover:text-[#1863dc] underline underline-offset-4 transition-colors"
            >
              <span>Inspect Systems Architecture</span>
              <ArrowUpRight className="w-4 h-4 inline" />
            </a>
          </div>
        </div>

        {/* Two-Card Media Composition */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 h-full">
            <AgentConsole />
          </div>
          <div className="lg:col-span-5 h-full">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
