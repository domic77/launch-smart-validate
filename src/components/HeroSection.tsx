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
      
      if (children.length === 0) return;
      
      // Clear any existing animations
      children.forEach(child => {
        child.style.transition = 'none';
      });
      
      // Set initial positions
      children.forEach((child, i) => {
        if (i === currentIndex) {
          child.style.opacity = "1";
          child.style.transform = "translateY(0)";
        } else {
          child.style.opacity = "0";
          child.style.transform = "translateY(100%)";
        }
      });
      
      // Animate to next
      const nextIndex = (currentIndex + 1) % cyclingPhrases.length;
      
      if (children[currentIndex] && children[nextIndex]) {
        // Animate current out
        animate(
          children[currentIndex],
          { 
            opacity: [1, 0], 
            transform: ["translateY(0)", "translateY(-100%)"] 
          },
          { duration: 0.4, easing: "ease-in-out" }
        );
        
        // Animate next in with delay
        setTimeout(() => {
          if (children[nextIndex]) {
            animate(
              children[nextIndex],
              { 
                opacity: [0, 1], 
                transform: ["translateY(100%)", "translateY(0)"] 
              },
              { duration: 0.4, easing: "ease-out" }
            );
          }
        }, 200);
      }
    }
  }, [currentIndex, cyclingPhrases.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/15 blur-3xl" />
      </div>

      {/* Hero Content Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full bg-gradient-to-r from-green-400/30 via-blue-500/30 to-teal-400/30 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/20 via-teal-500/20 to-green-400/20 blur-2xl opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] rounded-full bg-gradient-to-t from-teal-300/15 via-blue-400/15 to-green-300/15 blur-xl opacity-90" />
      </div>

      <div className="container relative px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-[16px] border-[1.5px] border-border/40 bg-white backdrop-blur-sm px-3 sm:px-4 py-1.5 mb-8 flex-nowrap whitespace-nowrap">
            <span className="text-xs sm:text-sm font-medium">✨ <span className="text-gradient-blue-teal">AI-Driven Validation</span></span>
            <div className="mx-1.5 sm:mx-2 h-3 w-px bg-border" />
            <span className="text-xs sm:text-sm text-foreground">Save Time & Cost</span>
          </div>

          {/* Main content */}
          <div className="space-y-2">
            {/* Static heading */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Know Before You Build.
            </h1>
            
            {/* Cycling headings - Dynamic height that adapts to content */}
            <div className="relative min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] overflow-hidden">
              <div ref={containerRef} className="absolute inset-0 w-full">
                {cyclingPhrases.map((phrase, i) => (
                  <h2 
                    key={i}
                    className="absolute top-0 left-0 w-full text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-500 leading-tight"
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

          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            iValidate replaces guesswork with AI and social media data, helping you validate ideas faster, cost-effectively, and build with confidence.
          </p>

          <div className="mt-8 sm:mt-10 flex items-center justify-center px-4">
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