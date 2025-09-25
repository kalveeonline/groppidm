import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const DigitalScanSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Gebruik onze gratis Digital scan
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wil je de kwaliteit van jouw bedrijf op het net nagaan? Onze{" "}
              <strong className="text-primary">Digital scan</strong> kijkt na of jouw 
              bedrijfsgegevens correct vermeld worden op meer dan 30 online platformen.
            </p>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero"
            >
              Scan jouw site
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <div className="space-y-4">
                {/* Mock scan results */}
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">Website Status</span>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">SEO Optimalisatie</span>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">Online Zichtbaarheid</span>
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                  <span className="text-sm font-medium">Bedrijfsgegevens</span>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};