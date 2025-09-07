import React from 'react';
import { Input } from '../../atoms/Input/Input';
import { Icon } from '../../atoms/Icon/Icon';
import { Button } from '../../atoms/Button/Button';

export interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  loading?: boolean;
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSearch,
  loading = false,
  className = '',
}) => {
  const [searchValue, setSearchValue] = React.useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onChange?.(newValue);
  };

  const handleSearch = () => {
    onSearch?.(searchValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div
      className={`neshiness-searchbox ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        width: '100%',
      }}
    >
      <div style={{ position: 'relative', flex: 1 }}>
        <Input
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          style={{
            paddingLeft: 'var(--space-10)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 'var(--space-3)',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
          }}
        >
          <Icon name="search" size="sm" />
        </div>
      </div>
      <Button
        variant="solid"
        onClick={handleSearch}
        disabled={loading}
        style={{
          minWidth: 'auto',
          padding: 'var(--space-3)',
        }}
      >
        {loading ? <Icon name="clock" size="sm" /> : <Icon name="search" size="sm" />}
      </Button>
    </div>
  );
};
