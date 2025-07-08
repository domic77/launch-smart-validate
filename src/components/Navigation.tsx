import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why?", href: "#why" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full py-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          {/* Single navbar that changes appearance on scroll */}
          <nav className={`w-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ease-in-out ${
            isScrolled ? 'rounded-[24px] border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gradient-blue-teal font-prompt">iValidate</h1>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex flex-1 justify-center">
                <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-foreground hover:text-primary px-2 md:px-3 lg:px-4 py-2 text-sm whitespace-nowrap font-medium font-prompt transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center space-x-3 md:space-x-6">
                <Button variant="ghost" className="text-foreground hover:text-primary font-medium font-prompt">
                  Sign In
                </Button>
                <Button className="bg-gradient-blue-teal text-primary-foreground btn-micro shadow-card hover:shadow-card-hover font-semibold px-4 md:px-6 py-2 rounded-[24px] font-prompt">
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-controls="primary-mobile-menu"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-glass border-t border-border/20 mt-2 rounded-[24px]">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-smooth rounded-[24px] hover:bg-accent/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3 pb-2">
                    <Button variant="ghost" className="w-full justify-start font-medium">
                      Sign In
                    </Button>
                    <Button className="w-full bg-gradient-blue-teal text-primary-foreground font-semibold rounded-[24px]">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};