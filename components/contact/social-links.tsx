import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/theodhorex",
    handle: "github/theodhorex",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/theodhore",
    handle: "in/theodhore",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:theodhore.dev@gmail.com",
    handle: "theodhore.dev@gmail.com",
    external: false,
  },
] as const;

const pad = (n: number) => String(n).padStart(2, "0");

/** Hairline-ruled text rows with index and a drifting arrow — no chip boxes. */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Social profiles"
      className={cn("border-line border-t", className)}
    >
      <ul>
        {SOCIALS.map((s, i) => (
          <li key={s.label} className="border-line border-b">
            <a
              href={s.href}
              target={s.external ? "_blank" : undefined}
              rel={s.external ? "noreferrer" : undefined}
              className="group grid cursor-pointer grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3 py-4 sm:py-5"
            >
              <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent sm:text-sm">
                {pad(i + 1)}
              </span>
              <span className="font-display text-xl font-bold tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [font-variation-settings:'wdth'_95] group-hover:translate-x-2 sm:text-2xl">
                {s.label}
              </span>
              <span className="flex items-center gap-3">
                <span className="hidden font-mono text-[11px] text-muted md:inline">
                  {s.handle}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-4 text-muted transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"
                />
              </span>
              {s.external && (
                <span className="sr-only"> (opens in a new tab)</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
