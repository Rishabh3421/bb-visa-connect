import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import happyClientsImage from "@/assets/happy-clients.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      country: "Canada",
      visa: "Express Entry PR",
      rating: 5,
      text: "Bridge for Borders Immigration made my Canadian PR dream come true! Their expert guidance throughout the Express Entry process was invaluable. Highly recommended!",
      image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Rajesh Kumar",
      country: "Australia", 
      visa: "Skilled Independent Visa",
      rating: 5,
      text: "Excellent service from start to finish. The team was professional, knowledgeable, and always available to answer my questions. Got my Australian visa in record time!",
      image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Meera Patel",
      country: "USA",
      visa: "H-1B Work Visa",
      rating: 5,
      text: "The documentation process was smooth and hassle-free. Bridge for Borders Immigration's expertise in US work visas is unmatched. Thank you for turning my dreams into reality!",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Amit Singh",
      country: "UK",
      visa: "Student Visa",
      rating: 4,
      text: "Applied for UK student visa through Bridge for Borders Immigration. The team helped me with university selection, visa documentation, and interview preparation. Fantastic service!",
      image: "https://plus.unsplash.com/premium_photo-1722889137160-c1ca17ae0084?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Neha Gupta",
      country: "New Zealand",
      visa: "Skilled Migrant Category",
      rating: 5,
      text: "Professional and reliable service. The team at Bridge for Borders Immigration guided me through the entire New Zealand immigration process with transparency and efficiency.",
      image: "https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Rohit Verma",
      country: "Singapore",
      visa: "Employment Pass",
      rating: 4,
      text: "Outstanding support for Singapore Employment Pass. The team's knowledge of Singapore immigration laws and their personalized approach made all the difference.",
      image: "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Clients" },
    { number: "95%", label: "Success Rate" },
    { number: "8", label: "Countries" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their immigration journey with Bridge for Borders Immigration.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-floating transition-smooth">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.visa} • {testimonial.country}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Story CTA */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${happyClientsImage})` }}
          >
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          
          <div className="relative z-10 p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have turned their dreams into reality with Bridge for Borders Immigration. 
              Your success story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="gradient-gold text-white font-semibold px-8 py-4 rounded-lg hover:shadow-gold transition-smooth"
                onClick={() => window.open("https://wa.me/918396000445?text=Hello! I want to start my immigration journey with Bridge for Borders Immigration.", "_blank")}
              >
                Start Your Journey
              </button>
              <button 
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;