import { HeroBlock } from "@/components/ui/hero-block-shadcnui";

export default function Home() {
  return (
    <main>
      <HeroBlock />
      <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold">Projects</h2>
      </section>
    </main>
  );
}
