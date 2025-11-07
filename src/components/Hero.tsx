import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mary-mediclinic.png";
import ImageCollage from "@/components/ImageCollage";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mary Mediclinic Port-Gentil"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center top' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Votre Santé, Notre Priorité Absolue
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-md">
            Des soins modernes et humains à Port-Gentil. Votre bien-être est notre engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Prendre RDV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 bg-white/20 hover:bg-white/30 text-white border-white/50 backdrop-blur-sm"
            >
              Nous Contacter
            </Button>
          </div>
        </div>

        {/* Image collage block */}
        <ImageCollage />
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
