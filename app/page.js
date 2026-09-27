import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Services from '@/components/Services';
import Domains from '@/components/Domains';
import Products from '@/components/Products';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-paper">
      <Header />
      <Hero />
      <About />
      <Vision />
      <Services />
      <Domains />
      <Products />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
