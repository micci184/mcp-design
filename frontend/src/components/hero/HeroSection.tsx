'use client';

import React from 'react';
import { Button } from '@/components/button/Button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Welcome to Our Platform',
  subtitle = 'Build something amazing with our design system',
  ctaText = 'Get Started',
  secondaryCtaText = 'Learn More',
  onCtaClick,
  onSecondaryCtaClick,
  align = 'center',
  className,
}) => {
  const alignmentClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <section 
      className={cn(
        'w-full bg-[#F5F5F5]',
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-16 py-40">
        <div className={cn(
          'flex flex-col gap-8',
          alignmentClasses[align]
        )}>
          {/* Title */}
          <h1 className="text-[72px] font-bold leading-[1.2] tracking-[-0.03em] text-[#1E1E1E]">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-[32px] font-normal leading-[1.2] text-[#757575]">
              {subtitle}
            </p>
          )}
          
          {/* CTA Buttons */}
          <div className={cn(
            'flex gap-4 mt-8',
            align === 'center' && 'justify-center',
            align === 'right' && 'justify-end'
          )}>
            {ctaText && (
              <Button
                variant="primary"
                size="medium"
                onClick={onCtaClick}
              >
                {ctaText}
              </Button>
            )}
            {secondaryCtaText && (
              <Button
                variant="neutral"
                size="medium"
                onClick={onSecondaryCtaClick}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
