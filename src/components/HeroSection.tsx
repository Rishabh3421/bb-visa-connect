import { ArrowRight, Globe, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryForm from "./EnquiryForm";
import heroImage from "@/assets/hero-bg.avif";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918396000445?text=Hello! I'm interested in immigration services.", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badges */}
            <div className="flex justify-center lg:justify-start items-center gap-6 mb-8 text-white/90">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">5+ Years Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">1000+ Visa Approvals</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">8 Countries</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Bridge for Borders Immigration
              <span className="block text-gradient-gold mt-2 animate-slide-up">
                Turn Your Dreams Into Reality
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: '0.3s'}}>
              Expert guidance for study, work, and settlement abroad with 100% legal compliance and personalized support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-scale-in" style={{animationDelay: '0.6s'}}>
              <Button 
                size="lg"
                className="gradient-gold text-white font-semibold px-8 py-4 text-lg transition-smooth hover:shadow-gold hover-lift shine-effect"
                onClick={() => scrollToSection("contact")}
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg transition-smooth hover-scale"
                onClick={handleWhatsAppClick}
              >
                Free Consultation
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-accent mb-1 animate-glow">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-accent mb-1 animate-glow">24x7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
              <div className="text-center hover-scale">
                <div className="text-3xl font-bold text-accent mb-1 animate-glow">1000+</div>
                <div className="text-sm text-white/80">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="lg:max-w-lg mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            <EnquiryForm />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;