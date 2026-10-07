import { SiteHeader } from "@/components/site-header";
import { BouayabenHero } from "@/components/bouayaben-hero";
import { BouayabenWork } from "@/components/bouayaben-work";
import { BouayabenAbout } from "@/components/bouayaben-about";
import { BouayabenContact } from "@/components/bouayaben-contact";
import { Footer } from "@/components/footer";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#ff7759] selection:text-white">
      <SiteHeader />
      <main className="flex-1">
        <BouayabenHero />
        <BouayabenWork projects={projects} />
        <BouayabenAbout />
        <BouayabenContact />
      </main>
      <Footer />
    </div>
  );
}