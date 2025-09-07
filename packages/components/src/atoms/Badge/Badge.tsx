import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    borderRadius: 'var(--radius-sm)',
    border: 'none',
    outline: 'none',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      fontSize: '12px',
      padding: 'var(--space-1) var(--space-2)',
      minHeight: '20px',
    },
    md: {
      fontSize: '14px',
      padding: 'var(--space-1) var(--space-3)',
      minHeight: '24px',
    },
    lg: {
      fontSize: '16px',
      padding: 'var(--space-2) var(--space-4)',
      minHeight: '32px',
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-muted)',
      color: 'var(--color-text)',
    },
    success: {
      backgroundColor: '#10b981',
      color: 'white',
    },
    warning: {
      backgroundColor: '#f59e0b',
      color: 'white',
    },
    error: {
      backgroundColor: '#ef4444',
      color: 'white',
    },
    info: {
      backgroundColor: 'var(--color-accent)',
      color: 'white',
    },
  };

  return (
    <span
      className={`neshiness-badge neshiness-badge--${variant} neshiness-badge--${size} ${className}`}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  );
};
