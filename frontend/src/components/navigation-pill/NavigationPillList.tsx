'use client';

import React from 'react';
import { NavigationPill } from './NavigationPill';
import { cn } from '@/lib/utils';

export interface PillItem {
  id: string;
  label: string;
  href?: string;
}

interface NavigationPillListProps {
  items: PillItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  className?: string;
}

export const NavigationPillList: React.FC<NavigationPillListProps> = ({
  items,
  activeId,
  onItemClick,
  className,
}) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <NavigationPill
          key={item.id}
          label={item.label}
          isActive={item.id === activeId}
          onClick={item.href ? undefined : () => onItemClick?.(item.id)}
          href={item.href}
        />
      ))}
    </div>
  );
};
