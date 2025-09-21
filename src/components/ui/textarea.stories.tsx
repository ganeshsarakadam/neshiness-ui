import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line text input component with auto-resize functionality and character counting. Perfect for longer text content.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'error', 'success', 'warning'],
      description: 'The visual state variant of the textarea',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the textarea',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the textarea',
    },
    autoResize: {
      control: { type: 'boolean' },
      description: 'Whether the textarea should auto-resize',
    },
    maxLength: {
      control: { type: 'number' },
      description: 'Maximum number of characters allowed',
    },
    showCount: {
      control: { type: 'boolean' },
      description: 'Whether to show character count',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of visible text lines',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

// Default textarea
export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
}

// All variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Default Textarea</label>
        <Textarea placeholder="Default textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Error Textarea</label>
        <Textarea variant="error" placeholder="Error textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Success Textarea</label>
        <Textarea variant="success" placeholder="Success textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Warning Textarea</label>
        <Textarea variant="warning" placeholder="Warning textarea" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea variants for different validation states.',
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
        <Textarea size="sm" placeholder="Small textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Medium</label>
        <Textarea size="md" placeholder="Medium textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Large</label>
        <Textarea size="lg" placeholder="Large textarea" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textarea sizes from small to large.',
      },
    },
  },
}

// With character count
export const WithCharacterCount: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">With Character Count</label>
        <Textarea 
          placeholder="Type your message..." 
          maxLength={100}
          showCount
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Longer Limit</label>
        <Textarea 
          placeholder="Describe your project..." 
          maxLength={500}
          showCount
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textareas with character counting functionality.',
      },
    },
  },
}

// Auto resize
export const AutoResize: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <label className="text-sm font-medium mb-2 block">Auto Resize</label>
        <Textarea 
          placeholder="This textarea will grow as you type..." 
          autoResize
          rows={3}
        />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Fixed Height</label>
        <Textarea 
          placeholder="This textarea has a fixed height..." 
          rows={4}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Auto-resizing vs fixed height textareas.',
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
        <Textarea placeholder="Normal state" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Disabled</label>
        <Textarea disabled placeholder="Disabled textarea" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">With Value</label>
        <Textarea defaultValue="This textarea has some prefilled content to demonstrate how it looks with existing text." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different textarea states including disabled and prefilled.',
      },
    },
  },
}

// Interactive example
export const Interactive: Story = {
  args: {
    placeholder: 'Type your message here...',
    variant: 'default',
    size: 'md',
    disabled: false,
    autoResize: false,
    showCount: false,
    rows: 4,
  },
}

// Form examples
export const FormExamples: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Form</h3>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Your Message</label>
          <Textarea 
            placeholder="Tell us what you think..."
            maxLength={500}
            showCount
            rows={4}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Feedback Form</h3>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Comments</label>
          <Textarea 
            placeholder="Share your feedback..."
            autoResize
            rows={3}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Additional Notes</label>
          <Textarea 
            placeholder="Any additional information..."
            variant="success"
            rows={2}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world form examples using textareas.',
      },
    },
  },
}
