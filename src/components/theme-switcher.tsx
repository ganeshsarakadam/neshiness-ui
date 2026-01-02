"use client";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const switchToDefaultTheme = () => {
    // Remove theme classes but keep dark mode if active
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.className = isDark ? 'dark' : '';
    console.log('Switched to default theme, classes:', document.documentElement.className);
  };

  const switchToGoldenHourTheme = () => {
    // Add golden-hour class and keep dark mode if active
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.className = `golden-hour${isDark ? ' dark' : ''}`;
    console.log('Switched to golden hour theme, classes:', document.documentElement.className);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    console.log('Toggled dark mode, classes:', document.documentElement.className);
  };

  return (
    <div className="flex gap-2 p-4 bg-card border border-border rounded-lg">
      <Button onClick={switchToDefaultTheme} variant="outline" size="sm">
        Default
      </Button>
      <Button onClick={switchToGoldenHourTheme} variant="outline" size="sm">
        🌅 Golden Hour
      </Button>
      <Button onClick={toggleDarkMode} variant="outline" size="sm">
        ☀️ / 🌙
      </Button>
    </div>
  );
}
