"use client";

import { useState, useRef } from "react";
import { Cpu, Globe, Lock, Network, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "./language-provider";
import { Reveal } from "./reveal";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
    >
      <div
        className="spotlight-glow"
        aria-hidden="true"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, var(--spotlight), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}

export function EnchantressBento() {
  const { t } = useLanguage();
  const [activeStackIndex, setActiveStackIndex] = useState<number | null>(null);

  const stackWeights = [
    { label: "Modern Frontend (Next.js 16)", pct: "45%", width: 45, color: "#836ef9" },
    { label: "TypeScript & Systems Tooling", pct: "30%", width: 30, color: "#3178c6" },
    { label: "APIs & Headless CMS (Sanity)", pct: "15%", width: 15, color: "#10b981" },
    { label: "Web3 Protocols & EVM", pct: "10%", width: 10, color: "#f59e0b" },
  ];

  return (
    <section id="architecture" className="landing-section">
      <Reveal delay={60} distance={18}>
        <div className="flex flex-col items-start gap-2 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wider text-amber-500 font-semibold">
            {"// ARCHITECTURAL INVARIANTS"}
          </span>
          <h2 className="section-heading">{t("bento_section_title")}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            {t("bento_section_sub")}
          </p>
        </div>
      </Reveal>

      {/* Bento Grid (3 Columns) */}
      <div className="bento">
        {/* Tile 1 (Wide): Edge Request Lifecycle & Data Pipeline */}
        <Reveal delay={120} distance={20} className="col-span-1 md:col-span-2">
          <SpotlightCard className="bento-tile wide">
            <div className="bento-visual">
              <div className="bento-route" aria-hidden="true">
                <svg className="bento-route-paths" viewBox="0 0 300 150">
                  <path d="M 36 25 C 95 25, 95 75, 150 75 L 264 75" />
                  <path d="M 36 75 C 95 75, 95 75, 150 75 L 264 75" />
                  <path d="M 36 125 C 95 125, 95 75, 150 75 L 264 75" />
                </svg>

                {/* Source Nodes */}
                <span>
                  <span className="bento-route-source" style={{ top: 9 }}>
                    <span className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-[10px] font-mono font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs">
                      HTTP
                    </span>
                  </span>
                  <span
                    className="bento-packet"
                    style={{
                      offsetPath: "path('M 36 25 C 95 25, 95 75, 150 75 L 264 75')",
                      animationDelay: "0s",
                    }}
                  />
                </span>

                <span>
                  <span className="bento-route-source" style={{ top: 59 }}>
                    <span className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-[10px] font-mono font-semibold text-blue-500 shadow-xs">
                      EDGE
                    </span>
                  </span>
                  <span
                    className="bento-packet"
                    style={{
                      offsetPath: "path('M 36 75 C 95 75, 95 75, 150 75 L 264 75')",
                      animationDelay: "0.8s",
                    }}
                  />
                </span>

                <span>
                  <span className="bento-route-source" style={{ top: 109 }}>
                    <span className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-[10px] font-mono font-semibold text-cyan-500 shadow-xs">
                      RPC
                    </span>
                  </span>
                  <span
                    className="bento-packet"
                    style={{
                      offsetPath: "path('M 36 125 C 95 125, 95 75, 150 75 L 264 75')",
                      animationDelay: "1.6s",
                    }}
                  />
                </span>

                {/* Hub Node */}
                <span className="bento-route-hub">
                  <span className="bento-route-hub-logo">
                    <Globe className="w-5 h-5 text-emerald-500" />
                  </span>
                  <span className="bento-route-hub-label">Ingress</span>
                </span>

                {/* Target Execution Settlement Node */}
                <span className="bento-route-target">
                  <Zap className="w-5 h-5 text-amber-400" />
                </span>
              </div>
            </div>

            <h3 className="bento-title">{t("bento_card1_title")}</h3>
            <p className="bento-body">{t("bento_card1_desc")}</p>
          </SpotlightCard>
        </Reveal>

        {/* Tile 2: Routed to the lowest-latency Scanner */}
        <Reveal delay={200} distance={20} className="col-span-1">
          <SpotlightCard className="bento-tile">
            <div className="bento-visual">
              <div className="bento-venues">
                <span className="bento-venue-scan" aria-hidden="true">
                  <span className="bento-venue-check">Sub-25ms</span>
                </span>
                <ul>
                  <li>
                    <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Global Edge CDN (Cloudflare)</span>
                  </li>
                  <li>
                    <Cpu className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Turbopack App Router (Next.js)</span>
                  </li>
                  <li>
                    <Network className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Sanity Headless CMS Sync</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="bento-title">{t("bento_card2_title")}</h3>
            <p className="bento-body">{t("bento_card2_desc")}</p>
          </SpotlightCard>
        </Reveal>

        {/* Tile 3: Non-Custodial Cryptographic Security */}
        <Reveal delay={280} distance={20} className="col-span-1">
          <SpotlightCard className="bento-tile">
            <div className="bento-visual">
              <div className="bento-custody" aria-hidden="true">
                <span className="bento-custody-ring" />
                <span className="bento-custody-ring inner" />
                <span className="bento-orbit" style={{ animationDelay: "0s" }}>
                  <span className="bento-orbiter p-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  </span>
                </span>
                <span className="bento-orbit" style={{ animationDelay: "-7s" }}>
                  <span className="bento-orbiter p-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                  </span>
                </span>
                <span className="bento-custody-core p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <Lock className="w-5 h-5 text-zinc-800 dark:text-zinc-200" />
                </span>
              </div>
            </div>

            <h3 className="bento-title">{t("bento_card3_title")}</h3>
            <p className="bento-body">{t("bento_card3_desc")}</p>
          </SpotlightCard>
        </Reveal>

        {/* Tile 4 (Wide): Battle-Tested Engineering Stack */}
        <Reveal delay={360} distance={20} className="col-span-1 md:col-span-2">
          <SpotlightCard className="bento-tile wide">
            <div className="bento-visual">
              <div className="bento-recipe">
                {/* Visual Ratio Bar */}
                <div className="bento-recipe-bar" aria-hidden="true">
                  {stackWeights.map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        flexGrow: s.width,
                        background:
                          activeStackIndex === null || activeStackIndex === idx
                            ? s.color
                            : "rgba(128,128,128,0.2)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>

                {/* Stack Legend & Weights */}
                <ul className="bento-recipe-legend">
                  {stackWeights.map((s, idx) => (
                    <li
                      key={idx}
                      onMouseEnter={() => setActiveStackIndex(idx)}
                      onMouseLeave={() => setActiveStackIndex(null)}
                      className="cursor-pointer transition-transform hover:scale-105"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                        style={{ background: s.color }}
                      />
                      <span className="font-medium text-zinc-800 dark:text-zinc-200">
                        {s.label}
                      </span>
                      <span className="font-mono text-xs font-semibold">{s.pct}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 className="bento-title">{t("bento_card4_title")}</h3>
            <p className="bento-body">{t("bento_card4_desc")}</p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
