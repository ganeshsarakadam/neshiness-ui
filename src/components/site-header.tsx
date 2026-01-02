"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SiteHeader() {
  const [isDark, setIsDark] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState("default");

  // Sync state with DOM on mount
  React.useEffect(() => {
    const htmlElement = document.documentElement;
    const hasDark = htmlElement.classList.contains("dark");
    const hasGoldenHour = htmlElement.classList.contains("golden-hour");

    setIsDark(hasDark);
    setCurrentTheme(hasGoldenHour ? "golden-hour" : "default");
  }, []);

  const toggleDarkMode = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    document.documentElement.classList.toggle("dark");
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (theme === "default") {
      document.documentElement.className = isDarkMode ? "dark" : "";
    } else if (theme === "golden-hour") {
      document.documentElement.className = `golden-hour${isDarkMode ? " dark" : ""}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-sm bg-background/80 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div>
              <h1 className="text-2xl font-bold">Nesh UI</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Design System for AI Applications
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {/* Theme Selector */}
            <Select value={currentTheme} onValueChange={handleThemeChange}>
              <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="golden-hour">🌅 Golden Hour</SelectItem>
              </SelectContent>
            </Select>

            {/* Dark Mode Toggle */}
            <Button
              onClick={toggleDarkMode}
              variant="outline"
              size="sm"
              className="px-3"
              aria-label="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
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
                href="http://localhost:6006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Playground
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
