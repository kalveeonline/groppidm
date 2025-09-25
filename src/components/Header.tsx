import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import groppiLogo from "@/assets/groppi-logo.jpg";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("NL");

  const languages = [
    { code: "NL", name: "Nederlands" },
    { code: "FR", name: "Français" },
    { code: "EN", name: "English" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={groppiLogo} 
            alt="GROPPI Logo" 
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">GROPPI</span>
            <span className="text-xs text-muted-foreground">Digital Marketing Bureau</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Wat wil je?
          </a>
          <a href="#offices" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Onze kantoren
          </a>
          <a href="#blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-foreground/80 gap-1">
                <Globe className="h-4 w-4" />
                {selectedLanguage}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border border-border/40 shadow-md">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className="cursor-pointer hover:bg-muted"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm" className="text-foreground/80">
            My Media
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            Klaar voor een babbel?
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
                    {selectedLanguage}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-background border border-border/40 shadow-md">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
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