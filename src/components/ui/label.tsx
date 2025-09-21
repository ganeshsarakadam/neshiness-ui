import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Label component variants using class-variance-authority
 */
const labelVariants = cva(
  // Base styles
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        destructive: "text-destructive",
        success: "text-success",
        warning: "text-warning",
      },
      required: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        required: true,
        className: "after:content-['*'] after:text-destructive after:ml-1",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "default",
      required: false,
    },
  }
);

/**
 * Label component props
 */
export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Optional description text
   */
  description?: string;
  /**
   * Whether to show as disabled state
   */
  disabled?: boolean;
}

/**
 * Label component - An accessible label with various styling options
 * 
 * @example
 * ```tsx
 * <Label htmlFor="email">Email Address</Label>
 * <Label required htmlFor="password">Password</Label>
 * <Label variant="muted" description="Optional field">Nickname</Label>
 * ```
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, variant, required, description, disabled, ...props }, ref) => {
  return (
    <div className="space-y-1">
      <LabelPrimitive.Root
        ref={ref}
        className={cn(
          labelVariants({ size, variant, required }),
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      />
      {description && (
        <p className={cn(
          "text-xs",
          variant === "muted" ? "text-muted-foreground" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
    </div>
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label, labelVariants };
