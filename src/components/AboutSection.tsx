import { Award, Users, Globe, Shield, Clock, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import officeImage from "@/assets/office-professional.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Visa Approvals",
      color: "text-primary"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      color: "text-accent"
    },
    {
      icon: Globe,
      number: "8",
      label: "Countries",
      color: "text-success"
    },
    {
      icon: ThumbsUp,
      number: "95%",
      label: "Success Rate",
      color: "text-primary"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Legal Compliance",
      description: "All processes follow official government guidelines and legal requirements"
    },
    {
      icon: Clock,
      title: "24x7 Support",
      description: "Round-the-clock assistance throughout your immigration journey"
    },
    {
      icon: Award,
      title: "Expert Counselors",
      description: "Certified immigration experts with years of experience"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored solutions based on your unique profile and goals"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-gold">Bridge for Borders Immigration</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 5 years of expertise in immigration consultancy, Bridge for Borders Immigration has helped thousands of individuals and families turn their dreams into reality by studying, working, and settling abroad.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <Card key={index} className="gradient-card shadow-soft hover:shadow-card transition-smooth">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                    <div className="text-2xl font-bold mb-1">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={officeImage} 
                alt="Bridge for Borders Immigration Office - Professional immigration consultancy"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-gold">
              <Award className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-floating">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="gradient-card shadow-card max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide transparent, reliable, and efficient immigration services that transform dreams into reality. 
                We are committed to guiding our clients through every step of their immigration journey with 
                integrity, expertise, and personalized care.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;