"use client";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const switchToNeutralTheme = () => {
    // Remove any theme class and let globals.css handle the default theme
    document.documentElement.className = '';
    console.log('Switched to neutral theme, classes:', document.documentElement.className);
  };

  const switchToBlueTheme = () => {
    // Add blue-theme class to apply blue theme
    document.documentElement.className = 'blue-theme';
    console.log('Switched to blue theme, classes:', document.documentElement.className);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    console.log('Toggled dark mode, classes:', document.documentElement.className);
  };

  return (
    <div className="flex gap-2 p-4 bg-card border border-border rounded-lg">
      <Button onClick={switchToNeutralTheme} variant="outline" size="sm">
        🎨 Neutral
      </Button>
      <Button onClick={switchToBlueTheme} variant="outline" size="sm">
        🔵 Blue
      </Button>
    </div>
  );
}
