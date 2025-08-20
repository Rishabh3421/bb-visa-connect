import { GraduationCap, Briefcase, Plane, Home, Building, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: "student-visas",
      icon: GraduationCap,
      title: "Student Visas",
      description: "Complete guidance for study abroad programs, university applications, and student visa processing.",
      features: ["University Selection", "Application Support", "Visa Documentation", "Scholarship Guidance"],
      color: "bg-blue-500"
    },
    {
      id: "work-visas",
      icon: Briefcase,
      title: "Work Visas",
      description: "Professional work visa assistance for skilled workers seeking employment opportunities abroad.",
      features: ["Skills Assessment", "Job Search Support", "Work Permit Processing", "Employer Liaison"],
      color: "bg-green-500"
    },
    {
      id: "tourist-visitor-visas",
      icon: Plane,
      title: "Tourist/Visitor Visas",
      description: "Hassle-free tourist and visitor visa services for leisure travel and business visits.",
      features: ["Document Preparation", "Interview Preparation", "Travel Itinerary", "Visa Tracking"],
      color: "bg-purple-500"
    },
    {
      id: "pr-immigration",
      icon: Home,
      title: "PR & Immigration",
      description: "Permanent residency and immigration services for long-term settlement abroad.",
      features: ["Eligibility Assessment", "Points Calculation", "PR Application", "Settlement Support"],
      color: "bg-orange-500"
    },
    {
      id: "business-investor-visas",
      icon: Building,
      title: "Business/Investor Visas",
      description: "Investment and business visa solutions for entrepreneurs and investors.",
      features: ["Investment Planning", "Business Plan Review", "Visa Application", "Business Setup"],
      color: "bg-red-500"
    },
    {
      id: "family-dependent-visas",
      icon: Heart,
      title: "Family/Dependent Visas",
      description: "Family reunification and dependent visa services to keep families together.",
      features: ["Family Assessment", "Relationship Documentation", "Sponsorship Support", "Interview Prep"],
      color: "bg-pink-500"
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Hello! I'm interested in ${service}. Can you provide more information about the process and requirements?`;
    window.open(`https://wa.me/918396000445?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive immigration and visa services tailored to your needs. From student visas to permanent residency, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Link key={index} to={`/service/${service.id}`} className="block">
              <Card className="gradient-card shadow-card hover:shadow-floating transition-smooth group border-gradient h-full">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-soft`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Service Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full gradient-primary text-white font-medium transition-smooth hover:shadow-soft"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="gradient-gold text-white shadow-gold max-w-3xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Our expert consultants will analyze your profile and recommend the best immigration pathway for your goals and circumstances.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="gradient-card text-primary font-semibold px-8 py-4 text-lg transition-smooth hover:shadow-soft"
                onClick={() => handleWhatsAppClick("Free Consultation")}
              >
                Get Free Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;