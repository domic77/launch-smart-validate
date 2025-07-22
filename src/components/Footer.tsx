import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center md:text-left">
          {/* Column 1: iValidate */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold text-gradient-blue-teal font-prompt mb-2">iValidate</h3>
            <p className="text-foreground mb-6 text-center md:text-left">
              Your startup’s first stop for smart idea validation
            </p>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-foreground hover:text-primary transition-colors" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-foreground hover:text-primary transition-colors" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-foreground hover:text-primary transition-colors" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-foreground hover:text-primary transition-colors" /></a>
            </div>
          </div>

          {/* Column 2 & 3: Link Columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 md:mt-0">
            {/* Product Column */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How it works</a></li>
                <li><a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Free AI Tool</a></li>
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Info</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-foreground text-sm">
            © 2025 iValidate all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};