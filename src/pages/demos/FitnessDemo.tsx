import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Calendar, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FitnessDemo = () => {
  const navigate = useNavigate();

  const programs = [
    {
      icon: Dumbbell,
      name: "Strength Training",
      description: "Build muscle and increase strength with professional guidance",
      duration: "12 weeks",
      level: "All levels"
    },
    {
      icon: Users,
      name: "Group Classes",
      description: "High-energy classes with motivating instructors and community",
      duration: "Ongoing",
      level: "Beginner-Advanced"
    },
    {
      icon: Award,
      name: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals",
      duration: "Flexible",
      level: "All levels"
    }
  ];

  const trainers = [
    {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      name: "Tom Anderson",
      specialty: "Strength & Conditioning",
      experience: "8 years"
    },
    {
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800",
      name: "Sarah Johnson",
      specialty: "HIIT & Cardio",
      experience: "6 years"
    },
    {
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800",
      name: "Mike Peters",
      specialty: "Olympic Lifting",
      experience: "10 years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-16">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
            <Dumbbell className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fitness Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete gym management and member engagement platforms
          </p>
        </div>

        {/* Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-lg transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                  <program.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {program.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {program.description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div>
                    <span>{program.level}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Trainers */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Meet Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-2">
                    {trainer.specialty}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {trainer.experience} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Trial
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FitnessDemo;
