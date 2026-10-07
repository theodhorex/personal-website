"use client";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Name & Role */}
        <div className="flex items-center gap-3">
          <a href="#" className="font-display font-semibold tracking-tight text-xl text-[#17171c] hover:text-black transition-colors">
            THEO DHORE
          </a>
          <span className="text-[#93939f] text-xs">/</span>
          <span className="font-mono text-xs text-[#75758a] uppercase tracking-wider hidden sm:inline">
            Full-Stack Engineer &amp; AI Architect
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-wider text-[#75758a]">
          <a href="#work" className="hover:text-[#17171c] transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-[#17171c] transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-[#17171c] transition-colors">
            Contact
          </a>

          {/* Status Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-[30px] border border-[#d9d9dd] bg-[#edfce9] text-[#003c33] text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003c33] animate-pulse"></span>
            <span>Available 2026</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
