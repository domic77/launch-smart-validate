import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const GettingStarted: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto rounded-2xl border-[1.5px] bg-card prose prose-lg p-6 sm:p-8">
          <CardContent className="pt-0">
            <h1 className="text-4xl font-bold mb-4">Getting Started with iValidate</h1>
            <div className="prose max-w-none">
              <p>Welcome to iValidate! We're excited to help you turn your ideas into validated businesses. This guide will walk you through the first steps of using our platform.</p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">1. Creating Your First Project</h3>
              <p>A project in iValidate serves as your central hub for all validation activities related to a specific idea or business concept. To create a new project, simply click the "New Project" button prominently displayed on your dashboard. You'll be prompted to give your project a descriptive name. Once created, you can begin adding details about your idea, defining your target market, and setting up your validation criteria. Each project allows you to keep your validation efforts organized and focused.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">2. Connecting Your Workspace</h3>
              <p>iValidate is designed to seamlessly integrate with the tools and platforms you already use, enriching your validation process with real-world data. By connecting your workspace, you can pull in valuable insights from sources like Google Trends, Reddit, Twitter, and more. This integration is crucial for comprehensive market analysis and understanding public sentiment. To connect your workspace, navigate to the "Integrations" tab within your project settings. For a detailed step-by-step guide on connecting various platforms, please refer to our "How to Connect Your Workspace" support article.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">3. Running Your First Validation</h3>
              <p>With your project set up and relevant integrations connected, you're ready to initiate your first validation. Our advanced AI-powered tools will then analyze the market data, consumer trends, and competitive landscape based on your project's details. The system will generate a comprehensive validation report, providing you with a clear assessment of your idea's potential, highlighting strengths, weaknesses, opportunities, and threats. This report is designed to give you actionable insights to refine your idea and make informed decisions.</p>

              <p>If you have any questions or encounter any challenges during your initial setup, our dedicated support team is always ready to assist you. Don't hesitate to reach out for personalized guidance.</p>
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

export default GettingStarted;