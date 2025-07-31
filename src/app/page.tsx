import dynamic from 'next/dynamic';

// Dynamically import client components to avoid SSR issues
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const Features = dynamic(() => import('@/components/sections/Features'), { ssr: false });
const Pricing = dynamic(() => import('@/components/sections/Pricing'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: false });
const FAQ = dynamic(() => import('@/components/sections/FAQ'), { ssr: false });
const Footer = dynamic(() => import('@/components/sections/Footer'), { ssr: false });
const ClientAnimationWrapper = dynamic(() => import('@/components/ClientAnimationWrapper'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ClientAnimationWrapper>
        <div>
          <Hero />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </ClientAnimationWrapper>
    </main>
  );
}