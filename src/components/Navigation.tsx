import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import iValidateLogo from '@/assets/ivalidate-logos/iValidate-logo.png';

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
    { label: "How It Works", href: "/#how-it-works", type: "anchor" },
    { label: "Why?", href: "/#why", type: "anchor" },
    { label: "Use Cases", href: "/#use-cases", type: "anchor" },
    { label: "Features", href: "/#features", type: "anchor" },
    { label: "Pricing", href: "/pricing", type: "route" },
  ];
  

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full py-4">
        <div className="w-[95%] max-w-[1200px] mx-auto">
          {/* Single navbar that changes appearance on scroll */}
          <nav className={`w-full px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ease-in-out ${
            isScrolled ? 'rounded-[16px] border-[1.5px] border-blue-500/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : ''
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img src={iValidateLogo} alt="iValidate Logo" className="h-10 w-10" />
                  <h1 className="text-2xl font-bold text-gradient-blue-teal font-prompt">iValidate</h1>
                </Link>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex flex-1 justify-center">
                <div className="flex items-center space-x-2 md:space-x-4 lg:space-x-8">
                  {navigationItems.map((item) => (
                    item.type === "route" ? (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="text-foreground hover:text-primary px-2 md:px-3 lg:px-4 py-2 text-sm whitespace-nowrap font-medium font-prompt transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-foreground hover:text-primary px-2 md:px-3 lg:px-4 py-2 text-sm whitespace-nowrap font-medium font-prompt transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )
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
                  <Button 
                    className="h-10 px-4 text-foreground font-medium font-prompt flex items-center gap-1 bg-white border-[1.5px] border-blue-500/30"
                  >
                    <Link to="/maintenance">Validate Now</Link>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isCtaHovered ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {/* Dropdown menu */}
                  <div 
                    className={`absolute right-0 mt-2 min-w-full overflow-hidden transition-all duration-300 origin-top-right bg-background/95 backdrop-blur-sm ${
                      isCtaHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <Button 
                      className="w-full justify-center font-medium h-10 px-4 bg-white rounded-[16px] hover:bg-gray-100 border-[1.5px] border-blue-500/30 text-black"
                    >
                      <Link to="/maintenance">Sign In</Link>
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
                    item.type === "route" ? (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-smooth rounded-[16px] hover:bg-accent/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary transition-smooth rounded-[16px] hover:bg-accent/50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  ))}
                  <div className="pt-4 space-y-3 pb-2">
                    <Button
                      variant="outline"
                      className="w-full text-foreground font-semibold py-2 bg-white border-[1.5px] border-blue-500/30 rounded-[16px] text-black"
                    >
                      <Link to="/maintenance">Sign In</Link>
                    </Button>
                    <Button
                      className="w-full text-foreground font-semibold py-2"
                      variant="ghost"
                    >
                      <Link to="/maintenance">Start for Free</Link>
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