import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}) => {
  const baseStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--color-muted)',
    overflow: 'hidden',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      boxShadow: 'var(--shadow-1)',
    },
    elevated: {
      boxShadow: 'var(--shadow-2)',
      border: 'none',
    },
    outlined: {
      boxShadow: 'none',
      border: '1px solid var(--color-muted)',
    },
  };

  const paddingStyles: Record<string, React.CSSProperties> = {
    none: { padding: '0' },
    sm: { padding: 'var(--space-3)' },
    md: { padding: 'var(--space-4)' },
    lg: { padding: 'var(--space-6)' },
  };

  return (
    <div
      className={`neshiness-card neshiness-card--${variant} neshiness-card--${padding} ${className}`}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...paddingStyles[padding],
      }}
    >
      {children}
    </div>
  );
};
