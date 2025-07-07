import { Button } from '@/components/ui/button';
import { Wrench, Clock, Shield, Users, CheckCircle, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation by certified technicians",
      features: [
        "Free site assessment",
        "Professional plumbing connection",
        "System testing & calibration",
        "Clean-up and disposal",
        "30-day satisfaction guarantee"
      ],
      price: "Free with purchase",
      duration: "2-3 hours"
    },
    {
      icon: Clock,
      title: "Regular Maintenance",
      description: "Keep your system running at peak performance",
      features: [
        "Filter replacement reminders",
        "Annual system inspection",
        "Performance optimization",
        "Water quality testing",
        "Priority scheduling"
      ],
      price: "$99/year",
      duration: "1 hour"
    },
    {
      icon: Shield,
      title: "Repair & Support",
      description: "24/7 emergency support and repairs",
      features: [
        "24/7 emergency hotline",
        "Same-day service",
        "Genuine replacement parts",
        "Warranty coverage",
        "Remote diagnostics"
      ],
      price: "From $49",
      duration: "1-2 hours"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years experience"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Same-day service and emergency support"
    },
    {
      icon: Shield,
      title: "Guaranteed Work",
      description: "100% satisfaction guarantee on all services"
    },
    {
      icon: CheckCircle,
      title: "Quality Parts",
      description: "Only genuine, certified replacement components"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-trust/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full border border-accent/20 mb-6">
            <Wrench className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Water
            <span className="text-gradient-hero block">Care Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance and emergency repairs, we provide comprehensive support for your water filtration system throughout its lifetime.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-feature hover-lift">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-6 mx-auto shadow-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group">
                  Book Service
                  <Phone className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-card rounded-3xl p-12 border border-border/50 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose AquaPure Services?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality service and support for your water filtration system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 mx-auto">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Service CTA */}
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
          <p className="mb-6 opacity-90">
            Our technicians are available 24/7 for emergency repairs and urgent water quality issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Call Emergency Line
            </Button>
            <Button variant="outline-hero" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;