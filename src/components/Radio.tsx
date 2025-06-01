import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const radioVariants = cva(
  [
    'appearance-none rounded-full border-2 cursor-pointer transition-colors duration-150',
    'checked:border-primary-500 checked:bg-primary-500 checked:bg-[radial-gradient(circle_at_center,_white_30%,_transparent_30%)]',
    'hover:border-gray-400 focus-visible:outline-none focus-visible:border-primary-500 focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-primary-500/20',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'dark:border-gray-600 dark:hover:border-gray-500 dark:checked:border-primary-400 dark:checked:bg-primary-400'
  ],
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        error: 'border-red-500 checked:border-red-500 checked:bg-red-500 focus-visible:border-red-500 focus-visible:shadow-red-500/20',
        success: 'border-green-500 checked:border-green-500 checked:bg-green-500 focus-visible:border-green-500 focus-visible:shadow-green-500/20',
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
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

    const radioInput = (
      <input
        type="radio"
        className={cn(radioVariants({ variant, size }), className)}
        ref={ref}
        id={radioId}
        {...props}
      />
    );

    if (!label) {
      return radioInput;
    }

    return (
      <div className="flex items-start gap-3">
        {radioInput}
        <div className="space-y-1 leading-none">
          <label
            htmlFor={radioId}
            className="text-sm font-medium leading-none cursor-pointer"
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Radio.displayName = 'Radio';

// RadioGroup simple pour les cas où on veut grouper visuellement
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
          orientation === 'vertical' ? 'flex-col space-y-3' : 'flex-row space-x-6',
          className
        )}
        {...props}
      />
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export { Radio, RadioGroup, radioVariants }; 