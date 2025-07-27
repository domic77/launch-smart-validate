import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 font-medium">
            <strong>Last Updated:</strong> July 22, 2025
          </p>
        </div>

        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">

            <h2 className="text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
            <div className="mb-8">
              <p className="text-foreground">By accessing and using iValidate ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree, you must not use the Service.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">2. Description of Service</h2>
            <div className="mb-8">
              <p className="text-foreground">iValidate is an AI-powered idea validation platform that helps startups, founders, and creators test and validate business ideas using real-time market insights, social signals, and competitor analysis. The Service includes validation tools, insight generation, downloadable reports, and connected data sources.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">3. User Accounts</h2>
            <div className="mb-8">
              <p className="text-foreground">You are responsible for keeping your login credentials secure and for all activity conducted under your account. You must notify us immediately of any unauthorized use of your account.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">4. Acceptable Use</h2>
            <div className="mb-8">
              <p className="mb-4"><strong className="text-foreground">You agree not to use the Service to:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Violate any laws or third-party rights</li>
                <li>Submit malicious, false, or misleading data</li>
                <li>Access or scrape data not intended for your use</li>
                <li>Interfere with system security or integrity</li>
                <li>Reverse-engineer or copy proprietary components of iValidate</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">5. Idea and Data Ownership</h2>
            <div className="mb-8">
              <p className="text-foreground">You retain full ownership of any startup ideas or data you input into iValidate. By using the Service, you grant us a limited license to process, analyze, and display this data strictly for validation and reporting purposes.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">6. Payment and Subscription</h2>
            <div className="mb-8">
              <p className="text-foreground">Paid plans are billed upfront either monthly or annually, based on your selection. We offer a 3-day refund policy for new users. You may cancel anytime; service will remain active until the end of your billing cycle.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">7. Limitation of Liability</h2>
            <div className="mb-8">
              <p className="text-foreground">iValidate is not liable for any loss of business opportunity, revenue, or investment decisions made based on validation results. Our total liability shall not exceed the amount paid by you within the past 12 months.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">8. Service Availability</h2>
            <div className="mb-8">
              <p className="text-foreground">We aim for high availability but cannot guarantee uninterrupted access. iValidate may experience occasional downtime due to maintenance or unforeseen issues. We reserve the right to modify, suspend, or discontinue any part of the Service with reasonable notice.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">9. Changes to Terms</h2>
            <div className="mb-8">
              <p className="text-foreground">We may update these terms periodically. You will be notified of significant updates via email or an in-app message. Continued use of the Service after changes means you accept the revised Terms.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">10. Contact Information</h2>
            <div className="mb-8">
              <p className="text-foreground">For questions or concerns about these Terms, contact us at: <a href="mailto:support@ivalidate.xyz" className="text-primary hover:underline font-medium">support@ivalidate.xyz</a></p>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-blue-500/30">
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Terms;