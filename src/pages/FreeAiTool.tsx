import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Lightbulb } from "lucide-react";

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

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Failed to refine idea.');
        return;
      }

      setRefinedIdea(data);
      incrementUsage(); // Increment usage on successful refinement
    } catch (err) {
      setError('An unexpected error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-0 px-4 mx-auto max-w-screen-xl lg:py-2 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-4xl font-bold text-center mb-4">
              Explore the <span className="text-gradient-blue-teal">iValidate</span> Free AI Tool
            </h1>
            <p className="text-center text-gray-500 mb-12">
              Get a taste of how iValidate simplifies idea validation, without giving away the full sauce.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-0">
        <div className="max-w-2xl mx-auto">
          <Card className="mb-4 border-[1.5px] border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gradient-blue-teal text-center mb-0">Idea Refiner</CardTitle>
              <p className="text-gray-500 dark:text-gray-400 text-center mb-0">
                Turn rough startup ideas into clear, pitchable concepts instantly.
              </p>
              {/* Usage Counter */}
              <div className="flex justify-center items-center gap-4 mt-3 text-sm text-gray-600">
                <span className="bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {getRemainingUses()} ideas remaining today
                </span>
                <span className="bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                  {idea.length}/500 characters
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Type your startup idea here..."
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  className="py-6"
                  maxLength={500}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                <Button 
                  onClick={handleRefine} 
                  disabled={isLoading || dailyUsage >= DAILY_LIMIT} 
                  className="w-full h-10 px-4 text-white font-medium font-prompt flex items-center gap-2 bg-primary hover:bg-white hover:text-primary hover:border-[1.5px] hover:border-blue-500/30"
                >
                  <Lightbulb className="w-4 h-4" />
                  {isLoading ? "Refining..." : "Refine My Idea"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {isLoading && (
            <div className="text-center">
              <p>Refining your idea...</p>
            </div>
          )}

          {refinedIdea && (
            <Card className="mb-4 animate-in fade-in-50 border-[1.5px] border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-gradient-blue-teal text-center">Refined Idea</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">One-Liner</h3>
                  <p>{refinedIdea.oneLiner}</p>
                </div>
                <Separator className="bg-blue-500/30" />
                <div>
                  <h3 className="font-semibold">Target Audience</h3>
                  <p>{refinedIdea.targetAudience}</p>
                </div>
                <Separator className="bg-blue-500/30" />
                <div>
                  <h3 className="font-semibold">Problem Solved</h3>
                  <p>{refinedIdea.problem}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {refinedIdea && (
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center border-[1.5px] border-blue-500/30 mb-4">
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Want to take it further? Run a full validation with iValidate Pro.
              </p>
              <Button variant="link" className="mt-2">
                <Link to="/maintenance">Validate This Idea</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreeAiTool;