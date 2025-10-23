import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/language-selector";
import websiteDiagram from "@/assets/website-diagram.png";
export const HeroSection = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative bg-gradient-hero py-16 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="container relative px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            {/* Trust Indicators */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-3 w-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('hero.trustIndicators.oneStop')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.trustIndicators.oneStopDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-3 w-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('hero.trustIndicators.budget')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.trustIndicators.budgetDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-3 w-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('hero.trustIndicators.reports')}</h3>
                  <p className="text-sm text-muted-foreground">{t('hero.trustIndicators.reportsDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative rounded-full bg-gradient-card p-4 shadow-hero w-full max-w-2xl h-auto aspect-square mx-auto">
              <img src={websiteDiagram} alt="Website Digital Marketing Ecosystem" className="w-full h-full object-cover rounded-full" />
              
              {/* Rotating container for floating elements */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-primary/10 blur-2xl"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-12 w-12 rounded-full bg-primary/15 blur-lg"></div>
                <div className="absolute bottom-0 right-8 h-14 w-14 rounded-full bg-primary/25 blur-xl"></div>
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 h-10 w-10 rounded-full bg-primary/20 blur-md"></div>
                <div className="absolute top-1/4 right-0 h-8 w-8 rounded-full bg-primary/30 blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};