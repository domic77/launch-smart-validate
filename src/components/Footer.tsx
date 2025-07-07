import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const footerLinks = {
    product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Use Cases", href: "#use-cases" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" }
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Status", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Stay Updated with Validation Insights
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Get weekly market insights, validation tips, and startup success stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground text-foreground border-0 flex-1"
              />
              <Button 
                variant="secondary" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient mr-8">iValidate</h2>
            <p className="text-muted-foreground">
              © 2024 iValidate. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};