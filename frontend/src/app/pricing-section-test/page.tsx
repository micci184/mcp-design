'use client';

import { PricingSection } from '@/components/pricing-section/PricingSection';

export default function PricingSectionTest() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <h1 className="text-3xl font-bold py-8 text-center">Pricing Section Test</h1>
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Component Features */}
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Component Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Navigation Pills: Monthly/Yearly toggle + Compare Plans link</li>
              <li>Three pricing cards with different variants</li>
              <li>Dynamic price switching between Monthly and Yearly</li>
              <li>Responsive grid layout (1 column on mobile, 3 on desktop)</li>
              <li>Center card uses Brand variant for emphasis</li>
              <li>Active pill has #F5F5F5 background</li>
              <li>Figma design compliant</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
