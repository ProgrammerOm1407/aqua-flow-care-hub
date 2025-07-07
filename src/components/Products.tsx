import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Droplets, Filter, Home, Building2 } from 'lucide-react';
import { useContext } from 'react';
import { ContactFormContext } from '@/context/ContactFormContext';

const Products = () => {
  const { setPrefill } = useContext(ContactFormContext);
  const products = [
    {
      id: 1,
      name: "AquaPure Home",
      subtitle: "Perfect for families",
      price: "$299",
      originalPrice: "$399",
      rating: 4.9,
      reviews: 1247,
      icon: Home,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format",
      features: [
        "5-Stage Filtration",
        "Removes 99.9% contaminants",
        "Easy installation",
        "2-year warranty",
        "50 gallon/day capacity"
      ],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "AquaPure Pro",
      subtitle: "Commercial grade",
      price: "$699",
      originalPrice: "$899",
      rating: 4.8,
      reviews: 634,
      icon: Building2,
      image: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=400&h=300&fit=crop&auto=format",
      features: [
        "7-Stage Filtration",
        "UV Sterilization",
        "Smart monitoring",
        "5-year warranty",
        "200 gallon/day capacity"
      ],
      badge: "Professional"
    },
    {
      id: 3,
      name: "AquaPure Compact",
      subtitle: "Space-saving design",
      price: "$199",
      originalPrice: "$249",
      rating: 4.7,
      reviews: 892,
      icon: Filter,
      image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&h=300&fit=crop&auto=format",
      features: [
        "3-Stage Filtration",
        "Compact design",
        "Countertop friendly",
        "1-year warranty",
        "25 gallon/day capacity"
      ],
      badge: "Compact"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-trust/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Products</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="text-gradient-hero block">Water Solution</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From compact home systems to commercial-grade solutions, we have the perfect water filter for every need and budget.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="relative group">
                {/* Badge */}
                <div className="absolute -top-3 left-6 z-10 bg-gradient-hero text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  {product.badge}
                </div>

                <div className="card-feature h-full transition-all duration-300 hover:scale-105">
                  {/* Product Image */}
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{product.name}</h3>
                      <p className="text-muted-foreground">{product.subtitle}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="pt-4 border-t border-border/30">
                      <div className="flex items-baseline space-x-3 mb-4">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                          Save {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%
                        </span>
                      </div>

                      <div className="space-y-2">
                        <Button
                          variant="hero"
                          className="w-full group"
                          onClick={() => {
                            setPrefill({
                              service: 'New System Installation',
                              message: `Interested in: ${product.name}`
                            });
                            scrollToContact();
                          }}
                        >
                          Get This System
                          <Droplets className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => {
                            const element = document.getElementById('products');
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-trust rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experts can design a custom water filtration system tailored to your specific needs and water quality requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => {
                setPrefill({ service: 'Custom Solution Consultation' });
                scrollToContact();
              }}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setPrefill({ service: 'Free Water Quality Test' });
                scrollToContact();
              }}
            >
              Water Quality Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;