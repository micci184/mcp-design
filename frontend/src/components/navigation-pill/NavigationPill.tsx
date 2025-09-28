'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface NavigationPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const NavigationPill: React.FC<NavigationPillProps> = ({
  label,
  isActive = false,
  onClick,
  href,
  className,
}) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center px-2 py-2 rounded-lg text-base font-normal transition-colors cursor-pointer',
    isActive && 'bg-[#F5F5F5]',
    !isActive && 'hover:bg-gray-100',
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {label}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      type="button"
    >
      {label}
    </button>
  );
};
