'use client';

import React from 'react';
import { Accordion, AccordionData } from './Accordion';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  heading?: string;
  subheading?: string;
  items?: AccordionData[];
  className?: string;
}

const defaultFAQItems: AccordionData[] = [
  {
    id: '1',
    title: 'What is your return policy?',
    content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list. We offer a 30-day return policy for all unused items in their original packaging.',
  },
  {
    id: '2',
    title: 'How long does shipping take?',
    content: 'Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout for faster delivery within 2-3 business days.',
  },
  {
    id: '3',
    title: 'Do you ship internationally?',
    content: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Please check our shipping page for specific details.',
  },
  {
    id: '4',
    title: 'How can I track my order?',
    content: 'Once your order ships, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier\'s tracking page.',
  },
  {
    id: '5',
    title: 'What payment methods do you accept?',
    content: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secured with SSL encryption.',
  },
];

export const FAQSection: React.FC<FAQSectionProps> = ({
  heading = 'Frequently Asked Questions',
  subheading = 'Find answers to common questions about our products and services',
  items = defaultFAQItems,
  className,
}) => {
  return (
    <section className={cn('bg-white py-16', className)}>
      <div className="max-w-[800px] mx-auto px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[#1E1E1E] tracking-[-0.02em] mb-2">
            {heading}
          </h2>
          {subheading && (
            <p className="text-xl text-[#757575]">
              {subheading}
            </p>
          )}
        </div>

        {/* Accordion */}
        <Accordion items={items} defaultOpenIndex={0} />
      </div>
    </section>
  );
};
