import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const ValidationReports: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Exploring Validation Reports</h1>
            <div className="prose max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">Your validation report is a comprehensive overview of your idea's potential. This guide will help you understand the different sections of the report.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Key Sections</h3>
              <p className="text-foreground leading-relaxed mb-6">Your report is divided into several key sections, each providing valuable insights into different aspects of your idea's viability:</p>
              <ul className="list-disc list-inside mb-4 text-foreground">
                <li><strong>Market Size:</strong> This section provides an estimate of the total addressable market (TAM) for your idea, including potential customer segments and revenue opportunities. It helps you understand the scale and potential reach of your business.</li>
                <li><strong>Competitor Analysis:</strong> An overview of the competitive landscape, identifying key players, their strengths, weaknesses, and market positioning. This analysis helps you pinpoint opportunities for differentiation and strategic entry points.</li>
                <li><strong>Validation Score:</strong> A single, comprehensive score that represents our AI's assessment of your idea's overall potential. This score is derived from a multitude of factors and serves as a quick indicator of viability. For a deeper understanding, refer to our "Understanding Your Validation Score" guide.</li>
                <li><strong>Trend Analysis:</strong> Insights into current and emerging market trends relevant to your idea, helping you anticipate shifts and adapt your strategy accordingly.</li>
                <li><strong>Sentiment Analysis:</strong> An analysis of public sentiment and discussions around keywords related to your idea, drawn from social media and other online sources, providing qualitative feedback.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Interpreting Your Report for Actionable Insights</h3>
              <p className="text-foreground leading-relaxed mb-6">The true value of your validation report lies in its ability to provide actionable insights. Don't just look at the scores; delve into the details of each section. For example, a low market size might indicate a niche opportunity, while strong competition might require a unique value proposition. Use the data to:</p>
              <ul className="list-disc list-inside mb-4 text-foreground">
                <li><strong>Refine Your Idea:</strong> Identify areas where your idea can be improved or pivoted based on market feedback.</li>
                <li><strong>Develop Your Strategy:</strong> Formulate a go-to-market strategy that leverages opportunities and mitigates risks.</li>
                <li><strong>Make Informed Decisions:</strong> Decide whether to proceed, iterate, or reconsider your idea based on objective data.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Downloading and Sharing Reports</h3>
              <p className="text-foreground leading-relaxed mb-6">All your validation reports can be easily downloaded in various formats (e.g., PDF) for offline review or sharing with team members and stakeholders. You can access your reports from your project dashboard at any time.</p>
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

export default ValidationReports;