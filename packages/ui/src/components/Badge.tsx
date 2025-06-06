import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
        secondary:
          'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200',
        destructive:
          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        success:
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        warning:
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        outline:
          'border border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants }; 