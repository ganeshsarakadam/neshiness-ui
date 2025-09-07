import { Spinner } from './Spinner';
import React from 'react';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
};

export const Default = {};
export const Small = { args: { size: 'sm' } };
export const Large = { args: { size: 'lg' } };
export const CustomColor = { args: { color: '#10b981' } };
export const WithText = { 
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner size="sm" />
      <span>Loading...</span>
    </div>
  )
};
