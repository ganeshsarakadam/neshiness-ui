"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useState } from "react";

export default function Home() {
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
                <a href="/components">🧩 Components</a>
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

          {/* Color Palette */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Color Palette</h2>
              <p className="text-muted-foreground">Comprehensive color system with semantic naming</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brand Colors */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Brand Colors</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="h-12 bg-primary rounded-lg border"></div>
                    <p className="text-sm font-medium">Primary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-secondary rounded-lg border"></div>
                    <p className="text-sm font-medium">Secondary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-accent rounded-lg border"></div>
                    <p className="text-sm font-medium">Accent</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-muted rounded-lg border"></div>
                    <p className="text-sm font-medium">Muted</p>
                  </div>
                </div>
              </div>

              {/* Semantic Colors */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Semantic Colors</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <div className="h-12 bg-success rounded-lg border"></div>
                    <p className="text-sm font-medium">Success</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-warning rounded-lg border"></div>
                    <p className="text-sm font-medium">Warning</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-info rounded-lg border"></div>
                    <p className="text-sm font-medium">Info</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-destructive rounded-lg border"></div>
                    <p className="text-sm font-medium">Destructive</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Typography</h2>
              <p className="text-muted-foreground">Consistent text styles and hierarchy</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Headings</h3>
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
                  <h2 className="text-3xl font-bold">Heading 2 - 3xl Bold</h2>
                  <h3 className="text-2xl font-bold">Heading 3 - 2xl Bold</h3>
                  <h4 className="text-xl font-semibold">Heading 4 - xl Semibold</h4>
                  <h5 className="text-lg font-semibold">Heading 5 - lg Semibold</h5>
                  <h6 className="text-base font-semibold">Heading 6 - base Semibold</h6>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Body Text</h3>
                <div className="space-y-2">
                  <p className="text-lg">Large body text - lg</p>
                  <p className="text-base">Regular body text - base</p>
                  <p className="text-sm">Small body text - sm</p>
                  <p className="text-xs">Extra small text - xs</p>
                </div>
              </div>

              <div className="bg-accent/50 border border-border rounded-lg p-4 mt-4">
                <p className="text-sm">
                  <strong>Current Font:</strong> Apple SF Pro (system fonts) • 
                  <strong> Sans-serif:</strong> SF Pro Display/Text • 
                  <strong>Monospace:</strong> SF Mono
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Automatically uses Apple's fonts on Apple devices, falls back to system fonts on other platforms
                </p>
              </div>
            </div>
          </section>

          {/* Spacing */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Spacing Scale</h2>
              <p className="text-muted-foreground">Consistent spacing values for layouts and components</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 6, 8, 12, 16].map((space) => (
                <div key={space} className="space-y-2">
                  <div 
                    className="bg-primary rounded"
                    style={{ height: `${space * 4}px` }}
                  ></div>
                  <p className="text-sm text-center">{space * 4}px</p>
                </div>
              ))}
            </div>
          </section>

          {/* Shadows */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Shadow System</h2>
              <p className="text-muted-foreground">Elevation and depth through shadows</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Light Mode</h3>
                <div className="space-y-4">
                  <div className="h-16 bg-background rounded-lg shadow-xs flex items-center justify-center">
                    <span className="text-sm">xs</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-sm flex items-center justify-center">
                    <span className="text-sm">sm</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-sm">md</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-lg flex items-center justify-center">
                    <span className="text-sm">lg</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dark Mode</h3>
                <div className="space-y-4">
                  <div className="h-16 bg-background rounded-lg shadow-xs-dark flex items-center justify-center">
                    <span className="text-sm">xs</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-sm-dark flex items-center justify-center">
                    <span className="text-sm">sm</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-md-dark flex items-center justify-center">
                    <span className="text-sm">md</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-lg-dark flex items-center justify-center">
                    <span className="text-sm">lg</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Special</h3>
                <div className="space-y-4">
                  <div className="h-16 bg-background rounded-lg shadow-inner flex items-center justify-center">
                    <span className="text-sm">inner</span>
                  </div>
                  <div className="h-16 bg-background rounded-lg shadow-none flex items-center justify-center border">
                    <span className="text-sm">none</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Border Radius */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Border Radius</h2>
              <p className="text-muted-foreground">Consistent corner rounding</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-none"></div>
                <p className="text-sm text-center">none</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-sm"></div>
                <p className="text-sm text-center">sm</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded"></div>
                <p className="text-sm text-center">default</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-lg"></div>
                <p className="text-sm text-center">lg</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
