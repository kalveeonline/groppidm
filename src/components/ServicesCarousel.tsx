import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Phone, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Autoplay from "embla-carousel-autoplay";

// Import service images
import corporateIdentityImg from "@/assets/services/corporate-identity.jpg";
import websiteDevelopmentImg from "@/assets/services/website-development.jpg";
import webshopCreationImg from "@/assets/services/webshop-creation.jpg";
import seoOptimizationImg from "@/assets/services/seo-optimization.jpg";
import socialMediaMarketingImg from "@/assets/services/social-media-marketing.jpg";
import digitalAdvertisingImg from "@/assets/services/digital-advertising.jpg";
import reviewManagementImg from "@/assets/services/review-management.jpg";
import netsyncImg from "@/assets/services/netsync.jpg";

export const ServicesCarousel = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: "Corporate Identity",
      description: "Stand out with a unique corporate identity that reflects your brand's values and vision",
      image: corporateIdentityImg,
      slug: "corporate-identity"
    },
    {
      title: "Website Development",
      description: "The online center of your business - professional, responsive, and user-friendly",
      image: websiteDevelopmentImg,
      slug: "website"
    },
    {
      title: "Webshop Creation",
      description: "24/7 online sales with a powerful e-commerce platform tailored to your needs",
      image: webshopCreationImg,
      slug: "webshop"
    },
    {
      title: "SEO Optimization",
      description: "Get found online with expert search engine optimization strategies",
      image: seoOptimizationImg,
      slug: "seo"
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand on Facebook, Instagram, and LinkedIn",
      image: socialMediaMarketingImg,
      slug: "social-media-ads"
    },
    {
      title: "Digital Advertising",
      description: "Reach your target audience with Google Ads, Bing Ads, and social media campaigns",
      image: digitalAdvertisingImg,
      slug: "sea"
    },
    {
      title: "Review Management",
      description: "Build trust and credibility with Google Review Cards and reputation management",
      image: reviewManagementImg,
      slug: "review-cards"
    },
    {
      title: "NetSync",
      description: "Keep your business information synchronized across all online platforms",
      image: netsyncImg,
      slug: "netsync"
    }
  ];

  const handleAppointment = () => {
    window.open('/appointment', '_blank');
  };

  const handleCallMe = () => {
    // You can implement phone call functionality or open a contact form
    window.open('tel:+1234567890', '_self');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            What Do You Want?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our premium digital marketing services designed to elevate your business
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="group overflow-hidden border-0 shadow-hero hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-gradient-card">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-glow z-20">
                        Premium Service
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                          onClick={handleAppointment}
                          className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-glow transition-all duration-300 group/btn"
                        >
                          <Calendar className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                          Make An Appointment
                        </Button>
                        <Button
                          onClick={handleCallMe}
                          variant="outline"
                          className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 group/btn"
                        >
                          <Phone className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                          Call Me
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-glow" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary/90 hover:bg-primary text-primary-foreground border-0 shadow-glow" />
        </Carousel>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Ready to transform your digital presence?
          </p>
          <Button
            size="lg"
            onClick={handleAppointment}
            className="bg-gradient-to-r from-primary via-primary-light to-primary hover:shadow-glow text-primary-foreground font-bold px-8 py-6 text-lg shadow-hero transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};
