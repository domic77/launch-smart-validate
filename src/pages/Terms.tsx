import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 pt-8">
        <h1 className="text-4xl font-bold text-center mb-4">Terms of Service</h1>
        <p className="text-center text-gray-500 mb-12"><strong>Last Updated:</strong> July 22, 2025</p>
        <Card className="max-w-2xl mx-auto rounded-2xl border bg-background prose prose-lg">
          <CardContent className="pt-10">

          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing and using iValidate ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree, you must not use the Service.</p>

          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="mb-4">iValidate is an AI-powered idea validation platform that helps startups, founders, and creators test and validate business ideas using real-time market insights, social signals, and competitor analysis. The Service includes validation tools, insight generation, downloadable reports, and connected data sources.</p>

          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="mb-4">You are responsible for keeping your login credentials secure and for all activity conducted under your account. You must notify us immediately of any unauthorized use of your account.</p>
          <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
          <p className="mb-4"><strong className="text-gray-700">You agree not to use the Service to:</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Violate any laws or third-party rights</li>
            <li>Submit malicious, false, or misleading data</li>
            <li>Access or scrape data not intended for your use</li>
            <li>Interfere with system security or integrity</li>
            <li>Reverse-engineer or copy proprietary components of iValidate</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">5. Idea and Data Ownership</h2>
          <p className="mb-4">You retain full ownership of any startup ideas or data you input into iValidate. By using the Service, you grant us a limited license to process, analyze, and display this data strictly for validation and reporting purposes.</p>

          <h2 className="text-2xl font-semibold mb-4">6. Payment and Subscription</h2>
          <p className="mb-4">Paid plans are billed upfront either monthly or annually, based on your selection. We offer a 3-day refund policy for new users. You may cancel anytime; service will remain active until the end of your billing cycle.</p>

          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">iValidate is not liable for any loss of business opportunity, revenue, or investment decisions made based on validation results. Our total liability shall not exceed the amount paid by you within the past 12 months.</p>

          <h2 className="text-2xl font-semibold mb-4">8. Service Availability</h2>
          <p className="mb-4">We aim for high availability but cannot guarantee uninterrupted access. iValidate may experience occasional downtime due to maintenance or unforeseen issues. We reserve the right to modify, suspend, or discontinue any part of the Service with reasonable notice.</p>

          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-4">We may update these terms periodically. You will be notified of significant updates via email or an in-app message. Continued use of the Service after changes means you accept the revised Terms.</p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p className="mb-4">For questions or concerns about these Terms, contact us at: <a href="mailto:support@ivalidate.xyz" className="text-blue-600 hover:underline">support@ivalidate.xyz</a></p>
          <div className="text-center mt-8">
            <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
          </CardContent>
        </Card>
      </main>
      
    </div>
  );
};

export default Terms;
