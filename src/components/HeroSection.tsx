import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-16 lg:pt-24 lg:pb-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Validate Your Startup Idea.{" "}
            <span className="text-gradient">Before You Build.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            iValidate uses AI to analyze social media conversations, market trends, and user feedback 
            to help you validate your startup idea with real data — in real time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover-scale shadow-medium text-lg px-8 py-4"
            >
              Start Validating Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-primary border-primary hover:bg-primary/5 text-lg px-8 py-4"
            >
              <Play className="mr-2 h-5 w-5" />
              See How It Works
            </Button>
          </div>

          {/* Hero Illustration Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-subtle rounded-2xl shadow-strong border border-border/20 overflow-hidden">
              <div className="w-full h-full bg-gradient-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">AI-Powered Validation Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};