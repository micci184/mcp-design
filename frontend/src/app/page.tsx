'use client';

import Link from 'next/link';
import { Header } from '@/components/header/Header';
import { HeroSection } from '@/components/hero/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        onSignIn={() => alert('Sign in clicked!')}
        onRegister={() => alert('Register clicked!')}
      />
      
      <HeroSection
        title="Simple Design System"
        subtitle="Everything you need to build your next project"
        align="center"
      />
      
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Component Library</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Button Component */}
          <Link href="/button-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Button</h3>
              <p className="text-gray-600">Primary and Neutral variants with different sizes and states</p>
            </div>
          </Link>
          
          {/* Header Component */}
          <Link href="/header-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Header</h3>
              <p className="text-gray-600">Navigation header with logo and authentication buttons</p>
            </div>
          </Link>
          
          {/* Hero Section */}
          <Link href="/hero-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Hero Section</h3>
              <p className="text-gray-600">Hero section with title, subtitle, and alignment options</p>
            </div>
          </Link>
          
          {/* Pricing Card */}
          <Link href="/pricing-card-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Pricing Card</h3>
              <p className="text-gray-600">Pricing cards with Stroke and Brand variants</p>
            </div>
          </Link>
          
          {/* Pricing Section */}
          <Link href="/pricing-section-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Pricing Section</h3>
              <p className="text-gray-600">Complete pricing section with toggle and cards</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
