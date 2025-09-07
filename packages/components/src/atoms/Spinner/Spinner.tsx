import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'var(--color-accent)',
  className = '',
}) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { width: '16px', height: '16px' },
    md: { width: '24px', height: '24px' },
    lg: { width: '32px', height: '32px' },
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-block',
    border: '2px solid transparent',
    borderTop: `2px solid ${color}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    ...sizeStyles[size],
  };

  // Add CSS animation if not already present
  React.useEffect(() => {
    const styleId = 'neshiness-spinner-animation';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className={`neshiness-spinner neshiness-spinner--${size} ${className}`}
      style={baseStyles}
      role="status"
      aria-label="Loading"
    />
  );
};
