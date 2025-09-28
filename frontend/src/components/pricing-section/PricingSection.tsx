'use client';

import React, { useState } from 'react';
import { PricingCard } from '@/components/pricing-card/PricingCard';
import { NavigationPillList, PillItem } from '@/components/navigation-pill';
import { cn } from '@/lib/utils';

interface PricingPlan {
  id: string;
  title: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  variant: 'stroke' | 'brand';
  buttonText: string;
}

interface PricingSectionProps {
  plans?: PricingPlan[];
  className?: string;
}

const defaultPlans: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    monthlyPrice: '29',
    yearlyPrice: '290',
    features: [
      '5 Projects',
      '10 GB Storage',
      'Basic Support',
      'API Access',
      'Custom Domain',
    ],
    variant: 'stroke',
    buttonText: 'Get Started',
  },
  {
    id: 'pro',
    title: 'Pro',
    monthlyPrice: '50',
    yearlyPrice: '500',
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Priority Support',
      'Advanced API Access',
      'Multiple Custom Domains',
    ],
    variant: 'brand',
    buttonText: 'Get Started',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    monthlyPrice: '99',
    yearlyPrice: '990',
    features: [
      'Everything in Pro',
      'Unlimited Storage',
      'Dedicated Support',
      'Custom Integrations',
      'SLA Guarantee',
    ],
    variant: 'stroke',
    buttonText: 'Contact Sales',
  },
];

const navigationItems: PillItem[] = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'yearly', label: 'Yearly' },
  { id: 'link', label: 'Link', href: '#' },
];

export const PricingSection: React.FC<PricingSectionProps> = ({
  plans = defaultPlans,
  className,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const handlePillClick = (id: string) => {
    if (id === 'monthly' || id === 'yearly') {
      setBillingPeriod(id);
    }
  };

  return (
    <section className={cn('bg-white py-16', className)}>
      <div className="max-w-[1200px] mx-auto px-16">
        {/* Navigation Pills */}
        <div className="flex justify-center mb-12">
          <NavigationPillList
            items={navigationItems}
            activeId={billingPeriod}
            onItemClick={handlePillClick}
          />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              title={plan.title}
              price={billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              currency="$"
              period={billingPeriod === 'monthly' ? '/ mo' : '/ yr'}
              features={plan.features}
              buttonText={plan.buttonText}
              variant={plan.variant}
              onButtonClick={() => alert(`${plan.title} plan selected!`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
