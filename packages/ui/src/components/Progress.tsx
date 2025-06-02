import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const progressVariants = cva(
  'relative h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
        xl: 'h-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const progressIndicatorVariants = cva(
  'h-full w-full flex-1 bg-primary-500 transition-all duration-300 ease-in-out dark:bg-primary-600',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 dark:bg-primary-600',
        success: 'bg-green-500 dark:bg-green-600',
        warning: 'bg-yellow-500 dark:bg-yellow-600',
        error: 'bg-red-500 dark:bg-red-600',
        gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressIndicatorVariants> {
  showLabel?: boolean;
  label?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, size, variant, showLabel = false, label, ...props }, ref) => {
  return (
    <div className="w-full">
      {(showLabel || label) && (
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-700 dark:text-gray-300">{label || 'Progress'}</span>
          <span className="text-gray-600 dark:text-gray-400">{value}%</span>
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(progressVariants({ size }), className)}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(progressIndicatorVariants({ variant }))}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants, progressIndicatorVariants }; 