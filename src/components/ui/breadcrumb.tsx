import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";

/**
 * Breadcrumb component variants using class-variance-authority
 */
const breadcrumbVariants = cva(
  "flex items-center space-x-1 text-sm text-muted-foreground",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      separator: {
        slash: "space-x-1",
        chevron: "space-x-1",
        dot: "space-x-1",
      },
    },
    defaultVariants: {
      size: "md",
      separator: "chevron",
    },
  }
);

/**
 * Breadcrumb item variants
 */
const breadcrumbItemVariants = cva(
  "transition-colors hover:text-foreground",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground",
        active: "text-foreground font-medium",
        disabled: "text-muted-foreground/50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Breadcrumb component props
 */
export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  /**
   * Breadcrumb items
   */
  items?: BreadcrumbItem[];
  /**
   * Whether to show home icon
   */
  showHome?: boolean;
  /**
   * Home item href
   */
  homeHref?: string;
  /**
   * Custom separator
   */
  customSeparator?: React.ReactNode;
}

/**
 * Breadcrumb item interface
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

/**
 * Breadcrumb component - A navigation breadcrumb trail
 * 
 * @example
 * ```tsx
 * <Breadcrumb 
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Products", href: "/products" },
 *     { label: "Electronics", active: true }
 *   ]}
 * />
 * ```
 */
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    className, 
    size, 
    separator, 
    items = [], 
    showHome = true,
    homeHref = "/",
    customSeparator,
    ...props 
  }, ref) => {
    const SeparatorIcon = () => {
      if (customSeparator) return <>{customSeparator}</>;
      
      switch (separator) {
        case "slash":
          return <span>/</span>;
        case "dot":
          return <span>•</span>;
        case "chevron":
        default:
          return <ChevronRight className="h-4 w-4" />;
      }
    };

    const allItems = showHome 
      ? [{ label: "Home", href: homeHref, icon: <Home className="h-4 w-4" /> }, ...items]
      : items;

    return (
      <nav
        ref={ref}
        className={cn(breadcrumbVariants({ size, separator }), className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center space-x-1">
          {allItems.map((item, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center">
                <BreadcrumbItemComponent item={item} />
              </li>
              {index < allItems.length - 1 && (
                <li className="flex items-center">
                  <SeparatorIcon />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

/**
 * Breadcrumb item component props
 */
interface BreadcrumbItemComponentProps {
  item: BreadcrumbItem;
}

/**
 * Breadcrumb item component
 */
const BreadcrumbItemComponent: React.FC<BreadcrumbItemComponentProps> = ({ item }) => {
  const content = (
    <div className="flex items-center space-x-1">
      {item.icon}
      <span>{item.label}</span>
    </div>
  );

  if (item.href && !item.active && !item.disabled) {
    return (
      <a
        href={item.href}
        className={cn(
          breadcrumbItemVariants({ variant: "default" }),
          "flex items-center space-x-1"
        )}
        onClick={item.onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <span
      className={cn(
        breadcrumbItemVariants({ 
          variant: item.active ? "active" : item.disabled ? "disabled" : "default"
        }),
        "flex items-center space-x-1"
      )}
    >
      {content}
    </span>
  );
};

export { Breadcrumb, breadcrumbVariants, breadcrumbItemVariants };
