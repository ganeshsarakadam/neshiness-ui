import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Tabs component variants using class-variance-authority
 */
const tabsVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "",
        card: "bg-card border border-border rounded-lg p-4",
        outline: "border-b border-border",
      },
      orientation: {
        horizontal: "",
        vertical: "flex flex-row",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
);

/**
 * Tabs list variants
 */
const tabsListVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-muted p-1 text-muted-foreground rounded-md",
        underline: "border-b border-border bg-transparent p-0 text-muted-foreground",
        pills: "bg-background p-1 text-muted-foreground rounded-lg",
      },
      orientation: {
        horizontal: "h-10 w-full",
        vertical: "h-auto w-auto flex-col",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
);

/**
 * Tabs trigger variants
 */
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        underline: "border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-foreground rounded-none",
        pills: "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
      },
      orientation: {
        horizontal: "w-full",
        vertical: "w-full justify-start",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
      size: "md",
    },
  }
);

/**
 * Tabs content variants
 */
const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        card: "p-6",
        outline: "pt-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Tabs component props
 */
export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {
  /**
   * Tab items
   */
  items?: TabItem[];
  /**
   * Default active tab
   */
  defaultValue?: string;
}

/**
 * Tab item interface
 */
export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: string | number;
}

/**
 * Tabs component - A set of tabbed interfaces
 * 
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */
const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, variant, orientation, items, defaultValue, children, ...props }, ref) => {
  if (items && items.length > 0) {
    return (
      <TabsPrimitive.Root
        ref={ref}
        className={cn(tabsVariants({ variant, orientation }), className)}
        defaultValue={defaultValue || items[0]?.value}
        {...props}
      >
        <TabsList variant={variant === "card" ? "pills" : "default"} orientation={orientation}>
          {items.map((item) => (
            <TabsTrigger 
              key={item.value} 
              value={item.value} 
              disabled={item.disabled}
              variant={variant === "card" ? "pills" : "default"}
              orientation={orientation}
            >
              <div className="flex items-center space-x-2">
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {items.map((item) => (
          <TabsContent 
            key={item.value} 
            value={item.value}
            variant={variant}
          >
            {item.content}
          </TabsContent>
        ))}
      </TabsPrimitive.Root>
    );
  }

  return (
    <TabsPrimitive.Root
      ref={ref}
      className={cn(tabsVariants({ variant, orientation }), className)}
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
});

Tabs.displayName = "Tabs";

/**
 * Tabs list component
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & 
  VariantProps<typeof tabsListVariants>
>(({ className, variant, orientation, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, orientation }), className)}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;

/**
 * Tabs trigger component
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & 
  VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, orientation, size, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, orientation, size }), className)}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

/**
 * Tabs content component
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & 
  VariantProps<typeof tabsContentVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant }), className)}
    {...props}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsVariants };
