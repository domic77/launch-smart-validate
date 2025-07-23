import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";



const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow container mx-auto px-4 py-8 pt-8">
        
        <h1 className="text-4xl font-bold text-center mb-4">Privacy Policy</h1>
        <p className="text-center text-gray-500 mb-12"><strong>Last Updated:</strong> July 22, 2025</p>
        <Card className="max-w-2xl mx-auto rounded-2xl border bg-background prose prose-lg">
          <CardContent className="pt-10">
          

          
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4"><strong className="text-gray-700">Account Information:</strong> When you sign up for iValidate, we collect your name, email address, and password.</p>
          <p className="mb-4"><strong className="text-gray-700">Idea Data:</strong> We store the startup or product ideas you submit to be validated through our platform.</p>
          <p className="mb-4"><strong className="text-gray-700">Usage Analytics:</strong> We collect data on how you use iValidate, including validation tools used, frequency of access, and feature interactions.</p>
          <p className="mb-4"><strong className="text-gray-700">Third-Party Integrations:</strong> When integrated with external tools like Google Trends, Reddit, or X, we store authorization tokens and permissions needed to provide insights.</p>
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4"><strong className="text-gray-700">We use your information to:</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide and improve our AI-powered idea validation services</li>
            <li>Analyze and generate insight reports on submitted ideas</li>
            <li>Offer market trends, competitor signals, and validation scoring</li>
            <li>Communicate service updates and product improvements</li>
            <li>Offer customer support and respond to user queries</li>
            <li>Prevent abuse, misuse, or unauthorized use of the platform</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-4"><strong className="text-gray-700">We do not sell or rent your personal data. We only share your information in the following situations:</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>When you authorize integrations with third-party platforms (e.g., Reddit, Google Trends)</li>
            <li>With trusted service providers that support our infrastructure (e.g., hosting, analytics)</li>
            <li>When legally required by government or regulatory authorities</li>
            <li>During a merger, acquisition, or business transfer, with prior notice to users</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-4"><strong className="text-gray-700">We protect your data using:</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>Encryption (in transit and at rest)</li>
            <li>Routine system audits and vulnerability checks</li>
            <li>Access control systems to restrict internal data visibility</li>
            <li>Secure login flows and authentication systems</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
          <p className="mb-4"><strong className="text-gray-700">You have the right to:</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>View and export your personal data</li>
            <li>Correct or update any information tied to your account</li>
            <li>Delete your account and associated idea validation data</li>
            <li>Disconnect any third-party tools</li>
            <li>Opt out of marketing or non-essential communication</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p className="mb-4"><strong className="text-gray-700">We keep your data as long as your account is active.</strong> If you delete your account, idea validation data will be retained for 30 days in case of accidental deletion. Aggregated analytics data may be kept indefinitely in anonymized form for platform performance insights.</p>
          <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
          <p className="mb-4"><strong className="text-gray-700">iValidate may process your information on servers outside your country.</strong> We follow global compliance standards and implement safeguards to keep your data safe during transfers.</p>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-4"><strong className="text-gray-700">We may occasionally update this policy.</strong> You’ll be notified via email or in-app alerts if major changes occur. Continued use of iValidate means you accept the revised terms.</p>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">For questions or concerns about our privacy practices, reach out to us at: <a href="mailto:support@ivalidate.xyz" className="text-blue-600 hover:underline">support@ivalidate.xyz</a></p>
          <div className="text-center mt-8">
            <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
          </CardContent>
        </Card>
      </main>
      
      
    </div>
  );
};

export default PrivacyPolicy;
