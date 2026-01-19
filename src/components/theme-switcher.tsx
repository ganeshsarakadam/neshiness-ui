"use client";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const switchToDefaultTheme = () => {
    if (typeof window === "undefined") return;
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.className = isDark ? "dark" : "";
  };

  const switchToGoldenHourTheme = () => {
    if (typeof window === "undefined") return;
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.className = `golden-hour${isDark ? " dark" : ""}`;
  };

  const toggleDarkMode = () => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="flex gap-2 p-4 bg-card border border-border rounded-lg"
      role="group"
      aria-label="Theme controls"
    >
      <Button
        onClick={switchToDefaultTheme}
        variant="outline"
        size="sm"
        aria-label="Switch to default theme"
      >
        Default
      </Button>
      <Button
        onClick={switchToGoldenHourTheme}
        variant="outline"
        size="sm"
        aria-label="Switch to golden hour theme"
      >
        <span aria-hidden="true">🌅</span> Golden Hour
      </Button>
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        size="sm"
        aria-label="Toggle dark mode"
      >
        <span aria-hidden="true">☀️ / 🌙</span>
      </Button>
    </div>
  );
}
