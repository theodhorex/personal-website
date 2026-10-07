"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 sm:p-2 rounded-full border border-[#d9d9dd] dark:border-[#2e2e38] bg-[#eeece7] dark:bg-[#1c1c24] text-[#17171c] dark:text-[#f4f4f7] hover:bg-[#e5e3de] dark:hover:bg-[#282834] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1863dc] active:scale-95 flex items-center justify-center cursor-pointer"
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Switch theme"}
      title={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Switch theme"}
    >
      {mounted && theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-[#75758a] dark:text-[#93939f] rotate-0 transition-transform duration-300" />
      )}
    </button>
  );
}
