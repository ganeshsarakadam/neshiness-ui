import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base = {
  fontFamily: 'var(--font-sans)',
  borderRadius: 'var(--radius-md)',
  paddingInline: 'var(--space-4)',
  paddingBlock: 'var(--space-2)',
  fontWeight: 600,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  cursor: 'pointer',
  transition: 'background-color .15s ease, color .15s ease, border-color .15s ease, box-shadow .15s ease'
} as const;

const variants: Record<ButtonVariant, React.CSSProperties> = {
  solid: {
    color: 'var(--color-bg)',
    backgroundColor: 'var(--color-accent)',
    border: '1px solid var(--color-accent)',
  },
  outline: {
    color: 'var(--color-text)',
    backgroundColor: 'transparent',
    border: '1px solid var(--color-accent)',
  },
  ghost: {
    color: 'var(--color-text)',
    backgroundColor: 'transparent',
    border: '1px solid transparent'
  }
};

const sizes: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: 32, fontSize: 13 },
  md: { height: 40, fontSize: 14 },
  lg: { height: 48, fontSize: 16 }
};

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', size = 'md', style, children, ...rest }) => {
  const styleMerged: React.CSSProperties = {
    ...base,
    ...variants[variant],
    ...sizes[size],
    ...style
  };

  return (
    <button
      style={styleMerged}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === 'solid') el.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent-hover').trim();
        if (variant === 'outline' || variant === 'ghost') el.style.backgroundColor = 'rgba(255,255,255,0.04)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (variant === 'solid') el.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
        if (variant === 'outline' || variant === 'ghost') el.style.backgroundColor = 'transparent';
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
