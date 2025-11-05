import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Stethoscope, Heart, FlaskConical, Ambulance, MessageCircle, FileText } from "lucide-react";

const services = [
  {
    id: "medecine",
    icon: Stethoscope,
    title: "Médecine Générale",
    description:
      "Consultations générales pour toute la famille. Diagnostic, traitement et suivi médical complet avec des médecins expérimentés.",
  },
  {
    id: "specialites",
    icon: Heart,
    title: "Spécialités Médicales",
    description:
      "Cardiologie, dermatologie, gynécologie, pédiatrie et plus. Nos spécialistes vous offrent des soins experts dans 15 domaines médicaux.",
  },
  {
    id: "analyses",
    icon: FlaskConical,
    title: "Analyses de Laboratoire",
    description:
      "Laboratoire moderne équipé pour tous types d'analyses. Résultats rapides et fiables avec plus de 500 analyses par semaine.",
  },
  {
    id: "urgences",
    icon: Ambulance,
    title: "Urgences 24h/24",
    description:
      "Service d'urgence disponible 24h/24 et 7j/7. Notre équipe médicale est toujours prête à vous accueillir en cas d'urgence.",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "Consultation WhatsApp",
    description:
      "Contactez-nous directement via WhatsApp pour des questions rapides, prendre rendez-vous ou obtenir des conseils médicaux.",
  },
  {
    id: "formulaire",
    icon: FileText,
    title: "Formulaire Rapide",
    description:
      "Remplissez notre formulaire en ligne pour une prise de contact rapide. Nous vous répondons dans les plus brefs délais.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title & Info */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nos Services en Détail
              </h2>
              <div className="bg-primary rounded-2xl p-8 border-2 border-primary/30 shadow-lg">
                <p className="text-lg text-primary-foreground mb-4 leading-relaxed font-medium">
                  Médecine Générale, Spécialités, Analyses, Urgences 24h/24
                </p>
                <a
                  href="mailto:info@healthclinique.ga"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg"
                >
                  info@healthclinique.ga
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Services Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border border-border rounded-xl overflow-hidden bg-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-foreground">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
