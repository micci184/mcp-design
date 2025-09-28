import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-[--border-radius-lg] font-bold transition-colors disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[--color-brand-default] text-[--color-on-brand] hover:bg-[--color-brand-hover] disabled:bg-[--color-brand-secondary] disabled:text-[--color-on-brand-secondary]',
        neutral:
          'bg-[--color-neutral-secondary] text-[--color-neutral-default] hover:bg-[--color-neutral-secondary-hover] disabled:bg-[--color-neutral-tertiary] disabled:text-[--color-neutral-tertiary]',
      },
      size: {
        medium: 'h-11 px-6 text-[length:--font-size-body-strong] font-[--font-weight-body-strong] leading-[--line-height-body-strong]',
        small: 'h-9 px-4 text-[length:--font-size-body-small-strong] font-[--font-weight-body-small-strong] leading-[--line-height-body-small-strong]',
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
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
