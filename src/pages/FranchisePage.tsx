import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, TrendingUp, Users, Award, Target, Briefcase, MapPin, DollarSign } from "lucide-react";

export const FranchisePage = () => {
  const benefits = [
    {
      icon: Award,
      title: "Proven Business Model",
      description: "Join a successful digital marketing brand with a track record of growth and satisfied clients across Belgium."
    },
    {
      icon: Users,
      title: "Comprehensive Training",
      description: "Receive extensive training in all aspects of digital marketing, sales, and business operations from our experienced team."
    },
    {
      icon: Target,
      title: "Marketing Support",
      description: "Benefit from national marketing campaigns, brand recognition, and lead generation support from head office."
    },
    {
      icon: TrendingUp,
      title: "Ongoing Development",
      description: "Access continuous professional development, new service offerings, and industry best practices to stay competitive."
    }
  ];

  const investment = [
    {
      item: "Initial Franchise Fee",
      amount: "€25,000",
      description: "One-time fee for franchise rights and initial training"
    },
    {
      item: "Equipment & Setup",
      amount: "€15,000 - €20,000",
      description: "Office equipment, software licenses, and marketing materials"
    },
    {
      item: "Working Capital",
      amount: "€30,000 - €40,000",
      description: "Initial operating expenses for the first 3-6 months"
    },
    {
      item: "Total Investment",
      amount: "€70,000 - €85,000",
      description: "Complete package to launch your franchise"
    }
  ];

  const support = [
    "Complete operational manual and systems",
    "Initial 4-week intensive training program",
    "Ongoing technical and sales support",
    "Access to proprietary software and tools",
    "National marketing campaigns",
    "Regular franchise meetings and networking",
    "Exclusive territory rights",
    "Business development assistance"
  ];

  const requirements = [
    "Business-minded entrepreneur with drive and ambition",
    "Strong communication and leadership skills",
    "Interest in digital marketing and technology",
    "Minimum liquid capital of €85,000",
    "Commitment to the GROPPI brand values",
    "Willingness to follow proven systems",
    "Customer-focused mindset",
    "Located or willing to relocate within Belgium"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Own a GROPPI Franchise
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed mb-8">
              Join Belgium's fastest-growing digital marketing franchise network. Build a profitable business helping SMEs succeed online with our proven systems and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-black hover:text-black shadow-hero"
                onClick={() => window.location.href = '/appointment'}
              >
                Request Franchise Information
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black"
                onClick={() => window.open('tel:+32041635005', '_self')}
              >
                Call for Details
              </Button>
            </div>
          </div>
        </div>

        {/* Why GROPPI Section */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Why Choose GROPPI Franchise?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardContent className="pt-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-primary/70 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Overview */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Investment Overview
            </h2>
            <Card className="bg-gradient-card border-primary/30">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  {investment.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-start p-4 bg-background/50 rounded-lg ${
                        item.item === "Total Investment" ? "border-2 border-primary" : ""
                      }`}
                    >
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          item.item === "Total Investment" ? "text-xl text-primary" : "text-primary"
                        }`}>
                          {item.item}
                        </h4>
                        <p className="text-sm text-primary/60 mt-1">{item.description}</p>
                      </div>
                      <div className={`text-right ml-4 ${
                        item.item === "Total Investment" ? "text-2xl font-bold text-primary" : "text-xl font-semibold text-primary"
                      }`}>
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary/70 text-center">
                    💡 Financing options available for qualified candidates
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support & Training */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                Comprehensive Support Package
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">What You Get</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {support.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-primary/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-primary/30">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Ideal Candidate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-primary/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Potential */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-3xl text-primary">Revenue Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">€150K+</div>
                    <div className="text-sm text-primary/70">First Year Revenue Target</div>
                  </div>
                  <div className="p-6 bg-background/50 rounded-lg border-2 border-primary">
                    <div className="text-3xl font-bold text-primary mb-2">€300K+</div>
                    <div className="text-sm text-primary/70">Year 2-3 Revenue Target</div>
                  </div>
                  <div className="p-6 bg-background/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">25-35%</div>
                    <div className="text-sm text-primary/70">Typical Profit Margin</div>
                  </div>
                </div>
                <p className="text-xs text-primary/60 text-center mt-6">
                  * Revenue projections are estimates based on current franchise performance. Actual results may vary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Available Territories */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Available Territories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {['West Flanders', 'Limburg', 'Walloon Brabant'].map((territory, index) => (
                <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardContent className="pt-8 text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary mb-2">{territory}</h3>
                    <p className="text-primary/70 text-sm mb-4">Prime territory available</p>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-black"
                      onClick={() => window.location.href = '/appointment'}
                    >
                      Inquire Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              The Franchise Process
            </h2>
            <div className="space-y-6">
              {[
                { step: 1, title: "Initial Inquiry", desc: "Submit your interest and receive our franchise information pack" },
                { step: 2, title: "Discovery Call", desc: "Discuss the opportunity with our franchise development team" },
                { step: 3, title: "Business Review", desc: "Review detailed financials, operations manual, and territory analysis" },
                { step: 4, title: "Meet the Team", desc: "Visit our headquarters and meet the leadership team" },
                { step: 5, title: "Application", desc: "Complete formal application and financial review" },
                { step: 6, title: "Agreement", desc: "Sign franchise agreement and secure your territory" },
                { step: 7, title: "Training", desc: "Complete 4-week intensive training program" },
                { step: 8, title: "Launch", desc: "Open your GROPPI franchise and start serving clients" }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-4 bg-card border border-primary/30 rounded-lg hover:border-primary transition-all">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-primary/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 text-center">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Ready to Build Your Digital Marketing Empire?
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  Join the GROPPI franchise network and build a thriving business in Belgium's growing digital marketing industry
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-black hover:text-black shadow-hero"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    Schedule Discovery Call
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-black"
                    onClick={() => window.open('mailto:franchise@groppi.be', '_self')}
                  >
                    Email: franchise@groppi.be
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};