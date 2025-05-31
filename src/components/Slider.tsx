import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const sliderVariants = cva(
  'relative flex w-full touch-none select-none items-center',
  {
    variants: {
      size: {
        sm: 'h-4',
        md: 'h-5',
        lg: 'h-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const sliderTrackVariants = cva(
  'relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-1.5',
        lg: 'h-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const sliderThumbVariants = cva(
  'block rounded-full border-2 border-primary-500 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-primary-400 dark:bg-gray-950 dark:ring-offset-gray-950 dark:focus-visible:ring-primary-400',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  showValue?: boolean;
  label?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, size, showValue = false, label, value, ...props }, ref) => {
  const displayValue = value?.[0] ?? props.defaultValue?.[0] ?? 0;

  return (
    <div className="w-full">
      {(showValue || label) && (
        <div className="mb-2 flex justify-between text-sm">
          {label && <span className="text-gray-700 dark:text-gray-300">{label}</span>}
          {showValue && <span className="text-gray-600 dark:text-gray-400">{displayValue}</span>}
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn(sliderVariants({ size }), className)}
        value={value}
        {...props}
      >
        <SliderPrimitive.Track className={cn(sliderTrackVariants({ size }))}>
          <SliderPrimitive.Range className="absolute h-full bg-primary-500 dark:bg-primary-600" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className={cn(sliderThumbVariants({ size }))} />
      </SliderPrimitive.Root>
    </div>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, sliderVariants }; 