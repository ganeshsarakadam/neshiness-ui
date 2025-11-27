import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Checkbox } from './checkbox'

const meta = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox component built with Radix UI primitives. Supports individual checkboxes and checkbox groups with proper accessibility.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is disabled',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is checked',
    },

    required: {
      control: { type: 'boolean' },
      description: 'Whether the checkbox is required',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// Default checkbox
export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
  ),
}

// Checkbox states
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="unchecked" />
        <label htmlFor="unchecked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Unchecked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checked" checked />
        <label htmlFor="checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Checked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="indeterminate" checked="indeterminate" />
        <label htmlFor="indeterminate" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Indeterminate
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled checked />
        <label htmlFor="disabled-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled Checked
        </label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different checkbox states: unchecked, checked, indeterminate, and disabled.',
      },
    },
  },
}

// Interactive example
export const Interactive: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="interactive" />
      <label htmlFor="interactive" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Interactive Checkbox
      </label>
    </div>
  ),
}

// Checkbox group
export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select your interests:</h3>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="react" />
          <label htmlFor="react" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            React
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="typescript" />
          <label htmlFor="typescript" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            TypeScript
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="tailwind" />
          <label htmlFor="tailwind" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Tailwind CSS
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="nextjs" />
          <label htmlFor="nextjs" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Next.js
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="storybook" />
          <label htmlFor="storybook" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Storybook
          </label>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes in a group for selecting multiple options.',
      },
    },
  },
}

// Form example
export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 w-80">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Newsletter Signup</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" required />
            <label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Subscribe to newsletter
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="updates" />
            <label htmlFor="updates" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Product updates
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="promotions" />
            <label htmlFor="promotions" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Promotions and offers
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Terms and Conditions</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I agree to the Terms of Service
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="privacy" required />
            <label htmlFor="privacy" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I agree to the Privacy Policy
            </label>
          </div>
        </div>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete form example with checkboxes for newsletter signup and terms acceptance.',
      },
    },
  },
}
