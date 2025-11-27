# Architecture & Concepts

This document explains the core architectural concepts of the `neshiness-ui` design system.

## 1. Component Architecture

The components in this library are built using a "Headless UI + Utility CSS" pattern.

### The "Headless" Layer: Radix UI
We use [Radix UI](https://www.radix-ui.com/) primitives for complex interactive components (Accordion, Dialog, Select, Switch, etc.).
- **Why?** Radix handles accessibility (ARIA attributes, keyboard navigation, focus management) and functional logic out of the box.
- **How?** We import the primitive (e.g., `@radix-ui/react-switch`) and wrap it with our own styles.

### The Styling Layer: Tailwind CSS + CVA
We use [Tailwind CSS](https://tailwindcss.com/) for styling, managed by `class-variance-authority` (CVA).
- **CVA (`cva`)**: Allows us to define component variants (e.g., `variant="primary"`, `size="lg"`) in a type-safe way. It maps props to Tailwind class strings.
- **Example**:
  ```tsx
  const buttonVariants = cva(
    "base-classes...", // Applied to all variants
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground",
          destructive: "bg-destructive text-white",
        },
        size: {
          sm: "h-8 px-3",
          lg: "h-10 px-8",
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      }
    }
  )
  ```

## 2. Utility Functions

### `cn` (Classname Merger)
Located in `src/lib/utils.ts`.
```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
- **`clsx`**: Constructs class strings conditionally (e.g., `clsx("foo", condition && "bar")`).
- **`twMerge`**: Intelligently merges Tailwind classes to handle conflicts.
  - *Problem*: If you have `bg-red-500` in base styles and pass `bg-blue-500` in `className` prop, standard CSS cascade might not work as expected depending on stylesheet order.
  - *Solution*: `twMerge` detects they are both background color utilities and ensures the last one wins, removing the overwritten one.

## 3. Theming System

The design system is driven by CSS Variables defined in `src/app/globals.css`.

### CSS Variables
We use semantic variable names (e.g., `--primary`, `--muted-foreground`) mapped to color values.
- **OKLCH Color Space**: We use `oklch()` for colors, which provides better perceptual uniformity and dynamic range than RGB/HSL.
- **Tailwind v4 `@theme`**: We define these variables inside an `@theme` block (or map them in CSS) so Tailwind picks them up as utilities (e.g., `bg-primary` uses `var(--primary)`).

### Theme Switching
- **Default Theme**: Defined in `:root` in `globals.css`.
- **Blue Theme**: Defined in `src/app/themes/blue-theme.css` under the `:root.blue-theme` selector.
- **Dark Mode**: Defined under `.dark` selectors.
- **Switching Logic**: The `ThemeSwitcher` component toggles the `.blue-theme` class on the `<html>` element (or `<body>`), which redefines the CSS variables, instantly updating the entire UI without re-rendering logic.

## 4. Next.js Rendering Flow

This project uses the **Next.js App Router** (`src/app`).

### Server Components (Default)
By default, all components (Pages, Layouts) are **Server Components**.
- **Rendering**: They render **once** on the server at build time (static) or request time (dynamic).
- **Output**: They send HTML + a JSON payload to the browser. No JavaScript is sent for these components (zero bundle size).
- **Example**: `src/app/page.tsx` is a Server Component. It renders the initial HTML structure.

### Client Components (`"use client"`)
Interactive components must be **Client Components**.
- **Directive**: Marked with `"use client"` at the top of the file.
- **Rendering**: They are pre-rendered on the server (HTML) and then **hydrated** on the client (React takes over).
- **Example**: `src/components/theme-switcher.tsx` needs state and event listeners, so it is a Client Component.

### The Rendering Tree
1. **Root Layout (`src/app/layout.tsx`)**:
   - Wraps **every** page.
   - Contains `<html>` and `<body>` tags.
   - Loads global fonts (Inter, JetBrains Mono) and CSS (`globals.css`).
2. **Page (`src/app/page.tsx`)**:
   - Renders inside the `children` prop of the Root Layout.
3. **Components**:
   - The page imports and renders UI components (e.g., `<Button />`, `<Card />`).
   - If a component is a Client Component, it creates a "boundary" where client-side interactivity begins.

