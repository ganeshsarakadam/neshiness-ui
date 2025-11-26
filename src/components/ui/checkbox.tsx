import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Checkbox component variants using class-variance-authority
 */
const checkboxVariants = cva(
  "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground transition-all duration-200 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
      },
      variant: {
        default: "border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        destructive: "border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
        success: "border-success data-[state=checked]:bg-success data-[state=checked]:text-success-foreground",
        warning: "border-warning data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

/**
 * Checkbox component props
 */
export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  VariantProps<typeof checkboxVariants> {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Helper text to display below the checkbox
   */
  helperText?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Whether the checkbox has an error
   */
  error?: boolean;
  /**
   * Whether to show as required
   */
  required?: boolean;
}

/**
 * Checkbox component - A styled checkbox with various states
 * 
 * @example
 * ```tsx
 * <Checkbox />
 * <Checkbox label="Accept terms" />
 * <Checkbox label="Subscribe" variant="success" />
 * <Checkbox error errorMessage="This field is required" />
 * ```
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({
  className,
  size,
  variant,
  label,
  helperText,
  errorMessage,
  error,
  required,
  disabled,
  ...props
}, ref) => {
  const checkboxVariant = error ? "destructive" : variant;

  if (label) {
    return (
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <CheckboxPrimitive.Root
            ref={ref}
            className={cn(checkboxVariants({ size, variant: checkboxVariant }), className)}
            disabled={disabled}
            {...props}
          >
            <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
              <Check className="h-3 w-3" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
          <div className="grid gap-1.5 leading-none">
            <label
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
                error && "text-destructive"
              )}
              htmlFor={props.id}
            >
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </label>
          </div>
        </div>
        {(helperText || errorMessage) && (
          <div className="text-xs">
            {error && errorMessage && (
              <p className="text-destructive">{errorMessage}</p>
            )}
            {!error && helperText && (
              <p className="text-muted-foreground">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariants({ size, variant: checkboxVariant }), className)}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
        <Check className="h-3 w-3" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
