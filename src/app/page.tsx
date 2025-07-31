import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/Navbar';
import ClientAnimationWrapper from '@/components/ClientAnimationWrapper';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientAnimationWrapper>
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Footer />
      </ClientAnimationWrapper>
    </main>
  );
}