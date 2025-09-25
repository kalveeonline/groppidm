import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import websiteDiagram from "@/assets/website-diagram.png";

export const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative bg-gradient-hero py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="container relative px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {t('hero.title')}{" "}
                <span className="text-primary">{t('hero.subtitle1')}</span>
                <br />
                <span className="text-primary">{t('hero.subtitle2')}</span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => window.open('/appointment', '_blank')}
              >
                {t('hero.cta1')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://wa.me/32495633832', '_blank')}
              >
                {t('hero.cta2')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">{t('hero.trustIndicators.oneStop')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">{t('hero.trustIndicators.budget')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-sm text-muted-foreground">{t('hero.trustIndicators.reports')}</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative rounded-full bg-gradient-card p-4 shadow-hero w-80 h-80 mx-auto">
              <img 
                src={websiteDiagram} 
                alt="Website Digital Marketing Ecosystem" 
                className="w-full h-full object-cover rounded-full"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-primary/10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};