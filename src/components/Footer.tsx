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
            <a href="mailto:réception@mary-mediclinic.com" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="w-5 h-5" />
              réception@mary-mediclinic.com
            </a>
            <a href="tel:+24160027611" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-5 h-5" />
              +241 60 02 76 11
            </a>
            <a href="tel:+24111535246" className="flex items-center gap-2 hover:text-background transition-colors">
              <Phone className="w-5 h-5" />
              +241 11 53 52 46
            </a>
            <a
              href="https://www.facebook.com/share/183kahnxLi/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-background transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3v7.03C18.34 21.24 22 17.09 22 12.07z" />
              </svg>
              Facebook
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-background/80">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Entrée principale, Rue Sandrine , Port-Gentil, Gabon</span>
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
