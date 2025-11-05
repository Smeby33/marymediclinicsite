import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">HC</span>
            </div>
            <span className="text-2xl font-bold">Health Clinique</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-background/80">
            <a href="mailto:contact@healthclinique.com" className="flex items-center gap-2 hover:text-background transition-colors">
              <Mail className="w-5 h-5" />
              contact@healthclinique.com
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
              © 2024 Health Clinique. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
