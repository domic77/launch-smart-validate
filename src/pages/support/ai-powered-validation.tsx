import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const AIPoweredValidation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Using AI-Powered Validation</h1>
            <div className="prose max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">Our AI-powered validation tools are at the heart of iValidate. This guide explains how to use them to get the most accurate assessment of your idea.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">How It Works</h3>
              <p className="text-foreground leading-relaxed mb-6">Our AI analyzes a massive amount of data from various sources, including market research databases, social media trends, news articles, and academic papers, to identify trends, patterns, and insights related to your idea. This allows us to provide you with a comprehensive validation report that covers everything from market size to competitor analysis, and even potential challenges and opportunities.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Running a Validation</h3>
              <p className="text-foreground leading-relaxed mb-6">To run a validation, simply enter a few keywords related to your idea and let our AI do the rest. For best results, use specific and descriptive keywords that accurately reflect your idea and target market. You'll receive a detailed report in minutes, providing you with actionable insights to guide your next steps.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Interpreting Your Report</h3>
              <p className="text-foreground leading-relaxed mb-6">The validation report provides a wealth of information. Pay close attention to the validation score, market analysis, and competitive landscape sections. The report will highlight key strengths and weaknesses, helping you refine your idea and strategy. If you have any questions about your report, our support team is always here to help.</p>
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

export default AIPoweredValidation;