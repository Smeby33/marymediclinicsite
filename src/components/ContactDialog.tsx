import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send, Calendar, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

interface ContactDialogProps {
  trigger?: React.ReactNode;
}

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xzdpobvk");
  const [isOpen, setIsOpen] = useState(false);

  // Show success message and close dialog when form is submitted
  if (state.succeeded) {
    setTimeout(() => {
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setIsOpen(false);
    }, 100);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="secondary" size="lg">
            <Calendar className="w-5 h-5 mr-2" />
            Prendre RDV
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2">
            Prendre Rendez-vous
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            Remplissez le formulaire ci-dessous pour prendre rendez-vous
          </p>
        </DialogHeader>

        {state.succeeded ? (
          <div className="bg-secondary/10 border-2 border-secondary p-8 rounded-xl text-center space-y-4 animate-in fade-in-80 zoom-in-95 duration-300">
            <CheckCircle2 className="w-16 h-16 text-secondary mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Message envoyé avec succès !</h3>
            <p className="text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Votre prénom"
                  className="bg-background border-2 border-input focus:border-primary"
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
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Votre nom"
                  className="bg-background border-2 border-input focus:border-primary"
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
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre.email@exemple.com"
                className="bg-background border-2 border-input focus:border-primary"
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
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+241 XX XX XX XX"
                className="bg-background border-2 border-input focus:border-primary"
                required
              />
              <ValidationError 
                prefix="Téléphone" 
                field="phone"
                errors={state.errors}
                className="text-destructive text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service médical *</Label>
              <select
                id="service"
                name="service"
                className="flex h-10 w-full rounded-md border-2 border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Sélectionnez un service</option>
                <option value="Médecine générale">Médecine générale</option>
                <option value="Médecine du travail">Médecine du travail</option>
                <option value="Ophtalmologie">Ophtalmologie</option>
                <option value="Pédiatrie">Pédiatrie</option>
                <option value="Gynécologie">Gynécologie</option>
                <option value="Traumatologie">Traumatologie</option>
                <option value="Cardiologie">Cardiologie</option>
                <option value="Radiologie">Radiologie</option>
                <option value="Laboratoire d'analyses">Laboratoire d'analyses médicales</option>
                <option value="Chirurgie">Chirurgie</option>
                <option value="Hépato-gastro-entérologie">Hépato-gastro-entérologie</option>
                <option value="Urgences">Urgences 24h/24</option>
                <option value="Nutrition & bien-être">Nutrition & bien-être</option>
                <option value="Kinésithérapie">Kinésithérapie</option>
                <option value="ORL">ORL</option>
                <option value="Dermatologie-infectiologie">Dermatologie-infectiologie</option>
              </select>
              <ValidationError 
                prefix="Service" 
                field="service"
                errors={state.errors}
                className="text-destructive text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date souhaitée</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  className="bg-background border-2 border-input focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Heure souhaitée</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  className="bg-background border-2 border-input focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Motif de consultation *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Décrivez brièvement votre motif de consultation..."
                className="bg-background border-2 border-input focus:border-primary min-h-24"
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
              {state.submitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
