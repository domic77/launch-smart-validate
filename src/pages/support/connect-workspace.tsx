import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const ConnectWorkspace: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto rounded-2xl border-[1.5px] bg-card prose prose-lg p-6 sm:p-8">
          <CardContent className="pt-0">
            <h1 className="text-4xl font-bold mb-4">How to Connect Your Workspace</h1>
            <div className="prose max-w-none">
              <p>Connecting your workspace to iValidate allows you to unlock deeper insights by integrating with the tools you use every day. This guide explains how to set up your integrations.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Supported Integrations</h3>
              <p>We support integrations with a variety of powerful platforms to enhance your validation process. These include:</p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Google Trends:</strong> Integrate to analyze search interest and popularity of your idea over time, helping you understand market demand and seasonality.</li>
                <li><strong>Reddit:</strong> Connect to tap into real-time discussions and sentiment from relevant communities, providing qualitative insights into user needs and opinions.</li>
                <li><strong>Twitter:</strong> Leverage Twitter integration to monitor public conversations, identify influencers, and track brand mentions related to your idea.</li>
                <li><strong>And more coming soon!</strong> We are continuously working to expand our integration library to provide you with even more comprehensive data sources.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4">Connecting an Integration</h3>
              <p>To connect a new integration, follow these simple steps:</p>
              <ol className="list-decimal list-inside mb-4">
                <li>Navigate to the "Integrations" tab in your project settings.</li>
                <li>From the list of available integrations, select the platform you want to connect (e.g., Google Trends, Reddit, Twitter).</li>
                <li>Follow the on-screen instructions to authorize iValidate. This may involve logging into your account on the respective platform and granting necessary permissions, or providing an API key.</li>
                <li>Once successfully connected, you will see a confirmation message, and the integration will be listed as active in your settings.</li>
              </ol>

              <h3 className="text-2xl font-bold mt-8 mb-4">Managing Connected Integrations</h3>
              <p>In the "Integrations" tab, you can also manage your existing connections. You can:</p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>View Status:</strong> Check the connection status of each integration.</li>
                <li><strong>Disconnect:</strong> Remove an integration if you no longer need it.</li>
                <li><strong>Reauthorize:</strong> If an integration connection expires or encounters an issue, you may need to reauthorize it.</li>
              </ul>
              <p>Ensuring your integrations are active and properly configured is crucial for receiving the most accurate and comprehensive validation reports.</p>
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

export default ConnectWorkspace;