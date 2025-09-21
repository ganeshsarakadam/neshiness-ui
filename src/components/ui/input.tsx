import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Input component variants using class-variance-authority
 */
const inputVariants = cva(
  // Base styles
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      size: {
        sm: "h-8 px-2 py-1 text-xs",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base",
      },
      variant: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-success focus-visible:ring-success",
        warning: "border-warning focus-visible:ring-warning",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

/**
 * Input component props
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  /**
   * Whether the input has an error
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Whether the input is successful
   */
  success?: boolean;
  /**
   * Success message to display
   */
  successMessage?: string;
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  /**
   * Label for the input
   */
  label?: string;
  /**
   * Whether the label should be required
   */
  required?: boolean;
  /**
   * Left icon to display in the input
   */
  leftIcon?: React.ReactNode;
  /**
   * Right icon to display in the input
   */
  rightIcon?: React.ReactNode;
  /**
   * Whether to show loading state
   */
  loading?: boolean;
}

/**
 * Input component - A styled input field with various states and features
 * 
 * @example
 * ```tsx
 * <Input placeholder="Enter your email" />
 * <Input label="Email" required error errorMessage="Email is required" />
 * <Input label="Password" type="password" leftIcon={<LockIcon />} />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    size, 
    variant, 
    error, 
    errorMessage, 
    success, 
    successMessage, 
    helperText, 
    label, 
    required, 
    leftIcon, 
    rightIcon, 
    loading, 
    disabled,
    ...props 
  }, ref) => {
    // Determine variant based on state
    const inputVariant = error ? "error" : success ? "success" : variant;
    
    // Determine if input should be disabled
    const isDisabled = disabled || loading;

    return (
      <div className="space-y-2">
        {/* Label */}
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}

          {/* Loading Spinner */}
          {loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
            </div>
          )}

          {/* Input Field */}
          <input
            type={type}
            className={cn(
              inputVariants({ size, variant: inputVariant }),
              leftIcon && "pl-10",
              (rightIcon || loading) && "pr-10",
              className
            )}
            ref={ref}
            disabled={isDisabled}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && !loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper Text / Error Message / Success Message */}
        {(helperText || errorMessage || successMessage) && (
          <div className="text-xs">
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
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
