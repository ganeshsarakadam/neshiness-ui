# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Neshiness UI is a futuristic design system and component library purpose-built for **AI-powered applications and AI agent interfaces**. It provides modern, intuitive components with a forward-thinking aesthetic suitable for conversational AI, agent dashboards, and intelligent applications.

**Design Philosophy:**
- Futuristic and intuitive look and feel
- Optimized for AI agent interactions and conversational interfaces
- Modern aesthetics for AI-powered apps
- Accessible and responsive by default

**Tech Stack:**
- Next.js 15 (App Router with Turbopack)
- Tailwind CSS v4 with OKLCH color space
- Radix UI primitives for accessibility
- TypeScript (strict mode)
- Storybook for component documentation
- Class Variance Authority (CVA) for type-safe variants

## Common Commands

### Development
```bash
npm run dev              # Start Next.js dev server (localhost:3000) with Turbopack
npm run storybook        # Start Storybook dev server (localhost:6006)
```

### Building
```bash
npm run build            # Build Next.js app with Turbopack
npm run build-storybook  # Build static Storybook
npm start                # Start production server
```

### Linting
```bash
npm run lint             # Run ESLint (Next.js + Storybook rules)
```

### CI/CD
The project uses GitHub Actions (`.github/workflows/ci.yml`):
- Runs on push/PR to main
- Executes: install → lint → build

## Architecture

### Design System Foundation

The design system is built on **CSS variables using OKLCH color space** for vibrant, perceptually uniform colors that suit modern AI interfaces. All color tokens are defined in `src/app/globals.css` and theme variants in `src/app/themes/`.

**Theme Architecture:**
- **Base theme**: Defined in `src/app/globals.css` (neutral theme)
- **Theme variants**: Additional CSS files in `src/app/themes/` (e.g., `blue-theme.css`)
- **Theme switching**: Controlled by CSS class on `<html>` element (e.g., `.blue-theme`)
- **Dark mode**: Controlled by `.dark` class on `<html>` element, works independently of theme variants
- **Custom variant**: `@custom-variant dark (&:is(.dark *))` allows Tailwind's `dark:` prefix

**Key files:**
- `src/app/globals.css` - Root theme variables and Tailwind imports
- `src/app/themes/blue-theme.css` - Blue theme variant colors
- `src/app/layout.tsx` - Font configuration (Inter + JetBrains Mono)

### Component Architecture

Components follow a **variant-based pattern** using Class Variance Authority for flexibility in AI interfaces:

```typescript
// Pattern used across all components
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", outline: "..." },
      size: { sm: "...", md: "...", lg: "..." }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
)

function Component({ variant, size, className, ...props }:
  React.ComponentProps<"element"> & VariantProps<typeof componentVariants>
) {
  return <element className={cn(componentVariants({ variant, size, className }))} {...props} />
}
```

**Radix UI Integration:**
- Components wrap Radix UI primitives for accessibility
- Use `asChild` pattern with `@radix-ui/react-slot` for composition
- All interactive components have proper ARIA attributes and keyboard navigation
- Essential for AI agents to be accessible to all users

### File Structure

```
src/
├── app/
│   ├── globals.css           # Root theme variables, Tailwind imports
│   ├── layout.tsx            # Root layout with font configuration
│   ├── page.tsx              # Home page (design system showcase)
│   ├── themes/
│   │   └── blue-theme.css    # Blue theme variant
│   ├── components/           # Component showcase pages
│   ├── design-system/        # Design tokens showcase
│   ├── forms/                # Form examples (AI input interfaces)
│   └── navigation/           # Navigation examples
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── button.tsx        # Example: variant-based component
│   │   ├── button.stories.tsx
│   │   └── [component].tsx
│   └── theme-switcher.tsx    # Theme toggle component
└── lib/
    ├── utils.ts              # cn() utility (clsx + tailwind-merge)
    └── variants.ts           # Shared variant definitions and CVA helpers
```

### Import Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`)

```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Creating New Components

### Design Considerations for AI Interfaces

When creating components for AI-powered applications, consider:
- **Conversational contexts**: Components may display AI responses, user prompts, or agent status
- **Real-time feedback**: Support loading states, streaming content, and progressive disclosure
- **Information density**: Balance readability with information-rich displays
- **Futuristic aesthetics**: Use modern design patterns (glassmorphism, subtle animations, smooth transitions)
- **Accessibility**: AI agents should be usable by everyone

### 1. UI Component Pattern

All UI components should follow this structure:

```typescript
// src/components/ui/example.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const exampleVariants = cva(
  "base-classes focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border bg-background"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6"
      }
    },
    defaultVariants: { variant: "default", size: "md" }
  }
)

function Example({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof exampleVariants>) {
  return (
    <div
      className={cn(exampleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Example, exampleVariants }
```

### 2. Storybook Story Pattern

Create `.stories.tsx` files alongside components:

```typescript
// src/components/ui/example.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Example } from './example'

const meta: Meta<typeof Example> = {
  title: 'UI/Example',
  component: Example,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {
    children: 'Example Component',
  },
}
```

## Design System Guidelines

### Color System

Colors use OKLCH format for perceptual uniformity and vibrant modern aesthetics:
```css
--primary: oklch(0.45 0.15 240);
/* L: Lightness (0-1), C: Chroma (0-0.4), H: Hue (0-360) */
```

**Semantic color tokens:**
- `background` / `foreground` - Page backgrounds
- `card` / `card-foreground` - Card surfaces (great for chat bubbles, agent responses)
- `primary` / `primary-foreground` - Primary brand color
- `secondary` / `secondary-foreground` - Secondary actions
- `muted` / `muted-foreground` - Subtle backgrounds (system messages, metadata)
- `accent` / `accent-foreground` - Highlight elements (AI suggestions, highlights)
- `destructive` / `destructive-foreground` - Destructive actions
- `success` / `success-foreground` - Success states (agent confirmations)
- `warning` / `warning-foreground` - Warning states (agent warnings)
- `info` / `info-foreground` - Informational states (agent info, tips)

### Typography

Fonts are loaded via Next.js Font optimization:
- **Sans**: Inter (variable: `--font-inter`) - Clean, modern, highly readable
- **Mono**: JetBrains Mono (variable: `--font-jetbrains-mono`) - For code snippets, technical data

To change fonts, update `src/app/layout.tsx` and `src/app/globals.css`. See `FONT-CUSTOMIZATION-GUIDE.md` for details.

### Shared Variant Utilities

Use utilities from `src/lib/variants.ts`:
- `createVariants` - Alias for `cva`
- `sizeVariants` - Common size classes (xs, sm, md, lg, xl)
- `colorVariants` - Common color classes
- `baseStyles` - Reusable style patterns (interactive, disabled, flex, etc.)

## Theming

### Adding a New Theme

Themes can be tailored for different AI experiences (e.g., technical assistant vs. creative agent):

1. Create `src/app/themes/[theme-name].css`:
```css
:root.[theme-name] {
  --background: oklch(...);
  --foreground: oklch(...);
  /* ... all color tokens ... */
}

:root.[theme-name].dark {
  /* dark mode overrides */
}
```

2. Import in `src/app/globals.css`:
```css
@import "./themes/[theme-name].css";
```

3. Update theme switcher in `src/components/theme-switcher.tsx`

### Dark Mode

Dark mode is essential for AI interfaces (reduces eye strain during extended interactions):
```typescript
document.documentElement.classList.toggle("dark")
```

Use Tailwind's `dark:` prefix for dark mode styles:
```typescript
className="bg-white dark:bg-gray-900"
```

## AI Interface Patterns

### Typical Use Cases

This design system is optimized for:
- **Conversational AI interfaces**: Chat bubbles, message threads, AI responses
- **Agent dashboards**: Status displays, metrics, real-time updates
- **AI-assisted forms**: Smart inputs, suggestions, autocomplete
- **Data visualization for AI**: Charts, graphs, model outputs
- **Agent configuration panels**: Settings, parameters, controls
- **Notification systems**: Agent alerts, status updates, system messages

### Component Recommendations for AI Apps

- **Cards**: Use for agent responses, information panels, or grouped content
- **Badges**: Show agent status (thinking, responding, idle), model versions, or tags
- **Inputs/Textareas**: Primary interface for user-to-agent communication
- **Buttons**: Agent actions, confirmations, suggestions
- **Accordions**: Expand/collapse detailed agent responses or configurations
- **Tabs**: Switch between different agents, conversation contexts, or views
- **Avatars**: Represent AI agents, users, or personas

## ESLint Configuration

The project uses flat config format (`eslint.config.mjs`) with:
- Next.js core web vitals
- Next.js TypeScript rules
- Storybook recommended rules

Ignored paths: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Patterns

### cn() Utility

The `cn()` function (from `src/lib/utils.ts`) merges Tailwind classes intelligently:
```typescript
cn("px-4 py-2", "px-6") // → "px-6 py-2"
```

Always use `cn()` when combining className props with variant classes.

### asChild Pattern

Components support the `asChild` prop for composition:
```typescript
<Button asChild>
  <a href="/link">Link as Button</a>
</Button>
```

This renders the link with button styles without nesting.

### Radix UI Primitives

Most components are built on Radix UI primitives:
- Import from `@radix-ui/react-*`
- Components are unstyled by default - we apply our design system
- Follow Radix composition patterns (Root, Trigger, Content, etc.)
- Critical for accessible AI interfaces

## Storybook

Stories are co-located with components (`*.stories.tsx`). Storybook is configured with:
- Chromatic addon
- Accessibility (a11y) addon
- Docs addon (auto-generated docs)
- Vitest addon for component testing

Configuration: `.storybook/main.ts`, `.storybook/preview.ts`

Use Storybook to develop and preview components in isolation, especially useful for testing AI interface scenarios.

