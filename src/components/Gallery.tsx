import { useInView } from "react-intersection-observer";
import medicalIcon from "@/assets/medical-icon.jpg";
import ScrollAnimation from "./ScrollAnimation";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    alt: "Salle d'opération moderne",
  },
  {
    url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop",
    alt: "Médecin au téléphone",
  },
  {
    url: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&h=600&fit=crop",
    alt: "Laboratoire médical",
  },
  {
    url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=600&fit=crop",
    alt: "Équipement médical moderne",
  },
  {
    url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop",
    alt: "Examen médical",
  },
  {
    url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=600&fit=crop",
    alt: "Pharmacienne au travail",
  },
  {
    url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&h=600&fit=crop",
    alt: "Médecin professionnel",
  },
  {
    url: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop",
    alt: "Personnel médical",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary to-primary-light overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <ScrollAnimation
              key={index}
              animation={index % 2 === 0 ? "fade-up" : "scale"}
              delay={index * 100}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom Icon */}
        <ScrollAnimation animation="zoom" delay={400}>
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300">
              <img
                src={medicalIcon}
                alt="Health Clinique"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Gallery;
