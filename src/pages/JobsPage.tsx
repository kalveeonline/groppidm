import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Briefcase, MapPin } from "lucide-react";

export const JobsPage = () => {
  const jobListings = [
    {
      title: "Senior SEO Specialist",
      department: "Marketing",
      location: "Kempen",
      type: "Part / Full time / Flexible",
      description: "We're looking for an experienced SEO specialist to lead our optimization strategies and help our clients rank higher in search results.",
      requirements: [
        "5+ years of SEO experience",
        "Proven track record of improving search rankings",
        "Experience with Google Analytics, Search Console",
        "Knowledge of technical SEO and content optimization",
        "Excellent Dutch and English communication skills"
      ]
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Kempen",
      type: "Part / Full time / Flexible",
      description: "Join our team to manage social media campaigns for multiple clients, create engaging content, and grow online communities.",
      requirements: [
        "3+ years of social media management experience",
        "Portfolio of successful social media campaigns",
        "Experience with Facebook Ads, Instagram, LinkedIn",
        "Creative content creation skills",
        "Strong analytical and reporting skills"
      ]
    },
    {
      title: "Web Developer",
      department: "Development",
      location: "Kempen",
      type: "Part / Full time / Flexible",
      description: "We need a talented web developer to create stunning, responsive websites for our SME clients using modern technologies.",
      requirements: [
        "3+ years of web development experience",
        "Proficiency in HTML, CSS, JavaScript, React",
        "Experience with WordPress and e-commerce platforms",
        "Understanding of UX/UI principles",
        "Problem-solving mindset"
      ]
    },
    {
      title: "Digital Marketing Consultant",
      department: "Strategy",
      location: "Kempen",
      type: "Part / Full time / Flexible",
      description: "Help SMEs develop and execute comprehensive digital marketing strategies to achieve their business goals.",
      requirements: [
        "4+ years in digital marketing consulting",
        "Strong knowledge of SEO, SEM, social media, email marketing",
        "Client management experience",
        "Analytical and strategic thinking",
        "Excellent presentation skills"
      ]
    },
    {
      title: "Content Creator",
      department: "Content",
      location: "Kempen",
      type: "Part / Full time / Flexible",
      description: "Create compelling content for websites, blogs, and social media that engages audiences and drives results.",
      requirements: [
        "2+ years of content writing experience",
        "SEO copywriting skills",
        "Portfolio of published work",
        "Native Dutch speaker with excellent English",
        "Understanding of digital marketing"
      ]
    },
    {
      title: "Graphic Designer",
      department: "Design",
      location: "Kempen",
      type: "Part / Full time / Flexible",
      description: "Design beautiful graphics, logos, and marketing materials for our diverse client portfolio.",
      requirements: [
        "3+ years of graphic design experience",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio showcasing brand identity work",
        "Understanding of web design principles",
        "Attention to detail"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Flexible working hours and remote work options",
    "Professional development and training budget",
    "Modern office spaces in prime locations",
    "Health insurance and wellness programs",
    "Team building events and company outings",
    "Latest technology and tools",
    "Collaborative and supportive work environment"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Join Our Growing Team
            </h1>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              Build your career with Belgium's leading digital marketing agency for SMEs. We're always looking for talented, passionate individuals to join our team.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Why Work at GROPPI?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Growth Opportunities
                  </h3>
                  <p className="text-primary/70">
                    We invest in our team's development with training programs, mentorship, and clear career progression paths.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Work-Life Balance
                  </h3>
                  <p className="text-primary/70">
                    Enjoy flexible working arrangements, including remote work options and flexible hours to suit your lifestyle.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Diverse Projects
                  </h3>
                  <p className="text-primary/70">
                    Work on exciting projects across various industries, gaining experience with different challenges and solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/30">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Great Team Culture
                  </h3>
                  <p className="text-primary/70">
                    Be part of a supportive, collaborative team that values innovation, creativity, and mutual respect.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Job Listings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobListings.map((job, index) => (
                <Card key={index} className="bg-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-primary mb-2">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-primary/70">
                          {job.description}
                        </CardDescription>
                      </div>
                      <Button className="bg-primary hover:bg-primary-dark shrink-0">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-primary/70">
                        <Briefcase className="h-4 w-4" />
                        <span className="text-sm">{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/70">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary/70">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-primary/70 text-sm">
                            <span className="text-primary mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-primary/30 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-2 p-4 bg-background/50 rounded-lg"
                >
                  <span className="text-primary text-lg">✓</span>
                  <span className="text-primary/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Application Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Submit Your Application</h3>
                  <p className="text-primary/70">
                    Send us your CV and cover letter explaining why you'd be a great fit for the role.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Initial Interview</h3>
                  <p className="text-primary/70">
                    We'll schedule a video call to discuss your experience and learn more about your goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Skills Assessment</h3>
                  <p className="text-primary/70">
                    Complete a practical assignment to demonstrate your skills relevant to the position.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Final Interview</h3>
                  <p className="text-primary/70">
                    Meet the team and discuss your potential role, responsibilities, and compensation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-card border border-primary/30 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-primary/70 mb-8">
              We're always interested in hearing from talented individuals. Send us your CV anyway!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero"
            >
              Send Spontaneous Application
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};