import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#17171c] text-white py-8 sm:py-10 border-t border-[#2e2e38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 font-mono text-xs text-[#93939f] text-center sm:text-left">
        {/* Left: Identity */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="text-white font-medium">THEODHORE</span>
          <span>•</span>
          <span>© 2026</span>
          <span>•</span>
          <span>UTC+7</span>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2 text-[#edfce9] text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#edfce9] animate-pulse"></span>
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>

        {/* Right: Socials & Top */}
        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center">
          <a
            href="https://github.com/theodhorex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors py-1"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors py-1"
          >
            LinkedIn
          </a>
          <a
            href="mailto:theodhore76@gmail.com"
            className="hover:text-white transition-colors py-1"
          >
            Email
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors flex items-center gap-1 py-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
