"use client";

import { useState } from "react";
import { Check, Copy, ShieldCheck, MapPin, Github, Linkedin, Mail } from "lucide-react";

export function ProfileCard() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("theodhore76@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#eeece7] text-[#212121] rounded-[22px] p-6 sm:p-7 border border-[#d9d9dd] flex flex-col justify-between h-full">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[#d9d9dd]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[#17171c] uppercase tracking-wider">
              PROFILE DOSSIER
            </span>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#75758a] bg-white px-2 py-0.5 rounded-[4px] border border-[#d9d9dd]">
            <ShieldCheck className="w-3 h-3 text-[#003c33]" />
            <span>VERIFIED ENGINEER</span>
          </span>
        </div>

        {/* Profile Identity Block */}
        <div className="pt-6 pb-5 flex items-start gap-4">
          <div className="w-16 h-16 rounded-[16px] bg-[#17171c] text-white flex items-center justify-center font-display font-medium text-2xl flex-shrink-0 shadow-md">
            T
          </div>
          <div>
            <h3 className="font-display text-2xl font-normal text-[#17171c] tracking-tight">
              Theodore (Theo)
            </h3>
            <p className="text-xs text-[#616161] font-sans mt-0.5">
              Software Engineer &amp; AI Systems Architect
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#75758a] mt-2 font-mono">
              <MapPin className="w-3 h-3 text-[#ff7759]" />
              <span>Indonesia (UTC+7) // Distributed</span>
            </div>
          </div>
        </div>

        {/* Core Competencies List */}
        <div className="space-y-2.5 pt-2">
          <div className="text-[11px] font-mono text-[#75758a] uppercase tracking-wider">
            CORE DOMAINS
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/70 border border-[#d9d9dd]">
              <span className="font-medium text-[#17171c]">Autonomous Agent Frameworks</span>
              <span className="font-mono text-[10px] text-[#75758a]">L3 / L4</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/70 border border-[#d9d9dd]">
              <span className="font-medium text-[#17171c]">High-Throughput Web Platforms</span>
              <span className="font-mono text-[10px] text-[#75758a]">Next.js 16</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/70 border border-[#d9d9dd]">
              <span className="font-medium text-[#17171c]">Vector Retrieval &amp; Embeddings</span>
              <span className="font-mono text-[10px] text-[#75758a]">pgvector</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions & Socials */}
      <div className="pt-6 border-t border-[#d9d9dd] mt-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/theodhorex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[8px] bg-white border border-[#d9d9dd] text-[#212121] hover:text-[#1863dc] hover:border-[#1863dc] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-[8px] bg-white border border-[#d9d9dd] text-[#212121] hover:text-[#1863dc] hover:border-[#1863dc] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={copyEmail}
              className="p-2 rounded-[8px] bg-white border border-[#d9d9dd] text-[#212121] hover:text-[#1863dc] hover:border-[#1863dc] transition-all"
              aria-label="Copy Email"
              title="Copy theodhore76@gmail.com"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#17171c] hover:text-black bg-white px-3 py-2 rounded-[30px] border border-[#d9d9dd] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>theodhore76@gmail.com</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
