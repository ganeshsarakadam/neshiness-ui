import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accordion component variants using class-variance-authority
 */
const accordionVariants = cva(
  "space-y-2",
  {
    variants: {
      variant: {
        default: "",
        card: "space-y-4",
        outline: "border border-border rounded-lg divide-y divide-border",
      },
      type: {
        single: "",
        multiple: "",
      },
    },
    defaultVariants: {
      variant: "default",
      type: "single",
    },
  }
);

/**
 * Accordion item variants
 */
const accordionItemVariants = cva(
  "border-b border-border last:border-b-0",
  {
    variants: {
      variant: {
        default: "border-b border-border last:border-b-0",
        card: "border border-border rounded-lg bg-card",
        outline: "border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Accordion trigger variants
 */
const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "text-left",
        card: "px-6 py-4 text-left hover:bg-accent/50 rounded-t-lg",
        outline: "px-4 py-3 text-left hover:bg-accent/50",
      },
      size: {
        sm: "py-2 text-sm",
        md: "py-4 text-base",
        lg: "py-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

/**
 * Accordion content variants
 */
const accordionContentVariants = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "",
        card: "px-6 pb-4",
        outline: "px-4 pb-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Accordion component props
 */
export interface AccordionProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
    VariantProps<typeof accordionVariants> {
  /**
   * Accordion items
   */
  items?: AccordionItem[];
  /**
   * Default open items (for multiple type)
   */
  defaultValue?: string | string[];
  /**
   * Controlled open items
   */
  value?: string | string[];
  /**
   * Open change handler
   */
  onValueChange?: (value: string | string[]) => void;
}

/**
 * Accordion item interface
 */
export interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

/**
 * Accordion component - A vertically stacked set of interactive headings
 * 
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *     <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ className, variant, type, items, defaultValue, value, onValueChange, children, ...props }, ref) => {
  if (items && items.length > 0) {
    return (
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(accordionVariants({ variant, type }), className)}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        {...props}
      >
        {items.map((item) => (
          <AccordionItem 
            key={item.value} 
            value={item.value}
            variant={variant}
          >
            <AccordionTrigger 
              variant={variant}
              disabled={item.disabled}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
                {item.badge && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent variant={variant}>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root
      ref={ref}
      className={cn(accordionVariants({ variant, type }), className)}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
});

Accordion.displayName = "Accordion";

/**
 * Accordion item component
 */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & 
  VariantProps<typeof accordionItemVariants>
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

/**
 * Accordion trigger component
 */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & 
  VariantProps<typeof accordionTriggerVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * Accordion content component
 */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & 
  VariantProps<typeof accordionContentVariants>
>(({ className, variant, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentVariants({ variant }), className)}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, accordionVariants };
