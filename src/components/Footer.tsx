import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Countries", href: "#countries" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Student Visas",
    "Work Visas", 
    "Tourist Visas",
    "PR & Immigration",
    "Business Visas",
    "Family Visas"
  ];

  const countries = [
    "Canada",
    "Australia", 
    "New Zealand",
    "USA",
    "UK",
    "Europe",
    "Japan",
    "Singapore"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/cd7ba41c-442d-4599-be51-e3aa912e8fee.png" 
                alt="BB Immigration" 
                className="h-16 w-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-3">BB Immigration</h3>
              <p className="text-white/80 leading-relaxed">
                Your trusted partner for visa and immigration services. 
                With 5+ years of expertise and 1000+ successful cases, 
                we help make your immigration dreams come true.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">SF03 2nd Floor, Happy Homes Emporium Society, Panipat</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">+91 8396000445 / 9991740121</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/80">bbimmigration56@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Countries We Serve</h4>
            <ul className="space-y-3">
              {countries.map((country, index) => (
                <li key={index}>
                  <Link 
                    to={`/country/${country.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-white/80 hover:text-accent transition-smooth text-sm"
                  >
                    {country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} BB Immigration. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Professional Immigration Consultancy Services
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/80">Follow Us:</span>
              <a 
                href="https://www.instagram.com/bbimmigration56"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* WhatsApp CTA */}
            <button 
              className="gradient-gold px-6 py-2 rounded-lg font-medium text-sm hover:shadow-gold transition-smooth"
              onClick={() => window.open("https://wa.me/918396000445?text=Hello! I'm interested in immigration services.", "_blank")}
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;