import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Switch component variants using class-variance-authority
 */
const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-11",
        lg: "h-8 w-14",
      },
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        destructive: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input",
        success: "data-[state=checked]:bg-success data-[state=unchecked]:bg-input",
        warning: "data-[state=checked]:bg-warning data-[state=unchecked]:bg-input",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

/**
 * Switch thumb variants
 */
const switchThumbVariants = cva(
  "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
        md: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        lg: "h-7 w-7 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

/**
 * Switch component props
 */
export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  /**
   * Label for the switch
   */
  label?: string;
  /**
   * Helper text to display below the switch
   */
  helperText?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Whether the switch has an error
   */
  error?: boolean;
  /**
   * Whether to show as required
   */
  required?: boolean;
  /**
   * Description for the switch
   */
  description?: string;
}

/**
 * Switch component - A toggle switch control
 * 
 * @example
 * ```tsx
 * <Switch />
 * <Switch label="Enable notifications" />
 * <Switch label="Dark mode" variant="success" />
 * <Switch error errorMessage="This field is required" />
 * ```
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ 
  className, 
  size, 
  variant, 
  label, 
  helperText, 
  errorMessage, 
  error, 
  required,
  description,
  disabled,
  ...props 
}, ref) => {
  const switchVariant = error ? "destructive" : variant;

  if (label) {
    return (
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <SwitchPrimitive.Root
            ref={ref}
            className={cn(switchVariants({ size, variant: switchVariant }), className)}
            disabled={disabled}
            {...props}
          >
            <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
          </SwitchPrimitive.Root>
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
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
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
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(switchVariants({ size, variant: switchVariant }), className)}
      disabled={disabled}
      {...props}
    >
      <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch, switchVariants, switchThumbVariants };
