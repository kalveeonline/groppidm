import { Quote, Star, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ilFuocoLogo from "@/assets/clients/il-fuoco.jpg";
import kmaLogo from "@/assets/clients/kma-wandpanelen.jpeg";
import mangiareLogo from "@/assets/clients/mangiare-3840.png";

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
      logo: mangiareLogo,
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
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-card via-card to-card/95 p-8 rounded-2xl border border-border/40 group-hover:border-primary/40 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                  
                  {/* Cinematic spotlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                  
                  {/* Shine sweep animation on hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 rounded-2xl" />
                  
                  {/* Logo container with glass effect */}
                  <div className="relative h-40 w-full flex items-center justify-center mb-6">
                    <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80 rounded-xl backdrop-blur-sm" />
                    <div className="relative z-10 p-4">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-32 max-w-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Client name */}
                  <h3 className="text-lg font-semibold text-foreground text-center mb-3 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                  
                  {/* Visit button */}
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-all duration-300">
                    <span className="font-medium">{t('clients.visitWebsite')}</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full group-hover:w-3/4 transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
