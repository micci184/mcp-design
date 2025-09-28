'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = 'Title',
  subtitle = 'Subtitle',
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
        </div>
      </div>
    </section>
  );
};
