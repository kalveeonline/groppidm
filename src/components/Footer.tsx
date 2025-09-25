import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import groppiLogo from "@/assets/groppi-logo.jpg";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white/95 text-foreground border-t border-border/20">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={groppiLogo} 
                alt="GROPPI Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">GROPPI</span>
                <span className="text-xs text-muted-foreground">Digital Marketing Bureau</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              GROPPI Digital Marketing Bureau maakt KMO&apos;s succesvol online met professionele 
              digitale marketing oplossingen.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t('footer.services')}</h3>
            <div className="space-y-2 text-sm">
              <a 
                href="#" 
                onClick={() => window.open('/website-development', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.websiteDevelopment')}
              </a>
              <a 
                href="#" 
                onClick={() => window.open('/webshop-creation', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.webshopCreation')}
              </a>
              <a 
                href="#" 
                onClick={() => window.open('/seo-optimization', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.seoOptimization')}
              </a>
              <a 
                href="#" 
                onClick={() => window.open('/digital-advertising', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.digitalAdvertising')}
              </a>
              <a 
                href="#" 
                onClick={() => window.open('/social-media-marketing', '_blank')}
                className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {t('footer.socialMediaMarketing')}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+32 (0)3 123 45 67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@groppi.be</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  {t('footer.locations')}
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">{t('footer.newsletter')}</h3>
            <p className="text-muted-foreground text-sm">
              {t('footer.newsletterDescription')}
            </p>
            <div className="space-y-2">
              <Input 
                placeholder={t('footer.emailPlaceholder')} 
                className="bg-background/50 border-border/30 text-foreground placeholder:text-muted-foreground/70"
              />
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                {t('footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            {t('footer.copyright')}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};