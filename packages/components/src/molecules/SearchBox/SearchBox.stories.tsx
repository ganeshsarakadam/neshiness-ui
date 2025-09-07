import { SearchBox } from './SearchBox';
import React from 'react';

export default {
  title: 'Molecules/SearchBox',
  component: SearchBox,
};

export const Default = {};

export const WithPlaceholder = { 
  args: { placeholder: 'Search for products...' } 
};

export const WithValue = { 
  args: { value: 'React components' } 
};

export const Loading = { 
  args: { loading: true } 
};

export const WithCallbacks = {
  render: () => (
    <SearchBox
      placeholder="Search..."
      onChange={(value) => console.log('Search value:', value)}
      onSearch={(value) => console.log('Searching for:', value)}
    />
  )
};

export const Controlled = {
  render: () => {
    const [value, setValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSearch = async (searchValue: string) => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Searching for:', searchValue);
        setLoading(false);
      }, 1000);
    };

    return (
      <SearchBox
        value={value}
        onChange={setValue}
        onSearch={handleSearch}
        loading={loading}
        placeholder="Controlled search..."
      />
    );
  }
};
