import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { Avatar } from '../../atoms/Avatar/Avatar';

export interface HeaderProps {
  title?: string;
  logo?: React.ReactNode;
  user?: {
    name: string;
    avatar?: string;
    email?: string;
  };
  onMenuClick?: () => void;
  onUserClick?: () => void;
  actions?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'App',
  logo,
  user,
  onMenuClick,
  onUserClick,
  actions,
  className = '',
}) => {
  return (
    <header
      className={`neshiness-header ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-4) var(--space-6)',
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-muted)',
        minHeight: '64px',
      }}
    >
      {/* Left section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        {onMenuClick && (
          <Button
            variant="ghost"
            onClick={onMenuClick}
            style={{
              minWidth: 'auto',
              padding: 'var(--space-2)',
            }}
          >
            <Icon name="menu" size="md" />
          </Button>
        )}
        
        {logo && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {logo}
          </div>
        )}
        
        <h1
          style={{
            margin: '0',
            fontSize: '20px',
            fontWeight: '600',
            color: 'var(--color-text)',
          }}
        >
          {title}
        </h1>
      </div>

      {/* Center section - actions */}
      {actions && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          {actions}
        </div>
      )}

      {/* Right section - user */}
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--color-text)',
              }}
            >
              {user.name}
            </div>
            {user.email && (
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--color-text)',
                  opacity: 0.7,
                }}
              >
                {user.email}
              </div>
            )}
          </div>
          
          <Button
            variant="ghost"
            onClick={onUserClick}
            style={{
              minWidth: 'auto',
              padding: 'var(--space-1)',
            }}
          >
            <Avatar
              src={user.avatar}
              fallback={user.name.charAt(0).toUpperCase()}
              size="md"
            />
          </Button>
        </div>
      )}
    </header>
  );
};
