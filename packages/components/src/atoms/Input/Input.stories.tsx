import { Input } from './Input';
import React from 'react';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Default = { args: { placeholder: 'Enter text...' } };
export const WithLabel = { args: { label: 'Email', placeholder: 'Enter your email' } };
export const Filled = { args: { variant: 'filled', placeholder: 'Filled input' } };
export const Outline = { args: { variant: 'outline', placeholder: 'Outline input' } };
export const Small = { args: { size: 'sm', placeholder: 'Small input' } };
export const Large = { args: { size: 'lg', placeholder: 'Large input' } };
export const Error = { args: { error: true, errorText: 'This field is required' } };
export const WithHelper = { args: { helperText: 'This is helpful text' } };
