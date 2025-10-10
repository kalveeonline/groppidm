import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import { Link } from "react-router-dom";
import groppiLogoCircle from "@/assets/groppi-logo-circle.png";
import groppiTextLogo from "@/assets/groppi-text-logo.jpg";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background text-foreground border-t border-primary/30">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
              <img 
                src={groppiLogoCircle} 
                alt="GROPPI Logo" 
                className="h-12 w-12 object-contain group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col justify-center">
                <img 
                  src={groppiTextLogo} 
                  alt="GROPPI" 
                  className="h-10 w-full object-contain mt-1"
                />
                <span className="text-xs text-primary/70 mt-0 whitespace-nowrap">Digital Marketing Bureau</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.facebook.com/profile.php?id=61582120887290" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6 text-[hsl(var(--facebook))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://x.com/Groppimarketing" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-[hsl(var(--twitter))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.instagram.com/groppimarketingbureau/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-[hsl(var(--instagram))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.linkedin.com/company/groppi-marketing" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-[hsl(var(--linkedin))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.youtube.com/@GroppiMarketing" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6 text-[hsl(var(--youtube))] group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group" asChild>
                <a href="https://www.tiktok.com/@groppimarketingbureau?lang=nl-NL" target="_blank" rel="noopener noreferrer">
                  <Music className="h-6 w-6 text-[hsl(var(--tiktok))] group-hover:scale-110 transition-transform" />
                </a>
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
                <a href="mailto:groppimarketing@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  groppimarketing@gmail.com
                </a>
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
            © {new Date().getFullYear()} GROPPI Digital Marketing Bureau. {t('footer.allRightsReserved')}
          </div>
          <div className="flex items-center gap-6">
            <LanguageSelector variant="compact" className="text-muted-foreground hover:text-foreground" />
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