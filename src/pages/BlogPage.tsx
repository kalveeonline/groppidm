import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const BlogPage = () => {
  const blogPosts = [
    {
      title: "10 Essential SEO Tips for Small Businesses in 2025",
      excerpt: "Discover the latest SEO strategies that can help your small business rank higher in search results and attract more customers.",
      category: "SEO",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop"
    },
    {
      title: "The Power of Social Media Marketing for Local Businesses",
      excerpt: "Learn how to leverage social media platforms to build your brand, engage with customers, and drive sales in your local market.",
      category: "Social Media",
      date: "March 10, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop"
    },
    {
      title: "Website Design Trends That Convert Visitors into Customers",
      excerpt: "Explore the latest web design trends and best practices that create engaging user experiences and boost conversion rates.",
      category: "Web Design",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop"
    },
    {
      title: "Google Ads vs. Facebook Ads: Which is Right for Your Business?",
      excerpt: "A comprehensive comparison of the two major advertising platforms to help you make informed decisions about your ad spend.",
      category: "Digital Advertising",
      date: "February 28, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      title: "E-commerce Success: Building a Webshop That Sells",
      excerpt: "Essential strategies for creating an effective online store that provides excellent user experience and maximizes sales.",
      category: "E-commerce",
      date: "February 20, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop"
    },
    {
      title: "Content Marketing: Creating Value for Your Audience",
      excerpt: "Discover how to develop a content marketing strategy that attracts, engages, and converts your target audience.",
      category: "Content Marketing",
      date: "February 15, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop"
    }
  ];

  const categories = ["All", "SEO", "Social Media", "Web Design", "Digital Advertising", "E-commerce", "Content Marketing"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Digital Marketing Insights & Tips
            </h1>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              Stay updated with the latest trends, strategies, and best practices in digital marketing
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-primary hover:bg-primary-dark" 
                  : "border-primary/30 text-primary hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden border-primary/30 bg-card hover:border-primary transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div 
                className="h-64 md:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${blogPosts[0].image})` }}
              />
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-primary/70 text-sm">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-primary/70 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-primary/60 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary-dark w-fit">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-primary/30 bg-card hover:border-primary hover:shadow-glow transition-all duration-300 group cursor-pointer"
              >
                <div 
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-primary/70">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-primary/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-card border border-primary/30 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-primary/70 mb-6 max-w-2xl mx-auto">
              Get the latest digital marketing insights, tips, and strategies delivered directly to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-primary/30 rounded-lg text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};