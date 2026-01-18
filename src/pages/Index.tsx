import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import EventDetailsSection from "@/components/EventDetailsSection";
import DressCodeSection from "@/components/DressCodeSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <CountdownSection />
      <EventDetailsSection />
      <DressCodeSection />
      <GallerySection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
};

export default Index;
