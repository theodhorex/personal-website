import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ProjectsSection } from "@/components/projects-section";
import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <HeroBlock />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
