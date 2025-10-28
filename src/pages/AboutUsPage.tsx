import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import koenImage from "@/assets/team/koen-van-gorp.jpg";
import lokmanImage from "@/assets/team/lokman-dinc.jpg";

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
    { number: "3,780+", label: "Happy Clients" },
    { number: "1,188", label: "Websites Launched" },
    { number: "440", label: "Active Campaigns" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const team = [
    {
      name: "Koen van gorp",
      role: "Managing Partner",
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
              Empowering SMEs to Succeed Online Since 2005
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="space-y-4 text-primary/70">
                <p>
                  Founded in 2005, GROPPI began with a simple mission: to help small and medium-sized businesses 
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                alt="Office environment"
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
                <h3 className="text-xl font-semibold text-primary mb-2">Antwerp</h3>
                <p className="text-primary/70 text-sm">
                  Main Office<br />
                  Meir 45<br />
                  2000 Antwerpen
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Brussels</h3>
                <p className="text-primary/70 text-sm">
                  Satellite Office<br />
                  Avenue Louise 123<br />
                  1050 Brussels
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Ghent</h3>
                <p className="text-primary/70 text-sm">
                  Regional Office<br />
                  Korenmarkt 7<br />
                  9000 Gent
                </p>
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
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero"
                onClick={() => window.open('/appointment', '_blank')}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
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