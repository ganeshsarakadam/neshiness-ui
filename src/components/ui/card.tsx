import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { type CardProps, type BaseComponentProps } from "@/lib/types";

/**
 * Card component variants using class-variance-authority
 */
const cardVariants = cva(
  // Base styles
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
  {
    variants: {
      size: {
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
      variant: {
        default: "border-border",
        primary: "border-primary/20 bg-primary/5",
        secondary: "border-secondary/20 bg-secondary/5",
        success: "border-success/20 bg-success/5",
        warning: "border-warning/20 bg-warning/5",
        info: "border-info/20 bg-info/5",
        destructive: "border-destructive/20 bg-destructive/5",
        outline: "border-border bg-transparent",
      },
      interactive: {
        true: "hover:shadow-md cursor-pointer hover:border-primary/40 transition-all duration-200",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      interactive: false,
    },
  }
);

/**
 * Card component props extending base props
 */
export interface CardComponentProps
  extends BaseComponentProps,
  VariantProps<typeof cardVariants> {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Card component - A flexible container for content
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content goes here</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardComponentProps>(
  ({ className, variant, size, interactive, title, description, footer, children, onClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, interactive, className }))}
        onClick={onClick}
        {...props}
      >
        {title && (
          <div className="mb-3">
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
        {footer && (
          <div className="mt-4 pt-4 border-t border-border">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

/**
 * CardHeader component - Container for card header content
 */
const CardHeader = React.forwardRef<HTMLDivElement, BaseComponentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
);

CardHeader.displayName = "CardHeader";

/**
 * CardTitle component - Card title with proper typography
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, BaseComponentProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  )
);

CardTitle.displayName = "CardTitle";

/**
 * CardDescription component - Card description with muted text
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, BaseComponentProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = "CardDescription";

/**
 * CardContent component - Main content area of the card
 */
const CardContent = React.forwardRef<HTMLDivElement, BaseComponentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);

CardContent.displayName = "CardContent";

/**
 * CardFooter component - Footer area of the card
 */
const CardFooter = React.forwardRef<HTMLDivElement, BaseComponentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
);

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants
};
