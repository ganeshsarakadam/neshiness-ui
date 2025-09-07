import { Icon } from './Icon';
import React from 'react';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

export const Home = { args: { name: 'home' } };
export const Search = { args: { name: 'search' } };
export const User = { args: { name: 'user' } };
export const Settings = { args: { name: 'settings' } };
export const Star = { args: { name: 'star' } };
export const Heart = { args: { name: 'heart' } };
export const Check = { args: { name: 'check' } };
export const Warning = { args: { name: 'warning' } };
export const Small = { args: { name: 'home', size: 'sm' } };
export const Large = { args: { name: 'home', size: 'lg' } };
export const ExtraLarge = { args: { name: 'home', size: 'xl' } };
export const CustomColor = { args: { name: 'heart', color: '#ef4444' } };
