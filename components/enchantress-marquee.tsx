"use client";

import {
  Code,
  Cpu,
  Database,
  Flame,
  Globe,
  Layers,
  Network,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

export function EnchantressMarquee() {
  const ecosystem = [
    { name: "Monad", icon: Zap, label: "10,000 TPS EVM" },
    { name: "Next.js 16", icon: Globe, label: "Turbopack Edge" },
    { name: "Ethereum", icon: Cpu, label: "Smart Contracts" },
    { name: "Solidity", icon: Layers, label: "Gas Optimized" },
    { name: "TypeScript", icon: Code, label: "Strict Typing" },
    { name: "Base", icon: Network, label: "OP Stack L2" },
    { name: "Arbitrum", icon: Flame, label: "Nitro & Stylus" },
    { name: "Rust / WASM", icon: Terminal, label: "Offline Sandbox" },
    { name: "Viem & Wagmi", icon: Database, label: "Reactive RPC" },
    { name: "Sanity CMS", icon: ShieldCheck, label: "Headless Content" },
  ];

  return (
    <section
      id="chains"
      aria-label="Technologies and Web3 Ecosystem"
      className="brands-marquee my-6"
    >
      <div className="brands-track">
        {/* Track 1 */}
        <ul className="brands">
          {ecosystem.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={`track-1-${idx}`} className="brand-item group">
                <span className="relative inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 group-hover:scale-110 group-hover:text-amber-500 transition-all duration-200 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-medium tracking-tight text-zinc-800 dark:text-zinc-200">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                  /{item.label}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Duplicate Track for Seamless Infinite Marquee Loop */}
        <ul className="brands" aria-hidden="true">
          {ecosystem.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={`track-2-${idx}`} className="brand-item group">
                <span className="relative inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 group-hover:scale-110 group-hover:text-amber-500 transition-all duration-200 shadow-2xs">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-medium tracking-tight text-zinc-800 dark:text-zinc-200">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                  /{item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
