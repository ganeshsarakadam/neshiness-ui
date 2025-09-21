import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Textarea component variants using class-variance-authority
 */
const textareaVariants = cva(
  // Base styles
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-none",
  {
    variants: {
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        md: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base",
      },
      variant: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-success focus-visible:ring-success",
        warning: "border-warning focus-visible:ring-warning",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      resize: "vertical",
    },
  }
);

/**
 * Textarea component props
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  /**
   * Whether the textarea has an error
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Whether the textarea is successful
   */
  success?: boolean;
  /**
   * Success message to display
   */
  successMessage?: string;
  /**
   * Helper text to display below the textarea
   */
  helperText?: string;
  /**
   * Label for the textarea
   */
  label?: string;
  /**
   * Whether the label should be required
   */
  required?: boolean;
  /**
   * Whether to auto-resize based on content
   */
  autoResize?: boolean;
  /**
   * Maximum number of characters allowed
   */
  maxLength?: number;
  /**
   * Whether to show character count
   */
  showCharCount?: boolean;
}

/**
 * Textarea component - A styled textarea with auto-resize and validation states
 * 
 * @example
 * ```tsx
 * <Textarea placeholder="Enter your message" />
 * <Textarea label="Description" autoResize maxLength={500} showCharCount />
 * <Textarea error errorMessage="This field is required" />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    size, 
    variant, 
    error, 
    errorMessage, 
    success, 
    successMessage, 
    helperText, 
    label, 
    required, 
    autoResize = false,
    maxLength,
    showCharCount = false,
    disabled,
    value,
    onChange,
    ...props 
  }, ref) => {
    // Determine variant based on state
    const textareaVariant = error ? "error" : success ? "success" : variant;
    
    // Determine if textarea should be disabled
    const isDisabled = disabled;

    // Handle auto-resize
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);
    const combinedRef = React.useMemo(() => {
      if (typeof ref === 'function') {
        return (node: HTMLTextAreaElement | null) => {
          textareaRef.current = node;
          ref(node);
        };
      } else if (ref) {
        return ref;
      }
      return textareaRef;
    }, [ref]);

    const handleResize = React.useCallback(() => {
      const textarea = textareaRef.current;
      if (textarea && autoResize) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize]);

    React.useEffect(() => {
      handleResize();
    }, [handleResize, value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e);
      }
      handleResize();
    };

    // Character count
    const currentLength = typeof value === 'string' ? value.length : 0;
    const showCount = showCharCount || maxLength;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        {/* Textarea */}
        <textarea
          className={cn(textareaVariants({ size, variant: textareaVariant }), className)}
          ref={combinedRef}
          disabled={isDisabled}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          {...props}
        />

        {/* Helper Text / Error Message / Success Message / Character Count */}
        {(helperText || errorMessage || successMessage || showCount) && (
          <div className="flex justify-between items-start text-xs">
            <div>
              {error && errorMessage && (
                <p className="text-destructive">{errorMessage}</p>
              )}
              {success && successMessage && (
                <p className="text-success">{successMessage}</p>
              )}
              {!error && !success && helperText && (
                <p className="text-muted-foreground">{helperText}</p>
              )}
            </div>
            {showCount && (
              <div className="text-muted-foreground ml-4 flex-shrink-0">
                {currentLength}
                {maxLength && `/${maxLength}`}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
