import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@neshiness-ui/components';
import '@neshiness-ui/theme/orange-black.css';

const meta: Meta<typeof Button> = { title: 'Atoms/Button', component: Button };
export default meta;

type Story = StoryObj<typeof Button>;
export const Solid: Story = { args: { children: 'Click me', variant: 'solid' } };
export const Outline: Story = { args: { children: 'Click me', variant: 'outline' } };
export const Ghost: Story = { args: { children: 'Click me', variant: 'ghost' } };
