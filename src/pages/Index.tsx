import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesCarousel } from "@/components/ServicesCarousel";
import { DigitalScanSection } from "@/components/DigitalScanSection";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ServicesCarousel />
        <HeroSection />
        <FeaturesSection />
        <DigitalScanSection />
        <StatsSection />
      </main>
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
