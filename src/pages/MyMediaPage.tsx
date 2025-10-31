import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer, 
  Share2,
  Calendar,
  FileText,
  Download
} from "lucide-react";

export const MyMediaPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Functionality",
      description: "This is a demo. Contact us to access your dashboard.",
    });
  };

  const stats = [
    {
      icon: Users,
      label: "Total Visitors",
      value: "12,543",
      change: "+12.5%",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      label: "Page Views",
      value: "45,231",
      change: "+8.2%",
      color: "text-green-500"
    },
    {
      icon: MousePointer,
      label: "Click Rate",
      value: "3.42%",
      change: "+2.1%",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      label: "Conversion Rate",
      value: "2.8%",
      change: "+5.3%",
      color: "text-orange-500"
    }
  ];

  const recentReports = [
    { title: "Monthly Performance Report - November 2024", date: "Dec 1, 2024", size: "2.4 MB" },
    { title: "SEO Analysis Report", date: "Nov 28, 2024", size: "1.8 MB" },
    { title: "Social Media Metrics", date: "Nov 25, 2024", size: "3.1 MB" },
    { title: "Website Analytics Summary", date: "Nov 20, 2024", size: "1.2 MB" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        {/* Hero Section */}
        <div className="container px-4 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-hero">
              <BarChart className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              My Media Dashboard
            </h1>
            <p className="text-xl text-primary/70 leading-relaxed">
              Access your digital marketing performance metrics, reports, and campaign analytics all in one place
            </p>
          </div>
        </div>

        {/* Login Section */}
        <div className="container px-4 mb-16">
          <div className="max-w-md mx-auto">
            <Card className="shadow-elegant border-primary/30 bg-card">
              <CardHeader className="border-b border-primary/20">
                <CardTitle className="text-2xl text-primary">Client Portal Login</CardTitle>
                <CardDescription className="text-primary/60">
                  Enter your credentials to access your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      className="bg-input border-primary/30 text-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-primary">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      placeholder="••••••••"
                      className="bg-input border-primary/30 text-primary focus:border-primary"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-hero text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Access Dashboard
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <Button 
                    variant="link" 
                    className="text-primary hover:text-primary-dark"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    Don't have access? Contact us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Demo Stats Preview */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              What You'll See in Your Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                    <p className="text-primary/70 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Reports Section */}
        <div className="container px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Monthly Reports & Analytics
            </h2>
            <Card className="bg-card border-primary/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {recentReports.map((report, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors border border-primary/10"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{report.title}</h4>
                          <p className="text-sm text-primary/60">{report.date} • {report.size}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => toast({
                          title: "Demo Mode",
                          description: "Login to download your reports"
                        })}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Preview */}
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Dashboard Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Campaign Calendar</CardTitle>
                  <CardDescription className="text-primary/70">
                    View and manage all your scheduled campaigns and content posts in one place
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Share2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Social Media Insights</CardTitle>
                  <CardDescription className="text-primary/70">
                    Track engagement, reach, and performance across all your social media channels
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-primary/30 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">Performance Analytics</CardTitle>
                  <CardDescription className="text-primary/70">
                    Comprehensive analytics with actionable insights to grow your business
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container px-4 mt-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-primary/30 text-center">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Ready to Access Your Data?
                </h2>
                <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
                  Contact us today to get your personalized My Media dashboard set up with full access to your campaign analytics
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hero"
                    onClick={() => window.location.href = '/appointment'}
                  >
                    Schedule Setup Call
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open('tel:+32494311119', '_self')}
                  >
                    Call Us Now
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