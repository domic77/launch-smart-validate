import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const AIPoweredValidation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto rounded-2xl border-[1.5px] bg-card prose prose-lg p-6 sm:p-8">
          <CardContent className="pt-0">
            <h1 className="text-4xl font-bold mb-4">Using AI-Powered Validation</h1>
            <div className="prose max-w-none">
              <p>Our AI-powered validation tools are at the heart of iValidate. This guide explains how to use them to get the most accurate assessment of your idea.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
              <p>Our AI analyzes a massive amount of data from various sources, including market research databases, social media trends, news articles, and academic papers, to identify trends, patterns, and insights related to your idea. This allows us to provide you with a comprehensive validation report that covers everything from market size to competitor analysis, and even potential challenges and opportunities.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Running a Validation</h3>
              <p>To run a validation, simply enter a few keywords related to your idea and let our AI do the rest. For best results, use specific and descriptive keywords that accurately reflect your idea and target market. You'll receive a detailed report in minutes, providing you with actionable insights to guide your next steps.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Interpreting Your Report</h3>
              <p>The validation report provides a wealth of information. Pay close attention to the validation score, market analysis, and competitive landscape sections. The report will highlight key strengths and weaknesses, helping you refine your idea and strategy. If you have any questions about your report, our support team is always here to help.</p>
            </div>
            <div className="text-center mt-4">
              <Link to="/support" className="text-primary hover:underline">← Back to Support</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIPoweredValidation;