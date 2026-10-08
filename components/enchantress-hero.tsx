"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code2, Cpu, Globe, Layers, Sparkles, Terminal, Zap } from "lucide-react";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";

export function EnchantressHero() {
  const { t } = useLanguage();
  const [activeCenterIndex, setActiveCenterIndex] = useState(0);
  const [splashActive, setSplashActive] = useState(false);
  const [pulseLeft, setPulseLeft] = useState(false);
  const [pulseRight, setPulseRight] = useState(false);

  // Cycling engineering competencies for the tactile pipeline
  const protocols = [
    { name: "Next.js 16", icon: Globe, color: "#ffffff" },
    { name: "TypeScript", icon: Code2, color: "#3178c6" },
    { name: "React 19", icon: Layers, color: "#61dafb" },
    { name: "Rust / WASM", icon: Terminal, color: "#f97316" },
    { name: "Monad & EVM", icon: Zap, color: "#836ef9" },
    { name: "Systems & Edge", icon: Cpu, color: "#eab308" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      triggerSplash();
      setActiveCenterIndex((prev) => (prev + 1) % protocols.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [protocols.length]);

  const triggerSplash = () => {
    setSplashActive(true);
    setPulseLeft(true);
    setPulseRight(true);
    setTimeout(() => {
      setSplashActive(false);
      setPulseLeft(false);
      setPulseRight(false);
    }, 900);
  };

  const currentProtocol = protocols[activeCenterIndex];
  const CurrentIcon = currentProtocol.icon;

  return (
    <section className="w-full flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 relative">
      <div className="hero-card w-full shadow-2xl">
        {/* Halo Grid Pattern Masked Radially */}
        <div className="hero-grid" aria-hidden="true" />

        {/* Tactile Energy Pipeline Beam */}
        <Reveal delay={80} distance={16} className="w-full flex justify-center">
          <div className="icon-pipeline" aria-hidden="true" onClick={triggerSplash}>
            {/* SVG Glowing Beam Line */}
            <svg className="beam-svg" viewBox="0 0 700 120" preserveAspectRatio="none">
              <defs>
                <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="hero-beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent-deep)" stopOpacity="0" />
                  <stop offset="25%" stopColor="var(--accent-deep)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="var(--beam-core)" stopOpacity="1" />
                  <stop offset="75%" stopColor="var(--accent)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="packet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#836ef9" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Underlying Base Glowing Track */}
              <path
                d="M 50 60 L 650 60"
                className="beam-glow"
                fill="none"
                stroke="url(#hero-beam-gradient)"
                strokeWidth="3"
                filter="url(#hero-glow)"
              />
              <path
                d="M 50 60 L 650 60"
                fill="none"
                stroke="url(#hero-beam-gradient)"
                strokeWidth="1.2"
              />
              {/* Animated Continuous Photon Packet: Left to Center */}
              <circle r="3.5" fill="#ffffff" filter="url(#hero-glow)">
                <animateMotion
                  path="M 50 60 L 350 60"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Animated Continuous Photon Packet: Center to Right */}
              <circle r="3.5" fill="#f59e0b" filter="url(#hero-glow)">
                <animateMotion
                  path="M 350 60 L 650 60"
                  dur="2.2s"
                  begin="1.1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* Left Tactile Node (Client / Intent) */}
            <div
              className={`icon-node node-light-left ${pulseLeft ? "active ring-2 ring-violet-500/50" : ""}`}
              title="Client & Web3 Intent"
            >
              <Code2 className="w-5 h-5 text-zinc-700 dark:text-zinc-300 transition-transform duration-200 hover:scale-110" />
            </div>

            {/* Connecting Left Energy Line */}
            <div className="pipeline-line" />

            {/* Center Monumental Node (Core Engine & Protocols) */}
            <div className="pipeline-center">
              <div className={`splash ${splashActive ? "animate" : ""}`} />
              <button
                type="button"
                onClick={triggerSplash}
                className="icon-node-center cursor-pointer transition-transform hover:scale-105 active:scale-95 group focus:outline-none"
                aria-label="Trigger protocol switch"
              >
                <CurrentIcon
                  className="w-7 h-7 transition-all duration-300 transform group-hover:rotate-12"
                  style={{ color: currentProtocol.color }}
                />
              </button>
            </div>

            {/* Connecting Right Energy Line */}
            <div className="pipeline-line right" />

            {/* Right Tactile Node (Edge / Chain Settlement) */}
            <div
              className={`icon-node node-light-right ${pulseRight ? "active ring-2 ring-amber-500/50" : ""}`}
              title="Distributed Edge & Smart Contracts"
            >
              <Sparkles className="w-5 h-5 text-amber-500 transition-transform duration-200 hover:scale-110" />
            </div>
          </div>
        </Reveal>

        {/* Hero Content & Monumental Typography */}
        <div className="hero-content">
          {/* Eyebrow Status Pill */}
          <Reveal delay={160} distance={14}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 inline-flex items-center gap-2 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{t("available_status")}</span>
              </span>
              <span className="font-mono text-[11px] sm:text-xs text-zinc-500 hidden sm:inline">
                {t("hero_eyebrow_tag")}
              </span>
            </div>
          </Reveal>

          {/* Enchantress Headline with Gradient Text */}
          <Reveal delay={240} distance={24}>
            <h1 className="hero-heading">
              {t("hero_headline_start")}
              <strong>{t("hero_headline_accent")}</strong>
            </h1>
          </Reveal>

          {/* Lede Paragraph */}
          <Reveal delay={340} distance={18}>
            <p className="hero-sub font-sans">{t("hero_lede")}</p>
          </Reveal>

          {/* CTA Actions */}
          <Reveal delay={440} distance={16}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#work" className="btn-cta group">
                <span>{t("hero_cta_work")}</span>
                <span className="btn-arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              </a>

              <a href="#architecture" className="btn-login">
                <span>{t("hero_cta_about")}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
