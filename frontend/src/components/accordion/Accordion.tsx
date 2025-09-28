'use client';

import React from 'react';
import { AccordionItem } from './AccordionItem';
import { cn } from '@/lib/utils';

export interface AccordionData {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionData[];
  defaultOpenIndex?: number;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          defaultOpen={index === defaultOpenIndex}
        />
      ))}
    </div>
  );
};
