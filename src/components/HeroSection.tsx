import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-28 lg:pb-24 flex flex-col items-center">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-sm font-medium text-blue-700 shadow">
-          <span className="mr-2">🤖</span>
+          <span className="mr-2" aria-hidden="true">🤖</span>
          AI-Powered
          <span className="ml-2 px-2 py-0.5 rounded bg-blue-200 text-blue-800 font-semibold">Validation</span>
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-gray-900 mb-8 leading-tight font-prompt font-extrabold">
          Know Before You Build.<br />Stop Guessing. Start Validating.
        </h1>

        {/* Subheadline */}
        <p className="text-[20px] text-gray-500 mb-10 max-w-5xl mx-auto leading-relaxed font-prompt">
          Unlock instant clarity for your next big idea—iValidate harnesses AI to reveal real market demand, spot hidden risks, and deliver actionable insights in minutes, so you can move forward with confidence and never build in the dark again.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow text-xl px-10 py-5 rounded-full font-semibold font-prompt"
          >
            Validate My Idea
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};