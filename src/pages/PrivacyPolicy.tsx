import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto px-4 py-8 pt-32">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 font-medium">
            <strong>Last Updated:</strong> July 22, 2025
          </p>
        </div>

        <Card className="max-w-4xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
          
            <h2 className="text-2xl font-bold text-foreground mb-6">1. Information We Collect</h2>
            <div className="mb-8 space-y-4">
              <p><strong className="text-foreground">Account Information:</strong> When you sign up for iValidate, we collect your name, email address, and password.</p>
              <p><strong className="text-foreground">Idea Data:</strong> We store the startup or product ideas you submit to be validated through our platform.</p>
              <p><strong className="text-foreground">Usage Analytics:</strong> We collect data on how you use iValidate, including validation tools used, frequency of access, and feature interactions.</p>
              <p><strong className="text-foreground">Third-Party Integrations:</strong> When integrated with external tools like Google Trends, Reddit, or X, we store authorization tokens and permissions needed to provide insights.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">2. How We Use Your Information</h2>
            <div className="mb-8">
              <p className="mb-4"><strong className="text-foreground">We use your information to:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Provide and improve our AI-powered idea validation services</li>
                <li>Analyze and generate insight reports on submitted ideas</li>
                <li>Offer market trends, competitor signals, and validation scoring</li>
                <li>Communicate service updates and product improvements</li>
                <li>Offer customer support and respond to user queries</li>
                <li>Prevent abuse, misuse, or unauthorized use of the platform</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-6">3. Information Sharing and Disclosure</h2>
            <div className="mb-8">
              <p className="mb-4"><strong className="text-foreground">We do not sell or rent your personal data. We only share your information in the following situations:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>When you authorize integrations with third-party platforms (e.g., Reddit, Google Trends)</li>
                <li>With trusted service providers that support our infrastructure (e.g., hosting, analytics)</li>
                <li>When legally required by government or regulatory authorities</li>
                <li>During a merger, acquisition, or business transfer, with prior notice to users</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">4. Data Security</h2>
            <div className="mb-8">
              <p className="mb-4"><strong className="text-foreground">We protect your data using:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Encryption (in transit and at rest)</li>
                <li>Routine system audits and vulnerability checks</li>
                <li>Access control systems to restrict internal data visibility</li>
                <li>Secure login flows and authentication systems</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">5. Your Rights and Choices</h2>
            <div className="mb-8">
              <p className="mb-4"><strong className="text-foreground">You have the right to:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>View and export your personal data</li>
                <li>Correct or update any information tied to your account</li>
                <li>Delete your account and associated idea validation data</li>
                <li>Disconnect any third-party tools</li>
                <li>Opt out of marketing or non-essential communication</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">6. Data Retention</h2>
            <div className="mb-8">
              <p><strong className="text-foreground">We keep your data as long as your account is active.</strong> If you delete your account, idea validation data will be retained for 30 days in case of accidental deletion. Aggregated analytics data may be kept indefinitely in anonymized form for platform performance insights.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">7. International Data Transfers</h2>
            <div className="mb-8">
              <p><strong className="text-foreground">iValidate may process your information on servers outside your country.</strong> We follow global compliance standards and implement safeguards to keep your data safe during transfers.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">8. Changes to This Privacy Policy</h2>
            <div className="mb-8">
              <p><strong className="text-foreground">We may occasionally update this policy.</strong> You'll be notified via email or in-app alerts if major changes occur. Continued use of iValidate means you accept the revised terms.</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-6">9. Contact Us</h2>
            <div className="mb-8">
              <p className="text-foreground">For questions or concerns about our privacy practices, reach out to us at: <a href="mailto:support@ivalidate.xyz" className="text-primary hover:underline font-medium">support@ivalidate.xyz</a></p>
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

export default PrivacyPolicy;