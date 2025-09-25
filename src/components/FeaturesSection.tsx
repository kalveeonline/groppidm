import { CheckCircle, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Alles voor jouw zaak",
    description: "Complete digitale oplossingen onder één dak"
  },
  {
    icon: Users,
    title: "Persoonlijke & lokale aanpak",
    description: "Maatwerk service met persoonlijk contact"
  },
  {
    icon: DollarSign,
    title: "Voor elk budget",
    description: "Oplossingen die passen bij jouw financiële mogelijkheden"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};