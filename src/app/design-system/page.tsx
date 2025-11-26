"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useState } from "react";
import Link from "next/link";

export default function DesignSystemPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Neshiness UI Design System</h1>
              <p className="text-muted-foreground mt-2">Comprehensive design tokens and component library</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={toggleTheme} variant="outline">
                {isDark ? "☀️" : "🌙"} Toggle Dark
              </Button>
              <Button asChild variant="outline">
                <Link href="/">🏠 Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/components">🧩 Components</Link>
              </Button>
              <Button asChild variant="default">
                <Link href="/welcome">👋 Welcome</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Theme Switcher */}
          <section className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Theme Switcher</h2>
            <p className="text-lg text-muted-foreground">
              Switch between different color themes to see how the design system adapts
            </p>
            <div className="flex justify-center">
              <ThemeSwitcher />
            </div>
          </section>

          {/* Color System */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Color System</h2>
              <p className="text-lg text-muted-foreground">
                Semantic color palette using OKLCH color space for better consistency
              </p>
            </div>

            {/* Base Colors */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Base Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="h-20 bg-background border border-border rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Background</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--background</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-foreground text-background rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Foreground</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--foreground</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-card border border-border rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Card</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--card</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-popover border border-border rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Popover</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--popover</p>
                </div>
              </div>
            </div>

            {/* Brand Colors */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Brand Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="h-20 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Primary</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--primary</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Secondary</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--secondary</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-accent text-accent-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Accent</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--accent</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-muted text-muted-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Muted</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--muted</p>
                </div>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-3">
                  <div className="h-20 bg-destructive text-destructive-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Destructive</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--destructive</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-success text-success-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Success</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--success</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-warning text-warning-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Warning</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--warning</p>
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-info text-info-foreground rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium">Info</span>
                  </div>
                  <p className="text-sm text-muted-foreground">--info</p>
                </div>
              </div>
            </div>
          </section>

          {/* Typography System */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Typography System</h2>
              <p className="text-lg text-muted-foreground">
                Consistent typography scale with proper line heights and weights
              </p>
              <div className="bg-accent/50 border border-border rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Current Font:</strong> Apple SF Pro (system fonts) •
                  <strong> Sans-serif:</strong> SF Pro Display/Text •
                  <strong>Monospace:</strong> SF Mono
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Automatically uses Apple&apos;s fonts on Apple devices, falls back to system fonts on other platforms
                </p>
              </div>
            </div>

            {/* Font Sizes */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Font Sizes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-6xl font-bold">H1</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-6xl (3.75rem / 60px)</p>
                    <p className="text-sm text-muted-foreground">font-bold (700)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-5xl font-bold">H2</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-5xl (3rem / 48px)</p>
                    <p className="text-sm text-muted-foreground">font-bold (700)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-4xl font-semibold">H3</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-4xl (2.25rem / 36px)</p>
                    <p className="text-sm text-muted-foreground">font-semibold (600)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-3xl font-semibold">H4</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-3xl (1.875rem / 30px)</p>
                    <p className="text-sm text-muted-foreground">font-semibold (600)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-2xl font-medium">H5</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-2xl (1.5rem / 24px)</p>
                    <p className="text-sm text-muted-foreground">font-medium (500)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-xl font-medium">H6</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-xl (1.25rem / 20px)</p>
                    <p className="text-sm text-muted-foreground">font-medium (500)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-lg">Body Large</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-lg (1.125rem / 18px)</p>
                    <p className="text-sm text-muted-foreground">font-normal (400)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-base">Body</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-base (1rem / 16px)</p>
                    <p className="text-sm text-muted-foreground">font-normal (400)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-sm">Small</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-sm (0.875rem / 14px)</p>
                    <p className="text-sm text-muted-foreground">font-normal (400)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-xs">Caption</span>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">text-xs (0.75rem / 12px)</p>
                    <p className="text-sm text-muted-foreground">font-normal (400)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Font Weights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Font Weights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-thin">Thin</p>
                  <p className="text-xs text-muted-foreground mt-2">100</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-light">Light</p>
                  <p className="text-xs text-muted-foreground mt-2">300</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-normal">Normal</p>
                  <p className="text-xs text-muted-foreground mt-2">400</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-medium">Medium</p>
                  <p className="text-xs text-muted-foreground mt-2">500</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-semibold">Semibold</p>
                  <p className="text-xs text-muted-foreground mt-2">600</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-bold">Bold</p>
                  <p className="text-xs text-muted-foreground mt-2">700</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-extrabold">Extrabold</p>
                  <p className="text-xs text-muted-foreground mt-2">800</p>
                </div>
                <div className="p-4 bg-card border border-border rounded-lg text-center">
                  <p className="text-2xl font-black">Black</p>
                  <p className="text-xs text-muted-foreground mt-2">900</p>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing System */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Spacing System</h2>
              <p className="text-lg text-muted-foreground">
                Consistent spacing scale based on 4px grid system
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Spacing Scale</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "0", value: "0", class: "w-0" },
                  { name: "1", value: "4px", class: "w-1" },
                  { name: "2", value: "8px", class: "w-2" },
                  { name: "3", value: "12px", class: "w-3" },
                  { name: "4", value: "16px", class: "w-4" },
                  { name: "5", value: "20px", class: "w-5" },
                  { name: "6", value: "24px", class: "w-6" },
                  { name: "8", value: "32px", class: "w-8" },
                  { name: "10", value: "40px", class: "w-10" },
                  { name: "12", value: "48px", class: "w-12" },
                  { name: "16", value: "64px", class: "w-16" },
                  { name: "20", value: "80px", class: "w-20" },
                ].map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className={`h-4 bg-primary rounded ${item.class}`}></div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Border Radius & Shadows */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Border Radius & Shadows</h2>
              <p className="text-lg text-muted-foreground">
                Consistent border radius and shadow system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Border Radius */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Border Radius</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-sm">
                    <span className="text-sm">Small</span>
                    <div className="w-8 h-8 bg-primary rounded-sm"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-md">
                    <span className="text-sm">Medium</span>
                    <div className="w-8 h-8 bg-primary rounded-md"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                    <span className="text-sm">Large</span>
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
                    <span className="text-sm">Extra Large</span>
                    <div className="w-8 h-8 bg-primary rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Shadows */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Shadows</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-card border border-border shadow-sm">
                    <span className="text-sm">Small</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border shadow">
                    <span className="text-sm">Default</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border shadow-md">
                    <span className="text-sm">Medium</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border shadow-lg">
                    <span className="text-sm">Large</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card border border-border shadow-xl">
                    <span className="text-sm">Extra Large</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Component Examples</h2>
              <p className="text-lg text-muted-foreground">
                How design tokens work together in components
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Button Variants</h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">⚙️</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Cards</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-card border border-border rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold mb-2">Card Title</h4>
                    <p className="text-muted-foreground mb-4">
                      This card demonstrates the use of design tokens for background, border, and shadow.
                    </p>
                    <Button size="sm">Action</Button>
                  </div>
                  <div className="p-6 bg-muted border border-border rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Muted Card</h4>
                    <p className="text-muted-foreground">
                      This card uses the muted background color from our design system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
