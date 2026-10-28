import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ProjectsSection } from "@/components/projects-section";
import { Scene } from "@/components/stage/scene";
import { ScrollProgress } from "@/components/stage/scroll-progress";
import { Stage } from "@/components/stage/stage";
import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <ScrollProgress />
      <Stage>
        <Scene id="hero" index={1} className="px-0 py-0 justify-start">
          <HeroBlock />
        </Scene>
        <Scene id="about" index={2} className="px-0 py-0 justify-start">
          <AboutSection />
        </Scene>
        <Scene id="projects" index={3} kicker="03 / PROJECTS">
          <ProjectsSection projects={projects} />
        </Scene>
        <Scene id="contact" index={4} kicker="04 / CONTACT">
          <ContactSection />
        </Scene>
      </Stage>
    </main>
  );
}
