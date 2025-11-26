# Neshiness UI

A comprehensive design system and component library built with modern web technologies.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router & Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Documentation:** [Storybook](https://storybook.js.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## Features

- **Modern Design System:** Built on CSS variables using the OKLCH color space for vibrant and accessible colors.
- **Theme Support:**
  - **Neutral Theme:** Clean and professional default look.
  - **Blue Theme:** A branded variation showcasing theming capabilities.
  - **Dark Mode:** First-class support for dark mode across all components.
- **Typography:**
  - **Sans:** [Inter](https://fonts.google.com/specimen/Inter)
  - **Mono:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Component Library:** A rich set of accessible, reusable components (Buttons, Inputs, Cards, Navigation, etc.).
- **Storybook Integration:** Develop and test components in isolation.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the design system showcase.

### Storybook

Run the Storybook development server to view component documentation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

### Building

Build the application for production:

```bash
npm run build
```

## 📂 Project Structure

```
src/
├── app/
│   ├── components/      # Component showcase page
│   ├── design-system/   # Design tokens showcase
│   ├── forms/           # Form examples
│   ├── navigation/      # Navigation examples
│   ├── themes/          # Theme CSS files (e.g., blue-theme.css)
│   ├── globals.css      # Global styles and base theme variables
│   └── layout.tsx       # Root layout with font configuration
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   └── theme-switcher.tsx # Theme toggle component
└── lib/
    ├── utils.ts         # Utility functions (cn, etc.)
    └── variants.ts      # Variant definitions
```

## 🎨 Design System

The design system is defined in `src/app/globals.css` using CSS variables. It includes:

- **Colors:** Backgrounds, foregrounds, primary, secondary, accent, muted, destructive, success, warning, info.
- **Typography:** Headings, body text, small text, muted text.
- **Spacing:** A comprehensive spacing scale.
- **Radius:** Consistent border radius variables.
- **Shadows:** Elevation levels.

## 📝 License

This project is private and proprietary.
