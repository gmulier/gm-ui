import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-md border transition-colors duration-150 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-950 box-border',
  {
    variants: {
      variant: {
        default: 'border-gray-300 text-primary-500 focus-visible:border-2 focus-visible:border-primary-500 dark:border-gray-700 dark:focus-visible:border-primary-400',
        error: 'border-red-500 text-red-500 focus-visible:border-2 focus-visible:border-red-600',
        success: 'border-green-500 text-green-500 focus-visible:border-2 focus-visible:border-green-600',
      },
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  description?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, size = 'md', label, description, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    // Calculate padding-top to align the first line of the label with the center of the checkbox
    const getLabelPadding = (checkboxSize: 'sm' | 'md' | 'lg') => {
      switch (checkboxSize) {
        case 'sm': return 'pt-1'; // More padding to move text down
        case 'md': return 'pt-0.5'; // Micro-adjustment for medium
        case 'lg': return '-mt-px'; // Negative margin to move text up even more
        default: return 'pt-0.5';
      }
    };

    const checkboxSize = size || 'md';

    const checkbox = (
      <input
        type="checkbox"
        className={cn(checkboxVariants({ variant, size, className }))}
        ref={ref}
        id={checkboxId}
        {...props}
      />
    );

    if (!label) {
      return checkbox;
    }

    return (
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0">
          {checkbox}
        </div>
        <div className="min-w-0 flex-1">
          <label
            htmlFor={checkboxId}
            className={cn(
              "text-sm font-medium block peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              getLabelPadding(checkboxSize)
            )}
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants }; 