"use client";

import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center p-0.5 rounded-full border border-[#d9d9dd] dark:border-[#2e2e38] bg-[#eeece7] dark:bg-[#1c1c24] font-mono text-[11px] select-none">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-white dark:bg-[#17171c] text-[#17171c] dark:text-white font-semibold shadow-xs"
            : "text-[#75758a] hover:text-[#17171c] dark:hover:text-white"
        }`}
        aria-label="Switch language to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("id")}
        className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
          language === "id"
            ? "bg-white dark:bg-[#17171c] text-[#17171c] dark:text-white font-semibold shadow-xs"
            : "text-[#75758a] hover:text-[#17171c] dark:hover:text-white"
        }`}
        aria-label="Ganti bahasa ke Indonesia"
      >
        ID
      </button>
    </div>
  );
}
