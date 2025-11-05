import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import koenImage from "@/assets/team/koen-van-gorp.jpg";
import lokmanImage from "@/assets/team/lokman-dinc.jpg";
import officeExterior from "@/assets/office-exterior.jpg";
import officeNight from "@/assets/office-night.jpg";

export const AboutUsPage = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business growth and success."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and transparency."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions for your business."
    }
  ];

  const stats = [
    { number: "158+", label: "Happy Clients" },
    { number: "34+", label: "Websites Launched" },
    { number: "29+", label: "Active Campaigns" }
  ];

  const team = [
    {
      name: "Koen van gorp",
      role: "Founder and CEO",
      description: "Strategic leader driving digital transformation and business growth.",
      image: koenImage
    },
    {
      name: "Lokman Dinç",
      role: "Managing Partner",
      description: "Innovative partner focused on delivering excellence in digital marketing.",
      image: lokmanImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Empowering SMEs to Succeed Online Since 2015
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              GROPPI Digital Marketing Bureau is Belgium's trusted partner for small and medium-sized enterprises 
              looking to establish a strong online presence and grow their business through digital channels.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-card border-y border-primary/30 py-12 mb-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container px-4 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-primary/70 text-justify">
                <p>
                  Founded in 2015, GROPPI began with a simple mission: to help small and medium-sized businesses 
                  harness the power of digital marketing. What started as a web design studio has evolved into a 
                  full-service digital marketing agency serving clients across Belgium and beyond.
                </p>
                <p>
                  Over the years, we've helped thousands of businesses establish their online presence, from creating 
                  their first website to managing comprehensive digital marketing campaigns. Our team has grown, but 
                  our commitment to personalized service and measurable results remains unchanged.
                </p>
                <p>
                  Today, we're proud to be one of Belgium's leading digital marketing agencies for SMEs, offering 
                  everything from website development and SEO to social media management and paid advertising.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={officeExterior}
                alt="GROPPI Office exterior"
                className="rounded-lg shadow-lg"
              />
              <img 
                src={officeNight}
                alt="GROPPI Office at night"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="container px-4 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary text-center mb-3">
                    {value.title}
                  </h3>
                  <p className="text-primary/70 text-center text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="container px-4 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Meet Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-primary/30 overflow-hidden hover:border-primary transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary/60 text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-primary/70 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="bg-card border-y border-primary/30 py-16 mb-16">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Our Locations
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Antwerp</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Brussels</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary">Ghent</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container px-4">
          <div className="bg-gradient-card border border-primary/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-primary/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground hover:text-black shadow-hero"
                onClick={() => window.location.href = '/appointment'}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.location.href = '/#services'}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};