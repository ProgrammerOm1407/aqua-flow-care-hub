import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Water Filter Installation",
    "System Maintenance",
    "Emergency Repairs",
    "Water Quality Testing",
    "Custom Solutions"
  ];

  const products = [
    "Home Water Filters",
    "Commercial Systems",
    "Compact Solutions",
    "Replacement Filters",
    "Water Accessories"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Informed About Water Quality</h3>
              <p className="text-secondary-foreground/80">
                Get expert tips, product updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white border-white/20 text-foreground"
              />
              <Button variant="hero" className="px-6">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AquaPure</h1>
                <p className="text-xs text-secondary-foreground/80">Water Solutions</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              For over 25 years, AquaPure has been your trusted partner in providing clean, healthy water solutions. 
              We're committed to excellence in every product we sell and every service we provide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@aquapure.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Water Street, Springfield, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-secondary-foreground/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80 hover:text-white transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-secondary-foreground/80 hover:text-white transition-colors cursor-pointer">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-secondary-foreground/80 text-sm">
              © 2024 AquaPure Water Solutions. All rights reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-secondary-foreground/80">Follow us:</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-6 text-white text-sm">
            <span className="hidden md:inline">🚨 Emergency Water Service:</span>
            <a href="tel:+15551234567" className="font-bold hover:underline">
              Call +1 (555) 123-4567
            </a>
            <span className="hidden md:inline">• Available 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;