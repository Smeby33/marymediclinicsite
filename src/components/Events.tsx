import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import GlassIcons from "./GlassIcons";
import "./GlassIcons.css";

import { Calendar, Megaphone, Users, Activity } from "lucide-react";
import { FiUser, FiCalendar, FiAlertCircle, FiSearch } from "react-icons/fi";

const eventsData = {
  description:
    "Catalogue structuré des événements organisés, soutenus ou vécus par Mary Mediclinic, incluant les consultations spécialisées temporaires, les campagnes de santé, les formations et les actions communautaires.",
  categories: [
    {
      type: "Événements médicaux réguliers",
      description: "Activités médicales courantes proposées de façon continue aux patients.",
      exemples: [
        "Consultations générales et spécialisées",
        "Hospitalisations et soins ambulatoires",
        "Chirurgies planifiées",
        "Réadaptation et kinésithérapie",
        "Soins palliatifs et suivi psychologique",
      ],
    },
    {
      type: "Événements médicaux exceptionnels_urgents",
      description:
        "Consultations exceptionnelles ou urgentes nécessitant une communication prioritaire auprès des patients.",
      exemples: [
        {
          nom: "Venue temporaire d’un spécialiste",
          specialistes: [
            {
              nom: "Dr Mba",
              specialite: "Dermatologue",
              dates: { debut: "2025-11-08", fin: "2025-11-10" },
              plages_horaires: [
                { jour: "Samedi 8 novembre 2025", heures: ["08:00 - 12:00", "14:00 - 17:00"] },
                { jour: "Dimanche 9 novembre 2025", heures: ["09:00 - 13:00", "15:00 - 18:00"] },
                { jour: "Lundi 10 novembre 2025", heures: ["08:30 - 12:30"] },
              ],
              lieu: "Mary Mediclinic, Libreville",
              reservation: {
                telephone: "+241 06 00 00 00",
                site_web: "https://marymediclinic.com/rendezvous",
                email: "rdv@marymediclinic.com",
              },
              communication: {
                canaux: [
                  "Bandeau urgent sur le site web",
                  "Réseaux sociaux (Facebook, Instagram, WhatsApp)",
                  "SMS et notifications push",
                  "Affichage dans la salle d’attente",
                ],
                exemple_message:
                  "🩺 Le Dr Mba, dermatologue, sera présent à Mary Mediclinic du 8 au 10 novembre. Prenez rendez-vous dès maintenant.",
              },
            },
            {
              nom: "Dr Ella",
              specialite: "Cardiologue",
              dates: { debut: "2025-11-12", fin: "2025-11-15" },
              plages_horaires: [
                { jour: "Mercredi 12 novembre 2025", heures: ["08:00 - 12:00", "14:00 - 17:00"] },
                { jour: "Jeudi 13 novembre 2025", heures: ["09:00 - 13:00", "15:00 - 18:00"] },
                { jour: "Vendredi 14 novembre 2025", heures: ["08:30 - 12:30"] },
                { jour: "Samedi 15 novembre 2025", heures: ["08:00 - 11:00"] },
              ],
              lieu: "Mary Mediclinic, Port-Gentil",
              reservation: {
                telephone: "+241 07 11 22 33",
                site_web: "https://marymediclinic.com/rdv",
                email: "contact@marymediclinic.com",
              },
              communication: {
                canaux: [
                  "Bandeau d’annonce sur le site web",
                  "Notification mobile",
                  "Publication Facebook et Instagram",
                  "Affichage numérique à l’accueil",
                ],
                exemple_message:
                  "🚨 Le Dr Ella, cardiologue, consultera exceptionnellement à Mary Mediclinic Port-Gentil du 12 au 15 novembre. Heures : 8h à 17h. Réservez votre créneau dès maintenant.",
              },
            },
          ],
        },
        {
          nom: "Campagne de dépistage gratuit",
          description: "Dépistage gratuit du diabète et de l’hypertension du 5 au 7 décembre.",
          heures: ["08:00 - 16:00"],
          lieu: "Mary Mediclinic, Libreville",
          reservation: "Aucune réservation nécessaire",
          communication: {
            canaux: ["Site web", "Réseaux sociaux", "Radios locales"],
            exemple_message:
              "📢 Campagne gratuite de dépistage du diabète du 5 au 7 décembre de 8h à 16h à Mary Mediclinic Libreville.",
          },
        },
      ],
    },
    {
      type: "Événements de formation et scientifiques",
      description: "Sessions de formation continue et de recherche clinique pour les professionnels de santé.",
      exemples: [
        "Séminaires de perfectionnement médical",
        "Conférences scientifiques et ateliers pratiques",
        "Formations en gestion hospitalière",
        "Simulations de gestes d’urgence",
      ],
    },
    {
      type: "Événements communautaires et de sensibilisation",
      description: "Actions de prévention et d’éducation pour le grand public.",
      exemples: [
        "Journées de sensibilisation (VIH, diabète, santé mentale)",
        "Forums santé dans les écoles et entreprises",
        "Campagnes de don de sang",
        "Émissions et causeries éducatives",
      ],
    },
    {
      type: "Événements sociaux et internes",
      description: "Moments de cohésion, de reconnaissance et de célébration du personnel médical et administratif.",
      exemples: [
        "Fête du personnel et team building",
        "Journée internationale des infirmiers",
        "Cérémonie annuelle de reconnaissance",
        "Célébration de la Journée de la Femme",
      ],
    },
  ],
  mise_en_evidence_evenements_urgents: {
    objectifs: [
      "Informer rapidement les patients des consultations exceptionnelles",
      "Faciliter la prise de rendez-vous lors des venues de spécialistes",
      "Renforcer la communication entre la clinique et le public",
    ],
    moyens: [
      "Bandeau urgent sur le site web",
      "Notifications push sur mobile",
      "Publications sur les réseaux sociaux",
      "Affichage dynamique à la réception",
    ],
    exemple_affichage: {
      titre: "🩺 Événement médical spécial",
      message:
        "Le Dr Ella, cardiologue, sera à Mary Mediclinic Port-Gentil du 12 au 15 novembre. Heures : 8h - 17h.",
      bouton: "Prendre rendez-vous",
      lien: "https://marymediclinic.com/rdv",
    },
  },
};

type EventCard = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  date?: string;
  location?: string;
  color?: string;
  icon?: React.ReactNode;
  cta?: { label: string; href: string };
};

const data: EventCard[] = [
  {
    id: "e1",
    title: "Venue du Dr Ella",
    subtitle: "Cardiologue — 12-15 Nov 2025",
    image: new URL("../assets/african-american-female-doctor.webp", import.meta.url).href,
    date: "12–15 Nov 2025",
    location: "Mary Mediclinic, Port-Gentil",
    color: "indigo",
    icon: <FiUser />,
    cta: { label: "Réserver", href: "/rdv" },
  },
  {
    id: "e2",
    title: "Dépistage gratuit",
    subtitle: "Diabète & Hypertension — 5-7 Dec",
    image: new URL("../assets/enfant-et-medecin.avif", import.meta.url).href,
    date: "5–7 Dec 2025",
    location: "Mary Mediclinic, Libreville",
    color: "green",
    icon: <FiSearch />,
    cta: { label: "En savoir plus", href: "/evenements" },
  },
  {
    id: "e3",
    title: "Consultation Dermatologie",
    subtitle: "Dr Mba — 8-10 Nov",
    image: new URL("../assets/medecin-surveillant-symptomes-patients-malades.avif", import.meta.url).href,
    date: "8–10 Nov 2025",
    location: "Mary Mediclinic, Libreville",
    color: "red",
    icon: <FiAlertCircle />,
    cta: { label: "Prendre RDV", href: "/rdv" },
  },
];

const Events: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="evenements" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-down">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Événements & Campagnes</h2>
        </ScrollAnimation>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((card, idx) => (
            <ScrollAnimation key={card.id} animation="scale" delay={idx * 100}>
              <article
                className="relative flex flex-col h-72 rounded-xl overflow-hidden shadow-lg bg-card transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group"
                aria-labelledby={`title-${card.id}`}
              >
                {/* image background */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40 group-hover:from-primary/95 group-hover:via-primary/75 transition-all duration-500" />
                </div>

                {/* small glass icon top-left */}
                <div className="relative z-10 p-4 flex justify-between items-start">
                  <div className="z-20">
                    <GlassIcons
                      items={[
                        { icon: card.icon ?? <FiCalendar />, color: card.color ?? "blue", label: card.title },
                      ]}
                      className="glass-small"
                    />
                  </div>
                  <div className="z-20 ml-auto text-xs text-white font-medium bg-secondary/90 px-3 py-1 rounded-full">
                    {card.date}
                  </div>
                </div>

                {/* content bottom */}
                <div className="relative z-10 p-5 flex-1 flex flex-col justify-end">
                  <h3 id={`title-${card.id}`} className="text-xl font-bold text-white drop-shadow-lg mb-2">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-sm text-white font-medium mb-3 drop-shadow-md">{card.subtitle}</p>
                  )}

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="text-xs text-white font-medium">
                      <div>{card.location}</div>
                    </div>
                    {card.cta && (
                      <a
                        href={card.cta.href}
                        className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-semibold shadow-lg hover:bg-secondary/90 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                      >
                        {card.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
