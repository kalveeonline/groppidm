import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                F
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">FCR Media</span>
                <span className="text-xs text-background/70">Marketing Services</span>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              FCR Media maakt KMO's succesvol online met professionele 
              digitale marketing oplossingen.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Onze Services</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Website Development
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Webshop Creation
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                SEO Optimalisatie
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Digital Advertising
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">
                Social Media Marketing
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/70">+32 (0)3 123 45 67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/70">info@fcrmedia.be</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-background/70">
                  Antwerpen, Brussel,<br />
                  Oost- & West-Vlaanderen
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Blijf op de hoogte</h3>
            <p className="text-background/70 text-sm">
              Ontvang tips en nieuws over digital marketing.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Jouw e-mail adres" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <div>
            © 2024 FCR Media. Alle rechten voorbehouden.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Beleid
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};