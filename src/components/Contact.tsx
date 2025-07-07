import { useState, useContext, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { ContactFormContext } from '@/context/ContactFormContext';

const Contact = () => {
  const { prefill, clearPrefill } = useContext(ContactFormContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefill) {
      setFormData((prev) => ({ ...prev, ...prefill }));
      clearPrefill();
    }
  }, [prefill, clearPrefill]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataGoogle = new FormData();
    formDataGoogle.append('entry.2005620554', formData.name); // Name
    formDataGoogle.append('entry.1045781291', formData.email); // Email
    formDataGoogle.append('entry.1065046570', formData.address); // Address
    formDataGoogle.append('entry.1166974658', formData.phone); // Phone
    formDataGoogle.append('entry.179799458', formData.service); // Service Needed
    formDataGoogle.append('entry.839337160', formData.message); // Message

    await fetch('https://docs.google.com/forms/d/e/1FAIpQLSe7QHAzbKERjIiWWWKgZv1qKIaSODhuRVt9H1TNTgYDRAO7Ig/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formDataGoogle,
    });

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "24/7 Emergency Line",
      action: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@aquapure.com",
      secondary: "Quick Response Guaranteed",
      action: "mailto:info@aquapure.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Water Street",
      secondary: "Springfield, ST 12345",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon-Fri: 8AM-6PM",
      secondary: "Sat: 9AM-4PM",
      action: ""
    }
  ];

  const serviceOptions = [
    "Free Water Quality Test",
    "New System Installation",
    "System Maintenance",
    "Emergency Repair",
    "Custom Solution Consultation",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-trust/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready for Clean
            <span className="text-gradient-hero block">Water Today?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our water quality experts for a free consultation and discover the perfect filtration solution for your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-feature">
            <h3 className="text-2xl font-bold mb-6">Request Your Free Quote</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-green-600 mb-2">Thank You!</h4>
                <p className="text-muted-foreground">
                  We've received your request and will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Address *
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Your address"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your water quality concerns or questions..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Get Free Quote
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * We respect your privacy and never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Our team is ready to help you find the perfect water solution. Reach out through any of these channels:
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-card rounded-xl border border-border/50">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-primary hover:text-primary-dark transition-colors font-medium"
                        >
                          {info.primary}
                        </a>
                      ) : (
                        <div className="text-primary font-medium">{info.primary}</div>
                      )}
                      <div className="text-sm text-muted-foreground">{info.secondary}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency CTA */}
            <div className="bg-gradient-hero rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Emergency Service?</h4>
              <p className="mb-4 opacity-90">
                Water quality emergency? Our technicians are available 24/7.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={() => { window.location.href = 'tel:+15551234567'; }}>
                Call Emergency Line
              </Button>
            </div>

            {/* Map placeholder */}
            <div className="bg-gradient-card rounded-xl p-6 border border-border/50">
              <h4 className="font-bold text-lg mb-4">Service Areas</h4>
              <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Serving 50+ Cities</p>
                  <p className="text-sm">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;