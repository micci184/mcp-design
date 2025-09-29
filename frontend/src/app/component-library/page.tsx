'use client';

import Link from 'next/link';

export default function ComponentLibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Component Library</h1>
          <Link
            href="/"
            className="text-sm text-[#757575] hover:text-[#1E1E1E] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

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

          {/* Accordion / FAQ */}
          <Link href="/accordion-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Accordion / FAQ</h3>
              <p className="text-gray-600">Expandable FAQ items with open/closed states</p>
            </div>
          </Link>

          {/* Footer */}
          <Link href="/footer-test" className="block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Footer</h3>
              <p className="text-gray-600">Site footer with links and copyright</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
