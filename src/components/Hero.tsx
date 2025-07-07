import { Button } from '@/components/ui/button';
import { Shield, Droplets, Award, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-water-filter.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-trust/30 to-primary-light/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full animate-wave"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Certified & Trusted</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Pure Water,
                <span className="text-gradient-hero block">Healthy Life</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Transform your tap water into pure, healthy drinking water with our premium filtration systems. Professional installation and lifetime support included.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-2 mx-auto">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Contaminants Removed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-2 mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-accent">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-2 mx-auto">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">25 Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToContact}
                className="group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-hero" 
                size="xl"
                onClick={scrollToProducts}
              >
                View Products
              </Button>
            </div>

            {/* Additional Trust Elements */}
            <div className="flex items-center space-x-6 pt-6 border-t border-border/30">
              <div className="text-sm text-muted-foreground">
                ✓ Free Installation
              </div>
              <div className="text-sm text-muted-foreground">
                ✓ 24/7 Support
              </div>
              <div className="text-sm text-muted-foreground">
                ✓ Lifetime Warranty
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Premium Water Filter System"
                className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg card-float max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Pure Filtration</div>
                    <div className="text-xs text-muted-foreground">NSF Certified</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg card-float max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Lifetime Warranty</div>
                    <div className="text-xs text-muted-foreground">Full Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;