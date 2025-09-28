'use client';

import { FAQSection } from '@/components/accordion/FAQSection';
import { Accordion } from '@/components/accordion/Accordion';
import { AccordionItem } from '@/components/accordion/AccordionItem';

export default function AccordionTest() {
  const customItems = [
    {
      id: 'custom-1',
      title: 'Custom Question 1',
      content: 'This is a custom answer to demonstrate the flexibility of the accordion component.',
    },
    {
      id: 'custom-2',
      title: 'Custom Question 2',
      content: 'Another custom answer with different content to show multiple items.',
    },
    {
      id: 'custom-3',
      title: 'Custom Question 3',
      content: 'Third custom answer to complete the demonstration.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <h1 className="text-3xl font-bold py-8 text-center">Accordion Component Test</h1>
        
        {/* Full FAQ Section */}
        <FAQSection />
        
        {/* Custom Accordion */}
        <div className="max-w-[800px] mx-auto px-16 py-12">
          <h2 className="text-2xl font-semibold mb-6">Custom Accordion</h2>
          <Accordion items={customItems} defaultOpenIndex={1} />
        </div>
        
        {/* Individual Accordion Items */}
        <div className="max-w-[800px] mx-auto px-16 py-12">
          <h2 className="text-2xl font-semibold mb-6">Individual Accordion Items</h2>
          <div className="flex flex-col gap-4">
            <AccordionItem
              title="Open by default"
              content="This accordion item is open by default to show the expanded state."
              defaultOpen={true}
            />
            <AccordionItem
              title="Closed by default"
              content="This accordion item is closed by default. Click to expand and see the content."
              defaultOpen={false}
            />
          </div>
        </div>
        
        {/* Component Features */}
        <div className="max-w-[800px] mx-auto px-16 py-12">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Component Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Open/Closed states with different backgrounds</li>
              <li>Chevron icon rotation (up/down)</li>
              <li>Smooth transitions</li>
              <li>Accessible with ARIA attributes</li>
              <li>Customizable default open state</li>
              <li>Figma design compliant</li>
              <li>Border: #D9D9D9</li>
              <li>Open state: white background</li>
              <li>Closed state: #F5F5F5 background</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
