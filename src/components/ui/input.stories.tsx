import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component with multiple variants, sizes, and states. Built with proper accessibility and validation support.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'The visual state variant of the input',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// Default input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

// All variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Default Input</label>
        <Input placeholder="Default input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Error Input</label>
        <Input variant="error" placeholder="Error input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Success Input</label>
        <Input variant="success" placeholder="Success input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Warning Input</label>
        <Input variant="warning" placeholder="Warning input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input variants for different validation states.',
      },
    },
  },
}

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Small</label>
        <Input size="sm" placeholder="Small input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Medium</label>
        <Input size="md" placeholder="Medium input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Large</label>
        <Input size="lg" placeholder="Large input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input sizes from small to large.',
      },
    },
  },
}

// Input types
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Text</label>
        <Input type="text" placeholder="Enter text" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Email</label>
        <Input type="email" placeholder="Enter email" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Password</label>
        <Input type="password" placeholder="Enter password" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Number</label>
        <Input type="number" placeholder="Enter number" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Search</label>
        <Input type="search" placeholder="Search..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input types for various use cases.',
      },
    },
  },
}

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Normal</label>
        <Input placeholder="Normal state" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Disabled</label>
        <Input disabled placeholder="Disabled input" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">With Value</label>
        <Input defaultValue="Prefilled value" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input states including disabled and prefilled.',
      },
    },
  },
}

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Search with Icon</label>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <Input className="pl-10" placeholder="Search..." />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Email with Icon</label>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <Input className="pl-10" type="email" placeholder="Enter email" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs with icons for better visual context.',
      },
    },
  },
}

// Interactive example
export const Interactive: Story = {
  args: {
    placeholder: 'Type something...',
    variant: 'default',
    size: 'md',
    disabled: false,
    type: 'text',
  },
}

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div>
        <label htmlFor="name" className="text-sm font-medium mb-2 block">Full Name</label>
        <Input id="name" placeholder="Enter your full name" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium mb-2 block">Password</label>
        <Input id="password" type="password" placeholder="Enter your password" />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium mb-2 block">Phone Number</label>
        <Input id="phone" type="tel" placeholder="Enter your phone number" />
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete form example with different input types.',
      },
    },
  },
}
