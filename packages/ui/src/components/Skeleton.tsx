import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const skeletonVariants = cva(
  'animate-pulse bg-gray-200 dark:bg-gray-800',
  {
    variants: {
      variant: {
        default: '',
        shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'md',
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, rounded, width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, rounded }), className)}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

// Pre-configured skeleton components for common use cases
const SkeletonText = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, 'height'> & { lines?: number }
>(({ lines = 3, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="1rem"
          width={i === lines - 1 ? '80%' : '100%'}
          {...props}
        />
      ))}
    </div>
  );
});
SkeletonText.displayName = 'SkeletonText';

const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, 'width' | 'height' | 'rounded'> & {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }
>(({ size = 'md', className, ...props }, ref) => {
  const sizes = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
  };

  return (
    <Skeleton
      ref={ref}
      width={sizes[size]}
      height={sizes[size]}
      rounded="full"
      className={className}
      {...props}
    />
  );
});
SkeletonAvatar.displayName = 'SkeletonAvatar';

const SkeletonButton = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, 'height'> & {
    size?: 'sm' | 'md' | 'lg';
  }
>(({ size = 'md', className, ...props }, ref) => {
  const heights = {
    sm: '2rem',
    md: '2.5rem',
    lg: '3rem',
  };

  return (
    <Skeleton
      ref={ref}
      height={heights[size]}
      width={props.width || '6rem'}
      rounded="xl"
      className={className}
      {...props}
    />
  );
});
SkeletonButton.displayName = 'SkeletonButton';

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonButton, skeletonVariants }; 