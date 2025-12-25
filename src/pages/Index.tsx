import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Home';
import About from '@/components/About';
import Services from '@/components/Services';
import CertificationsSection from '@/components/ui/CertificationsSection';
import SectorsSection from '@/components/SectorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-saas-black text-white">
      <Navbar />

      <main>
        {/* Home / Hero */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Certifications */}
        <section id="certifications">
          <CertificationsSection />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Sectors */}
        <section id="sectors">
          <SectorsSection />
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FaqSection />
        </section>

        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
