'use client';

import { HeroSection } from '@/components/hero/HeroSection';
import { useState } from 'react';

export default function Home() {
  const [alignment, setAlignment] = useState<'left' | 'center' | 'right'>('center');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Build Amazing Products"
        subtitle="Create beautiful, modern applications with our design system"
        ctaText="Get Started"
        secondaryCtaText="Learn More"
        align={alignment}
        onCtaClick={() => alert('Get Started clicked!')}
        onSecondaryCtaClick={() => alert('Learn More clicked!')}
      />
      
      {/* Test Controls */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Hero Section Test Controls</h2>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Alignment Options</h3>
          <div className="flex gap-4">
            <button
              onClick={() => setAlignment('left')}
              className={`px-4 py-2 rounded ${alignment === 'left' ? 'bg-[#2C2C2C] text-white' : 'bg-gray-200'}`}
            >
              Left
            </button>
            <button
              onClick={() => setAlignment('center')}
              className={`px-4 py-2 rounded ${alignment === 'center' ? 'bg-[#2C2C2C] text-white' : 'bg-gray-200'}`}
            >
              Center
            </button>
            <button
              onClick={() => setAlignment('right')}
              className={`px-4 py-2 rounded ${alignment === 'right' ? 'bg-[#2C2C2C] text-white' : 'bg-gray-200'}`}
            >
              Right
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Component Features</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Title: 72px, Bold, Inter font</li>
            <li>Subtitle: 32px, Regular, Inter font</li>
            <li>Background: #F5F5F5</li>
            <li>Padding: 160px vertical, 64px horizontal</li>
            <li>Max width: 1200px</li>
            <li>Figma design compliant</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
