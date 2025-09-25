import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  ShoppingCart, 
  Search, 
  RefreshCw, 
  MousePointer, 
  Share2, 
  Target, 
  FileText 
} from "lucide-react";

const solidBasisServices = [
  {
    icon: Monitor,
    title: "Website",
    description: "Professioneel online, met een website op maat."
  },
  {
    icon: ShoppingCart,
    title: "Webshop",
    description: "Jouw diensten en producten in de kijker."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Jouw website hoger in de zoekresultaten."
  },
  {
    icon: RefreshCw,
    title: "Netsync",
    description: "Een positieve reputatie en correcte gegevens in één klap."
  }
];

const adverterenServices = [
  {
    icon: MousePointer,
    title: "SEA",
    description: "Jouw advertenties op Google, Bing en Youtube."
  },
  {
    icon: Share2,
    title: "Adverteren op Sociale media",
    description: "Bereik je doelgroep op de populairste kanalen."
  },
  {
    icon: Target,
    title: "All-in-one adverteren met Omni",
    description: "Meer bereik op Google, Bing, Facebook en Instagram."
  },
  {
    icon: FileText,
    title: "Adverteren op goudengids.be",
    description: "Jouw zaak op de grootste bedrijvengids van België."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Wij regelen alles
          </h2>
          <p className="text-xl text-muted-foreground">
            terwijl jij je focust op jouw zaak
          </p>
        </div>

        {/* Solide Basis Services */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm">1</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Start met een solide basis
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solidBasisServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Alles over jouw solide basis
            </Button>
          </div>
        </div>

        {/* Digital Advertising Services */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm">2</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Groei met Digitaal adverteren
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adverterenServices.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 shadow-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Alles over digitaal adverteren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};