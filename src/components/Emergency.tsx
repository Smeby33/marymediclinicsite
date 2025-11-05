import { Button } from "@/components/ui/button";
import medicalIcon from "@/assets/medical-icon.jpg";
import ScrollAnimation from "./ScrollAnimation";

const Emergency = () => {
  const handleCall = () => {
    window.location.href = "tel:+24101700000";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Icon */}
          <ScrollAnimation animation="scale" delay={0}>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300">
                <img
                  src={medicalIcon}
                  alt="Urgences médicales"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Title */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Besoin d'aide immédiate?
            </h2>
          </ScrollAnimation>

          {/* Description */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Nos urgences sont disponibles 24h/24 et 7j/7 pour répondre à vos besoins critiques.
            </p>
          </ScrollAnimation>

          {/* Call Button */}
          <ScrollAnimation animation="zoom" delay={400}>
            <div className="pt-4">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-foreground text-background hover:bg-foreground/90 px-12 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Appeler
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
