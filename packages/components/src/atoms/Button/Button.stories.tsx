import { Button } from './Button';
import React from 'react';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Solid = { args: { children: 'Click me', variant: 'solid' } };
export const Outline = { args: { children: 'Click me', variant: 'outline' } };
export const Ghost = { args: { children: 'Click me', variant: 'ghost' } };
