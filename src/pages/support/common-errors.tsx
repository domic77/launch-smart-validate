import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const CommonErrors: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Fixing Common Errors and Issues</h1>
            <div className="prose max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">This guide provides solutions to common errors and issues you may encounter while using iValidate.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Common Errors</h3>
              <p className="text-foreground leading-relaxed mb-6">Here are some of the most common errors you may encounter:</p>
              <ul className="list-disc list-inside mb-4 text-foreground">
                <li><strong>"Invalid API Key":</strong> This error occurs when your API key is incorrect or has expired. Please verify your API key in your account settings and ensure it is entered correctly. If the issue persists, try regenerating your API key.</li>
                <li><strong>"Unable to Connect to Server":</strong> This error typically indicates a problem with your internet connection or our servers. First, check your internet connection. If your connection is stable, please check our status page for any ongoing service disruptions. If there are no reported issues, try refreshing the page or logging out and back in.</li>
                <li><strong>"Validation Failed":</strong> If your validation report fails to generate, it could be due to insufficient data for your query or an issue with the input parameters. Try refining your keywords, broadening your search scope, or ensuring all required fields are filled out correctly.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">General Troubleshooting Tips</h3>
              <p className="text-foreground leading-relaxed mb-6">If you encounter an issue not listed above, consider these general troubleshooting steps:</p>
              <ul className="list-disc list-inside mb-4 text-foreground">
                <li><strong>Clear your browser cache and cookies:</strong> Sometimes, old data stored in your browser can cause unexpected behavior.</li>
                <li><strong>Try a different browser:</strong> This can help determine if the issue is browser-specific.</li>
                <li><strong>Disable browser extensions:</strong> Some extensions can interfere with website functionality.</li>
                <li><strong>Contact Support:</strong> If you're still experiencing problems, please don't hesitate to contact our support team with a detailed description of the issue, including any error messages you received and the steps you've already taken.</li>
              </ul>
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

export default CommonErrors;