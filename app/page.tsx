import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { SelectedWorks } from "@/components/selected-works";
import { DarkFeatureBand } from "@/components/dark-feature-band";
import { AboutBrief } from "@/components/about-brief";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#ff7759] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <SelectedWorks />
        <DarkFeatureBand />
        <AboutBrief />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}