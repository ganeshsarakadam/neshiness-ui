import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Button } from './button'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with header, content, and footer sections. Built with composition patterns for maximum flexibility.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Basic card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

// Card with different content
export const WithContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                placeholder="Name of your project"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

// Card variants
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card variant="default" className="w-[300px]">
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Standard card variant</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a default card with standard styling.</p>
        </CardContent>
      </Card>
      
      <Card variant="outline" className="w-[300px]">
        <CardHeader>
          <CardTitle>Outline Card</CardTitle>
          <CardDescription>Card with border outline</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has an outlined border style.</p>
        </CardContent>
      </Card>
    </div>
  ),
}

// Card sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card size="sm" className="w-[300px]">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Compact card with smaller padding.</p>
        </CardContent>
      </Card>
      
      <Card size="md" className="w-[300px]">
        <CardHeader>
          <CardTitle>Medium Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Standard card with medium padding.</p>
        </CardContent>
      </Card>
      
      <Card size="lg" className="w-[300px]">
        <CardHeader>
          <CardTitle>Large Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Spacious card with larger padding.</p>
        </CardContent>
      </Card>
    </div>
  ),
}

// Card composition examples
export const Composition: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Simple card */}
      <Card className="w-[300px]">
        <CardContent className="p-6">
          <p>Simple card with just content.</p>
        </CardContent>
      </Card>
      
      {/* Card with header only */}
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Header Only</CardTitle>
          <CardDescription>No content or footer</CardDescription>
        </CardHeader>
      </Card>
      
      {/* Card with content and footer */}
      <Card className="w-[300px]">
        <CardContent className="p-6">
          <p>Card with content and footer.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Learn More</Button>
        </CardFooter>
      </Card>
      
      {/* Full card */}
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Complete Card</CardTitle>
          <CardDescription>All sections included</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Full card with header, content, and footer.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Confirm</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
