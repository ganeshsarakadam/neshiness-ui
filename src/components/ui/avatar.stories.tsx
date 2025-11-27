import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Avatar, AvatarGroup } from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A user avatar component with image, fallback, and group support. Built with Radix UI primitives.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the avatar',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'info', 'destructive'],
      description: 'The visual style variant of the avatar',
    },
    src: {
      control: { type: 'text' },
      description: 'Image source for the avatar',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt text for the avatar image',
    },
    fallback: {
      control: { type: 'text' },
      description: 'Fallback text to display when image fails to load',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// Default avatar
export const Default: Story = {
  args: {
    src: "",
    alt: "@neshUI",
    fallback: "CN",
    size: "md"
  },
}

// Avatar sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" src="" alt="@shadcn" fallback="CN" />
      <Avatar size="sm" src="" alt="@shadcn" fallback="CN" />
      <Avatar size="md" src="" alt="@shadcn" fallback="CN" />
      <Avatar size="lg" src="" alt="@shadcn" fallback="CN" />
      <Avatar size="xl" src="" alt="@shadcn" fallback="CN" />
      <Avatar size="2xl" src="" alt="@shadcn" fallback="CN" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar sizes from extra small to 2x large.',
      },
    },
  },
}

// Avatar variants
export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar variant="default" fallback="DF" />
      <Avatar variant="primary" fallback="PR" />
      <Avatar variant="secondary" fallback="SC" />
      <Avatar variant="success" fallback="SU" />
      <Avatar variant="warning" fallback="WA" />
      <Avatar variant="info" fallback="IN" />
      <Avatar variant="destructive" fallback="DE" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar color variants for different use cases.',
      },
    },
  },
}

// With fallback only
export const FallbackOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="JD" />
      <Avatar fallback="AB" />
      <Avatar fallback="XY" />
      <Avatar fallback="MN" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with fallback text when no image is provided.',
      },
    },
  },
}

// Interactive example
export const Interactive: Story = {
  args: {
    src: "",
    alt: "@shadcn",
    fallback: "CN",
    size: "lg",
    variant: "default",
  },
}

// Avatar group
export const Group: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Avatar Group</h3>
        <AvatarGroup
          max={3}
          avatars={[
            { src: "", alt: "@shadcn", fallback: "CN" },
            { src: "https://github.com/vercel.png", alt: "@vercel", fallback: "VC" },
            { alt: "User 3", fallback: "AB" },
            { alt: "User 4", fallback: "CD" },
            { alt: "User 5", fallback: "EF" },
          ]}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Group with Custom Max</h3>
        <AvatarGroup
          max={2}
          avatars={[
            { src: "", alt: "@shadcn", fallback: "CN" },
            { src: "https://github.com/vercel.png", alt: "@vercel", fallback: "VC" },
            { alt: "User 3", fallback: "AB" },
            { alt: "User 4", fallback: "CD" },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatar groups for displaying multiple users with overflow handling.',
      },
    },
  },
}

// Use cases
export const UseCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">User Profile</h3>
        <div className="flex items-center gap-3">
          <Avatar size="lg" src="" alt="@shadcn" fallback="CN" />
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Team Members</h3>
        <div className="flex items-center gap-2">
          <AvatarGroup
            max={4}
            avatars={[
              { src: "", alt: "@shadcn", fallback: "CN" },
              { src: "https://github.com/vercel.png", alt: "@vercel", fallback: "VC" },
              { alt: "User 3", fallback: "AB" },
              { alt: "User 4", fallback: "CD" },
              { alt: "User 5", fallback: "EF" },
            ]}
          />
          <span className="text-sm text-muted-foreground">5 team members</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Status Avatars</h3>
        <div className="flex items-center gap-4">
          <Avatar variant="success" size="lg" fallback="ON" />
          <Avatar variant="warning" size="lg" fallback="AW" />
          <Avatar variant="destructive" size="lg" fallback="OF" />
          <Avatar variant="info" size="lg" fallback="BU" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common use cases for avatars in applications.',
      },
    },
  },
}