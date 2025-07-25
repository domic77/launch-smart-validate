import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Server } from 'lucide-react';

const supportInfo = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach out via email and we’ll get back to you within 24 hours.",
    link: "mailto:support@ivalidate.xyz",
    linkText: "support@ivalidate.xyz",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Talk to a real person from our team and get instant answers.",
    link: "#",
    linkText: "Start Chat",
  },
  {
    icon: Server,
    title: "Status Page",
    description: "Check if all systems are running smoothly.",
    link: "#",
    linkText: "View Status",
  },
];

const articles = [
  { tag: "Setup", title: "Getting Started with iValidate", href: "/support/getting-started" },
  { tag: "Setup", title: "How to Connect Your Workspace", href: "/support/connect-workspace" },
  { tag: "Validation", title: "Using AI-Powered Validation", href: "/support/ai-powered-validation" },
  { tag: "Validation", title: "Exploring Validation Reports", href: "/support/validation-reports" },
  { tag: "Usage", title: "Managing Projects and Workflows", href: "/support/managing-workflows" },
  { tag: "Insights", title: "Understanding Your Validation Score", href: "/support/validation-score" },
  { tag: "Troubleshooting", title: "Fixing Common Errors and Issues", href: "/support/common-errors" },
  { tag: "Billing", title: "Billing and Subscription Management", href: "/support/billing" },
];

const categories = ["All", ...new Set(articles.map(a => a.tag))];

const Support: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.tag === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-background py-12 px-4 pt-28">
      <main className="flex-grow container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Support Center</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">Get clarity fast: explore common questions and make the most of your validation journey with iValidate.</p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportInfo.map((item, index) => (
            <Card key={index} className="bg-card border-border border-[1.5px] rounded-[24px] p-6 text-center flex flex-col items-center">
              <item.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
              <a href={item.link} className="text-primary font-medium hover:underline">
                {item.linkText}
              </a>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button 
              key={category} 
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Help Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="bg-card border-border border-[1.5px] rounded-[24px] p-6">
              <span className="text-sm font-medium text-primary">{article.tag}</span>
              <h4 className="text-lg font-semibold my-2">{article.title}</h4>
              <Link to={article.href} className="text-sm font-medium text-primary hover:underline">Read More →</Link>
            </Card>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="text-center bg-card border-border border-[1.5px] rounded-[24px] p-10 mb-8">
          <h2 className="text-3xl font-bold mb-2">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">We’re here if you need us. Drop a message and we’ll help you figure things out fast.</p>
          <div className="flex justify-center items-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact-us">Contact Support</Link>
            </Button>
            <Button asChild variant="link" className="text-primary">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Card CTA */}
        <Card className="bg-primary/5 border-primary/20 border-[1.5px] rounded-[24px] p-8 text-center">
          <p className="max-w-xl mx-auto text-foreground mb-6">Not ready to reach out? Try our free AI tools to get a taste of how easy idea validation can be with iValidate.</p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="#">Try Free Tools</Link>
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default Support;