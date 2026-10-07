"use client";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Name & Role */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <a
            href="#"
            className="font-display font-semibold tracking-tight text-lg sm:text-xl text-[#17171c] hover:text-black transition-colors flex-shrink-0"
          >
            THEODHORE
          </a>
          <span className="text-[#93939f] text-xs hidden md:inline">/</span>
          <span className="font-mono text-xs text-[#75758a] uppercase tracking-wider hidden md:inline truncate">
            Web Developer &amp; Web3 Enthusiast
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-xs font-mono uppercase tracking-wider text-[#75758a] flex-shrink-0">
          <a
            href="#work"
            className="hover:text-[#17171c] transition-colors py-1.5 px-0.5 sm:px-1"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-[#17171c] transition-colors py-1.5 px-0.5 sm:px-1"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[#17171c] transition-colors py-1.5 px-0.5 sm:px-1"
          >
            Contact
          </a>

          {/* Status Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-[30px] border border-[#d9d9dd] bg-[#edfce9] text-[#003c33] text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003c33] animate-pulse"></span>
            <span>Available 2026</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
