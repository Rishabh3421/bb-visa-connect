import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, GraduationCap, FileText, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { countries } from "@/data/countries";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const CountryDetail = () => {
  const { countryId } = useParams();
  const country = countries.find(c => c.id === countryId);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in immigration to ${country.name}. Can you provide more information about the visa process and requirements?`;
    window.open(`https://wa.me/918396000445?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${country.image})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link to="/" className="inline-flex items-center mb-4 text-white/80 hover:text-white transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Countries
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{country.flag}</span>
              <h1 className="text-5xl md:text-6xl font-bold">{country.name}</h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              {country.overview}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Visa Types */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Available Visa Types
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {country.visaTypes.map((visa, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="font-medium">{visa}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tourist Places */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Famous Tourist Places
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {country.touristPlaces.map((place, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-lg text-primary">{place.name}</h4>
                      <p className="text-muted-foreground">{place.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Universities */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Top Universities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {country.universities.map((uni, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="font-semibold text-lg">{uni.name}</h4>
                        <Badge variant="secondary">{uni.ranking}</Badge>
                      </div>
                      <p className="text-muted-foreground">
                        <strong>Specializations:</strong> {uni.specialization}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-primary" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {country.documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process Timeline */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Clock className="h-6 w-6 text-primary" />
                  Process Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {country.processTimeline.map((step, index) => (
                    <div key={index} className="relative">
                      {index !== country.processTimeline.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-16 bg-border"></div>
                      )}
                      <div className="flex gap-6">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{step.step}</h4>
                            <Badge variant="outline">{step.duration}</Badge>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose This Country */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose {country.name}?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {country.whyChoose.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="gradient-gold text-white shadow-gold">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">
                  Ready to Start Your Journey?
                </h3>
                <p className="mb-6 text-white/90">
                  Get personalized guidance for your {country.name} immigration process.
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full font-semibold"
                  onClick={handleWhatsAppClick}
                >
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <strong className="text-primary">Flag:</strong>
                    <span className="ml-2 text-2xl">{country.flag}</span>
                  </div>
                  <div>
                    <strong className="text-primary">Visa Categories:</strong>
                    <span className="ml-2">{country.visaTypes.length}</span>
                  </div>
                  <div>
                    <strong className="text-primary">Top Universities:</strong>
                    <span className="ml-2">{country.universities.length}</span>
                  </div>
                  <div>
                    <strong className="text-primary">Process Steps:</strong>
                    <span className="ml-2">{country.processTimeline.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default CountryDetail;