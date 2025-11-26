import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Enhanced className utility that combines clsx and tailwind-merge
 * Handles conditional classes and merges Tailwind classes intelligently
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a compound variant function that combines multiple variant systems
 * Useful for components that need both size and color variants
 */
export function createCompoundVariants<T extends Record<string, unknown>>(
  variants: T,
  compoundVariants?: Array<{
    [K in keyof T]?: T[K] extends Record<string, unknown> ? keyof T[K] : never;
  } & { class: string }>
) {
  return { variants, compoundVariants };
}

/**
 * Creates responsive class names based on breakpoints
 * @param classes - Object with breakpoint keys and class values
 * @example
 * responsive({
 *   base: "text-sm",
 *   md: "text-base", 
 *   lg: "text-lg"
 * })
 */
export function responsive(classes: {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  "2xl"?: string;
}) {
  return Object.entries(classes)
    .map(([breakpoint, className]) => {
      if (breakpoint === "base") return className;
      return className ? `${breakpoint}:${className}` : "";
    })
    .filter(Boolean)
    .join(" ");
}

/**
 * Creates animation class names with proper timing
 */
export function animation(type: "fade" | "slide" | "scale" | "bounce", direction?: "up" | "down" | "left" | "right") {
  const animations = {
    fade: "animate-in fade-in duration-300",
    slide: direction ? `animate-in slide-in-from-${direction} duration-300` : "animate-in slide-in-from-bottom duration-300",
    scale: "animate-in zoom-in-95 duration-300",
    bounce: "animate-in bounce-in duration-500",
  };

  return animations[type];
}

/**
 * Creates focus ring styles that adapt to the current theme
 */
export function focusRing(color: "default" | "primary" | "destructive" = "default") {
  const colors = {
    default: "focus-visible:ring-ring",
    primary: "focus-visible:ring-primary",
    destructive: "focus-visible:ring-destructive",
  };

  return `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${colors[color]}`;
}

/**
 * Creates loading state classes
 */
export function loading(show: boolean = true) {
  return show ? "animate-pulse pointer-events-none" : "";
}

/**
 * Creates disabled state classes
 */
export function disabled(isDisabled: boolean = false) {
  return isDisabled ? "disabled:pointer-events-none disabled:opacity-50" : "";
}

/**
 * Creates error state classes
 */
export function error(hasError: boolean = false) {
  return hasError ? "border-destructive focus-visible:ring-destructive" : "";
}

/**
 * Creates success state classes
 */
export function success(hasSuccess: boolean = false) {
  return hasSuccess ? "border-success focus-visible:ring-success" : "";
}

/**
 * Combines multiple state functions
 */
export function states({
  loading: isLoading = false,
  disabled: isDisabled = false,
  error: hasError = false,
  success: hasSuccess = false,
}: {
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
}) {
  return cn(
    loading(isLoading),
    disabled(isDisabled),
    error(hasError),
    success(hasSuccess)
  );
}
