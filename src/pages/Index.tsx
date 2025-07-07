import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PlatformsBanner } from "@/components/PlatformsBanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PlatformsBanner />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;