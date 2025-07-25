import { Button } from "@/components/ui/button";
import { motion } from "@motionone/react";
import { animate } from "@motionone/dom";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cyclingPhrases = [
    { start: "Stop ", highlight: "Guessing." },
    { start: "Start ", highlight: "Validating." }
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cyclingPhrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      
      // Reset positions
      children.forEach((child, i) => {
        child.style.opacity = i === currentIndex ? "1" : "0";
        child.style.transform = i === currentIndex 
          ? "translateY(0)" 
          : "translateY(100%)";
      });
      
      // Animate out current and in next
      const nextIndex = (currentIndex + 1) % cyclingPhrases.length;
      
      // Prepare next element to come from below
      children[nextIndex].style.opacity = "0";
      children[nextIndex].style.transform = "translateY(100%)";
      
      // Animate current out (up) and next in (from below)
      animate(
        children[currentIndex],
        { opacity: [1, 0], transform: ["translateY(0)", "translateY(-100%)"] },
        { duration: 0.5, easing: "ease-in-out" }
      );
      
      // Slight delay for the next element
      setTimeout(() => {
        animate(
          children[nextIndex],
          { opacity: [0, 1], transform: ["translateY(100%)", "translateY(0)"] },
          { duration: 0.5, easing: "ease-out" }
        );
      }, 300);
    }
  }, [currentIndex]);

  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 -translate-y-[40%] w-[640px] h-[640px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 translate-y-[30%] w-[640px] h-[640px] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-[16px] border-[1.5px] border-border/40 bg-white backdrop-blur-sm px-4 py-1.5 mb-8">
            <span className="text-sm font-medium">✨ <span className="text-gradient-blue-teal">AI-Driven Validation</span></span>
            <div className="mx-2 h-3 w-px bg-border" />
            <span className="text-sm text-foreground">Save Time & Cost</span>
          </div>

          {/* Main content */}
          <div className="space-y-2">
            {/* Static heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Know Before You Build.
            </h1>
            
            {/* Cycling headings */}
            <div className="relative h-[84px] sm:h-[96px] md:h-[108px] lg:h-[120px] overflow-hidden">
              <div ref={containerRef} className="absolute inset-0">
                {cyclingPhrases.map((phrase, i) => (
                  <h2 
                    key={i}
                    className="absolute inset-0 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-500"
                  >
                    <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {phrase.start}
                    </span>
                    <span className="text-gradient-blue-teal">
                      {phrase.highlight}
                    </span>
                  </h2>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-foreground max-w-2xl mx-auto">
            iValidate replaces guesswork with real-time data and social media integration, helping you validate ideas faster, save time and money, and build with confidence.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button 
              className="h-10 px-4 text-white font-medium font-prompt flex items-center gap-1 bg-primary hover:bg-white hover:text-primary hover:border-[1.5px] hover:border-blue-500/30"
            >
              <Link to="/maintenance">Start Validating Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};