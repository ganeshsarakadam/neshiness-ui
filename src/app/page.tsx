"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

const components = [
  {
    name: "Button",
    description: "Animated buttons with multiple variants",
    status: "ready",
  },
  {
    name: "Dialog",
    description: "Modal dialogs with smooth transitions",
    status: "ready",
  },
  {
    name: "Dropdown",
    description: "Animated dropdown menus",
    status: "coming",
  },
  {
    name: "Toast",
    description: "Notification toasts with animations",
    status: "coming",
  },
  {
    name: "Card",
    description: "Hover effects and glow borders",
    status: "coming",
  },
  {
    name: "Input",
    description: "Inputs with focus animations",
    status: "coming",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[80vh] overflow-hidden">
        {/* Pulsing Sun Rings Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          {/* Ambient gradient background */}
          <div className="absolute inset-0 hero-ambient-gradient" />

          {/* Central glowing orb */}
          <div
            className="absolute hero-center-orb rounded-full"
            style={{
              left: 'calc(50% - 200px)',
              top: 'calc(50% - 200px)',
              width: '400px',
              height: '400px',
              animation: 'sun-breathe 4s ease-in-out infinite',
            }}
          />

          {/* Pulsing rings - radiating from center */}
          {/* Using negative delays so rings are already mid-animation on page load */}
          <div
            className="absolute rounded-full hero-ring"
            style={{
              left: 'calc(50% - 50px)',
              top: 'calc(50% - 50px)',
              width: '100px',
              height: '100px',
              opacity: 0,
              animation: 'ring-expand 12s ease-out infinite -9s',
            }}
          />
          <div
            className="absolute rounded-full hero-ring"
            style={{
              left: 'calc(50% - 50px)',
              top: 'calc(50% - 50px)',
              width: '100px',
              height: '100px',
              opacity: 0,
              animation: 'ring-expand 12s ease-out infinite -6s',
            }}
          />
          <div
            className="absolute rounded-full hero-ring"
            style={{
              left: 'calc(50% - 50px)',
              top: 'calc(50% - 50px)',
              width: '100px',
              height: '100px',
              opacity: 0,
              animation: 'ring-expand 12s ease-out infinite -3s',
            }}
          />
          <div
            className="absolute rounded-full hero-ring"
            style={{
              left: 'calc(50% - 50px)',
              top: 'calc(50% - 50px)',
              width: '100px',
              height: '100px',
              opacity: 0,
              animation: 'ring-expand 12s ease-out infinite 0s',
            }}
          />
        </div>

        <div className="container px-4 text-center relative" style={{ zIndex: 10 }}>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-shimmer">Nesh UI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Animated React components with a touch of{" "}
              <span className="text-neshiness">Neshiness</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base px-8 h-12" asChild>
                <Link href="/docs">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-12"
                asChild
              >
                <Link href="/components">Components</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32 border-t border-border/50 overflow-hidden">
        {/* Ambient glow effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[150px]" />
        </div>

        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight tracking-tight">
            Turn your ideas
            <br />
            <span className="text-primary">into reality</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Purpose-built components for Web Agents, AI interfaces, and the new way to search the web.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            {/* Card 1 - Beautifully Designed */}
            <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border hover:bg-card transition-all duration-300 text-left">
              {/* Icon */}
              <div className="w-12 h-12 mb-6 rounded-xl bg-muted/50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                  />
                </svg>
              </div>

              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                Beautifully Designed
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crafted with attention to detail. Smooth animations and modern aesthetics built for AI-first experiences.
              </p>
            </div>

            {/* Card 2 - Fully Responsive */}
            <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border hover:bg-card transition-all duration-300 text-left">
              {/* Icon */}
              <div className="w-12 h-12 mb-6 rounded-xl bg-muted/50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>

              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                Fully Responsive
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adaptive layouts that work seamlessly across all devices and screen sizes.
              </p>
            </div>

            {/* Card 3 - Customizable */}
            <div className="group relative p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm hover:border-border hover:bg-card transition-all duration-300 text-left">
              {/* Decorative grid pattern */}
              <div className="absolute top-4 right-4 opacity-20">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-muted-foreground">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="28" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="4" y="28" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="28" y="28" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 mb-6 rounded-xl bg-muted/50 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>

              <h3 className="font-semibold text-sm uppercase tracking-wider mb-3">
                Customizable
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every component is yours. Tweak styles, animations, and behavior to match your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="py-24 border-t border-border/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Components</h2>
            <p className="text-muted-foreground text-lg">
              Copy, paste, and customize. All components are yours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {components.map((component) => (
              <div
                key={component.name}
                className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:border-border hover:bg-card transition-all duration-300 w-full"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{component.name}</h3>
                  {component.status === "coming" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {component.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/components">View all components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Built by Ga<span className="text-neshiness">Nesh</span>. Open source.</p>
          <div className="flex items-center gap-6">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/components" className="hover:text-foreground transition-colors">
              Components
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
