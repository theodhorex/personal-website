"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Announcement" className="w-full bg-[#000000] text-white text-xs py-2 px-4 border-b border-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#edfce9] shadow-[0_0_8px_#edfce9]"></span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-[#93939f]">
            SYS.NODE // ONLINE
          </span>
        </div>

        <div className="flex-1 text-center flex items-center justify-center gap-2 text-[12px] text-zinc-200">
          <span>Available for select engineering &amp; AI systems projects in 2026.</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#ff7759] transition-colors font-medium text-white"
          >
            Schedule a briefing
            <ArrowRight className="w-3 h-3 inline" />
          </a>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-zinc-400 hover:text-white transition-colors p-0.5 rounded focus:outline-none focus:ring-1 focus:ring-zinc-400"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
