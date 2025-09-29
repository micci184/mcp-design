'use client';

import { Header } from '@/components/header/Header';
import { HeroSection } from '@/components/hero/HeroSection';
import { PricingSection } from '@/components/pricing-section/PricingSection';
import { FAQSection } from '@/components/accordion/FAQSection';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        onSignIn={() => alert('Sign in clicked!')}
        onRegister={() => alert('Register clicked!')}
      />
      
      <HeroSection
        title="Simple Design System"
        subtitle="Everything you need to build your next project"
        align="center"
      />
      
      <PricingSection />
      
      <FAQSection />
      
      <Footer />
    </div>
  );
}
