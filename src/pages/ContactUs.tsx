import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg text-center mb-8">
            We're here to help! Whether you have a question about our services, need support, or just want to say hello, feel free to reach out.
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center text-lg">
              <Mail className="mr-3 text-blue-600" size={24} />
              <span>Email: <a href="mailto:info@ivalidate.com" className="text-blue-600 hover:underline">info@ivalidate.com</a></span>
            </div>
            <div className="flex items-center justify-center text-lg">
              <Phone className="mr-3 text-blue-600" size={24} />
              <span>Phone: <a href="tel:+1-800-555-0199" className="text-blue-600 hover:underline">+1 (800) 555-0199</a></span>
            </div>
            <div className="flex items-center justify-center text-lg text-center">
              <MapPin className="mr-3 text-blue-600" size={24} />
              <span>Address: 123 Validation Way, Suite 400, Innovate City, CA 90210</span>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-700">
            <p className="text-xl font-semibold mb-4">Send us a message directly:</p>
            <p className="text-md">
              For detailed inquiries or support requests, please use our dedicated <a href="/support" className="text-blue-600 hover:underline">Support Page</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
