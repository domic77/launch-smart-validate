import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhySection } from "@/components/WhySection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { Footer } from "@/components/Footer";
import { ClosingCTA } from "@/components/ClosingCTA";
import { lazy, Suspense } from "react";

const UseCasesSection = lazy(() => import("@/components/UseCasesSection").then(module => ({ default: module.UseCasesSection })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <WhySection />
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="text-lg text-gray-600">Loading use cases...</div></div>}>
        <UseCasesSection />
      </Suspense>
      <FeaturesSection />
      <TestimonialSection />
      <FAQSection />
      <ClosingCTA />
      <Footer />
    </div>
  );
};

export default Index;