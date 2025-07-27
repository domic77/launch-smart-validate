import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, MessageCircle, Clock } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const mailtoLink = `mailto:support@ivalidate.xyz?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen py-12 px-4 pt-32" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient-blue-teal">Us</span>
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Reach out to the iValidate team — we're here to help you turn ideas into validated solutions.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="pt-10 pb-10 px-8">
            
            {/* Email Support Section */}
            <div className="rounded-[12px] border-[1.5px] border-blue-500/30 bg-white p-6 text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">Email Support</h2>
              <a href="mailto:support@ivalidate.xyz" className="text-primary hover:underline font-medium text-lg">
                support@ivalidate.xyz
              </a>
              <div className="flex items-center justify-center gap-2 mt-3 text-sm text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>We typically respond within 24 hours</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
              </div>

              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-[12px] border-[1.5px] border-blue-500/30 h-12 bg-white focus:bg-gray-50 transition-colors"
              />
              
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[12px] border-[1.5px] border-blue-500/30 h-12 bg-white focus:bg-gray-50 transition-colors"
              />
              
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-[12px] border-[1.5px] border-blue-500/30 min-h-[120px] bg-white focus:bg-gray-50 transition-colors resize-none"
              />
            </div>

            {/* Send Button */}
            <div className="mt-8 flex flex-col items-center">
              <Button 
                onClick={handleSend} 
                className="bg-primary text-white hover:bg-white hover:text-primary border-[1.5px] border-blue-500/30 transition-colors h-12 px-8 rounded-[16px] flex items-center gap-3 font-medium"
              >
                Send Message
                <Send className="h-5 w-5" />
              </Button>
              <p className="text-sm text-foreground mt-4 text-center max-w-xs">
                Clicking Send Message will open your default email client.
              </p>
            </div>

            {/* Back to Home */}
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

export default ContactUs;