import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero-enhanced pt-24 pb-20 lg:pt-28 lg:pb-24">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-primary/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Validate Your Startup Idea.{" "}
            <span className="text-gradient-multi">Before You Build.</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-10 max-w-5xl mx-auto leading-relaxed font-medium">
            iValidate uses AI to analyze social media conversations, market trends, and user feedback 
            to help you validate your startup idea with real data — in real time.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-multi text-primary-foreground btn-micro shadow-elevation text-xl px-10 py-5 rounded-2xl font-semibold"
            >
              Start Validating Free
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-primary border-primary/30 hover:bg-primary/5 hover:border-primary text-xl px-10 py-5 rounded-2xl font-semibold btn-micro shadow-card hover:shadow-card-hover"
            >
              <Play className="mr-3 h-6 w-6" />
              See How It Works
            </Button>
          </div>

          {/* Enhanced Hero Illustration */}
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-card rounded-3xl shadow-elevation border border-border/30 overflow-hidden hover-elevate transition-spring">
              <div className="w-full h-full bg-gradient-multi/5 flex items-center justify-center relative">
                <div className="text-center z-10">
                  <div className="w-32 h-32 bg-gradient-multi/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                    <div className="w-20 h-20 bg-gradient-multi/40 rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-gradient-multi rounded-full animate-pulse shadow-soft"></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-semibold text-lg">AI-Powered Validation Dashboard</p>
                </div>
                {/* Abstract geometric elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-primary/10 rounded-lg rotate-12 animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-primary-light/15 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-8 w-4 h-4 bg-primary/20 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};