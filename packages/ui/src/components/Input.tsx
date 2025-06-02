import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const inputVariants = cva(
  'flex w-full border bg-white px-3 py-2 text-sm transition-colors duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-950 dark:placeholder:text-gray-400',
  {
    variants: {
      variant: {
        default: 'border-gray-200 dark:border-gray-800',
        error: 'border-red-500',
        success: 'border-green-500',
      },
      inputSize: {
        sm: 'h-8 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      round: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
      round: 'lg',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  focusColor?: 'purple' | 'pink' | 'emerald' | 'orange' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'teal' | string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, round, type, startIcon, endIcon, focusColor, style, ...props }, ref) => {
    // Handle focus colors
    const getFocusStyle = () => {
      if (!focusColor) return {};
      
      // If it's a predefined color
      const predefinedColors = {
        purple: '#8b5cf6',
        pink: '#ec4899', 
        emerald: '#10b981',
        orange: '#f97316',
        blue: '#3b82f6',
        red: '#ef4444',
        green: '#22c55e',
        yellow: '#eab308',
        indigo: '#6366f1',
        teal: '#14b8a6'
      };

      const color = predefinedColors[focusColor as keyof typeof predefinedColors] || focusColor;
      
      return {
        '--focus-border-color': color,
      } as React.CSSProperties;
    };

    // Focus classes
    const getFocusClasses = () => {
      if (focusColor) {
        return 'focus-visible:border-2 focus-visible:border-[var(--focus-border-color)]';
      }
      
      // Default focus classes if no custom color
      switch (variant) {
        case 'error':
          return 'focus-visible:border-2 focus-visible:border-red-600';
        case 'success':
          return 'focus-visible:border-2 focus-visible:border-green-600';
        default:
          return 'focus-visible:border-2 focus-visible:border-primary-500 dark:focus-visible:border-primary-400';
      }
    };

    const inputClasses = cn(
      inputVariants({ variant, inputSize, round }),
      getFocusClasses(),
      startIcon && 'pl-10',
      endIcon && 'pr-10',
      className
    );

    const inputStyle = { ...style, ...getFocusStyle() };

    if (startIcon || endIcon) {
      return (
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            className={inputClasses}
            style={inputStyle}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              {endIcon}
            </div>
          )}
        </div>
      );
    }

    return (
      <input
        type={type}
        className={inputClasses}
        style={inputStyle}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, inputVariants }; 