import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ButtonWithMovingBorder } from "@/components/ui/moving-border";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsCtaHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCtaHovered(false);
    }, 200); // Add delay to prevent menu from closing too quickly
  };

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
            isScrolled ? 'rounded-[16px] border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''
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

              {/* Desktop Actions - Dropdown CTA */}
              <div className="hidden lg:block relative">
                <div 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ButtonWithMovingBorder 
                    borderRadius="1rem" 
                    className="h-10 px-4 text-foreground font-medium font-prompt flex items-center gap-1"
                    borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
                  >
                    Start for Free
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isCtaHovered ? 'rotate-180' : ''}`} />
                  </ButtonWithMovingBorder>
                  
                  {/* Dropdown menu */}
                  <div 
                    className={`absolute right-0 mt-2 min-w-full overflow-hidden transition-all duration-300 origin-top-right bg-background/95 backdrop-blur-sm border rounded-[16px] ${
                      isCtaHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start font-medium px-4 py-3 rounded-none hover:bg-accent/30"
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
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
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-glass border-t border-border/20 mt-2 rounded-[16px]">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-smooth rounded-[16px] hover:bg-accent/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 space-y-3 pb-2">
                    <Button variant="ghost" className="w-full justify-start font-medium">
                      Sign In
                    </Button>
                    <ButtonWithMovingBorder
                      className="w-full text-foreground font-semibold py-2"
                      borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
                    >
                      Start for Free
                    </ButtonWithMovingBorder>
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