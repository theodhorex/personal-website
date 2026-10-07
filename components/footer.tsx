"use client";

import { useState } from "react";
import { ArrowRight, Check, Github, Mail, Terminal } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#17171c] text-white pt-16 sm:pt-20 pb-12 border-t border-[#2e2e38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Dispatch Section */}
        <div className="pb-16 border-b border-[#2e2e38]">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-[#ff7759] font-medium inline-block mb-3">
              SYSTEMS EVOLVE RAPIDLY // SYNC PROTOCOL
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-normal text-white tracking-tight">
              Subscribe to technical memos, benchmarks, and release dispatches.
            </h3>
            <p className="mt-2 text-sm text-[#93939f] font-sans">
              No marketing noise. Only deep technical analyses of multi-agent architectures, Next.js edge performance, and systems engineering.
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                placeholder="developer@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
                className="flex-1 px-4 py-2.5 rounded-[8px] bg-black/40 border border-[#2e2e38] text-xs font-mono text-white placeholder-[#93939f] focus:outline-none focus:border-[#ff7759] transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={subscribed}
                className="inline-flex items-center justify-center gap-1.5 bg-white text-[#17171c] hover:bg-zinc-200 text-xs font-medium px-5 py-2.5 rounded-[32px] transition-colors disabled:bg-emerald-500 disabled:text-white"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-white font-medium mb-4">
              ARCHITECT
            </div>
            <p className="text-[#93939f] leading-relaxed mb-3">
              Theodore (Theo)
            </p>
            <p className="text-[#75758a] text-[11px] font-mono leading-relaxed">
              Software Engineer &amp; AI Systems Architect. Operating across Jakarta (UTC+7) &amp; global distributed teams.
            </p>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-white font-medium mb-4">
              SYSTEMS
            </div>
            <ul className="space-y-2.5 text-[#93939f]">
              <li><a href="#work" className="hover:text-white transition-colors">Nexus Agent Runtime</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Hyperion Edge Engine</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Aura Latent Workbench</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Kratos Telemetry</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-white font-medium mb-4">
              DISPATCHES
            </div>
            <ul className="space-y-2.5 text-[#93939f]">
              <li><a href="#notes" className="hover:text-white transition-colors">Deterministic Tool Loops</a></li>
              <li><a href="#notes" className="hover:text-white transition-colors">Next.js Edge Microfrontends</a></li>
              <li><a href="#notes" className="hover:text-white transition-colors">FP8 vs INT4 Quantization</a></li>
              <li><a href="#notes" className="hover:text-white transition-colors">Long-Context State Drift</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-white font-medium mb-4">
              CONNECT &amp; KEYS
            </div>
            <ul className="space-y-2.5 text-[#93939f]">
              <li>
                <a
                  href="https://github.com/theodhorex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub @theodhorex</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:theodhore76@gmail.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>theodhore76@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#overview"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>PGP Public Fingerprint</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Diagnostics Strip */}
        <div className="pt-8 border-t border-[#2e2e38] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[#75758a]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#edfce9]">
              <span className="w-2 h-2 rounded-full bg-[#edfce9] animate-pulse"></span>
              <span>ALL SERVICES OPERATIONAL</span>
            </span>
            <span>•</span>
            <span>LATENCY: 22MS</span>
            <span>•</span>
            <span>UTC+7</span>
          </div>

          <div className="flex items-center gap-3">
            <span>© 2026 THEO DHORE</span>
            <span>•</span>
            <span className="text-[#93939f]">COHERE 2026 DESIGN SPEC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
