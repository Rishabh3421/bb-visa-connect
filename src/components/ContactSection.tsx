import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EnquiryForm from "./EnquiryForm";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["SF03 2nd Floor, Happy Homes Emporium Society", "Panipat, Haryana, India"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8396000445", "+91 9991740121"],
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["bbimmigration56@gmail.com"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      color: "text-purple-500"
    }
  ];

  const documents = [
    "Aadhaar Card",
    "PAN Card", 
    "Qualification Certificates",
    "ITR (Income Tax Returns)",
    "Digital Passport Photos",
    "Bank Statements/Details",
    "Business Proof Documents",
    "Experience Certificates"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your immigration journey? Get in touch with us today for a free consultation 
            and personalized guidance on your visa and immigration needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="gradient-card shadow-card hover:shadow-floating transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${info.color} bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`h-6 w-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.0123456789!2d76.968!3d29.390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIzJzI0LjAiTiA3NsKwNTgnMDQuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bridge for Borders Immigration Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Documents Required */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Documents Typically Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Document requirements may vary based on visa type and destination country
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.instagram.com/bbimmigration56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-smooth"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">@bbimmigration56</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Enquiry Form */}
          <div>
            <EnquiryForm />
            
            {/* WhatsApp Quick Contact */}
            <Card className="gradient-primary text-white shadow-floating mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-white/90 mb-6">
                  Connect with us instantly on WhatsApp for quick queries and immediate support.
                </p>
                <button 
                  className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition-smooth w-full"
                  onClick={() => window.open("https://wa.me/918396000445?text=Hello! I need immediate assistance with immigration services.", "_blank")}
                >
                  Chat on WhatsApp
                </button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/50 p-6 rounded-lg text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Legal Disclaimer:</strong> Bridge for Borders Immigration is an independent immigration consultancy firm. 
                We are not affiliated with any government agency or embassy. All visa processing times and outcomes 
                are subject to the respective government authorities' discretion.
              </p>
              <p>
                <strong>Privacy Policy:</strong> Your personal information is secure with us and will only be used 
                for immigration consultation purposes. | <strong>Refund Policy:</strong> Refund terms apply as per 
                our service agreement and are subject to the stage of application processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;