'use client';

import { PricingCard } from '@/components/pricing-card/PricingCard';

export default function PricingCardTest() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <main className="max-w-[1200px] mx-auto px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Pricing Card Component Test</h1>
        
        {/* Pricing Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Stroke Variant */}
          <PricingCard
            title="Basic Plan"
            price="29"
            currency="$"
            period="/ mo"
            features={[
              '5 Projects',
              '10 GB Storage',
              'Basic Support',
              'API Access',
              'Custom Domain',
            ]}
            buttonText="Get Started"
            variant="stroke"
            onButtonClick={() => alert('Basic Plan selected!')}
          />
          
          {/* Brand Variant */}
          <PricingCard
            title="Pro Plan"
            price="50"
            currency="$"
            period="/ mo"
            features={[
              'Unlimited Projects',
              '100 GB Storage',
              'Priority Support',
              'Advanced API Access',
              'Multiple Custom Domains',
            ]}
            buttonText="Get Started"
            variant="brand"
            onButtonClick={() => alert('Pro Plan selected!')}
          />
          
          {/* Another Stroke Variant */}
          <PricingCard
            title="Enterprise"
            price="99"
            currency="$"
            period="/ mo"
            features={[
              'Everything in Pro',
              'Unlimited Storage',
              'Dedicated Support',
              'Custom Integrations',
              'SLA Guarantee',
            ]}
            buttonText="Contact Sales"
            variant="stroke"
            onButtonClick={() => alert('Enterprise Plan selected!')}
          />
        </div>
        
        {/* Component Features */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Component Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Two variants: Stroke (white background) and Brand (dark background)</li>
            <li>Title: 24px, Semi-bold, Inter font</li>
            <li>Price: 48px for number, 24px for currency</li>
            <li>Features list with 5 items</li>
            <li>CTA button at bottom</li>
            <li>Width: 300px fixed</li>
            <li>Padding: 32px</li>
            <li>Border radius: 8px</li>
            <li>Figma design compliant</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
