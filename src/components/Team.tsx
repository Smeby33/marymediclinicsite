import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "M. Petit",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote:
      "La clinique est moderne et propre. Les équipements sont à la pointe. On se sent en sécurité et bien soigné ici.",
  },
  {
    name: "Dr. Diallo",
    role: "Cardiologue",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    quote:
      "Le Dr. Diallo est un professionnel exceptionnel. Son écoute et son diagnostic précis m'ont beaucoup aidé. Je recommande vivement Health Clinique.",
  },
  {
    name: "Mme. Dubois",
    role: "Infirmière",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    quote:
      "Une équipe formidable et un accueil chaleureux. Les infirmières sont très attentionnées. C'est rassurant de savoir qu'on est entre de bonnes mains.",
  },
  {
    name: "Dr. Mbala",
    role: "Pédiatre",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    quote:
      "Excellent suivi pour nos enfants. Le Dr. Mbala prend le temps d'écouter et de rassurer. Un vrai professionnel de la pédiatrie.",
  },
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-gradient-to-b from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Notre Équipe</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des professionnels dévoués à votre service
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-2 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Team;
