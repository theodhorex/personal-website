"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Selected Work", href: "#work" },
    { label: "Architecture", href: "#architecture" },
    { label: "Research & Notes", href: "#notes" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Zone: Brand Mark */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-display font-semibold tracking-tight text-xl text-[#17171c]">
              THEO
            </span>
            <span className="font-mono text-[11px] bg-[#eeece7] text-[#616161] px-1.5 py-0.5 rounded-[4px] tracking-wide border border-[#d9d9dd]">
              v2.6
            </span>
          </a>
          <span className="hidden md:inline-block text-[#93939f] text-xs">|</span>
          <span className="hidden md:inline-block font-mono text-[11px] text-[#75758a] uppercase tracking-wider">
            AI Systems &amp; Software
          </span>
        </div>

        {/* Center Zone: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#212121] hover:text-[#1863dc] transition-colors font-normal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Zone: Status & Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-[30px] border border-[#d9d9dd] bg-[#edfce9]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#003c33] animate-pulse"></span>
            <span className="font-mono text-[11px] text-[#003c33] tracking-wide uppercase font-medium">
              Open to Roles
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#17171c] hover:bg-[#000000] text-white text-xs font-medium px-4 py-2 rounded-[32px] transition-colors shadow-none"
          >
            <span>Initiate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#212121] hover:text-black rounded-lg border border-[#e5e7eb] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e5e7eb] bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#e5e7eb]">
            <span className="font-mono text-[11px] text-[#75758a] uppercase">Navigation</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-[30px] border border-[#d9d9dd] bg-[#edfce9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003c33]"></span>
              <span className="font-mono text-[10px] text-[#003c33]">Available 2026</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#212121] hover:text-[#1863dc] py-1 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#17171c] text-white text-sm font-medium py-2.5 rounded-[32px]"
            >
              Initiate Contact
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
