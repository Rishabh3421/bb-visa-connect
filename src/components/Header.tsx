import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Countries", href: "#countries" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.hash === href;
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918396000445?text=Hello! I'm interested in immigration services.", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>8396000445 / 9991740121</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Panipat, Haryana</span>
            </div>
          </div>
          <Button 
            size="sm" 
            className="gradient-gold text-white font-medium transition-smooth hover:shadow-gold"
            onClick={handleWhatsAppClick}
          >
            Book Free Consultation
          </Button>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/cd7ba41c-442d-4599-be51-e3aa912e8fee.png" 
              alt="Bridge for Borders Immigration" 
              className="h-12 w-auto transition-smooth hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Bridge for Borders</h1>
              <p className="text-sm text-muted-foreground">Turn your dreams into reality</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-smooth hover:text-primary",
                  isActive(item.href) 
                    ? "text-primary font-semibold" 
                    : "text-foreground"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="font-medium border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              onClick={handleWhatsAppClick}
            >
              Get Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-smooth hover:text-primary px-2 py-1 rounded",
                    isActive(item.href) 
                      ? "text-primary font-semibold bg-primary/10" 
                      : "text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="mt-4 gradient-primary text-white font-medium"
                onClick={handleWhatsAppClick}
              >
                Book Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;