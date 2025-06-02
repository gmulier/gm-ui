import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-xl border bg-white px-3 py-2 text-sm transition-colors duration-150 placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-950 dark:placeholder:text-gray-400',
  {
    variants: {
      variant: {
        default: 'border-gray-200 focus-visible:border-2 focus-visible:border-primary-500 dark:border-gray-800 dark:focus-visible:border-primary-400',
        error: 'border-red-500 focus-visible:border-2 focus-visible:border-red-600',
        success: 'border-green-500 focus-visible:border-2 focus-visible:border-green-600',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  autoResize?: boolean;
  showCount?: boolean;
  maxLength?: number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, autoResize = false, showCount = false, maxLength, value, onChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || '');
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useImperativeHandle(ref, () => textareaRef.current!);

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (maxLength && newValue.length > maxLength) {
        return;
      }
      setInternalValue(newValue);
      onChange?.(e);

      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    React.useEffect(() => {
      if (autoResize && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [autoResize, internalValue]);

    const currentLength = String(internalValue).length;

    return (
      <div className="relative">
        <textarea
          className={cn(
            textareaVariants({ variant, size, className }),
            autoResize ? 'resize-none overflow-hidden' : 'resize-y',
            showCount && 'pb-6',
            // Subtle styling for the handle - hide default lines
            '[&::-webkit-resizer]:bg-none [&::-webkit-resizer]:bg-gray-200 [&::-webkit-resizer]:rounded-br-xl [&::-webkit-resizer]:opacity-60 hover:[&::-webkit-resizer]:opacity-80 dark:[&::-webkit-resizer]:bg-gray-600'
          )}
          ref={textareaRef}
          value={internalValue}
          onChange={handleChange}
          {...props}
        />
        {showCount && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
            {currentLength}
            {maxLength && `/${maxLength}`}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea, textareaVariants }; 