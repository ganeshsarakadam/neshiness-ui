import { Badge } from './Badge';
import React from 'react';

export default {
  title: 'Atoms/Badge',
  component: Badge,
};

export const Default = { args: { children: 'Badge' } };
export const Success = { args: { variant: 'success', children: 'Success' } };
export const Warning = { args: { variant: 'warning', children: 'Warning' } };
export const Error = { args: { variant: 'error', children: 'Error' } };
export const Info = { args: { variant: 'info', children: 'Info' } };
export const Small = { args: { size: 'sm', children: 'Small' } };
export const Large = { args: { size: 'lg', children: 'Large' } };
export const WithNumber = { args: { children: '42' } };
export const WithIcon = { args: { children: '★ Featured' } };
