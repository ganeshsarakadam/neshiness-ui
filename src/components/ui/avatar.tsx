import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Avatar component variants using class-variance-authority
 */
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
      },
      variant: {
        default: "bg-muted",
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        info: "bg-info",
        destructive: "bg-destructive",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

/**
 * Avatar component props
 */
export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  /**
   * Image source for the avatar
   */
  src?: string;
  /**
   * Alt text for the avatar image
   */
  alt?: string;
  /**
   * Fallback text to display when image fails to load
   */
  fallback?: string;
  /**
   * Custom fallback component
   */
  fallbackComponent?: React.ReactNode;
}

/**
 * Avatar component - A user profile picture with fallback
 * 
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" fallback="JD" />
 * <Avatar size="lg" variant="primary" fallback="AB" />
 * <Avatar fallbackComponent={<UserIcon />} />
 * ```
 */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, variant, src, alt, fallback, fallbackComponent, ...props }, ref) => {
  // Generate fallback from alt text if no fallback provided
  const fallbackText = fallback || (alt ? alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '??');

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size, variant }), className)}
      {...props}
    >
      <AvatarPrimitive.Image
        className="aspect-square h-full w-full"
        src={src}
        alt={alt}
      />
      <AvatarPrimitive.Fallback
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium",
          // Size-specific text sizing
          {
            "text-xs": size === "xs",
            "text-sm": size === "sm" || size === "md",
            "text-base": size === "lg",
            "text-lg": size === "xl",
            "text-xl": size === "2xl",
          }
        )}
      >
        {fallbackComponent || fallbackText}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

/**
 * AvatarGroup component - Container for multiple avatars
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum number of avatars to show before showing "+X" indicator
   */
  max?: number;
  /**
   * Array of avatar data
   */
  avatars?: Array<{
    src?: string;
    alt?: string;
    fallback?: string;
  }>;
  /**
   * Size of avatars in the group
   */
  size?: VariantProps<typeof avatarVariants>["size"];
  /**
   * Variant of avatars in the group
   */
  variant?: VariantProps<typeof avatarVariants>["variant"];
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 3, avatars = [], size = "md", variant = "default", ...props }, ref) => {
    const visibleAvatars = avatars.slice(0, max);
    const remainingCount = avatars.length - max;

    return (
      <div
        ref={ref}
        className={cn("flex -space-x-2", className)}
        {...props}
      >
        {visibleAvatars.map((avatar, index) => (
          <Avatar
            key={index}
            size={size}
            variant={variant}
            src={avatar.src}
            alt={avatar.alt}
            fallback={avatar.fallback}
            className="border-2 border-background"
          />
        ))}
        {remainingCount > 0 && (
          <div
            className={cn(
              avatarVariants({ size, variant }),
              "border-2 border-background flex items-center justify-center bg-muted text-sm font-medium"
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup, avatarVariants };
