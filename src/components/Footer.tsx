import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center md:text-left">
          {/* Column 1: iValidate */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold text-gradient-blue-teal font-prompt mb-2">iValidate</h3>
            <p className="text-foreground mb-6 text-center md:text-left leading-relaxed">
              Your startup's first stop for smart idea validation
            </p>
            <div className="flex space-x-4">
              <div className="p-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
                <a href="/maintenance" aria-label="Facebook"><Facebook className="h-5 w-5 text-foreground hover:text-primary transition-colors" /></a>
              </div>
              <div className="p-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
                <a href="/maintenance" aria-label="Instagram"><Instagram className="h-5 w-5 text-foreground hover:text-primary transition-colors" /></a>
              </div>
              <div className="p-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
                <a href="https://twitter.com/AskiValidate" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="h-5 w-5 text-foreground hover:text-primary transition-colors" /></a>
              </div>
              <div className="p-2 rounded-[12px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
                <Link to="/maintenance" aria-label="LinkedIn"><Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" /></Link>
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Link Columns */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 md:mt-0">
            {/* Product Column */}
            <div className="p-6 rounded-[16px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
              <h4 className="text-lg font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How it works</a></li>
                <li><Link to="/#features" className="text-foreground hover:text-primary transition-colors">Features</Link></li>
                <li><a href="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="p-6 rounded-[16px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
              <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="/free-ai-tool" className="text-foreground hover:text-primary transition-colors">Free AI Tool</a></li>
                <li><a href="/blogs" className="text-foreground hover:text-primary transition-colors">Blogs</a></li>
                <li><a href="/support" className="text-foreground hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Info Column */}
            <div className="p-6 rounded-[16px] border-[1.5px] border-blue-500/30 bg-white hover:bg-gray-50 transition-colors">
              <h4 className="text-lg font-semibold text-foreground mb-4">Info</h4>
              <ul className="space-y-3">
                <li><a href="/contact-us" className="text-foreground hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="/terms" className="text-foreground hover:text-primary transition-colors">Terms</a></li>
                <li><a href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-blue-500/30 mt-12 pt-8 text-center">
          <p className="text-foreground text-sm leading-relaxed">
            © 2025 iValidate all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};