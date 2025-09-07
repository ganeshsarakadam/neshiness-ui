import { Avatar } from './Avatar';
import React from 'react';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
};

export const Default = { args: { fallback: 'JD' } };
export const WithImage = { args: { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', alt: 'John Doe' } };
export const Small = { args: { size: 'sm', fallback: 'AB' } };
export const Large = { args: { size: 'lg', fallback: 'CD' } };
export const ExtraLarge = { args: { size: 'xl', fallback: 'EF' } };
export const Square = { args: { shape: 'square', fallback: 'GH' } };
export const SingleLetter = { args: { fallback: 'A' } };
export const WithLongName = { args: { fallback: 'XYZ' } };
