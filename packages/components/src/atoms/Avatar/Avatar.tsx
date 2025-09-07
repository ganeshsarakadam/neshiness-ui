import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  fallback = '?',
  size = 'md',
  shape = 'circle',
  className = '',
}) => {
  const [imageError, setImageError] = React.useState(false);

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { width: '32px', height: '32px', fontSize: '14px' },
    md: { width: '40px', height: '40px', fontSize: '16px' },
    lg: { width: '56px', height: '56px', fontSize: '20px' },
    xl: { width: '80px', height: '80px', fontSize: '28px' },
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-muted)',
    color: 'var(--color-text)',
    fontWeight: '600',
    borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
    overflow: 'hidden',
    objectFit: 'cover',
    ...sizeStyles[size],
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`neshiness-avatar neshiness-avatar--${size} neshiness-avatar--${shape} ${className}`}
      style={baseStyles}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={handleImageError}
        />
      ) : (
        <span style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
          {fallback}
        </span>
      )}
    </div>
  );
};
