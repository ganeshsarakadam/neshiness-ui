import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";

// ============================================================================
// META
// ============================================================================

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "glow", "moving-border"],
      description: "Visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "icon"],
      description: "Size of the button",
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading spinner and disables the button",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ============================================================================
// STORIES
// ============================================================================

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Glow: Story = {
  args: {
    variant: "glow",
    children: "Glow",
  },
};

export const MovingBorder: Story = {
  args: {
    variant: "moving-border",
    children: "Moving Border",
  },
};

export const MovingBorderCustomized: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Default (3px, 3s, 15%)</p>
        <Button variant="moving-border">Default</Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Thick border (6px)</p>
        <Button variant="moving-border" borderWidth={6}>
          Thick Border
        </Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Fast animation (1.5s)</p>
        <Button variant="moving-border" animationDuration={1500}>
          Fast
        </Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Long segment (30%)</p>
        <Button variant="moving-border" segmentLength={0.3}>
          Long Segment
        </Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Combined: Thick (5px), Slow (5s), Short (10%)</p>
        <Button
          variant="moving-border"
          borderWidth={5}
          animationDuration={5000}
          segmentLength={0.1}
        >
          Custom Combo
        </Button>
      </div>
    </div>
  ),
};

// ============================================================================
// SIZES
// ============================================================================

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// ============================================================================
// VARIANTS SHOWCASE
// ============================================================================

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="glow">Glow</Button>
      <Button variant="moving-border">Moving Border</Button>
    </div>
  ),
};

// ============================================================================
// STATES
// ============================================================================

export const Loading: Story = {
  args: {
    children: "Loading",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button isLoading>Default Loading</Button>
      <Button variant="secondary" isLoading>
        Secondary Loading
      </Button>
      <Button variant="outline" isLoading>
        Outline Loading
      </Button>
      <Button variant="glow" isLoading>
        Glow Loading
      </Button>
    </div>
  ),
};

// ============================================================================
// INTERACTIVE DEMO
// ============================================================================

export const InteractiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Hover & Tap Animation</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Hover to see scale up (1.02x), click to see tap feedback (0.98x)
        </p>
        <div className="flex gap-4">
          <Button>Hover Me</Button>
          <Button variant="glow">Glow Effect</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">All Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            Small
          </Button>
          <Button size="default" variant="outline">
            Default
          </Button>
          <Button size="lg" variant="outline">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Icon Button</h3>
        <Button size="icon" variant="outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Moving Border (Animated)</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Black glowing border that continuously rotates around the button
        </p>
        <div className="flex gap-4">
          <Button variant="moving-border">Moving Border</Button>
          <Button variant="moving-border" size="lg">
            Large Moving Border
          </Button>
        </div>
      </div>
    </div>
  ),
};
