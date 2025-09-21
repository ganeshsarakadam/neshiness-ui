"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarGroup } from "@/components/ui/avatar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useState } from "react";

export default function ComponentsPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const sampleAvatars = [
    { src: "", alt: "John Doe", fallback: "JD" },
    { src: "", alt: "Jane Smith", fallback: "JS" },
    { src: "", alt: "Bob Johnson", fallback: "BJ" },
    { src: "", alt: "Alice Brown", fallback: "AB" },
    { src: "", alt: "Charlie Wilson", fallback: "CW" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Component Library</h1>
              <p className="text-muted-foreground mt-2">Atomic and composite components built with Radix UI</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={toggleTheme} variant="outline">
                {isDark ? "☀️" : "🌙"} Toggle Dark
              </Button>
              <Button asChild variant="outline">
                <a href="/">🏠 Home</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/forms">📝 Forms</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/navigation">🧭 Navigation</a>
              </Button>

            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Theme Switcher Demo */}
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Theme Switcher</h2>
              <p className="text-muted-foreground">Switch between different color themes</p>
            </div>
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          </section>

          {/* Button Components */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Button Components</h2>
              <p className="text-muted-foreground">Various button variants and sizes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Button Variants */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">⚙️</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Card Components */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Card Components</h2>
              <p className="text-muted-foreground">Flexible containers for content</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Simple Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Simple Card</CardTitle>
                  <CardDescription>
                    A basic card with header, content, and footer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is the main content area of the card.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>

              {/* Interactive Card */}
              <Card 
                variant="primary" 
                size="lg" 
                interactive 
                onClick={() => alert('Card clicked!')}
              >
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>
                    Click me! This card has hover effects and click handling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    This card responds to user interaction with visual feedback.
                  </p>
                </CardContent>
              </Card>

              {/* Success Card */}
              <Card variant="success">
                <CardHeader>
                  <CardTitle>Success Card</CardTitle>
                  <CardDescription>
                    A card with success styling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Perfect for success messages or positive feedback.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Continue</Button>
                </CardFooter>
              </Card>

              {/* Card with Built-in Title */}
              <Card 
                title="Built-in Title" 
                description="This card has a title and description built into the component"
                footer={<Button size="sm">Learn More</Button>}
              >
                <p className="text-sm">
                  The title and description are rendered automatically by the Card component.
                </p>
              </Card>

              {/* Warning Card */}
              <Card variant="warning">
                <CardHeader>
                  <CardTitle>Warning Card</CardTitle>
                  <CardDescription>
                    Important information that needs attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Use warning cards for important notices or alerts.
                  </p>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card variant="info">
                <CardHeader>
                  <CardTitle>Info Card</CardTitle>
                  <CardDescription>
                    General information or tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Info cards are great for helpful information and tips.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Got it</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Badge Components */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Badge Components</h2>
              <p className="text-muted-foreground">Status indicators and labels</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Badge Variants */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="destructive">Error</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              {/* Badge Sizes */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </div>

              {/* Badge Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Features</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="success" removable onRemove={() => alert('Badge removed!')}>
                    Removable
                  </Badge>
                  <Badge variant="info" icon="ℹ️">
                    With Icon
                  </Badge>
                  <Badge variant="warning" iconRight="⚠️">
                    Icon Right
                  </Badge>
                </div>
              </div>

              {/* Badge Examples */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Real Examples</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="success">Active</Badge>
                  <Badge variant="secondary">Draft</Badge>
                  <Badge variant="destructive">Failed</Badge>
                  <Badge variant="info">New</Badge>
                  <Badge variant="outline">Beta</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Avatar Components */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Avatar Components</h2>
              <p className="text-muted-foreground">User profile pictures with fallbacks</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Avatar Sizes */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar size="xs" alt="Extra Small" fallback="XS" />
                  <Avatar size="sm" alt="Small" fallback="SM" />
                  <Avatar size="md" alt="Medium" fallback="MD" />
                  <Avatar size="lg" alt="Large" fallback="LG" />
                  <Avatar size="xl" alt="Extra Large" fallback="XL" />
                  <Avatar size="2xl" alt="2X Large" fallback="2XL" />
                </div>
              </div>

              {/* Avatar Variants */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Variants</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar variant="default" fallback="DF" />
                  <Avatar variant="primary" fallback="PR" />
                  <Avatar variant="secondary" fallback="SC" />
                  <Avatar variant="success" fallback="SU" />
                  <Avatar variant="warning" fallback="WA" />
                  <Avatar variant="info" fallback="IN" />
                  <Avatar variant="destructive" fallback="DE" />
                </div>
              </div>

              {/* Avatar with Images */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">With Images</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Avatar 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="John Doe" 
                    fallback="JD" 
                  />
                  <Avatar 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt="Jane Smith" 
                    fallback="JS" 
                  />
                  <Avatar 
                    src="" // This will show fallback
                    alt="Bob Johnson" 
                    fallback="BJ" 
                  />
                </div>
              </div>

              {/* Avatar Groups */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Avatar Groups</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Basic group (max 3)</p>
                    <AvatarGroup 
                      avatars={sampleAvatars}
                      max={3}
                      size="md"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Large group (max 5)</p>
                    <AvatarGroup 
                      avatars={sampleAvatars}
                      max={5}
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component Usage Examples */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Usage Examples</h2>
              <p className="text-muted-foreground">Real-world component combinations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* User Profile Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="John Doe" 
                      fallback="JD" 
                      size="lg"
                    />
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>Software Engineer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="success">Active</Badge>
                    <Badge variant="info">Premium</Badge>
                    <Badge variant="outline">Remote</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Experienced developer with expertise in React, TypeScript, and modern web technologies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View Profile</Button>
                  <Button variant="outline" size="sm">Message</Button>
                </CardFooter>
              </Card>

              {/* Project Status Card */}
              <Card variant="primary">
                <CardHeader>
                  <CardTitle>Project Dashboard</CardTitle>
                  <CardDescription>Real-time project status and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Team Members</span>
                      <div className="flex items-center gap-2">
                        <AvatarGroup 
                          avatars={sampleAvatars.slice(0, 4)}
                          max={3}
                          size="sm"
                        />
                        <Badge variant="outline">5 total</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Status</span>
                      <Badge variant="success">On Track</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Priority</span>
                      <Badge variant="warning">High</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">View Details</Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
