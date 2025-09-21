import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * Navigation component variants using class-variance-authority
 */
const navigationVariants = cva(
  "flex items-center justify-between w-full",
  {
    variants: {
      variant: {
        default: "bg-background border-b border-border",
        transparent: "bg-transparent",
        glass: "bg-background/80 backdrop-blur-sm border-b border-border/50",
      },
      size: {
        sm: "h-12 px-4",
        md: "h-16 px-6",
        lg: "h-20 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

/**
 * Navigation item variants
 */
const navigationItemVariants = cva(
  "flex items-center px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md",
  {
    variants: {
      variant: {
        default: "text-foreground",
        active: "bg-accent text-accent-foreground",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

/**
 * Navigation component props
 */
export interface NavigationProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navigationVariants> {
  /**
   * Brand/logo content
   */
  brand?: React.ReactNode;
  /**
   * Navigation items
   */
  items?: NavigationItem[];
  /**
   * Action buttons (e.g., theme toggle, user menu)
   */
  actions?: React.ReactNode;
  /**
   * Whether to show mobile menu toggle
   */
  showMobileMenu?: boolean;
  /**
   * Mobile menu state
   */
  mobileMenuOpen?: boolean;
  /**
   * Mobile menu toggle handler
   */
  onMobileMenuToggle?: () => void;
}

/**
 * Navigation item interface
 */
export interface NavigationItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

/**
 * Navigation component - A responsive navigation bar
 * 
 * @example
 * ```tsx
 * <Navigation 
 *   brand={<Logo />}
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "About", href: "/about" },
 *     { label: "Contact", href: "/contact" }
 *   ]}
 *   actions={<ThemeToggle />}
 * />
 * ```
 */
const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ 
    className, 
    variant, 
    size, 
    brand, 
    items = [], 
    actions, 
    showMobileMenu = true,
    mobileMenuOpen = false,
    onMobileMenuToggle,
    ...props 
  }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const handleMobileMenuToggle = () => {
      if (onMobileMenuToggle) {
        onMobileMenuToggle();
      } else {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }
    };

    const isOpen = mobileMenuOpen !== undefined ? mobileMenuOpen : isMobileMenuOpen;

    return (
      <nav
        ref={ref}
        className={cn(navigationVariants({ variant, size }), className)}
        {...props}
      >
        {/* Brand */}
        <div className="flex items-center">
          {brand}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {items.map((item, index) => (
            <NavigationItemComponent key={index} item={item} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {actions}
          
          {/* Mobile Menu Toggle */}
          {showMobileMenu && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            className={cn(
              "absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden",
              isOpen ? "block" : "hidden"
            )}
          >
            <div className="px-4 py-2 space-y-1">
              {items.map((item, index) => (
                <NavigationItemComponent 
                  key={index} 
                  item={item} 
                  mobile 
                  onItemClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navigation.displayName = "Navigation";

/**
 * Navigation item component props
 */
interface NavigationItemComponentProps {
  item: NavigationItem;
  mobile?: boolean;
  onItemClick?: () => void;
}

/**
 * Navigation item component
 */
const NavigationItemComponent: React.FC<NavigationItemComponentProps> = ({ 
  item, 
  mobile = false, 
  onItemClick 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  if (hasChildren) {
    return (
      <div className="relative">
        <button
          className={cn(
            navigationItemVariants({ 
              variant: item.active ? "active" : "default",
              size: mobile ? "md" : "md"
            }),
            "w-full flex items-center justify-between",
            item.disabled && "opacity-50 cursor-not-allowed"
          )}
          disabled={item.disabled}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex items-center space-x-2">
            {item.icon}
            <span>{item.label}</span>
          </div>
          <ChevronDown className={cn(
            "h-4 w-4 transition-transform",
            isDropdownOpen && "rotate-180"
          )} />
        </button>
        
        {isDropdownOpen && (
          <div className={cn(
            "absolute top-full left-0 bg-background border border-border rounded-md shadow-lg z-50 min-w-[200px]",
            mobile && "relative top-0 left-0 border-0 shadow-none bg-accent/50"
          )}>
            <div className="py-1">
              {item.children!.map((child, index) => (
                <NavigationItemComponent 
                  key={index} 
                  item={child} 
                  mobile={mobile}
                  onItemClick={onItemClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  const content = (
    <div className="flex items-center space-x-2">
      {item.icon}
      <span>{item.label}</span>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className={cn(
          navigationItemVariants({ 
            variant: item.active ? "active" : "default",
            size: mobile ? "md" : "md"
          }),
          item.disabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(
        navigationItemVariants({ 
          variant: item.active ? "active" : "default",
          size: mobile ? "md" : "md"
        }),
        item.disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export { Navigation, navigationVariants, navigationItemVariants };
