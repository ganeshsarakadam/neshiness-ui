# CLAUDE.md - Nesh UI Development Guide

> **IMPORTANT**: This is a collaborative, incremental development project. Do NOT make bulk changes or create multiple components at once. Work on ONE component at a time and wait for approval before proceeding.

---

## 🎯 Project Overview

**Nesh UI** is a modern, animated React component library built on:
- **Radix UI** primitives (accessibility & behavior)
- **Tailwind CSS v4** (styling)
- **Motion (Framer Motion)** (sleek animations)
- **OKLCH color space** (modern, vibrant theming)
- **TypeScript** (type safety)
- **Storybook** (documentation)

The goal is to create production-ready, accessible components with **stunning animations** similar to Aceternity UI - think glowing borders, smooth transitions, hover effects, and micro-interactions.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # CSS variables, theme tokens (OKLCH)
│   ├── themes/              # Theme variations (blue-theme.css, etc.)
│   └── layout.tsx           # Root layout with fonts
├── components/
│   ├── ui/                  # 👈 CORE UI COMPONENTS (Button, Dialog, etc.)
│   ├── animated/            # 👈 ANIMATED EFFECTS (backgrounds, text effects)
│   └── blocks/              # 👈 COMPOSITE SECTIONS (hero, features, cards)
├── lib/
│   ├── utils.ts             # cn() utility function
│   ├── variants.ts          # Shared variant definitions
│   └── animations.ts        # Shared animation variants for Motion
├── hooks/
│   └── use-mouse-position.ts # Custom hooks for animations
└── stories/                 # Storybook stories
```

---

## 🚨 DEVELOPMENT RULES - READ CAREFULLY

### Rule 1: One Component at a Time
```
❌ WRONG: "I'll create Button, Input, Dialog, and Card for you"
✅ RIGHT: "Let's start with Button. Here's my plan... Do you approve?"
```

### Rule 2: Always Ask Before Creating
Before creating or modifying ANY component:
1. **State what you're about to do**
2. **Show the planned structure/approach**
3. **Wait for explicit approval** ("yes", "go ahead", "approved")

### Rule 3: Show Progress, Not Dumps
```
❌ WRONG: *dumps 200 lines of code*
✅ RIGHT: "Here's the Button base. Want me to add animations next?"
```

### Rule 4: Incremental Feature Addition
For each component, follow this order:
1. **Base component** → get approval
2. **Variants** (size, color) → get approval
3. **Animations** (hover, enter/exit) → get approval
4. **States** (loading, disabled) → get approval
5. **Storybook story** → get approval
6. **Move to next component**

### Rule 5: Context Over Assumptions
If unsure about:
- Design decisions → ASK
- Animation style → ASK
- Whether to add a feature → ASK

---

## 🎬 ANIMATION SYSTEM (Aceternity-Style)

### Dependencies Required

```bash
npm i motion clsx tailwind-merge
# Note: "motion" is the new package name for Framer Motion
```

### Animation Categories

#### 1. **Micro-Interactions** (Buttons, Inputs, Cards)
```tsx
// Subtle hover/tap effects
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
```

#### 2. **Enter/Exit Animations** (Dialogs, Dropdowns, Toasts)
```tsx
// Smooth mount/unmount
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  )}
</AnimatePresence>
```

#### 3. **Glow & Gradient Effects** (Borders, Backgrounds)
```tsx
// Moving gradient border (like Aceternity's Moving Border)
<motion.div
  className="absolute inset-0 rounded-lg"
  style={{
    background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
  }}
  animate={{ x: ["-100%", "100%"] }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
/>
```

#### 4. **Text Effects** (Typewriter, Fade-in, Flip)
```tsx
// Text generate effect
{text.split("").map((char, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.03 }}
  >
    {char}
  </motion.span>
))}
```

#### 5. **Scroll Animations** (Parallax, Reveal)
```tsx
// Scroll-triggered animation
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

<motion.div style={{ opacity }} />
```

#### 6. **Background Effects** (Beams, Sparkles, Aurora)
```tsx
// Animated background gradient
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"
  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
/>
```

---

## 🎨 Animation Presets (lib/animations.ts)

Create this file for reusable animation variants:

```tsx
// lib/animations.ts
import { Variants, Transition } from "motion/react";

// Standard transitions
export const transitions = {
  spring: { type: "spring", stiffness: 400, damping: 17 } as Transition,
  smooth: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } as Transition,
  bounce: { type: "spring", stiffness: 300, damping: 10 } as Transition,
  slow: { duration: 0.5, ease: "easeInOut" } as Transition,
};

// Fade variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Scale variants
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// Slide variants
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

// Stagger children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Glow pulse
export const glowPulse: Variants = {
  initial: { boxShadow: "0 0 0 0 rgba(var(--primary), 0)" },
  animate: {
    boxShadow: [
      "0 0 0 0 rgba(var(--primary), 0.4)",
      "0 0 20px 10px rgba(var(--primary), 0)",
    ],
  },
};

// Hover lift effect
export const hoverLift = {
  rest: { y: 0, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  hover: { y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" },
};
```

---

## 🧩 Component Patterns

### Pattern 1: Basic Animated Component

```tsx
// src/components/ui/button.tsx
"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { transitions } from "@/lib/animations";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        glow: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.5)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={transitions.spring}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Spinner />
          </motion.span>
        ) : null}
        <span className={cn(isLoading && "invisible")}>{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
```

### Pattern 2: Animated Overlay Component (Dialog, Modal)

```tsx
// src/components/ui/dialog.tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

// Animated Overlay
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} asChild {...props}>
    <motion.div
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  </DialogPrimitive.Overlay>
));
DialogOverlay.displayName = "DialogOverlay";

// Animated Content
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <AnimatePresence>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref} asChild {...props}>
        <motion.div
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg sm:rounded-lg",
            className
          )}
          initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-48%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
          exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-48%" }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </motion.div>
      </DialogPrimitive.Content>
    </AnimatePresence>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
};
```

### Pattern 3: Special Effect Component (Aceternity-style)

```tsx
// src/components/animated/moving-border.tsx
"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
}: MovingBorderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg p-[1px]",
        containerClassName
      )}
    >
      {/* Animated gradient border */}
      <motion.div
        className={cn(
          "absolute inset-0",
          borderClassName
        )}
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Content */}
      <div
        className={cn(
          "relative rounded-[7px] bg-background",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
```

### Pattern 4: Text Animation Component

```tsx
// src/components/animated/text-generate.tsx
"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextGenerate({ text, className, delay = 0 }: TextGenerateProps) {
  const words = text.split(" ");

  return (
    <motion.div className={cn("font-bold", className)}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + wordIndex * 0.1,
            duration: 0.3,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
```

### Pattern 5: Background Effect Component

```tsx
// src/components/animated/sparkles.tsx
"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  sparkleCount?: number;
}

export function Sparkles({ 
  children, 
  className,
  sparkleCount = 10 
}: SparklesProps) {
  const sparkles = React.useMemo(() => {
    return [...Array(sparkleCount)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
    }));
  }, [sparkleCount]);

  return (
    <div className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute rounded-full bg-primary pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
    </div>
  );
}
```

---

## 🎨 Styling Guidelines

### Use CSS Variables (OKLCH)
```tsx
// ✅ Use semantic tokens
className="bg-primary text-primary-foreground"
className="bg-muted text-muted-foreground"

// ❌ Don't use hardcoded colors
className="bg-blue-500 text-white"
```

### Glow Effects with CSS Variables
```css
/* In globals.css */
.glow-primary {
  box-shadow: 0 0 20px oklch(var(--primary) / 0.5);
}

.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px oklch(var(--primary) / 0.3); }
  50% { box-shadow: 0 0 40px oklch(var(--primary) / 0.6); }
}
```

### Tailwind Animation Extensions
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
};
```

---

## 📝 Storybook Story Pattern

```tsx
// src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "glow"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const WithAnimation: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>Hover me</Button>
      <Button variant="glow">Glowing</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Loading",
    isLoading: true,
  },
};
```

---

## 🔄 Workflow for Each Component

### Step 1: Research & Plan
```
"For [Component], I'll use:
- Radix primitive: @radix-ui/react-[x]
- Animation approach: [describe - e.g., spring hover, fade enter]
- Reference: [Aceternity component if applicable]

Here's my plan:
- Base structure: [describe]
- Variants needed: [list]
- Animations: [list specific animations]

Does this align with your vision?"
```

### Step 2: Create Base (after approval)
```
"Creating the base [Component]..."
*show code*
"Base is ready. Should I add animations next?"
```

### Step 3: Add Animations (after approval)
```
"Adding animations:
- Hover: scale + shadow lift
- Enter: fade + slide up
- Exit: fade out

*show additions*
"Animations added. Should I add variants?"
```

### Step 4: Add Variants (after approval)
```
"Adding variants: default, secondary, glow, outline..."
*show additions*
"Variants added. Should I create the Storybook story?"
```

### Step 5: Create Story (after approval)
```
"Creating Storybook story with all variants and animation demos..."
*show story*
"Story created. Ready to test with `npm run storybook`"
```

---

## 📋 Component Checklist

### Core UI Components (with micro-interactions)
- [ ] Button (hover scale, tap feedback, loading state)
- [ ] Input (focus glow, label float)
- [ ] Textarea (auto-resize, focus glow)
- [ ] Label
- [ ] Checkbox (check animation)
- [ ] Radio Group (selection animation)
- [ ] Switch (thumb slide, track color)
- [ ] Select (dropdown slide)
- [ ] Slider (thumb scale on drag)

### Feedback Components (with enter/exit)
- [ ] Alert (slide in)
- [ ] Badge (pop in)
- [ ] Toast / Sonner (slide + fade)
- [ ] Progress (fill animation)
- [ ] Skeleton (shimmer effect)

### Overlay Components (with transitions)
- [ ] Dialog / Modal (scale + fade)
- [ ] Drawer (slide from edge)
- [ ] Dropdown Menu (scale from origin)
- [ ] Context Menu
- [ ] Popover (scale + fade)
- [ ] Tooltip (fade + slight move)
- [ ] Alert Dialog

### Animated Effects (Aceternity-style)
- [ ] Moving Border
- [ ] Background Gradient
- [ ] Sparkles
- [ ] Text Generate Effect
- [ ] Typewriter Effect
- [ ] Glow Card
- [ ] Hover Border Gradient
- [ ] Spotlight Effect
- [ ] Aurora Background
- [ ] Meteors
- [ ] Floating Navbar
- [ ] 3D Card Effect
- [ ] Infinite Moving Cards

### Layout Components
- [ ] Card (hover lift)
- [ ] Separator
- [ ] Aspect Ratio
- [ ] Scroll Area (smooth scroll)

### Navigation Components
- [ ] Tabs (indicator slide)
- [ ] Accordion (height animation)
- [ ] Navigation Menu
- [ ] Breadcrumb
- [ ] Pagination

---

## 🛠 Commands Reference

```bash
# Development
npm run dev          # Start Next.js dev server
npm run storybook    # Start Storybook

# Building
npm run build        # Build for production
npm run build-storybook  # Build Storybook static

# Testing
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

---

## 💬 Communication Style

### When Starting Work
```
"I'll help you build [Component]. Before I start:
1. What animation style do you prefer? (subtle/dramatic)
2. Any reference from Aceternity UI you like?
3. Specific variants you need?

Once you confirm, I'll begin with the base structure."
```

### When Showing Code
```
"Here's the [Component] with animations:

[code block]

Animation breakdown:
- Hover: [describe]
- Enter: [describe]
- Exit: [describe]

Want me to proceed with [next step]?"
```

---

## ⚠️ Things to NEVER Do

1. **Never create multiple components without asking**
2. **Never refactor existing code without explicit permission**
3. **Never change the project structure**
4. **Never modify globals.css without discussing first**
5. **Never assume animation preferences - always ask**
6. **Never skip Storybook stories**
7. **Never use hardcoded colors instead of CSS variables**
8. **Never add heavy animations that hurt performance**
9. **Never forget AnimatePresence for exit animations**

---

## 🎯 Current Focus

> Update this section when starting a new component

**Currently Working On**: [None - waiting for instruction]

**Last Completed**: [None yet]

**Next Up**: [To be decided]

---

## 📚 Reference Links

### Core Libraries
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Motion (Framer Motion)](https://motion.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Class Variance Authority](https://cva.style/docs)

### Animation Inspiration
- [Aceternity UI](https://ui.aceternity.com/components)
- [Magic UI](https://magicui.design/)
- [Motion Primitives](https://motion-primitives.com/)
- [Cult UI](https://www.cult-ui.com/)

### Design References
- [shadcn/ui](https://ui.shadcn.com/docs/components)
- [Linear App](https://linear.app) - Smooth micro-interactions
- [Vercel](https://vercel.com) - Subtle animations
- [Stripe](https://stripe.com) - Polished hover effects

---

*Remember: Quality over speed. Animations should enhance UX, not distract. One component, done beautifully, is better than ten components done poorly.*