import { type VariantProps, cva } from "class-variance-authority";

/**
 * Base variant function for creating consistent component variants
 * Uses class-variance-authority for type-safe variant management
 */
export const createVariants = cva;

/**
 * Common variant types used across components
 */
export type SizeVariants = "xs" | "sm" | "md" | "lg" | "xl";
export type ColorVariants = "default" | "primary" | "secondary" | "success" | "warning" | "info" | "destructive";
export type VariantVariants = "default" | "outline" | "ghost" | "link" | "destructive";

/**
 * Common size variants used across components
 */
export const sizeVariants = {
  xs: "h-6 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-6 text-lg",
  xl: "h-14 px-8 text-xl",
} as const;

/**
 * Common color variants used across components
 */
export const colorVariants = {
  default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  success: "bg-success text-success-foreground hover:bg-success/90",
  warning: "bg-warning text-warning-foreground hover:bg-warning/90",
  info: "bg-info text-info-foreground hover:bg-info/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
} as const;

/**
 * Utility type for extracting variant props from a variant function
 */
export type VariantPropsOf<T extends (...args: never[]) => unknown> = VariantProps<T>;

/**
 * Common base styles for components
 */
export const baseStyles = {
  // Interactive elements
  interactive: "transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

  // Disabled state
  disabled: "disabled:pointer-events-none disabled:opacity-50",

  // Layout
  flex: "inline-flex items-center justify-center gap-2",
  flexRow: "flex flex-row items-center gap-2",
  flexCol: "flex flex-col gap-2",

  // Spacing
  container: "container mx-auto px-4",
  section: "space-y-6",

  // Borders and radius
  rounded: "rounded-lg",
  bordered: "border border-border",

  // Shadows
  shadow: "shadow-sm",
  shadowHover: "hover:shadow-md transition-shadow duration-200",
} as const;
