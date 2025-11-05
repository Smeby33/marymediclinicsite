import { Activity, Clock, Users, Microscope } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const stats = [
  {
    icon: Users,
    number: "98%",
    label: "Patients satisfaits chaque mois",
    badge: "Succès",
    color: "from-accent to-accent/80",
  },
  {
    icon: Clock,
    number: "24h",
    label: "Heures de service continu",
    badge: "Disponibilité",
    color: "from-primary to-primary-light",
  },
  {
    icon: Activity,
    number: "15+",
    label: "Spécialités médicales proposées",
    badge: "Expertise",
    color: "from-primary to-accent",
  },
  {
    icon: Microscope,
    number: "500+",
    label: "Analyses effectuées par semaine",
    badge: "Précision",
    color: "from-accent to-primary-light",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-down">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Santé</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Votre bien-être, notre priorité absolue. Des soins de qualité pour toute la famille.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollAnimation
              key={index}
              animation={index % 2 === 0 ? "fade-up" : "fade-down"}
              delay={index * 150}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm p-8 border border-primary-foreground/20 hover:border-primary-foreground/40 transition-all duration-300 hover:scale-105">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                    {stat.badge}
                  </span>
                </div>

                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary-light/20 mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-primary-foreground/80 text-lg leading-snug">{stat.label}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
