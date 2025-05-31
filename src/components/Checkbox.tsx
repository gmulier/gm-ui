import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-md border ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950',
  {
    variants: {
      variant: {
        default: 'border-gray-300 text-primary-500 focus-visible:ring-primary-500 dark:border-gray-700',
        error: 'border-red-500 text-red-500 focus-visible:ring-red-500',
        success: 'border-green-500 text-green-500 focus-visible:ring-green-500',
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
  ({ className, variant, size, label, description, id, ...props }, ref) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

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
      <div className="flex items-start space-x-2">
        <div>
          {checkbox}
        </div>
        <div className="space-y-1 leading-none">
          <label
            htmlFor={checkboxId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, checkboxVariants }; 