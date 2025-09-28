'use client';

import React from 'react';
import { Button } from '@/components/button/Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title?: string;
  price?: string;
  currency?: string;
  period?: string;
  features?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'brand' | 'stroke';
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title = 'Title',
  price = '50',
  currency = '$',
  period = '/ mo',
  features = [
    'List item',
    'List item',
    'List item',
    'List item',
    'List item',
  ],
  buttonText = 'Button',
  onButtonClick,
  variant = 'stroke',
  className,
}) => {
  const cardClasses = cn(
    'flex flex-col items-center gap-6 p-8 rounded-lg w-[300px]',
    variant === 'stroke' && 'bg-white border border-[#D9D9D9]',
    variant === 'brand' && 'bg-[#2C2C2C] border border-[#2C2C2C]',
    className
  );

  const textColor = variant === 'brand' ? 'text-white' : 'text-[#1E1E1E]';
  const featureTextColor = variant === 'brand' ? 'text-[#F5F5F5]' : 'text-[#757575]';

  return (
    <div className={cardClasses}>
      {/* Top Section */}
      <div className="flex flex-col items-center gap-4 self-stretch">
        {/* Title */}
        <h3 className={cn(
          'text-2xl font-semibold tracking-[-0.02em]',
          textColor
        )}>
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-end">
          <span className={cn(
            'text-2xl font-bold tracking-[-0.02em]',
            textColor
          )}>
            {currency}
          </span>
          <span className={cn(
            'text-5xl font-bold tracking-[-0.02em]',
            textColor
          )}>
            {price}
          </span>
          <span className={cn(
            'text-sm ml-1',
            variant === 'brand' ? 'text-[#F5F5F5]' : 'text-[#1E1E1E]'
          )}>
            {period}
          </span>
        </div>

        {/* Features List */}
        <ul className="flex flex-col gap-3 self-stretch">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                'text-base',
                featureTextColor
              )}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <Button
        variant={variant === 'brand' ? 'neutral' : 'primary'}
        size="medium"
        onClick={onButtonClick}
        className="w-full"
      >
        {buttonText}
      </Button>
    </div>
  );
};
