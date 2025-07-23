import React from 'react';
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg prose prose-lg">
          <p><strong>Last Updated:</strong> July 22, 2025</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the iValidate platform and services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions of this agreement, you may not access the Service.</p>

          <h2>2. Description of Service</h2>
          <p>iValidate provides a suite of data validation tools and services designed to ensure the accuracy, consistency, and reliability of your data. Our services include, but are not limited to, real-time validation, batch processing, and custom validation rules.</p>

          <h2>3. User Accounts</h2>
          <p>To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>

          <h2>4. User Responsibilities</h2>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You are solely responsible for your data and your use of the Service.</p>

          <h2>5. Intellectual Property</h2>
          <p>All content, trademarks, service marks, trade names, logos, and intellectual property displayed on the Service are the property of iValidate or its licensors. You may not use any of these without prior written consent.</p>

          <h2>6. Disclaimers</h2>
          <p>The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. iValidate does not warrant that the Service will be uninterrupted, error-free, or secure.</p>

          <h2>7. Limitation of Liability</h2>
          <p>In no event shall iValidate be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>

          <h2>9. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>

          <h2>10. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@ivalidate.com" className="text-blue-600 hover:underline">info@ivalidate.com</a>.</p>
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
