import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const ValidationScore: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Understanding Your Validation Score</h1>
            <div className="prose max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">Your validation score is a single number that represents our assessment of your idea's potential. This guide explains how to interpret your score.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">What It Means</h3>
              <p className="text-foreground leading-relaxed mb-6">Your validation score is a single, comprehensive number ranging from 0 to 100 that represents our AI's assessment of your idea's overall potential and viability. This score is dynamically calculated based on a sophisticated analysis of various factors, including:</p>
              <ul className="list-disc list-inside mb-4 text-foreground">
                <li><strong>Market Size and Demand:</strong> The estimated size of your target market and the existing demand for solutions related to your idea.</li>
                <li><strong>Competition:</strong> The intensity and nature of the competitive landscape, including direct and indirect competitors.</li>
                <li><strong>Social Sentiment:</strong> Public perception and discussion around keywords and concepts related to your idea, drawn from social media and online forums.</li>
                <li><strong>Trend Analysis:</strong> How well your idea aligns with current and emerging market trends.</li>
                <li><strong>Problem-Solution Fit:</strong> The clarity and relevance of the problem your idea solves, and the effectiveness of your proposed solution.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-6">A higher score indicates a greater likelihood of success, suggesting strong market potential, manageable competition, and positive public reception. Conversely, a lower score highlights areas that may require further refinement or reconsideration.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">How to Improve It</h3>
              <p className="text-foreground leading-relaxed mb-6">If your validation score is lower than you'd hoped, don't be discouraged! It's an opportunity to refine and strengthen your idea. Here are some strategies to improve your validation score:</p>
              <ul className="list-disc list-inside mb-4 text-foreground">
                <li><strong>Refine Your Niche:</strong> If your market size is too broad or too small, consider narrowing or expanding your target audience to find a more viable segment.</li>
                <li><strong>Differentiate Your Solution:</strong> Analyze your competitors and identify unique selling propositions that set your idea apart. Focus on what makes your solution better or different.</li>
                <li><strong>Address Pain Points More Effectively:</strong> Re-evaluate the core problem your idea solves. Is it a significant pain point for your target audience? Can your solution address it more directly or efficiently?</li>
                <li><strong>Gather More Data:</strong> Ensure you've provided enough detailed information about your idea. The more context our AI has, the more accurate its assessment will be. Consider connecting more integrations to enrich the data.</li>
                <li><strong>Iterate and Re-validate:</strong> Use the insights from your initial report to make adjustments to your idea or business model. Then, run another validation to see how your score improves. This iterative process is key to successful idea development.</li>
                <li><strong>Seek Feedback:</strong> Share your idea with potential customers or mentors and gather qualitative feedback. This can uncover blind spots that data alone might not reveal.</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-6">Remember, the validation score is a tool to guide you. Continuous refinement and adaptation based on data and feedback are crucial for transforming a good idea into a great one.</p>
            </div>
            <div className="text-center mt-4">
              <Link to="/support" className="inline-flex items-center px-6 py-3 rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors font-medium">
                ← Back to Support
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ValidationScore;