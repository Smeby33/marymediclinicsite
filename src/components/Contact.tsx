import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mvgddbpp");

  // Show success message when form is submitted
  if (state.succeeded) {
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
    }, 100);
  }

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <ScrollAnimation animation="fade-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Trouvez-Nous</h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Contactez-nous pour toute question ou pour prendre rendez-vous.
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation animation="fade-right" delay={100}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Email</div>
                    <a
                      href="mailto:contact@healthclinique.com"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      contact@healthclinique.com
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Téléphone</div>
                    <a
                      href="tel:+24101700000"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      +241 01 70 00 00
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={300}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Adresse</div>
                    <p className="text-primary-foreground/80">
                      123 Avenue de la Santé, Port-Gentil, Gabon
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Google Maps */}
            <ScrollAnimation animation="scale" delay={400}>
              <div className="rounded-2xl overflow-hidden border-4 border-primary-foreground/20 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.912376851897!2d8.76667!3d-0.71933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1073515d4e3d1111%3A0x1234567890abcdef!2sPort-Gentil%2C%20Gabon!5e0!3m2!1sfr!2s!4v1234567890123!5m2!1sfr!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Mary Mediclinic Port-Gentil"
                />
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Column - Contact Form */}
          <ScrollAnimation animation="fade-left" delay={200}>
            <div className="bg-primary-foreground rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-foreground mb-6">Contactez-Nous Facilement</h3>
              {state.succeeded ? (
                <div className="bg-secondary/10 border border-secondary p-8 rounded-lg text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message envoyé avec succès !</h3>
                  <p className="text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Prénom"
                        className="bg-muted border-border"
                        required
                      />
                      <ValidationError 
                        prefix="Prénom" 
                        field="firstName"
                        errors={state.errors}
                        className="text-destructive text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Nom"
                        className="bg-muted border-border"
                        required
                      />
                      <ValidationError 
                        prefix="Nom" 
                        field="lastName"
                        errors={state.errors}
                        className="text-destructive text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="bg-muted border-border"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-destructive text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clinic" className="text-foreground">
                      Service souhaité
                    </Label>
                    <Input
                      id="clinic"
                      name="clinic"
                      placeholder="Service (optionnel)"
                      className="bg-muted border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Votre message ou raison de la prise de rendez-vous..."
                      className="bg-muted border-border min-h-32"
                      required
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-destructive text-sm"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="secondary" 
                    size="lg" 
                    className="w-full hover:scale-105 transition-transform"
                    disabled={state.submitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {state.submitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </form>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
