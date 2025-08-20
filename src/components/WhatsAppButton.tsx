import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918396000445?text=Hello! I'm interested in immigration services.", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 gradient-primary text-white rounded-full shadow-floating hover:shadow-gold transition-bounce hover:scale-110"
    >
      <MessageCircle className="h-6 w-6 mr-2" />
      WhatsApp
    </Button>
  );
};

export default WhatsAppButton;