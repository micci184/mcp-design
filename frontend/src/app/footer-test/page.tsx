'use client';

import { Footer } from '@/components/footer/Footer';

export default function FooterTest() {
  const customSections = [
    {
      title: 'Products',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Teams', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'API', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-0">
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Footer Component Test</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Component Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Logo and company name</li>
              <li>Social media links</li>
              <li>Multiple link sections with titles</li>
              <li>Copyright notice with current year</li>
              <li>Responsive layout</li>
              <li>Hover states for all links</li>
              <li>Border top: #D9D9D9</li>
              <li>Section title underline: #F5F5F5</li>
              <li>Figma design compliant</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Default Footer</h2>
            <p className="text-gray-600">
              The default footer includes Use cases, Explore, and Resources sections
              as shown in the Figma design.
            </p>
          </div>
        </div>
        
        {/* Default Footer */}
        <Footer />
        
        <div className="h-16"></div>
        
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
            <h2 className="text-xl font-semibold mb-4">Custom Footer</h2>
            <p className="text-gray-600">
              Footer with custom sections to demonstrate flexibility.
            </p>
          </div>
        </div>
        
        {/* Custom Footer */}
        <Footer sections={customSections} />
      </main>
    </div>
  );
}
