import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const radioVariants = cva(
  'aspect-square h-4 w-4 rounded-full border ring-offset-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:ring-offset-gray-950',
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

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string;
  description?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, variant, size, label, description, id, ...props }, ref) => {
    const generatedId = React.useId();
    const radioId = id || generatedId;

    const radio = (
      <input
        type="radio"
        className={cn(radioVariants({ variant, size, className }))}
        ref={ref}
        id={radioId}
        {...props}
      />
    );

    if (!label) {
      return radio;
    }

    return (
      <div className="flex items-start space-x-2">
        {radio}
        <div className="space-y-1 leading-none">
          <label
            htmlFor={radioId}
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

Radio.displayName = 'Radio';

// RadioGroup component for grouping radio buttons
export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, orientation = 'vertical', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col space-y-2' : 'flex-row space-x-4',
          className
        )}
        {...props}
      />
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup, radioVariants }; 