import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  Building2
} from "lucide-react";

export const ContactPage = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+32 494 31 11 19",
      action: () => window.open('tel:+32494311119', '_self'),
      buttonText: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      detail: "Chat with us instantly",
      action: () => window.open('https://wa.me/32494311119', '_blank'),
      buttonText: "Open WhatsApp"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@groppi.be",
      action: () => window.open('mailto:info@groppi.be', '_self'),
      buttonText: "Send Email"
    },
    {
      icon: Send,
      title: "Book Appointment",
      detail: "Schedule a free consultation",
      action: () => window.location.href = '/appointment',
      buttonText: "Book Now"
    }
  ];

  const offices = [
    {
      city: "Antwerp",
      type: "Main Office",
      icon: Building2
    },
    {
      city: "Brussels",
      type: "Branch Office",
      icon: Building2
    },
    {
      city: "Ghent",
      type: "Regional Office",
      icon: Building2
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              Ready to take your digital presence to the next level? Our team is here to help. Choose your preferred way to connect with us.
            </p>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-hero cursor-pointer group"
                  onClick={method.action}
                >
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
                        <method.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                    <p className="text-primary/70 text-sm mb-4">{method.detail}</p>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {method.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-card/30 py-16 mb-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Our Locations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <office.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{office.city}</h3>
                      <p className="text-primary/70">{office.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Address */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <Card className="bg-gradient-card border-primary/30">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Business Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                        <span className="text-primary font-semibold">{schedule.day}</span>
                        <span className="text-primary/70">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Main Address */}
              <Card className="bg-gradient-card border-primary/30">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Head Office</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-background/50 rounded-lg">
                      <p className="text-primary font-semibold mb-2">GROPPI Digital Marketing Bureau</p>
                      <p className="text-primary/70">Het Steeke 5A</p>
                      <p className="text-primary/70">2330 Merksplas</p>
                      <p className="text-primary/70">Belgium</p>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                      onClick={() => window.open('https://maps.google.com/?q=Het+Steeke+5A+2330+Merksplas', '_blank')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Open in Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Quick Questions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">Response Time?</h4>
                  <p className="text-primary/70 text-sm">
                    We typically respond to all inquiries within 24 hours on business days
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">Free Consultation?</h4>
                  <p className="text-primary/70 text-sm">
                    Yes! We offer a free initial consultation to discuss your digital marketing needs
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">Emergency Support?</h4>
                  <p className="text-primary/70 text-sm">
                    For urgent matters, call us directly or use WhatsApp for faster response
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardContent className="pt-6 pb-6">
                  <h4 className="text-lg font-bold text-primary mb-2">Meeting Options?</h4>
                  <p className="text-primary/70 text-sm">
                    We offer in-person, video call, or phone consultations based on your preference
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 text-center">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Ready to Start Your Digital Journey?
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you achieve your digital marketing goals and grow your business online
                </p>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-hero text-primary-foreground hover:text-black shadow-elegant transition-all duration-300 hover:scale-105 font-semibold"
                  onClick={() => window.location.href = '/appointment'}
                >
                  Book Your Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};