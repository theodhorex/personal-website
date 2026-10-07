import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AgentConsole } from "./agent-console";
import { ProfileCard } from "./profile-card";
import { ParticleCanvas } from "./particle-canvas";

export function Hero() {
  return (
    <section id="overview" className="relative bg-white pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#e5e7eb] overflow-hidden">
      {/* Interactive Vector Particle Field */}
      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
          <span className="font-mono text-xs uppercase tracking-wider text-[#75758a] bg-[#eeece7] px-3 py-1 rounded-[4px] border border-[#d9d9dd] inline-flex items-center gap-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1863dc]"></span>
            <span>PORTFOLIO // 2026</span>
          </span>
          <span className="text-xs text-[#93939f] font-mono hidden sm:inline">
            {"// THEO DHORE"}
          </span>
        </div>

        {/* Monumental Display Headline */}
        <div className="max-w-5xl">
          <h1 className="hero-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-[#17171c] font-normal tracking-[-0.035em] leading-[1.02] animate-fade-in-up">
            Building high-performance software, intelligent agents, and sleek web experiences.
          </h1>

          {/* Punchy Lede */}
          <p className="mt-8 text-lg sm:text-xl text-[#616161] max-w-2xl font-sans leading-relaxed animate-fade-in-up delay-200">
            I’m Theo — full-stack engineer and AI systems builder. I turn ambitious ideas into fast,
            production-grade applications with mathematical precision and clean design.
          </p>

          {/* Actions Bar */}
          <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-6 animate-fade-in-up delay-300">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-[#17171c] hover:bg-[#000000] text-white text-sm font-medium px-7 py-3.5 rounded-[32px] transition-all shadow-none group active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#212121] hover:text-[#1863dc] underline underline-offset-4 transition-colors group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Two-Card Media Composition */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch animate-fade-in-up delay-400">
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
