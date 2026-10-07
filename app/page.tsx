import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { SelectedWorks } from "@/components/selected-works";
import { DarkFeatureBand } from "@/components/dark-feature-band";
import { AboutCapabilities } from "@/components/about-capabilities";
import { ResearchTable } from "@/components/research-table";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <SelectedWorks />
        <DarkFeatureBand />
        <AboutCapabilities />
        <ResearchTable />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}