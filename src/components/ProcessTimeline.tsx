import { MessageCircle, FileText, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Initial assessment of your profile, goals, and eligibility. Our experts will guide you on the best immigration pathway.",
      duration: "30-45 minutes",
      color: "bg-blue-500"
    },
    {
      icon: FileText,
      title: "Documentation & Preparation",
      description: "Comprehensive document collection, verification, and preparation. We ensure all paperwork meets requirements.",
      duration: "2-4 weeks",
      color: "bg-purple-500"
    },
    {
      icon: Send,
      title: "Application Submission",
      description: "Professional application submission with thorough review. We handle all communications with authorities.",
      duration: "1-2 weeks",
      color: "bg-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Approval & Next Steps",
      description: "Receive your visa approval and get guidance on travel, settlement, and post-arrival support services.",
      duration: "Variable",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined, transparent process designed to make your immigration journey smooth and stress-free. 
            We guide you through every step with expertise and care.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-success hidden lg:block"></div>

            {/* Timeline Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className="flex-1">
                    <Card className="gradient-card shadow-card hover:shadow-floating transition-smooth">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          {/* Mobile Icon */}
                          <div className={`lg:hidden w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-soft`}>
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                Step {index + 1}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {step.duration}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Desktop Timeline Icon */}
                  <div className="hidden lg:flex flex-shrink-0 relative">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-floating z-10`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="gradient-primary p-8 rounded-2xl shadow-floating max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Start with a free consultation today and take the first step towards your immigration goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-smooth"
                onClick={() => window.open("https://wa.me/918396000445?text=Hello! I would like to book a free consultation for immigration services.", "_blank")}
              >
                Book Free Consultation
              </button>
              <button 
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;