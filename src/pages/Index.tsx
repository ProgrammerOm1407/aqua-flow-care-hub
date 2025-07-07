import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ContactFormProvider } from '@/context/ContactFormContext';

const Index = () => {
  return (
    <ContactFormProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Products />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </ContactFormProvider>
  );
};

export default Index;
