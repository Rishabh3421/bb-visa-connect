import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { countries } from "@/data/countries";
import { Link } from "react-router-dom";

const CountryCards = () => {
  return (
    <section id="countries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Countries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore immigration opportunities in these top destinations. Click on any country to learn more about visa requirements, processes, and opportunities.
          </p>
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {countries.map((country) => (
            <Link key={country.id} to={`/country/${country.id}`} className="block h-full">
              <Card className="group gradient-card shadow-card hover:shadow-floating transition-smooth border-gradient cursor-pointer overflow-hidden h-full flex flex-col">
                <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="text-3xl sm:text-4xl">{country.flag}</span>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                      {country.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base flex-1">
                      {country.description}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full gradient-primary text-white font-medium group-hover:shadow-soft transition-smooth mt-auto text-sm sm:text-base py-2 sm:py-3"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="gradient-card p-8 rounded-2xl shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Not Sure Which Country is Right for You?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our expert consultants will help you choose the best destination based on your profile, career goals, and preferences.
            </p>
            <Button 
              size="lg"
              className="gradient-gold text-white font-semibold px-8 py-3 transition-smooth hover:shadow-gold"
              onClick={() => window.open("https://wa.me/918396000445?text=Hello! I need help choosing the right country for immigration.", "_blank")}
            >
              Get Free Country Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryCards;