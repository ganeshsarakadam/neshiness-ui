import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  error = false,
  label,
  helperText,
  errorText,
  className = '',
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    fontSize: size === 'sm' ? '14px' : size === 'lg' ? '18px' : '16px',
    padding: size === 'sm' ? 'var(--space-2)' : size === 'lg' ? 'var(--space-4)' : 'var(--space-3)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid',
    outline: 'none',
    transition: 'all 0.2s ease',
    width: '100%',
    boxSizing: 'border-box',
  };

  const variants: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-surface)',
      borderColor: error ? '#ef4444' : 'var(--color-muted)',
      color: 'var(--color-text)',
    },
    filled: {
      backgroundColor: 'var(--color-muted)',
      borderColor: 'transparent',
      color: 'var(--color-text)',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: error ? '#ef4444' : 'var(--color-accent)',
      color: 'var(--color-text)',
    },
  };

  const focusStyles: React.CSSProperties = {
    borderColor: error ? '#ef4444' : 'var(--color-accent)',
    boxShadow: `0 0 0 3px ${error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 138, 31, 0.1)'}`,
  };

  const inputId = React.useId();
  const helperId = React.useId();

  return (
    <div className={`neshiness-input ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: 'block',
            marginBottom: 'var(--space-2)',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--color-text)',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          ...baseStyles,
          ...variants[variant],
        }}
        onFocus={(e) => {
          Object.assign(e.currentTarget.style, focusStyles);
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = variants[variant].borderColor as string;
          e.currentTarget.style.boxShadow = 'none';
        }}
        aria-invalid={error}
        aria-describedby={helperText || errorText ? helperId : undefined}
        {...props}
      />
      {(helperText || errorText) && (
        <div
          id={helperId}
          style={{
            marginTop: 'var(--space-1)',
            fontSize: '12px',
            color: error ? '#ef4444' : 'var(--color-text)',
            opacity: 0.7,
          }}
        >
          {error ? errorText : helperText}
        </div>
      )}
    </div>
  );
};
