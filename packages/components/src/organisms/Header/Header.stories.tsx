import { Header } from './Header';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { SearchBox } from '../../molecules/SearchBox/SearchBox';
import React from 'react';

export default {
  title: 'Organisms/Header',
  component: Header,
};

export const Default = {};

export const WithMenu = {
  args: {
    onMenuClick: () => console.log('Menu clicked'),
  }
};

export const WithUser = {
  args: {
    user: {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    onUserClick: () => console.log('User clicked'),
  }
};

export const WithActions = {
  render: () => (
    <Header
      title="Dashboard"
      actions={
        <>
          <Button variant="ghost">
            <Icon name="notification" size="sm" />
          </Button>
          <Button variant="ghost">
            <Icon name="settings" size="sm" />
          </Button>
        </>
      }
    />
  )
};

export const WithSearch = {
  render: () => (
    <Header
      title="Search App"
      actions={
        <div style={{ width: '300px' }}>
          <SearchBox placeholder="Search..." />
        </div>
      }
    />
  )
};

export const Complete = {
  render: () => (
    <Header
      title="Complete App"
      onMenuClick={() => console.log('Menu clicked')}
      user={{
        name: 'Jane Smith',
        email: 'jane@example.com',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      }}
      onUserClick={() => console.log('User clicked')}
      actions={
        <>
          <Button variant="ghost">
            <Icon name="notification" size="sm" />
          </Button>
          <Button variant="ghost">
            <Icon name="settings" size="sm" />
          </Button>
        </>
      }
    />
  )
};

export const WithLogo = {
  render: () => (
    <Header
      title="Brand App"
      logo={
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          marginRight: '16px'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'var(--color-accent)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>
            N
          </div>
        </div>
      }
      user={{
        name: 'Admin User',
      }}
    />
  )
};
