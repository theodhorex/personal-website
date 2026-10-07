import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SelectedWorks } from "@/components/selected-works";
import { AboutMinimal } from "@/components/about-minimal";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#ff7759] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWorks />
        <AboutMinimal />
      </main>
      <Footer />
    </div>
  );
}