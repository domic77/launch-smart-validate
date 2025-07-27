import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const Billing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Billing and Subscription Management</h1>
            <div className="prose max-w-none text-foreground">
              <p className="text-foreground leading-relaxed mb-6">This guide explains how to manage your billing and subscription information in iValidate.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Updating Your Payment Method</h3>
              <p className="text-foreground leading-relaxed mb-6">To update your payment method, navigate to the "Billing" tab within your account settings. Here, you will find options to add a new credit card or update details for an existing one. Ensure all information is accurate to avoid any service interruptions.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Canceling Your Subscription</h3>
              <p className="text-foreground leading-relaxed mb-6">You can cancel your subscription at any time by visiting the "Billing" tab in your account settings. Look for the "Cancel Subscription" option and follow the prompts. Please note that your subscription will remain active until the end of your current billing cycle, and no further charges will be applied.</p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-foreground">Viewing Your Billing History</h3>
              <p className="text-foreground leading-relaxed mb-6">A detailed history of all your past invoices and payments is available under the "Billing History" section within the "Billing" tab. You can view, download, or print your invoices for your records.</p>
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

export default Billing;