import React, { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import GlassIcons from "./GlassIcons";
import "./GlassIcons.css";

import { Calendar, Megaphone, Users, Activity } from "lucide-react";
import { FiUser, FiCalendar, FiAlertCircle, FiSearch } from "react-icons/fi";

const eventsData = {
  description:
    "Catalogue structuré des événements organisés, soutenus ou vécus par Health Clinique, incluant les consultations spécialisées temporaires, les campagnes de santé, les formations et les actions communautaires.",
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
              lieu: "Health Clinique, Libreville",
              reservation: {
                telephone: "+241 06 00 00 00",
                site_web: "https://healthclinique.ga/rendezvous",
                email: "rdv@healthclinique.ga",
              },
              communication: {
                canaux: [
                  "Bandeau urgent sur le site web",
                  "Réseaux sociaux (Facebook, Instagram, WhatsApp)",
                  "SMS et notifications push",
                  "Affichage dans la salle d’attente",
                ],
                exemple_message:
                  "🩺 Le Dr Mba, dermatologue, sera présent à Health Clinique du 8 au 10 novembre. Prenez rendez-vous dès maintenant.",
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
              lieu: "Health Clinique, Port-Gentil",
              reservation: {
                telephone: "+241 07 11 22 33",
                site_web: "https://healthclinique.ga/rdv",
                email: "contact@healthclinique.ga",
              },
              communication: {
                canaux: [
                  "Bandeau d’annonce sur le site web",
                  "Notification mobile",
                  "Publication Facebook et Instagram",
                  "Affichage numérique à l’accueil",
                ],
                exemple_message:
                  "🚨 Le Dr Ella, cardiologue, consultera exceptionnellement à Health Clinique Port-Gentil du 12 au 15 novembre. Heures : 8h à 17h. Réservez votre créneau dès maintenant.",
              },
            },
          ],
        },
        {
          nom: "Campagne de dépistage gratuit",
          description: "Dépistage gratuit du diabète et de l’hypertension du 5 au 7 décembre.",
          heures: ["08:00 - 16:00"],
          lieu: "Health Clinique, Libreville",
          reservation: "Aucune réservation nécessaire",
          communication: {
            canaux: ["Site web", "Réseaux sociaux", "Radios locales"],
            exemple_message:
              "📢 Campagne gratuite de dépistage du diabète du 5 au 7 décembre de 8h à 16h à Health Clinique Libreville.",
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
        "Le Dr Ella, cardiologue, sera à Health Clinique Port-Gentil du 12 au 15 novembre. Heures : 8h - 17h.",
      bouton: "Prendre rendez-vous",
      lien: "https://healthclinique.ga/rdv",
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
    location: "Health Clinique, Port-Gentil",
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
    location: "Health Clinique, Libreville",
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
    location: "Health Clinique, Libreville",
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
    <section ref={ref} id="evenements" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Événements & Campagnes</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((card, idx) => (
            <article
              key={card.id}
              className={`relative flex flex-col h-64 rounded-lg overflow-hidden shadow-md bg-white transform transition-all duration-500 will-change-transform ${
                inView ? `opacity-100 translate-y-0` : `opacity-0 translate-y-6`
              }`}
              style={{ transitionDelay: `${idx * 90}ms` }}
              aria-labelledby={`title-${card.id}`}
            >
              {/* image background */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-600 ease-out transform scale-100"
                  style={{ willChange: "transform, filter" }}
                />
                <div
                  className="absolute inset-0 bg-black/36 transition-opacity duration-300"
                  aria-hidden
                />
              </div>

              {/* small glass icon top-left */}
              <div className="relative z-10 p-3 flex justify-between items-start">
                <div className="z-20">
                  <GlassIcons
                    items={[
                      { icon: card.icon ?? <FiCalendar />, color: card.color ?? "blue", label: card.title },
                    ]}
                    className="glass-small"
                  />
                </div>
                <div className="z-20 ml-auto text-xs text-white/80">{card.date}</div>
              </div>

              {/* content bottom */}
              <div className="relative z-10 p-4 flex-1 flex flex-col justify-end">
                <p id={`title-${card.id}`} className="text-lg font-semibold text-white drop-shadow-sm">
                  {card.title}
                </p>
                {card.subtitle && <p className="text-sm text-white/90 mt-1">{card.subtitle}</p>}

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="text-xs text-white/80">
                    <div>{card.location}</div>
                  </div>
                  {card.cta && (
                    <a
                      href={card.cta.href}
                      className="inline-flex items-center px-3 py-1.5 bg-white/90 text-primary rounded-md text-sm font-medium shadow-sm hover:bg-white focus:outline-none"
                    >
                      {card.cta.label}
                    </a>
                  )}
                </div>
              </div>

              {/* hover: subtle image reveal */}
              <style>{`
                article:hover img {
                  transform: scale(1.03);
                  filter: saturate(1.06);
                }
                article:hover .bg-black\\/36 {
                  opacity: 0.28;
                }
              `}</style>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
