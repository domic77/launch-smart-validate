import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PlatformsBanner } from "@/components/PlatformsBanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhySection } from "@/components/WhySection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Footer } from "@/components/Footer";
import { ClosingCTA } from "@/components/ClosingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PlatformsBanner />
      <HowItWorksSection />
      <WhySection />
      <UseCasesSection />
      <FeaturesSection />
      <TestimonialSection />
      <FAQSection />
      <ClosingCTA />
      <Footer />
    </div>
  );
};

export default Index;