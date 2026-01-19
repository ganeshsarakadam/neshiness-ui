"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isDark, setIsDark] = React.useState(true);

  // Sync state with DOM on mount
  React.useEffect(() => {
    const htmlElement = document.documentElement;
    const hasDark = htmlElement.classList.contains("dark");

    setIsDark(hasDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-sm bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <span className="text-xl font-bold logo-shimmer">Nesh UI</span>
          </Link>

          <nav className="flex items-center gap-2" aria-label="Main navigation">
            {/* Dark Mode Toggle */}
            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="sm"
              className="px-3"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
            </Button>

            {/* Components Link */}
            <Button asChild variant="outline" size="sm">
              <Link href="/components">Components</Link>
            </Button>

            {/* Playground (Storybook) Link */}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a
                href={process.env.NEXT_PUBLIC_STORYBOOK_URL || "http://localhost:6006"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Playground (opens in new tab)"
              >
                Playground
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
