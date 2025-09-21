import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

/**
 * Sidebar component variants using class-variance-authority
 */
const sidebarVariants = cva(
  "flex flex-col h-full bg-background border-r border-border transition-all duration-300",
  {
    variants: {
      size: {
        sm: "w-48",
        md: "w-64",
        lg: "w-80",
      },
      collapsed: {
        true: "w-16",
        false: "",
      },
      variant: {
        default: "bg-background",
        glass: "bg-background/80 backdrop-blur-sm",
        elevated: "bg-background shadow-lg",
      },
    },
    defaultVariants: {
      size: "md",
      collapsed: false,
      variant: "default",
    },
  }
);

/**
 * Sidebar item variants
 */
const sidebarItemVariants = cva(
  "flex items-center px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md cursor-pointer",
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
 * Sidebar component props
 */
export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  /**
   * Header content (logo, title, etc.)
   */
  header?: React.ReactNode;
  /**
   * Sidebar items
   */
  items?: SidebarItem[];
  /**
   * Footer content (user info, actions, etc.)
   */
  footer?: React.ReactNode;
  /**
   * Whether the sidebar is collapsible
   */
  collapsible?: boolean;
  /**
   * Collapsed state
   */
  collapsed?: boolean;
  /**
   * Collapse toggle handler
   */
  onCollapseToggle?: () => void;
}

/**
 * Sidebar item interface
 */
export interface SidebarItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
  active?: boolean;
  disabled?: boolean;
  badge?: string | number;
  onClick?: () => void;
}

/**
 * Sidebar component - A collapsible sidebar with navigation
 * 
 * @example
 * ```tsx
 * <Sidebar 
 *   header={<Logo />}
 *   items={[
 *     { label: "Dashboard", href: "/", icon: <HomeIcon /> },
 *     { label: "Users", href: "/users", icon: <UsersIcon /> }
 *   ]}
 *   footer={<UserMenu />}
 *   collapsible
 * />
 * ```
 */
const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ 
    className, 
    size, 
    collapsed, 
    variant, 
    header, 
    items = [], 
    footer, 
    collapsible = false,
    onCollapseToggle,
    ...props 
  }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    
    const isCollapsedState = collapsed !== undefined ? collapsed : isCollapsed;
    
    const handleCollapseToggle = () => {
      if (onCollapseToggle) {
        onCollapseToggle();
      } else {
        setIsCollapsed(!isCollapsed);
      }
    };

    return (
      <aside
        ref={ref}
        className={cn(sidebarVariants({ size, collapsed: isCollapsedState, variant }), className)}
        {...props}
      >
        {/* Header */}
        {header && (
          <div className={cn(
            "flex items-center justify-between p-4 border-b border-border",
            isCollapsedState && "px-2"
          )}>
            <div className={cn(
              "flex items-center space-x-2",
              isCollapsedState && "justify-center"
            )}>
              {header}
            </div>
            
            {collapsible && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCollapseToggle}
                className="h-8 w-8"
                aria-label={isCollapsedState ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isCollapsedState ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </Button>
            )}
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {items.map((item, index) => (
            <SidebarItemComponent 
              key={index} 
              item={item} 
              collapsed={isCollapsedState}
            />
          ))}
        </nav>

        {/* Footer */}
        {footer && (
          <div className={cn(
            "p-4 border-t border-border",
            isCollapsedState && "px-2"
          )}>
            {footer}
          </div>
        )}
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";

/**
 * Sidebar item component props
 */
interface SidebarItemComponentProps {
  item: SidebarItem;
  collapsed?: boolean;
}

/**
 * Sidebar item component
 */
const SidebarItemComponent: React.FC<SidebarItemComponentProps> = ({ item, collapsed = false }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (item.onClick) {
      item.onClick();
    }
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const content = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3">
        {item.icon && (
          <span className={cn("flex-shrink-0", collapsed && "mx-auto")}>
            {item.icon}
          </span>
        )}
        {!collapsed && <span>{item.label}</span>}
      </div>
      
      {!collapsed && (
        <div className="flex items-center space-x-2">
          {item.badge && (
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              {item.badge}
            </span>
          )}
          {hasChildren && (
            <span className={cn(
              "transition-transform",
              isExpanded && "rotate-180"
            )}>
              <ChevronDown className="h-4 w-4" />
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (item.href && !hasChildren) {
    return (
      <a
        href={item.href}
        className={cn(
          sidebarItemVariants({ variant: item.active ? "active" : "default" }),
          item.disabled && "opacity-50 cursor-not-allowed",
          collapsed && "justify-center px-2"
        )}
        title={collapsed ? item.label : undefined}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <div>
      <button
        className={cn(
          sidebarItemVariants({ variant: item.active ? "active" : "default" }),
          item.disabled && "opacity-50 cursor-not-allowed",
          collapsed && "justify-center px-2"
        )}
        title={collapsed ? item.label : undefined}
        onClick={handleClick}
      >
        {content}
      </button>
      
      {/* Children */}
      {hasChildren && !collapsed && isExpanded && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children!.map((child, index) => (
            <SidebarItemComponent 
              key={index} 
              item={child} 
              collapsed={collapsed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Sidebar, sidebarVariants, sidebarItemVariants };
