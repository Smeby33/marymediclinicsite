import { Card } from "@/components/ui/card";
import missionImage from "@/assets/mission-healthcare.jpg";
import valuesImage from "@/assets/values-healthcare.jpg";
import contactImage from "@/assets/contact-healthcare.jpg";
import ScrollAnimation from "./ScrollAnimation";

const engagementCards = [
  {
    title: "Mission",
    description: "Offrir des soins de santé de haute qualité avec compassion.",
    image: missionImage,
  },
  {
    title: "Valeurs",
    description: "Intégrité, professionnalisme et respect.",
    image: valuesImage,
  },
  {
    title: "Contact",
    description: "Adresse, téléphone, email et carte interactive.",
    image: contactImage,
  },
];

const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/95 via-primary to-primary/95 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <ScrollAnimation animation="fade-down">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Notre Engagement
            </h2>
          </div>
        </ScrollAnimation>

        {/* Engagement Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {engagementCards.map((card, index) => (
            <ScrollAnimation
              key={index}
              animation={index === 1 ? "zoom" : "fade-up"}
              delay={index * 150}
            >
              <Card className="bg-primary-light/20 border-2 border-primary-foreground/10 p-6 space-y-6 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
