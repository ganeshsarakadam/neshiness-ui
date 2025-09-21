import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Layout component variants using class-variance-authority
 */
const layoutVariants = cva(
  "min-h-screen flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-background",
        sidebar: "bg-background",
        centered: "bg-background items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Layout header variants
 */
const layoutHeaderVariants = cva(
  "flex items-center justify-between border-b border-border bg-background",
  {
    variants: {
      size: {
        sm: "h-12 px-4",
        md: "h-16 px-6",
        lg: "h-20 px-8",
      },
      sticky: {
        true: "sticky top-0 z-50",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      sticky: false,
    },
  }
);

/**
 * Layout main variants
 */
const layoutMainVariants = cva(
  "flex-1",
  {
    variants: {
      variant: {
        default: "",
        sidebar: "flex",
        centered: "flex items-center justify-center",
        container: "container mx-auto px-4 py-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Layout sidebar variants
 */
const layoutSidebarVariants = cva(
  "flex flex-col border-r border-border bg-background",
  {
    variants: {
      size: {
        sm: "w-48",
        md: "w-64",
        lg: "w-80",
      },
      position: {
        left: "",
        right: "border-l border-r-0",
      },
    },
    defaultVariants: {
      size: "md",
      position: "left",
    },
  }
);

/**
 * Layout content variants
 */
const layoutContentVariants = cva(
  "flex-1",
  {
    variants: {
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  }
);

/**
 * Layout footer variants
 */
const layoutFooterVariants = cva(
  "border-t border-border bg-background",
  {
    variants: {
      size: {
        sm: "h-12 px-4",
        md: "h-16 px-6",
        lg: "h-20 px-8",
      },
      sticky: {
        true: "sticky bottom-0 z-50",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      sticky: false,
    },
  }
);

/**
 * Layout component props
 */
export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  /**
   * Header content
   */
  header?: React.ReactNode;
  /**
   * Footer content
   */
  footer?: React.ReactNode;
  /**
   * Main content
   */
  children: React.ReactNode;
}

/**
 * Layout component - A complete page layout wrapper
 * 
 * @example
 * ```tsx
 * <Layout 
 *   header={<Navigation />}
 *   footer={<Footer />}
 * >
 *   <Main>Content goes here</Main>
 * </Layout>
 * ```
 */
const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, variant, header, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(layoutVariants({ variant }), className)}
        {...props}
      >
        {header && <LayoutHeader>{header}</LayoutHeader>}
        {children}
        {footer && <LayoutFooter>{footer}</LayoutFooter>}
      </div>
    );
  }
);

Layout.displayName = "Layout";

/**
 * Layout header component props
 */
export interface LayoutHeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof layoutHeaderVariants> {
  children: React.ReactNode;
}

/**
 * Layout header component
 */
const LayoutHeader = React.forwardRef<HTMLElement, LayoutHeaderProps>(
  ({ className, size, sticky, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(layoutHeaderVariants({ size, sticky }), className)}
        {...props}
      >
        {children}
      </header>
    );
  }
);

LayoutHeader.displayName = "LayoutHeader";

/**
 * Layout main component props
 */
export interface LayoutMainProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof layoutMainVariants> {
  children: React.ReactNode;
}

/**
 * Layout main component
 */
const LayoutMain = React.forwardRef<HTMLElement, LayoutMainProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(layoutMainVariants({ variant }), className)}
        {...props}
      >
        {children}
      </main>
    );
  }
);

LayoutMain.displayName = "LayoutMain";

/**
 * Layout sidebar component props
 */
export interface LayoutSidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutSidebarVariants> {
  children: React.ReactNode;
}

/**
 * Layout sidebar component
 */
const LayoutSidebar = React.forwardRef<HTMLDivElement, LayoutSidebarProps>(
  ({ className, size, position, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(layoutSidebarVariants({ size, position }), className)}
        {...props}
      >
        {children}
      </aside>
    );
  }
);

LayoutSidebar.displayName = "LayoutSidebar";

/**
 * Layout content component props
 */
export interface LayoutContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutContentVariants> {
  children: React.ReactNode;
}

/**
 * Layout content component
 */
const LayoutContent = React.forwardRef<HTMLDivElement, LayoutContentProps>(
  ({ className, padding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(layoutContentVariants({ padding }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

LayoutContent.displayName = "LayoutContent";

/**
 * Layout footer component props
 */
export interface LayoutFooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof layoutFooterVariants> {
  children: React.ReactNode;
}

/**
 * Layout footer component
 */
const LayoutFooter = React.forwardRef<HTMLElement, LayoutFooterProps>(
  ({ className, size, sticky, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(layoutFooterVariants({ size, sticky }), className)}
        {...props}
      >
        {children}
      </footer>
    );
  }
);

LayoutFooter.displayName = "LayoutFooter";

/**
 * Container component - A responsive container with max-width
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container size
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * Whether to center the container
   */
  centered?: boolean;
  children: React.ReactNode;
}

/**
 * Container component - A responsive container wrapper
 * 
 * @example
 * ```tsx
 * <Container size="lg" centered>
 *   <h1>Page Title</h1>
 *   <p>Page content</p>
 * </Container>
 * ```
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "md", centered = false, children, ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "w-full px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          centered && "mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { 
  Layout, 
  LayoutHeader, 
  LayoutMain, 
  LayoutSidebar, 
  LayoutContent, 
  LayoutFooter,
  Container,
  layoutVariants,
  layoutHeaderVariants,
  layoutMainVariants,
  layoutSidebarVariants,
  layoutContentVariants,
  layoutFooterVariants
};
