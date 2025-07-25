import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const Billing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto rounded-2xl border-[1.5px] bg-card prose prose-lg p-6 sm:p-8">
          <CardContent className="pt-0">
            <h1 className="text-4xl font-bold mb-4">Billing and Subscription Management</h1>
            <div className="prose max-w-none">
              <p>This guide explains how to manage your billing and subscription information in iValidate.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Updating Your Payment Method</h3>
              <p>To update your payment method, navigate to the "Billing" tab within your account settings. Here, you will find options to add a new credit card or update details for an existing one. Ensure all information is accurate to avoid any service interruptions.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Canceling Your Subscription</h3>
              <p>You can cancel your subscription at any time by visiting the "Billing" tab in your account settings. Look for the "Cancel Subscription" option and follow the prompts. Please note that your subscription will remain active until the end of your current billing cycle, and no further charges will be applied.</p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Viewing Your Billing History</h3>
              <p>A detailed history of all your past invoices and payments is available under the "Billing History" section within the "Billing" tab. You can view, download, or print your invoices for your records.</p>
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

export default Billing;