import { Quote, Star, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ilFuocoLogo from "@/assets/clients/il-fuoco.jpg";
import kmaLogo from "@/assets/clients/kma-wandpanelen.jpeg";

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: "testimonials.client1.name",
      companyKey: "testimonials.client1.company",
      textKey: "testimonials.client1.text",
      rating: 5
    },
    {
      nameKey: "testimonials.client2.name",
      companyKey: "testimonials.client2.company",
      textKey: "testimonials.client2.text",
      rating: 5
    },
    {
      nameKey: "testimonials.client3.name",
      companyKey: "testimonials.client3.company",
      textKey: "testimonials.client3.text",
      rating: 5
    }
  ];

  const clients = [
    {
      name: "IL FUOCO",
      logo: ilFuocoLogo,
      website: "https://www.ilfuoco.be/"
    },
    {
      name: "KMA Wandpanelen",
      logo: kmaLogo,
      website: "https://www.kmawandpanelen.be/"
    },
    {
      name: "Mangiare 3840",
      logo: null,
      website: "https://www.mangiare3840.be/"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4">
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-card p-5 md:p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/20 absolute top-4 right-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-6 italic">
                  "{t(testimonial.textKey)}"
                </p>
                <div className="border-t border-border/30 pt-4">
                  <p className="text-sm md:text-base font-semibold text-foreground">{t(testimonial.companyKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Clients */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('clients.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('clients.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 flex flex-col items-center justify-center border border-border/30 hover:border-primary/30"
              >
                {client.logo ? (
                  <div className="h-32 w-full flex items-center justify-center mb-4">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-32 w-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                      {client.name}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>{t('clients.visitWebsite')}</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
