import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Button } from "@/components/ui/button";

type IconProps = SVGProps<SVGSVGElement>;

// lucide-react v1 no longer ships brand icons.
const Github = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const Linkedin = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const SparkleIcon = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="var(--ink)"
    strokeWidth="2.5"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
  </svg>
);

const socials: {
  icon: ComponentType<IconProps>;
  href: string;
  label: string;
}[] = [
  { icon: Github, href: "https://github.com/theodhorex", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/theodhore", label: "LinkedIn" },
  { icon: Mail, href: "mailto:theodhore.dev@gmail.com", label: "Email" },
];

export function HeroBlock() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <style>{`
        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-anim {
          animation: heroEntrance 0.45s cubic-bezier(0.22, 1, 0.36, 1) backwards;
        }
        .hero-anim-1 { animation-delay: 40ms; }
        .hero-anim-2 { animation-delay: 120ms; }
        .hero-anim-3 { animation-delay: 200ms; }
        .hero-anim-4 { animation-delay: 280ms; }
        .hero-anim-5 { animation-delay: 360ms; }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 lg:gap-10 items-center">
        {/* Left Column: Eyebrow, H1, Subtitle, CTAs, Socials */}
        <div className="md:col-span-7 flex flex-col gap-3.5 sm:gap-4 md:gap-5">
          {/* Eyebrow & Badges */}
          <div className="hero-anim hero-anim-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* Mobile avatar sticker (compact, hidden on md+) */}
            <div className="md:hidden size-10 shrink-0 overflow-hidden rounded-xl border-[3px] border-ink bg-tint-sun shadow-[0_3px_0_var(--ink)] -rotate-3">
              <Image
                src="https://github.com/theodhorex.png"
                alt="Theodhore portrait"
                width={40}
                height={40}
                unoptimized
                className="size-full object-cover"
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-panel px-3 py-1 font-mono text-xs font-bold uppercase shadow-[0_3px_0_var(--ink)] -rotate-1">
              <span
                className="size-2 rounded-full bg-mint border border-ink animate-pulse"
                aria-hidden="true"
              />
              <span>Open to work</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border-[3px] border-ink bg-tint-sun px-2.5 py-1 font-mono text-xs font-bold text-ink shadow-[0_3px_0_var(--ink)] rotate-2">
              <SparkleIcon className="size-3.5 text-coral" />
              <span>Web3 &amp; Frontend</span>
            </div>
          </div>

          {/* Heading 1: Display font Anybody */}
          <h1 className="hero-anim hero-anim-2 font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.94]">
            Web Developer &amp;
            <span className="block mt-1 sm:mt-1.5">Web3 Enthusiast</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-anim hero-anim-3 font-sans text-sm sm:text-base md:text-lg leading-relaxed text-muted max-w-xl">
            Hi, I&apos;m <span className="font-semibold text-ink">Theodhore</span>.
            I build high-performance web applications, decentralized protocols,
            and developer tooling with clean code and exceptional user
            experiences.
          </p>

          {/* Action Row: CTAs & Socials */}
          <div className="hero-anim hero-anim-4 flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
            <Button
              size="lg"
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider"
              asChild
            >
              <a href="#contact">
                <Mail className="size-4" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowDown className="size-4" />
              </a>
            </Button>

            <div
              className="h-8 w-px bg-ink/30 hidden sm:block mx-1"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex size-10 sm:size-11 items-center justify-center rounded-xl border-[3px] border-ink bg-panel text-ink shadow-[0_3px_0_var(--ink)] transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:shadow-[0_5px_0_var(--ink)] hover:bg-tint-accent active:translate-y-0.5 active:shadow-none focus-visible:outline-3 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tilted Neo-Brutalist Sticker Showcase Card (Hidden on mobile < md) */}
        <div className="hero-anim hero-anim-5 hidden md:flex md:col-span-5 justify-center">
          <div className="relative card -rotate-2 hover:rotate-0 transition-transform duration-300 p-5 lg:p-6 bg-panel border-4 border-ink rounded-[24px] shadow-[0_8px_0_var(--ink)] w-full max-w-[290px] lg:max-w-[330px] select-none">
            {/* Top-left sticker */}
            <div className="-top-3.5 -left-3.5 absolute px-3 py-1 bg-sun text-ink border-[3px] border-ink rounded-full font-mono text-[11px] font-black uppercase shadow-[0_3px_0_var(--ink)] -rotate-6">
              THEODHORE // DEV
            </div>

            {/* Top-right sparkle stamp */}
            <div className="-top-3.5 -right-3.5 absolute size-9 rounded-full bg-coral border-[3px] border-ink flex items-center justify-center shadow-[0_3px_0_var(--ink)] rotate-12 text-ink">
              <SparkleIcon className="size-4 text-sun" />
            </div>

            {/* Avatar frame */}
            <div className="relative mx-auto size-28 lg:size-32 rounded-2xl border-[3.5px] border-ink bg-tint-sun overflow-hidden shadow-[0_4px_0_var(--ink)] mb-3.5">
              <Image
                src="https://github.com/theodhorex.png"
                alt="Theodhore portrait"
                width={128}
                height={128}
                unoptimized
                className="size-full object-cover"
              />
            </div>

            {/* Neo-brutalist tech tags */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              <span className="chip px-2.5! py-0.5! text-[11px]! bg-tint-accent">
                Solidity &amp; Viem
              </span>
              <span className="chip px-2.5! py-0.5! text-[11px]! bg-tint-sun">
                Next.js 16
              </span>
              <span className="chip px-2.5! py-0.5! text-[11px]! bg-tint-mint">
                TypeScript
              </span>
            </div>

            {/* Card footer divider & meta */}
            <div className="mt-3.5 pt-3 border-t-2 border-dashed border-ink/20 flex items-center justify-between font-mono text-[11px] text-muted font-medium">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-mint border border-ink" />
                Ready to build
              </span>
              <span className="font-bold text-ink">2026</span>
            </div>

            {/* Bottom-right overlapping sticker */}
            <div className="-bottom-3 -right-2 absolute px-2.5 py-0.5 bg-tint-coral text-ink border-2 border-ink rounded-md font-mono text-[10px] font-bold shadow-[0_2px_0_var(--ink)] rotate-3">
              100% PASSION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
