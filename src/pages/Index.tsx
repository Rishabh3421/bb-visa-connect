import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CountryCards from "@/components/CountryCards";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramReels from "@/components/InstagramReels";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CountryCards />
        <ProcessTimeline />
        <TestimonialsSection />
        <InstagramReels />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

export default Index;
