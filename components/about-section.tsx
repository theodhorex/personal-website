import {
  Blocks,
  Boxes,
  Code2,
  Cpu,
  FileCode2,
  Layers,
  Rocket,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import CommunityOrbit, {
  type OrbitItem,
  type OrbitStat,
  type OrbitTag,
} from "@/components/ui/builders-community-hero";

const items: OrbitItem[] = [
  // Outer ring, left to right.
  { kind: "status", ring: "outer", angle: 132, label: "Open to work" },
  { kind: "card", ring: "outer", angle: 112.6, emoji: "🚀" },
  { kind: "pill", ring: "outer", angle: 90, icon: <Layers size={13} />, label: "Next.js 16" },
  { kind: "pill", ring: "outer", angle: 67.6, icon: <FileCode2 size={13} />, label: "TypeScript" },
  { kind: "card", ring: "outer", angle: 50.9, emoji: "⛓️" },
  { kind: "pill", ring: "outer", angle: 35.2, icon: <Wallet size={13} />, label: "Wagmi / Viem" },
  // Inner ring, left to right.
  { kind: "pill", ring: "inner", angle: 137.2, icon: <Blocks size={13} />, label: "Solidity" },
  { kind: "card", ring: "inner", angle: 116.6, emoji: "📦" },
  {
    kind: "avatar",
    ring: "inner",
    angle: 90,
    src: "https://github.com/theodhorex.png",
    alt: "Theodhore",
    size: 56,
  },
  { kind: "pill", ring: "inner", angle: 63.3, icon: <Cpu size={13} />, label: "Web3" },
  { kind: "check", ring: "inner", angle: 41.8 },
];

const stats: OrbitStat[] = [
  { value: "5+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion" },
];

const tags: OrbitTag[] = [
  { icon: <Code2 strokeWidth={2} />, label: "Clean code", href: "#projects" },
  { icon: <Rocket strokeWidth={2} />, label: "Performance first", href: "#projects" },
  { icon: <ShieldCheck strokeWidth={2} />, label: "Secure by default", href: "#projects" },
  { icon: <Boxes strokeWidth={2} />, label: "Smart contracts", href: "#projects" },
];

export function AboutSection() {
  return (
    <div id="about">
      <CommunityOrbit
        eyebrow="About me"
        items={items}
        stats={stats}
        headline={
          <>
            Building the web,
            <br className="hidden sm:block" /> one block at a time
          </>
        }
        description="I'm Theodhore, a web developer and Web3 enthusiast. I turn complex ideas into fast, accessible products, from polished interfaces to the smart contracts behind them."
        tags={tags}
      >
        <div className="mx-auto max-w-[680px] space-y-5 border-t border-border pt-10 text-left text-base leading-relaxed text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">
              I&apos;m Theodhore, a web developer who likes building things that
              feel fast, look intentional, and hold up under real use.
            </span>{" "}
            I work across the stack, from interfaces in React and Next.js to the
            data and APIs behind them.
          </p>
          <p>
            Lately I&apos;ve been spending most of my time in Web3: wiring
            wallets and contracts into the frontend with Wagmi and Viem, writing
            Solidity, and designing flows that make on-chain actions less
            confusing for people who just want things to work.
          </p>
          <p>
            I care about clean, typed code, accessible and responsive UI, and
            shipping in small steps that I can verify. If you have an idea, a
            product, or a protocol that needs a careful pair of hands,{" "}
            <a
              href="mailto:theodhore.dev@gmail.com"
              className="font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
            >
              let&apos;s talk
            </a>
            .
          </p>
        </div>
      </CommunityOrbit>
    </div>
  );
}
