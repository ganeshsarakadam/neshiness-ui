import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Radio group component variants using class-variance-authority
 */
const radioGroupVariants = cva(
  "grid gap-2",
  {
    variants: {
      orientation: {
        vertical: "grid-cols-1",
        horizontal: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

/**
 * Radio item component variants
 */
const radioItemVariants = cva(
  "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
 * Radio group component props
 */
export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    VariantProps<typeof radioGroupVariants> {
  /**
   * Label for the radio group
   */
  label?: string;
  /**
   * Helper text to display below the radio group
   */
  helperText?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Whether the radio group has an error
   */
  error?: boolean;
  /**
   * Whether to show as required
   */
  required?: boolean;
  /**
   * Options for the radio group
   */
  options?: Array<{
    value: string;
    label: string;
    disabled?: boolean;
    description?: string;
  }>;
}

/**
 * Radio item component props
 */
export interface RadioItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {
  /**
   * Label for the radio item
   */
  label?: string;
  /**
   * Description for the radio item
   */
  description?: string;
}

/**
 * Radio group component - A group of radio buttons
 * 
 * @example
 * ```tsx
 * <RadioGroup>
 *   <RadioGroupItem value="option1" />
 *   <RadioGroupItem value="option2" />
 * </RadioGroup>
 * 
 * <RadioGroup 
 *   label="Choose an option" 
 *   options={[
 *     { value: "a", label: "Option A" },
 *     { value: "b", label: "Option B" }
 *   ]} 
 * />
 * ```
 */
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ 
  className, 
  orientation, 
  label, 
  helperText, 
  errorMessage, 
  error, 
  required,
  disabled,
  options = [],
  children,
  ...props 
}, ref) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </label>
      )}

      {/* Radio Group */}
      <RadioGroupPrimitive.Root
        ref={ref}
        className={cn(radioGroupVariants({ orientation }), className)}
        disabled={disabled}
        {...props}
      >
        {options.length > 0 ? (
          options.map((option) => (
            <RadioGroupItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              label={option.label}
              description={option.description}
            />
          ))
        ) : (
          children
        )}
      </RadioGroupPrimitive.Root>

      {/* Helper Text / Error Message */}
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
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

/**
 * Radio group item component - Individual radio button
 */
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ 
  className, 
  size, 
  variant, 
  label, 
  description,
  disabled,
  ...props 
}, ref) => {
  if (label) {
    return (
      <div className="flex items-start space-x-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(radioItemVariants({ size, variant }), className)}
          disabled={disabled}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="h-2.5 w-2.5 fill-current text-current" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <div className="grid gap-1.5 leading-none">
          <label
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            )}
            htmlFor={props.id}
          >
            {label}
          </label>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioItemVariants({ size, variant }), className)}
      disabled={disabled}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem, radioGroupVariants, radioItemVariants };
