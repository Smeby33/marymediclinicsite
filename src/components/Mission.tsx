import { Card } from "@/components/ui/card";
import clinicSign from "@/assets/clinic-sign.jpg";
import pharmacist from "@/assets/pharmacist-work.jpg";
import anatomyModel from "@/assets/anatomy-model.jpg";

const engagementCards = [
  {
    title: "Mission",
    description: "Offrir des soins de santé de haute qualité avec compassion.",
    image: clinicSign,
  },
  {
    title: "Valeurs",
    description: "Intégrité, professionnalisme et respect.",
    image: pharmacist,
  },
  {
    title: "Contact",
    description: "Adresse, téléphone, email et carte interactive.",
    image: anatomyModel,
  },
];

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/95 via-primary to-primary/95">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Notre Engagement
          </h2>
        </div>

        {/* Engagement Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {engagementCards.map((card, index) => (
            <Card
              key={index}
              className="bg-primary-light/20 border-2 border-primary-foreground/10 p-6 space-y-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">{card.title}</h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
