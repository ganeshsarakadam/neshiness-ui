import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Separator component variants using class-variance-authority
 */
const separatorVariants = cva(
  "shrink-0 bg-border",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
      variant: {
        default: "bg-border",
        muted: "bg-muted",
        subtle: "bg-border/50",
        strong: "bg-border-foreground/20",
      },
      size: {
        sm: "h-[1px] w-full",
        md: "h-[2px] w-full",
        lg: "h-[4px] w-full",
        xl: "h-[8px] w-full",
      },
    },
    compoundVariants: [
      {
        orientation: "vertical",
        size: "sm",
        className: "h-full w-[1px]",
      },
      {
        orientation: "vertical",
        size: "md",
        className: "h-full w-[2px]",
      },
      {
        orientation: "vertical",
        size: "lg",
        className: "h-full w-[4px]",
      },
      {
        orientation: "vertical",
        size: "xl",
        className: "h-full w-[8px]",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      size: "sm",
    },
  }
);

/**
 * Separator component props
 */
export interface SeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
  Omit<VariantProps<typeof separatorVariants>, "orientation"> {
  /**
   * Whether to add decorative styling
   */
  decorative?: boolean;
}

/**
 * Separator component - A visual separator between content sections
 * 
 * @example
 * ```tsx
 * <Separator />
 * <Separator orientation="vertical" />
 * <Separator variant="muted" size="md" />
 * ```
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation, variant, size, decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(separatorVariants({ orientation, variant, size }), className)}
    {...props}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

/**
 * Divider component - A more styled separator with optional text
 */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Text to display in the center of the divider
   */
  text?: string;
  /**
   * Variant of the divider
   */
  variant?: "default" | "muted" | "subtle" | "strong";
  /**
   * Size of the divider
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Whether to show the divider line
   */
  showLine?: boolean;
}

/**
 * Divider component - A styled separator with optional center text
 * 
 * @example
 * ```tsx
 * <Divider />
 * <Divider text="OR" />
 * <Divider variant="muted" size="md" />
 * ```
 */
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, text, variant = "default", size = "sm", showLine = true, ...props }, ref) => {
    if (!showLine && !text) {
      return null;
    }

    if (!showLine && text) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center justify-center my-4", className)}
          {...props}
        >
          <span className="px-3 text-sm text-muted-foreground bg-background">
            {text}
          </span>
        </div>
      );
    }

    if (text) {
      return (
        <div
          ref={ref}
          className={cn("relative flex items-center justify-center my-4", className)}
          {...props}
        >
          <Separator
            variant={variant}
            size={size}
            className="absolute inset-0"
          />
          <span className={cn(
            "px-3 text-sm bg-background",
            variant === "muted" && "text-muted-foreground",
            variant === "subtle" && "text-muted-foreground/70",
            variant === "strong" && "text-foreground",
            variant === "default" && "text-muted-foreground"
          )}>
            {text}
          </span>
        </div>
      );
    }

    return (
      <Separator
        ref={ref}
        variant={variant}
        size={size}
        className={cn("my-4", className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Separator, Divider, separatorVariants };
