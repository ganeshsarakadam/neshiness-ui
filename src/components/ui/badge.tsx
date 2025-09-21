import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge component variants using class-variance-authority
 */
const badgeVariants = cva(
  // Base styles
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        outline: "text-foreground border-border hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

/**
 * Badge component props
 */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional icon to display before the badge text
   */
  icon?: React.ReactNode;
  /**
   * Optional icon to display after the badge text
   */
  iconRight?: React.ReactNode;
  /**
   * Whether the badge should be removable
   */
  removable?: boolean;
  /**
   * Callback when badge is removed
   */
  onRemove?: () => void;
}

/**
 * Badge component - A small status indicator or label
 * 
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="destructive" removable onRemove={() => console.log('removed')}>
 *   Error
 * </Badge>
 * <Badge variant="info" icon={<InfoIcon />}>
 *   Info
 * </Badge>
 * ```
 */
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, icon, iconRight, removable, onRemove, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {icon && (
          <span className="mr-1 flex h-3 w-3 items-center justify-center">
            {icon}
          </span>
        )}
        {children}
        {iconRight && (
          <span className="ml-1 flex h-3 w-3 items-center justify-center">
            {iconRight}
          </span>
        )}
        {removable && (
          <button
            type="button"
            className="ml-1 inline-flex h-3 w-3 items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            aria-label="Remove badge"
          >
            <svg
              className="h-2 w-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
