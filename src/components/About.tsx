import { Button } from '@/components/ui/button';
import { Award, Users, MapPin, Heart, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience", icon: Award },
    { number: "5000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Service Areas", icon: MapPin },
    { number: "99.9%", label: "Customer Satisfaction", icon: Heart }
  ];

  const certifications = [
    "NSF Certified",
    "EPA Approved",
    "WQA Member",
    "Licensed Plumbers",
    "Insured & Bonded",
    "Better Business Bureau A+"
  ];

  const teamValues = [
    {
      title: "Quality First",
      description: "We never compromise on the quality of our products or services."
    },
    {
      title: "Customer Care",
      description: "Your satisfaction and health are our top priorities."
    },
    {
      title: "Expert Knowledge",
      description: "Continuous training ensures we stay ahead of industry standards."
    },
    {
      title: "Honest Pricing",
      description: "Transparent, competitive pricing with no hidden fees."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-trust/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 mb-6">
            <Heart className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">About Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            25 Years of Clean
            <span className="text-gradient-hero block">Water Excellence</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 1999, AquaPure has been the trusted choice for families and businesses seeking the highest quality water filtration solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center card-feature">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-6 mx-auto shadow-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AquaPure was founded by water quality engineer John Martinez after he witnessed the health impact of contaminated water in rural communities. What started as a mission to provide clean water to one neighborhood has grown into a comprehensive water solutions company serving thousands of families.
                </p>
                <p>
                  Today, we combine cutting-edge filtration technology with personalized service to ensure every customer has access to the purest, healthiest water possible. Our team of certified technicians and water quality experts work tirelessly to exceed your expectations.
                </p>
                <p>
                  We believe clean water isn't a luxury—it's a fundamental right. That's why we're committed to making our premium filtration systems accessible and affordable for every household.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Our Values</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {teamValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">{value.title}</div>
                      <div className="text-xs text-muted-foreground">{value.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format"
                alt="Our team of water quality experts"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Floating certification badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg card-float max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Certified Experts</div>
                  <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-card rounded-3xl p-12 border border-border/50 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Certifications & Credentials</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium">{cert}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg">
              View All Certifications
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-trust rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Family?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the AquaPure difference with a free water quality assessment and personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Schedule Free Assessment
            </Button>
            <Button variant="outline" size="lg">
              Read Customer Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;