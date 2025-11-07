import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-mary-mediclinic.png";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background py-12 overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src={logo} 
          alt="Mary Mediclinic Background" 
          className="w-auto h-[80%] object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center p-4">
              <img src={logo} alt="Mary Mediclinic" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-background/80">
            <a href="mailto:contact@marymediclinic.com" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="w-5 h-5" />
              contact@marymediclinic.com
            </a>
            <a href="tel:+24101700000" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-5 h-5" />
              +241 01 70 00 00
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-background/80">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>123 Avenue de la Santé, Port-Gentil, Gabon</span>
          </div>

          <div className="pt-8 border-t border-background/20">
            <p className="text-background/60">
              © 2024 Mary Mediclinic. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
