import { type ReactNode, type ComponentPropsWithoutRef, type ElementType } from "react";

/**
 * Base component props that all components should extend
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Props for components that can be disabled
 */
export interface DisableableProps {
  disabled?: boolean;
}

/**
 * Props for components that can show loading state
 */
export interface LoadingProps {
  loading?: boolean;
}

/**
 * Props for components that can show error state
 */
export interface ErrorProps {
  error?: boolean;
  errorMessage?: string;
}

/**
 * Props for components that can have different sizes
 */
export interface SizableProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

/**
 * Props for components that can have different variants
 */
export interface VariantProps {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "info" | "destructive";
}

/**
 * Props for components that can have different appearances
 */
export interface AppearanceProps {
  appearance?: "default" | "outline" | "ghost" | "link";
}

/**
 * Props for components that can be interactive
 */
export interface InteractiveProps {
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

/**
 * Props for components that can be controlled or uncontrolled
 */
export interface ControlledProps<T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
}

/**
 * Props for components that can have a label
 */
export interface LabelProps {
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
}

/**
 * Props for components that can have helper text
 */
export interface HelperTextProps {
  helperText?: string;
  helperTextPosition?: "top" | "bottom";
}

/**
 * Props for components that can be required
 */
export interface RequiredProps {
  required?: boolean;
}

/**
 * Props for components that can have an ID
 */
export interface IdentifiableProps {
  id?: string;
}

/**
 * Props for components that can have accessibility attributes
 */
export interface AccessibleProps {
  "aria-label"?: string;
  "aria-describedby"?: string;
  "aria-labelledby"?: string;
  role?: string;
}

/**
 * Common prop combinations for different component types
 */
export interface ButtonProps extends
  BaseComponentProps,
  DisableableProps,
  LoadingProps,
  SizableProps,
  VariantProps,
  AppearanceProps,
  InteractiveProps,
  AccessibleProps { }

export interface InputProps extends
  BaseComponentProps,
  DisableableProps,
  ErrorProps,
  SizableProps,
  ControlledProps<string>,
  LabelProps,
  HelperTextProps,
  RequiredProps,
  IdentifiableProps,
  AccessibleProps {
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
}

export interface CardProps extends
  BaseComponentProps,
  SizableProps,
  VariantProps,
  InteractiveProps {
  title?: string;
  description?: string;
  footer?: ReactNode;
}

/**
 * Utility type for creating polymorphic component props
 * Allows components to render as different HTML elements
 */
export type PolymorphicProps<T extends ElementType = "div", P = object> =
  P &
  Omit<ComponentPropsWithoutRef<T>, keyof P> & {
    as?: T;
  };

/**
 * Utility type for creating forward ref props
 */
export type ForwardRefProps<T extends HTMLElement, P = object> = P & {
  ref?: React.Ref<T>;
};

/**
 * Utility type for creating component props with forwarded ref
 */
export type ComponentPropsWithRef<T extends ElementType = "div", P = object> =
  PolymorphicProps<T, P> & ForwardRefProps<HTMLElement, P>;

/**
 * Event handler types
 */
export type ChangeEventHandler<T = string> = (value: T) => void;
export type ClickEventHandler = () => void;
export type FocusEventHandler = () => void;
export type BlurEventHandler = () => void;

/**
 * Size type for consistent sizing across components
 */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Color type for consistent coloring across components
 */
export type Color = "default" | "primary" | "secondary" | "success" | "warning" | "info" | "destructive";

/**
 * Variant type for consistent variants across components
 */
export type Variant = "default" | "outline" | "ghost" | "link" | "destructive";

/**
 * Appearance type for consistent appearances across components
 */
export type Appearance = "default" | "outline" | "ghost" | "link";
