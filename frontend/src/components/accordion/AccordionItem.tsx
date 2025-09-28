'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  defaultOpen = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        'border border-[#D9D9D9] rounded-lg transition-all',
        isOpen ? 'bg-white' : 'bg-[#F5F5F5]',
        className
      )}
    >
      {/* Accordion Title */}
      <button
        onClick={toggleOpen}
        className={cn(
          'w-full flex items-center justify-between gap-2 p-4 text-left',
          'hover:bg-gray-50 transition-colors',
          isOpen && 'hover:bg-white'
        )}
        type="button"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-[#1E1E1E]">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#1E1E1E] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#1E1E1E] flex-shrink-0" />
        )}
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-base text-[#1E1E1E] leading-relaxed">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};
