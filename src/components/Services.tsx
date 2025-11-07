import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Stethoscope, 
  Heart, 
  FlaskConical, 
  Ambulance, 
  Baby, 
  Eye,
  Bone,
  Activity,
  ScanLine,
  Scissors,
  Apple,
  HeartPulse,
  Ear,
  Pill,
  Briefcase
} from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const services = [
  {
    id: "medecine-generale",
    icon: Stethoscope,
    title: "Médecine Générale",
    description: "Consultations générales pour toute la famille. Diagnostic, traitement et suivi médical complet avec des médecins expérimentés disponibles tous les jours.",
  },
  {
    id: "medecine-travail",
    icon: Briefcase,
    title: "Médecine du Travail",
    description: "Examens médicaux d'aptitude, visites périodiques, bilans de santé professionnels et conseils en santé au travail pour les entreprises.",
  },
  {
    id: "ophtalmologie",
    icon: Eye,
    title: "Ophtalmologie",
    description: "Consultations ophtalmologiques complètes, examens de la vue, prescription de lunettes et dépistage des pathologies oculaires.",
  },
  {
    id: "pediatrie",
    icon: Baby,
    title: "Pédiatrie",
    description: "Soins spécialisés pour les enfants de la naissance à l'adolescence. Suivi de croissance, vaccinations et traitement des maladies infantiles.",
  },
  {
    id: "gynecologie",
    icon: Heart,
    title: "Gynécologie",
    description: "Consultations gynécologiques, suivi de grossesse, échographies et soins de santé reproductive pour les femmes de tous âges.",
  },
  {
    id: "traumatologie",
    icon: Bone,
    title: "Traumatologie",
    description: "Prise en charge des fractures, entorses, luxations et tous types de traumatismes. Traitement orthopédique et suivi de rééducation.",
  },
  {
    id: "cardiologie",
    icon: HeartPulse,
    title: "Cardiologie",
    description: "Diagnostic et traitement des maladies cardiovasculaires. Electrocardiogrammes, échographies cardiaques et suivi des pathologies cardiaques.",
  },
  {
    id: "radiologie",
    icon: ScanLine,
    title: "Radiologie",
    description: "Service d'imagerie médicale moderne avec radiographie numérique, échographie et autres examens d'imagerie diagnostique.",
  },
  {
    id: "laboratoire",
    icon: FlaskConical,
    title: "Laboratoire d'Analyses Médicales",
    description: "Analyses biologiques complètes. Hématologie, biochimie, bactériologie et sérologie avec résultats rapides et fiables.",
  },
  {
    id: "chirurgie",
    icon: Scissors,
    title: "Chirurgie",
    description: "Interventions chirurgicales diverses avec un bloc opératoire équipé et une équipe chirurgicale expérimentée.",
  },
  {
    id: "hepato-gastro",
    icon: Activity,
    title: "Hépato-Gastro-Entérologie",
    description: "Diagnostic et traitement des maladies du foie, de l'estomac, des intestins et du système digestif. Endoscopies et consultations spécialisées.",
  },
  {
    id: "urgences",
    icon: Ambulance,
    title: "Urgences 24h/24",
    description: "Service d'urgence disponible jour et nuit, 7 jours sur 7. Notre équipe médicale est toujours prête à vous accueillir.",
  },
  {
    id: "nutrition",
    icon: Apple,
    title: "Nutrition & Bien-Être",
    description: "Consultations nutritionnelles personnalisées, programmes de rééquilibrage alimentaire et conseils en hygiène de vie.",
  },
  {
    id: "kinesitherapie",
    icon: Activity,
    title: "Kinésithérapie",
    description: "Rééducation fonctionnelle, massages thérapeutiques et soins de kinésithérapie pour la récupération et le bien-être physique.",
  },
  {
    id: "orl",
    icon: Ear,
    title: "ORL",
    description: "Oto-Rhino-Laryngologie. Traitement des pathologies des oreilles, du nez, de la gorge et de la sphère ORL.",
  },
  {
    id: "dermatologie-infectiologie",
    icon: Pill,
    title: "Dermatologie-Infectiologie",
    description: "Soins dermatologiques et traitement des maladies infectieuses. Diagnostic et prise en charge des pathologies de la peau et infections.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary/10 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title & Info */}
          <ScrollAnimation animation="fade-right">
            <div className="lg:sticky lg:top-24 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Nos Services Médicaux
                </h2>
                <div className="bg-primary rounded-2xl p-8 border-2 border-primary/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg text-primary-foreground mb-4 leading-relaxed font-medium">
                    16 services médicaux à votre disposition pour prendre soin de votre santé et celle de votre famille.
                  </p>
                  <a
                    href="mailto:contact@marymediclinic.com"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg"
                  >
                    contact@marymediclinic.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Services Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <ScrollAnimation
                  key={service.id}
                  animation="fade-left"
                  delay={index * 100}
                >
                  <AccordionItem
                    value={service.id}
                    className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-lg font-semibold text-foreground">{service.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                </ScrollAnimation>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
