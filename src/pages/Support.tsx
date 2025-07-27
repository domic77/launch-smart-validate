import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Server, HelpCircle, BookOpen } from 'lucide-react';

const supportInfo = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Reach out via email and we'll get back to you within 24 hours.",
    link: "mailto:support@ivalidate.xyz",
    linkText: "support@ivalidate.xyz",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Talk to a real person from our team and get instant answers.",
    link: "/maintenance",
    linkText: "Start Chat",
  },
  {
    icon: Server,
    title: "Status Page",
    description: "Check if all systems are running smoothly.",
    link: "/maintenance",
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
    <div className="flex flex-col min-h-screen py-12 px-4 pt-32" style={{ backgroundColor: '#fafafa' }}>
      <main className="flex-grow container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
            Support <span className="text-gradient-blue-teal">Center</span>
          </h1>
          <p className="text-foreground text-xl max-md:text-lg max-sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto font-medium">
            Get clarity fast: explore common questions and make the most of your validation journey with iValidate.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportInfo.map((item, index) => (
            <Card key={index} className="rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="p-8 text-center flex flex-col items-center">
                <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground mb-6 flex-grow leading-relaxed">{item.description}</p>
                <a href={item.link} className="text-primary font-medium hover:underline text-lg">
                  {item.linkText}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map(category => (
            <Button 
              key={category} 
              className={`rounded-[16px] border-[1.5px] border-blue-500/30 px-6 py-3 font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-primary text-white hover:bg-white hover:text-primary' 
                  : 'bg-white text-primary hover:bg-primary hover:text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Help Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary bg-blue-50 px-2 py-1 rounded-[8px]">{article.tag}</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-4 leading-tight">{article.title}</h4>
                <Link to={article.href} className="text-primary font-medium hover:underline flex items-center gap-1">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Closing CTA */}
        <Card className="rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm mb-8" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="p-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Still Need Help?</h2>
            <p className="text-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              We're here if you need us. Drop a message and we'll help you figure things out fast.
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              <Button className="rounded-[16px] border-[1.5px] border-blue-500/30 bg-primary text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 font-medium">
                <Link to="/contact-us">Contact Support</Link>
              </Button>
              <Button className="rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 font-medium">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Card CTA */}
        <Card className="rounded-[16px] border-[1.5px] border-blue-500/30 hover:bg-gray-50 transition-colors shadow-sm" style={{ backgroundColor: '#ffffff' }}>
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </div>
            <p className="max-w-xl mx-auto text-foreground mb-6 leading-relaxed">
              Not ready to reach out? Try our free AI tools to get a taste of how easy idea validation can be with iValidate.
            </p>
            <Button className="rounded-[16px] border-[1.5px] border-blue-500/30 bg-white text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3 font-medium">
              <Link to="/free-ai-tool">Try Free Tools</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Support;