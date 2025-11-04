import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PricingCalculator } from "@/components/PricingCalculator";

export const PricesPage = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: "Starter",
      price: "€499",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Professional Website (5 pages)",
        "Basic SEO Optimization",
        "Mobile Responsive Design",
        "SSL Certificate",
        "Monthly Performance Report",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "€999",
      period: "/month",
      description: "Ideal for growing businesses looking to expand online",
      features: [
        "Everything in Starter",
        "E-commerce Integration (up to 50 products)",
        "Advanced SEO & Analytics",
        "Social Media Integration",
        "Google Ads Setup (€200 ad spend included)",
        "Priority Support",
        "Content Updates (2 hours/month)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "€1,999",
      period: "/month",
      description: "Complete digital marketing solution for established businesses",
      features: [
        "Everything in Professional",
        "Unlimited Products",
        "Full Digital Marketing Suite",
        "Social Media Management",
        "Google & Bing Ads (€500 ad spend included)",
        "Monthly Strategy Consultation",
        "Dedicated Account Manager",
        "Content Updates (5 hours/month)",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: "Additional Product Photos", price: "€25/photo" },
    { name: "Content Writing", price: "€50/hour" },
    { name: "Social Media Posts (10 pack)", price: "€150/month" },
    { name: "Google Review Management", price: "€99/month" },
    { name: "Email Marketing Campaigns", price: "€199/month" },
    { name: "Advanced Analytics Dashboard", price: "€149/month" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              {t("prices.title")}
            </h1>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              {t("prices.subtitle")}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card border-2 ${
                  plan.popular ? 'border-primary shadow-glow' : 'border-primary/30'
                } hover:border-primary transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      {t("prices.mostPopular")}
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-primary/70">{plan.period}</span>
                  </div>
                  <CardDescription className="text-primary/70">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-primary/90 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black' 
                        : 'bg-primary/20 hover:bg-primary/30 text-primary'
                    }`}
                    onClick={() => window.open('/appointment', '_blank')}
                  >
                    {t("prices.getStarted")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Calculator */}
          <PricingCalculator />

          {/* Add-ons Section */}
          <div className="bg-card border border-primary/30 rounded-lg p-8 mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              {t("prices.addons")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-background/50 rounded-lg border border-primary/20"
                >
                  <span className="text-primary font-medium">{addon.name}</span>
                  <span className="text-primary/70">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {t("prices.faq")}
            </h2>
            <div className="space-y-6">
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("prices.faqUpgrade")}
                </h3>
                <p className="text-primary/70">
                  {t("prices.faqUpgradeAnswer")}
                </p>
              </div>
              
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("prices.faqPayment")}
                </h3>
                <p className="text-primary/70">
                  {t("prices.faqPaymentAnswer")}
                </p>
              </div>
              
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t("prices.faqSetup")}
                </h3>
                <p className="text-primary/70">
                  {t("prices.faqSetupAnswer")}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {t("prices.readyTitle")}
            </h2>
            <p className="text-xl text-primary/70 mb-8">
              {t("prices.readySubtitle")}
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black shadow-hero"
              onClick={() => window.open('/appointment', '_blank')}
            >
              {t("prices.bookConsultation")}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};