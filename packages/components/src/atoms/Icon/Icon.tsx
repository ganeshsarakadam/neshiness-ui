import React from 'react';

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

// Simple icon component using Unicode symbols and emojis
// In a real project, you'd use an icon library like Lucide, Heroicons, or Feather
const iconMap: Record<string, string> = {
  // Navigation
  'home': '🏠',
  'menu': '☰',
  'close': '✕',
  'back': '←',
  'forward': '→',
  'up': '↑',
  'down': '↓',
  
  // Actions
  'search': '🔍',
  'plus': '+',
  'minus': '−',
  'edit': '✏️',
  'delete': '🗑️',
  'save': '💾',
  'download': '⬇️',
  'upload': '⬆️',
  'copy': '📋',
  'share': '📤',
  
  // Status
  'check': '✓',
  'cross': '✗',
  'warning': '⚠️',
  'info': 'ℹ️',
  'star': '⭐',
  'heart': '❤️',
  'like': '👍',
  'dislike': '👎',
  
  // Communication
  'mail': '✉️',
  'phone': '📞',
  'message': '💬',
  'notification': '🔔',
  
  // Media
  'play': '▶️',
  'pause': '⏸️',
  'stop': '⏹️',
  'volume': '🔊',
  'mute': '🔇',
  'image': '🖼️',
  'video': '🎥',
  
  // Settings
  'settings': '⚙️',
  'user': '👤',
  'users': '👥',
  'lock': '🔒',
  'unlock': '🔓',
  'key': '🔑',
  
  // Time
  'clock': '🕐',
  'calendar': '📅',
  'time': '⏰',
  
  // Weather
  'sun': '☀️',
  'moon': '🌙',
  'cloud': '☁️',
  'rain': '🌧️',
  
  // Technology
  'wifi': '📶',
  'battery': '🔋',
  'bluetooth': '📱',
  'camera': '📷',
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color,
  className = '',
}) => {
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { fontSize: '14px', width: '14px', height: '14px' },
    md: { fontSize: '16px', width: '16px', height: '16px' },
    lg: { fontSize: '20px', width: '20px', height: '20px' },
    xl: { fontSize: '24px', width: '24px', height: '24px' },
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color || 'var(--color-text)',
    ...sizeStyles[size],
  };

  const iconSymbol = iconMap[name] || '?';

  return (
    <span
      className={`neshiness-icon neshiness-icon--${name} neshiness-icon--${size} ${className}`}
      style={baseStyles}
      role="img"
      aria-label={name}
    >
      {iconSymbol}
    </span>
  );
};
