import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "24101700000";
    const message = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous à Mary Mediclinic.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground animate-float"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;
