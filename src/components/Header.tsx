import { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { ContactFormContext } from '@/context/ContactFormContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setPrefill } = useContext(ContactFormContext);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleGetQuote = () => {
    setPrefill({ service: '' });
    scrollToSection('contact');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+15551234567';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/30">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@aquapure.com</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Free Installation • 24/7 Support • Lifetime Warranty
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient-hero">AquaPure</h1>
              <p className="text-xs text-muted-foreground">Water Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleGetQuote}>
              Get Quote
            </Button>
            <Button variant="hero" size="sm" onClick={handleCallNow}>
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border/50 shadow-lg">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
            <div className="pt-4 space-y-3">
              <Button variant="outline" size="sm" className="w-full" onClick={handleGetQuote}>
                Get Quote
              </Button>
              <Button variant="hero" size="sm" className="w-full" onClick={handleCallNow}>
                Call Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;