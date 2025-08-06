import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Lightbulb, Sparkles, Target, Users, Zap } from "lucide-react";

const FreeAiTool = () => {
  const [idea, setIdea] = useState("");
  const [refinedIdea, setRefinedIdea] = useState<{oneLiner: string, targetAudience: string, problem: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dailyUsage, setDailyUsage] = useState(0);
  
  const DAILY_LIMIT = 5; // Changed to 5 as requested

  // Initialize usage tracking
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('lastResetDate');
    const savedUsage = parseInt(localStorage.getItem('dailyUsage')) || 0;

    if (savedDate !== today) {
      // New day, reset usage
      setDailyUsage(0);
      localStorage.setItem('dailyUsage', '0');
      localStorage.setItem('lastResetDate', today);
    } else {
      // Same day, load existing usage
      setDailyUsage(savedUsage);
    }
  }, []);

  // Increment usage counter
  const incrementUsage = () => {
    const newUsage = dailyUsage + 1;
    setDailyUsage(newUsage);
    localStorage.setItem('dailyUsage', newUsage.toString());
  };

  const getRemainingUses = () => DAILY_LIMIT - dailyUsage;

  const handleRefine = async () => {
    if (!idea.trim()) {
      setError("Please enter an idea to refine.");
      setRefinedIdea(null);
      return;
    }

    // Check daily limit
    if (dailyUsage >= DAILY_LIMIT) {
      setError(`Daily limit reached (${DAILY_LIMIT} ideas per day). Try again tomorrow!`);
      return;
    }

    setError(null);
    setIsLoading(true);
    setRefinedIdea(null); // Clear previous results

    try {
      const response = await fetch('/api/refineIdea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        setError('Server returned invalid response. Please try again.');
        console.error('Non-JSON response received:', await response.text());
        return;
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        setError('Server returned malformed data. Please try again.');
        console.error('JSON parsing error:', jsonError);
        return;
      }

      if (!response.ok) {
        setError(data.message || 'Failed to refine idea.');
        return;
      }

      setRefinedIdea(data);
      incrementUsage(); // Increment usage on successful refinement
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Request error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full" style={{ backgroundColor: '#fafafa' }}>
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Explore the <span className="text-gradient-blue-teal">iValidate</span> Free AI Tool
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Get a taste of how iValidate simplifies idea validation, without giving away the full sauce.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Main Tool Card */}
          <Card className="mb-8 rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gradient-blue-teal mb-3">Idea Refiner</CardTitle>
              <p className="text-foreground text-lg mb-4">
                Turn rough startup ideas into clear, pitchable concepts instantly.
              </p>
              
              {/* Usage Counter */}
              <div className="flex justify-center items-center gap-4 text-sm">
                <div className="px-4 py-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">{getRemainingUses()} ideas remaining today</span>
                </div>
                <div className="px-4 py-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                  <span className="text-foreground font-medium">{idea.length}/500 characters</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <Input
                    placeholder="Type your startup idea here... (e.g., 'A platform for pet owners to find trusted dog walkers')"
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    className="py-6 text-lg rounded-[12px] border-[1.5px] border-blue-500/30 bg-white focus:bg-gray-50 transition-colors"
                    maxLength={500}
                  />
                </div>
                
                {error && (
                  <div className="p-4 rounded-[12px] border-[1.5px] border-red-300 bg-red-50">
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  </div>
                )}
                
                <Button 
                  onClick={handleRefine} 
                  disabled={isLoading || dailyUsage >= DAILY_LIMIT} 
                  className="w-full py-6 text-lg rounded-[16px] border-[1.5px] border-blue-500/30 bg-primary text-white hover:bg-white hover:text-primary transition-colors font-medium flex items-center gap-3"
                >
                  <Lightbulb className="w-5 h-5" />
                  {isLoading ? "Refining Your Idea..." : "Refine My Idea"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Loading State */}
          {isLoading && (
            <Card className="mb-8 rounded-[16px] border-[1.5px] border-blue-500/30 animate-pulse" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="py-12 text-center">
                <div className="flex justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
                <p className="text-foreground font-medium">AI is refining your idea... This might take a moment.</p>
              </CardContent>
            </Card>
          )}

          {/* Results Card */}
          {refinedIdea && (
            <Card className="mb-8 animate-in fade-in-50 duration-500 rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gradient-blue-teal">✨ Your Refined Idea</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="p-6 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">One-Liner Pitch</h3>
                  </div>
                  <p className="text-foreground leading-relaxed">{refinedIdea.oneLiner}</p>
                </div>

                <div className="p-6 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Target Audience</h3>
                  </div>
                  <p className="text-foreground leading-relaxed">{refinedIdea.targetAudience}</p>
                </div>

                <div className="p-6 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Problem Solved</h3>
                  </div>
                  <p className="text-foreground leading-relaxed">{refinedIdea.problem}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA Card */}
          {refinedIdea && (
            <Card className="rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="py-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Want to take it further?
                </h3>
                <p className="text-foreground text-lg mb-6 max-w-md mx-auto">
                  Run a full validation with <span className="font-bold text-gradient-blue-teal">iValidate Pro</span> and get market insights, competitor analysis, and real user sentiment.
                </p>
                <Button className="px-8 py-3 text-lg rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors font-medium">
                  <Link to="/maintenance" className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Validate This Idea
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeAiTool;