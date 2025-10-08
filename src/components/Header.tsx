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
import { useLanguage, SUPPORTED_LANGUAGES } from "@/contexts/LanguageContext";
import groppiLogo from "@/assets/groppi-logo-new.png";
import groppiLogoCircle from "@/assets/groppi-logo-circle.png";
import groppiTextLogo from "@/assets/groppi-text-logo.jpg";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    <header className="bg-background sticky top-0 z-50 w-full border-b border-primary/30 shadow-lg shadow-primary/10">
      {/* Row 1: Company Name with Social Media, My Media, Contact, Language */}
      <div className="border-b border-primary/20">
        <div className="container flex h-14 items-center justify-between px-4">
          {/* Company Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={groppiLogoCircle} 
              alt="GROPPI Logo" 
              className="h-12 w-12 object-contain group-hover:scale-105 transition-all duration-300"
            />
            <div className="flex flex-col">
              <img 
                src={groppiTextLogo} 
                alt="GROPPI" 
                className="h-5 w-auto object-contain"
              />
              <span className="text-[10px] text-primary/70">Digital Marketing Bureau</span>
            </div>
          </Link>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Social Media Icons with Brand Colors - Before Language Selector */}
            <div className="flex items-center gap-1 pr-3 border-r border-primary/30">
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Facebook className="h-6 w-6 text-[hsl(var(--facebook))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Twitter className="h-6 w-6 text-[hsl(var(--twitter))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Instagram className="h-6 w-6 text-[hsl(var(--instagram))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Linkedin className="h-6 w-6 text-[hsl(var(--linkedin))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Youtube className="h-6 w-6 text-[hsl(var(--youtube))] group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light gap-1 text-sm">
                  <Globe className="h-4 w-4" />
                  {language}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover border border-primary/40 shadow-lg z-[100]">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="cursor-pointer hover:bg-muted text-primary hover:text-primary-light"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light text-sm">
              {t('nav.myMedia')}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/30">
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Row 2: Main Navigation Menu */}
      <div className="hidden md:block relative">
        {/* Decorative 45-degree diagonal line from bottom left */}
        <div className="absolute left-0 bottom-0 w-32 h-full overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[200%] h-[2px] bg-gradient-to-r from-primary via-primary-light to-transparent rotate-45 origin-bottom-left shadow-glow"></div>
        </div>
        
        
        <div className="container px-4 relative z-10">
          <nav className="flex items-center justify-center space-x-8 h-14">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-base font-semibold text-primary hover:text-primary-light transition-colors gap-1">
                  {t('nav.services')}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[800px] bg-popover border border-primary/40 shadow-lg p-6 z-[100]">
                <div className="grid grid-cols-4 gap-6">
                  {serviceCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-3">
                      <DropdownMenuLabel className="text-primary font-bold text-xs uppercase tracking-wide">
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
                                  <div className="font-medium text-sm text-primary">{item.name}</div>
                                  <div className="text-xs text-primary/60">{item.description}</div>
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
            <a href="/prices" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.prices')}
            </a>
            <a href="/blog" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.blog')}
            </a>
            <a href="/about" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.aboutUs')}
            </a>
            <a href="/jobs" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.jobs')}
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-primary/30 bg-background">
          <div className="container px-4 py-4 space-y-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 pb-3 border-b border-primary/20">
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Facebook className="h-6 w-6 text-[hsl(var(--facebook))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Twitter className="h-6 w-6 text-[hsl(var(--twitter))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Instagram className="h-6 w-6 text-[hsl(var(--instagram))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Linkedin className="h-6 w-6 text-[hsl(var(--linkedin))] group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-transparent p-2 group">
                <Youtube className="h-6 w-6 text-[hsl(var(--youtube))] group-hover:scale-110 transition-transform" />
              </Button>
            </div>
            
            <a href="#services" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.services')}
            </a>
            <a href="/prices" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.prices')}
            </a>
            <a href="/blog" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.blog')}
            </a>
            <a href="/about" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.aboutUs')}
            </a>
            <a href="/jobs" target="_blank" rel="noopener noreferrer" className="block text-sm font-semibold text-primary hover:text-primary-light transition-colors">
              {t('nav.jobs')}
            </a>
            <div className="flex flex-col gap-2 pt-3 border-t border-primary/20">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="justify-start text-primary gap-2">
                    <Globe className="h-4 w-4" />
                    {language}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-popover border border-primary/40 shadow-md z-[100]">
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className="cursor-pointer hover:bg-muted text-primary"
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="sm" className="justify-start text-primary">
                {t('nav.myMedia')}
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg shadow-primary/30">
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};