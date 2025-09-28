import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[#4338CA] text-white hover:bg-[#312E81] disabled:bg-[#A5B4FC] disabled:text-[#312E81]',
        neutral:
          'bg-white text-[#18181B] border-2 border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] disabled:bg-[#F1F5F9] disabled:text-[#94A3B8] disabled:border-[#E2E8F0]',
      },
      size: {
        medium: 'h-11 px-6 text-base font-semibold',
        small: 'h-9 px-4 text-sm font-semibold',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
