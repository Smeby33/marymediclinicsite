import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Emergency from "@/components/Emergency";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Services />
  <Events />
      <Emergency />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
