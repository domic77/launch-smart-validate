import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const GettingStarted: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Getting Started with iValidate</h1>
            <div className="prose max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">Welcome to iValidate! We're excited to help you turn your ideas into validated businesses. This guide will walk you through the first steps of using our platform.</p>
              
              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">1. Creating Your First Project</h3>
              <p className="text-foreground leading-relaxed mb-6">A project in iValidate serves as your central hub for all validation activities related to a specific idea or business concept. To create a new project, simply click the "New Project" button prominently displayed on your dashboard. You'll be prompted to give your project a descriptive name. Once created, you can begin adding details about your idea, defining your target market, and setting up your validation criteria. Each project allows you to keep your validation efforts organized and focused.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">2. Connecting Your Workspace</h3>
              <p className="text-foreground leading-relaxed mb-6">iValidate is designed to seamlessly integrate with the tools and platforms you already use, enriching your validation process with real-world data. By connecting your workspace, you can pull in valuable insights from sources like Google Trends, Reddit, Twitter, and more. This integration is crucial for comprehensive market analysis and understanding public sentiment. To connect your workspace, navigate to the "Integrations" tab within your project settings. For a detailed step-by-step guide on connecting various platforms, please refer to our "How to Connect Your Workspace" support article.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">3. Running Your First Validation</h3>
              <p className="text-foreground leading-relaxed mb-6">With your project set up and relevant integrations connected, you're ready to initiate your first validation. Our advanced AI-powered tools will then analyze the market data, consumer trends, and competitive landscape based on your project's details. The system will generate a comprehensive validation report, providing you with a clear assessment of your idea's potential, highlighting strengths, weaknesses, opportunities, and threats. This report is designed to give you actionable insights to refine your idea and make informed decisions.</p>

              <p className="text-foreground leading-relaxed mb-6">If you have any questions or encounter any challenges during your initial setup, our dedicated support team is always ready to assist you. Don't hesitate to reach out for personalized guidance.</p>
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

export default GettingStarted;