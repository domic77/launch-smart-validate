import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const mailtoLink = `mailto:support@ivalidate.xyz?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <main className="flex-grow container mx-auto">
        <Card className="max-w-2xl mx-auto rounded-[24px] border bg-card p-6 sm:p-8">
          <CardContent className="pt-0">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
              <p className="text-muted-foreground">Reach out to the iValidate team we're here to help you turn ideas into validated solutions</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6 text-center mb-8">
              <h2 className="text-xl font-bold">Email Support</h2>
              <a href="mailto:support@ivalidate.xyz" className="text-primary hover:underline">support@ivalidate.xyz</a>
              <p className="text-sm text-muted-foreground mt-2">We typically respond within 24 hours</p>
            </div>

            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-[16px] h-12"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[16px] h-12"
              />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-[16px] min-h-[120px]"
              />
            </div>

            <div className="mt-8 flex flex-col items-center">
              <Button onClick={handleSend} className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 rounded-[16px] flex items-center gap-2">
                Send Message
                <Send size={18} />
              </Button>
              <p className="text-xs text-muted-foreground mt-4">Clicking Send Message will open your default email client.</p>
            </div>

            <div className="text-center mt-12">
              <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ContactUs;