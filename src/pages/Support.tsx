import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Support: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Support Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Support</h2>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted! (Frontend only - no backend integration)");
              alert("Your message has been sent! (This is a frontend-only demonstration)");
            }}>
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Issue with my account" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Describe your issue in detail..." rows={6} />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Helpful Resources</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Frequently Asked Questions (FAQ)</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Getting Started Guide</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Troubleshooting Tips</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">API Documentation</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Community Forum</a>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-md">
                <li><a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
