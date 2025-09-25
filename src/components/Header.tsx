import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe, Monitor, ShoppingCart, Search, RefreshCw, MousePointer, Share2, Target, FileText, User, CheckCircle, Star, MessageSquare, Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import groppiLogo from "@/assets/groppi-logo-new.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "NL", name: "Nederlands" },
    { code: "FR", name: "Français" },
    { code: "EN", name: "English" }
  ];

  const serviceCategories = [
    {
      title: "BEING ONLINE",
      items: [
        { name: "Your own corporate identity", slug: "corporate-identity", icon: User, description: "Stand out with a unique corporate identity" },
        { name: "Website", slug: "website", icon: Monitor, description: "The online center of your business" },
        { name: "Webshop", slug: "webshop", icon: ShoppingCart, description: "24/7 online sales" },
        { name: "WebCheck", slug: "webcheck", icon: CheckCircle, description: "Always up to date with your performance" },
        { name: "Social Post Pro", slug: "social-post-pro", icon: Share2, description: "Professional on social media" },
        { name: "NetSync", slug: "netsync", icon: RefreshCw, description: "For a solid reputation" },
        { name: "Site", slug: "site", icon: Monitor, description: "The online platform for your business" }
      ]
    },
    {
      title: "TO BE FOUND", 
      items: [
        { name: "SEO", slug: "seo", icon: Search, description: "For a website that is easy to find" },
        { name: "SEA", slug: "sea", icon: MousePointer, description: "Advertising on Google and Bing" },
        { name: "Goudengids.be", slug: "goudengids", icon: FileText, description: "Choose the largest business directory" },
        { name: "NetSync", slug: "netsync-found", icon: RefreshCw, description: "Always correct data everywhere" }
      ]
    },
    {
      title: "TO STAND OUT",
      items: [
        { name: "Advertising on Goudengids.be", slug: "advertising-goudengids", icon: Target, description: "Conquer the largest business directory" },
        { name: "Advertising on social media", slug: "social-media-ads", icon: Share2, description: "Success on Facebook and Instagram" },
        { name: "Advertising with OMNI", slug: "omni-advertising", icon: Target, description: "On Google, Bing, Facebook and Instagram" },
        { name: "OMNI Customization", slug: "omni-customization", icon: Star, description: "Reach your customers everywhere" }
      ]
    },
    {
      title: "SATISFIED CUSTOMERS",
      items: [
        { name: "Site", slug: "customer-site", icon: Monitor, description: "Manage all your customers with 1 platform" },
        { name: "Google Review Cards", slug: "review-cards", icon: MessageSquare, description: "The best way to score" }
      ]
    }
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={groppiLogo} 
            alt="GROPPI Logo" 
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">GROPPI</span>
            <span className="text-xs text-muted-foreground">Digital Marketing Bureau</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors gap-1">
                {t('nav.services')}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[800px] bg-background border border-border/40 shadow-lg p-6">
              <div className="grid grid-cols-4 gap-6">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-3">
                    <DropdownMenuLabel className="text-primary font-semibold text-xs uppercase tracking-wide">
                      {category.title}
                    </DropdownMenuLabel>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <Link to={`/service/${item.slug}`} key={itemIndex}>
                          <DropdownMenuItem 
                            className="cursor-pointer hover:bg-muted/50 p-3 rounded-lg"
                          >
                            <div className="flex items-start gap-3">
                              <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div className="space-y-1">
                                <div className="font-medium text-sm text-foreground">{item.name}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                              </div>
                            </div>
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#offices" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            {t('nav.offices')}
          </a>
          <a href="#blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            {t('nav.blog')}
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center gap-2 mr-4">
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 p-2">
            <Youtube className="h-4 w-4" />
          </Button>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-foreground/80 gap-1">
                <Globe className="h-4 w-4" />
                {language}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border border-border/40 shadow-md">
              {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className="cursor-pointer hover:bg-muted"
              >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" className="text-foreground/80">
            {t('nav.myMedia')}
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            {t('nav.contact')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container px-4 py-4 space-y-3">
            <a href="#services" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Wat wil je?
            </a>
            <a href="#offices" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Onze kantoren
            </a>
            <a href="#blog" className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Blog
            </a>
            <div className="flex flex-col gap-2 pt-3 border-t border-border/40">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="justify-start text-foreground/80 gap-2">
                    <Globe className="h-4 w-4" />
                    {language}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background border border-border/40 shadow-md">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="cursor-pointer hover:bg-muted"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="sm" className="justify-start text-foreground/80">
                My Media
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Klaar voor een babbel?
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};