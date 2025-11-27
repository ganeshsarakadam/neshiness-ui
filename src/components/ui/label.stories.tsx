import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label } from './label'

const meta = {
  title: 'Components/Form/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible label component that can be associated with form controls. Built with Radix UI primitives for proper accessibility.',
      },
    },
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
      description: 'Whether the field is required',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the label is disabled',
    },
    htmlFor: {
      control: { type: 'text' },
      description: 'ID of the form control this label is associated with',
    },
    children: {
      control: { type: 'text' },
      description: 'The label text content',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

// Default label
export const Default: Story = {
  args: {
    children: 'Label',
  },
}

// With form control
export const WithFormControl: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label properly associated with a form input using htmlFor.',
      },
    },
  },
}

// Required labels
export const Required: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <Label htmlFor="name" required>Full Name</Label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div>
        <Label htmlFor="email" required>Email Address</Label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Labels with required indicator for mandatory fields.',
      },
    },
  },
}

// Disabled labels
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <Label htmlFor="disabled-input" disabled>Disabled Field</Label>
        <input
          id="disabled-input"
          type="text"
          placeholder="This field is disabled"
          disabled
          className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled labels for disabled form controls.',
      },
    },
  },
}

// Interactive example
export const Interactive: Story = {
  args: {
    children: 'Interactive Label',
    required: false,
    disabled: false,
    htmlFor: 'interactive-input',
  },
}

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 w-80">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">User Information</h3>

        <div>
          <Label htmlFor="firstName" required>First Name</Label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="lastName" required>Last Name</Label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="email" required>Email Address</Label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete form example with properly labeled fields.',
      },
    },
  },
}
