import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-normal transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-[#2C2C2C] text-white border border-[#2C2C2C] hover:bg-[#1A1A1A] disabled:bg-[#666666] disabled:text-[#CCCCCC]',
        neutral:
          'bg-[#E3E3E3] text-[#1E1E1E] border border-[#767676] hover:bg-[#D0D0D0] disabled:bg-[#F5F5F5] disabled:text-[#999999] disabled:border-[#CCCCCC]',
      },
      size: {
        medium: 'h-11 px-6 text-base',
        small: 'h-9 px-2 text-base',
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
