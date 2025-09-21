import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Form component variants using class-variance-authority
 */
const formVariants = cva(
  "space-y-6",
  {
    variants: {
      size: {
        sm: "space-y-4",
        md: "space-y-6",
        lg: "space-y-8",
      },
      variant: {
        default: "",
        card: "p-6 border rounded-lg bg-card",
        outline: "p-6 border-2 border-dashed rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

/**
 * Form field variants
 */
const formFieldVariants = cva(
  "space-y-2",
  {
    variants: {
      size: {
        sm: "space-y-1",
        md: "space-y-2",
        lg: "space-y-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

/**
 * Form component props
 */
export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  /**
   * Title for the form
   */
  title?: string;
  /**
   * Description for the form
   */
  description?: string;
  /**
   * Whether the form is loading
   */
  loading?: boolean;
  /**
   * Whether the form is disabled
   */
  disabled?: boolean;
  /**
   * Success message to display
   */
  successMessage?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Form actions (buttons)
   */
  actions?: React.ReactNode;
  /**
   * Whether to show form actions at the bottom
   */
  showActions?: boolean;
}

/**
 * Form field component props
 */
export interface FormFieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formFieldVariants> {
  /**
   * Label for the field
   */
  label?: string;
  /**
   * Helper text for the field
   */
  helperText?: string;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Whether the field has an error
   */
  error?: boolean;
  /**
   * Error message for the field
   */
  errorMessage?: string;
  /**
   * Whether the field is successful
   */
  success?: boolean;
  /**
   * Success message for the field
   */
  successMessage?: string;
}

/**
 * Form component - A wrapper for form elements with consistent styling
 * 
 * @example
 * ```tsx
 * <Form title="Contact Form" description="Send us a message">
 *   <FormField label="Name" required>
 *     <Input placeholder="Enter your name" />
 *   </FormField>
 *   <FormField label="Email" required error errorMessage="Email is required">
 *     <Input type="email" placeholder="Enter your email" />
 *   </FormField>
 *   <FormField label="Message">
 *     <Textarea placeholder="Enter your message" />
 *   </FormField>
 *   <FormActions>
 *     <Button type="submit">Submit</Button>
 *     <Button type="button" variant="outline">Cancel</Button>
 *   </FormActions>
 * </Form>
 * ```
 */
const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ 
    className, 
    size, 
    variant, 
    title, 
    description, 
    loading, 
    disabled, 
    successMessage, 
    errorMessage, 
    actions, 
    showActions = true,
    children, 
    ...props 
  }, ref) => {
    return (
      <form
        ref={ref}
        className={cn(formVariants({ size, variant }), className)}
        {...props}
      >
        {/* Form Header */}
        {(title || description) && (
          <div className="space-y-2">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="flex items-center space-x-2">
              <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
              <span className="text-sm text-muted-foreground">Loading...</span>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className={cn("space-y-6", disabled && "opacity-50 pointer-events-none")}>
          {children}
        </div>

        {/* Form Messages */}
        {(successMessage || errorMessage) && (
          <div className="space-y-2">
            {successMessage && (
              <div className="p-4 border border-success/20 bg-success/10 rounded-lg">
                <p className="text-sm text-success font-medium">{successMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div className="p-4 border border-destructive/20 bg-destructive/10 rounded-lg">
                <p className="text-sm text-destructive font-medium">{errorMessage}</p>
              </div>
            )}
          </div>
        )}

        {/* Form Actions */}
        {showActions && actions && (
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-6 border-t">
            {actions}
          </div>
        )}
      </form>
    );
  }
);

Form.displayName = "Form";

/**
 * Form field component - A wrapper for individual form fields
 */
const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ 
    className, 
    size, 
    label, 
    helperText, 
    required, 
    error, 
    errorMessage, 
    success, 
    successMessage, 
    children, 
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(formFieldVariants({ size }), className)}
        {...props}
      >
        {/* Field Label */}
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}

        {/* Field Input */}
        {children}

        {/* Field Messages */}
        {(helperText || errorMessage || successMessage) && (
          <div className="text-xs">
            {error && errorMessage && (
              <p className="text-destructive">{errorMessage}</p>
            )}
            {success && successMessage && (
              <p className="text-success">{successMessage}</p>
            )}
            {!error && !success && helperText && (
              <p className="text-muted-foreground">{helperText}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

/**
 * Form actions component - Container for form action buttons
 */
export interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to align actions to the right
   */
  align?: "left" | "center" | "right";
}

const FormActions = React.forwardRef<HTMLDivElement, FormActionsProps>(
  ({ className, align = "right", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col-reverse sm:flex-row gap-2",
          align === "left" && "sm:justify-start",
          align === "center" && "sm:justify-center",
          align === "right" && "sm:justify-end",
          className
        )}
        {...props}
      />
    );
  }
);

FormActions.displayName = "FormActions";

/**
 * Form section component - A section within a form
 */
export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title for the section
   */
  title?: string;
  /**
   * Description for the section
   */
  description?: string;
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      >
        {(title || description) && (
          <div className="space-y-1">
            {title && (
              <h3 className="text-lg font-medium">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    );
  }
);

FormSection.displayName = "FormSection";

export { 
  Form, 
  FormField, 
  FormActions, 
  FormSection,
  formVariants, 
  formFieldVariants 
};
