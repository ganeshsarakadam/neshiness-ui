import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states. Built with Radix UI primitives and styled with Tailwind CSS.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render as a child component using Radix UI Slot',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    children: {
      control: { type: 'text' },
      description: 'The content inside the button',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// All variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants with their default styling.',
      },
    },
  },
}

// All sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🚀</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes from small to large, including icon-only variant.',
      },
    },
  },
}

// Interactive controls story
export const Interactive: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
}

// States showcase
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button className="focus:ring-2 focus:ring-primary">Focused</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Normal Outline</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button states including normal, disabled, and focused states.',
      },
    },
  },
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
      <Button variant="outline">
        Download
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </Button>
      <Button variant="ghost" size="icon">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons, showing how to include SVG icons with proper sizing.',
      },
    },
  },
}

// As child component
export const AsChild: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button asChild>
        <a href="#button">Link Button</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#button">Link Outline</a>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using the button as a child component with Radix UI Slot for custom elements like links.',
      },
    },
  },
}
