import { AuroraBackdrop } from "@/components/aurora-backdrop";
import { EnchantressNav } from "@/components/enchantress-nav";
import { EnchantressHero } from "@/components/enchantress-hero";
import { EnchantressMarquee } from "@/components/enchantress-marquee";
import { EnchantressWork } from "@/components/enchantress-work";
import { EnchantressBento } from "@/components/enchantress-bento";
import { EnchantressAbout } from "@/components/enchantress-about";
import { EnchantressClosing } from "@/components/enchantress-closing";
import { EnchantressFooter } from "@/components/enchantress-footer";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="landing selection:bg-amber-400 selection:text-black">
      {/* Dynamic WebGL Aurora Canvas Background */}
      <AuroraBackdrop />

      {/* Enchantress Navigation Bar */}
      <EnchantressNav />

      {/* Main Page Flow */}
      <main className="contents">
        <EnchantressHero />
        <EnchantressMarquee />
        <EnchantressWork projects={projects} />
        <EnchantressBento />
        <EnchantressAbout />
        <EnchantressClosing />
      </main>

      {/* Enchantress Footer */}
      <EnchantressFooter />
    </div>
  );
}