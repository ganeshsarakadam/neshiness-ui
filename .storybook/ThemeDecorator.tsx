import React, { useEffect } from 'react'
import type { Decorator } from '@storybook/react'

/**
 * Theme decorator for Storybook
 * Applies theme and color mode classes to the document root
 */
export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = context.globals.theme
  const colorMode = context.globals.colorMode

  useEffect(() => {
    const htmlElement = document.documentElement

    // Remove all theme classes first
    htmlElement.classList.remove('golden-hour', 'dark')

    // Apply theme class
    if (theme === 'golden-hour') {
      htmlElement.classList.add('golden-hour')
    }

    // Apply color mode class
    if (colorMode === 'dark') {
      htmlElement.classList.add('dark')
    }
  }, [theme, colorMode])

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <Story />
    </div>
  )
}
