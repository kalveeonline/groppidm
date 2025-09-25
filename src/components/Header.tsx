import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">FCR Media</span>
            <span className="text-xs text-muted-foreground">Marketing Services</span>
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