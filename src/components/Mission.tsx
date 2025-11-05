import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Award, MapPin } from "lucide-react";

const Mission = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Notre Mission : Un Soin d'Excellence
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-6">
            Notre mission est de fournir des soins médicaux de haute qualité, accessibles et
            personnalisés. Nous croyons en une approche centrée sur le patient, alliant expertise et
            compassion.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Nos valeurs : intégrité, respect, professionnalisme et innovation constante pour votre
            santé.
          </p>
          <Button variant="secondary" size="lg" onClick={scrollToContact}>
            Nos Valeurs
          </Button>
        </div>

        {/* Engagement Cards */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Notre Engagement
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Mission</h4>
              <p className="text-foreground/70 leading-relaxed">
                Offrir des soins de santé de haute qualité avec compassion.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Valeurs</h4>
              <p className="text-foreground/70 leading-relaxed">
                Intégrité, professionnalisme et respect.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary-light" />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-4">Contact</h4>
              <p className="text-foreground/70 leading-relaxed">
                Adresse, téléphone, email et carte interactive.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
