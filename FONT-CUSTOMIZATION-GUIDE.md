# ✍️ Font Customization Guide

## Current Setup: Apple SF Pro System Fonts

Your design system is now using Apple's SF Pro fonts as the default:

- **Sans-serif**: SF Pro Display/Text (Apple's system font)
- **Monospace**: SF Mono (Apple's code font)
- **Fallbacks**: System fonts for non-Apple devices

## 🎯 How to Customize Fonts Later

### Method 1: Replace with Google Fonts (Recommended)

#### Step 1: Update layout.tsx
```typescript
// Replace the current font setup with:
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Load multiple weights
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Update body className:
<body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
```

#### Step 2: Update globals.css
```css
/* In globals.css, replace the font variables: */
--font-sans: var(--font-inter, system-ui, sans-serif);
--font-mono: var(--font-jetbrains-mono, monospace);
```

### Method 2: Use Custom Font Files

#### Step 1: Add font files to public/fonts/
```
public/
└── fonts/
    ├── custom-sans.woff2
    ├── custom-sans.woff
    ├── custom-mono.woff2
    └── custom-mono.woff
```

#### Step 2: Define @font-face in globals.css
```css
@font-face {
  font-family: 'Custom Sans';
  src: url('/fonts/custom-sans.woff2') format('woff2'),
       url('/fonts/custom-sans.woff') format('woff');
  font-weight: 300 700;
  font-display: swap;
}

@font-face {
  font-family: 'Custom Mono';
  src: url('/fonts/custom-mono.woff2') format('woff2'),
       url('/fonts/custom-mono.woff') format('woff');
  font-weight: 400 700;
  font-display: swap;
}
```

#### Step 3: Update CSS variables
```css
--font-sans: 'Custom Sans', system-ui, sans-serif;
--font-mono: 'Custom Mono', monospace;
```

### Method 3: Multiple Font Weights

```typescript
// Load specific weights for better performance
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap', // Better loading performance
});
```

## 🎨 Popular Font Combinations

### Modern & Clean
- **Sans**: Inter + **Mono**: JetBrains Mono
- **Sans**: Poppins + **Mono**: Fira Code
- **Sans**: Work Sans + **Mono**: Source Code Pro

### Professional & Corporate
- **Sans**: Roboto + **Mono**: Roboto Mono
- **Sans**: Open Sans + **Mono**: Inconsolata
- **Sans**: Source Sans Pro + **Mono**: Source Code Pro

### Creative & Unique
- **Sans**: Montserrat + **Mono**: Cascadia Code
- **Sans**: Nunito + **Mono**: JetBrains Mono
- **Sans**: Lato + **Mono**: Fira Code

## 🔧 Font Performance Tips

### 1. Use font-display: swap
```css
@font-face {
  font-family: 'Custom Font';
  font-display: swap; /* Shows fallback font while loading */
}
```

### 2. Preload Critical Fonts
```html
<link rel="preload" href="/fonts/custom-sans.woff2" as="font" type="font/woff2" crossorigin>
```

### 3. Load Only Required Weights
```typescript
// Only load weights you actually use
weight: ["400", "600", "700"] // Instead of all weights
```

## 📱 System Font Fallbacks

Your current setup includes excellent fallbacks:

```css
--font-sans: var(--font-apple-sans, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', system-ui, sans-serif);
--font-mono: var(--font-apple-mono, 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace);
```

This ensures:
- **Apple devices**: Use SF Pro
- **Android**: Use Roboto
- **Windows**: Use Segoe UI
- **Linux**: Use system default

## 🧪 Testing Font Changes

1. **Use the Font Demo**: `/font-demo` to test different fonts
2. **Check Performance**: Use browser dev tools to monitor loading
3. **Test Accessibility**: Ensure good contrast and readability
4. **Cross-platform**: Test on different devices/browsers

## 📝 Quick Reference

### Files to Update When Changing Fonts:
1. `src/app/layout.tsx` - Font imports and body className
2. `src/app/globals.css` - CSS variables in @theme section
3. `src/app/globals.css` - Font variable definitions

### Current Font Variables:
- `--font-sans`: Sans-serif font family
- `--font-mono`: Monospace font family
- `--font-size-*`: Font sizes (xs to 6xl)
- `--font-weight-*`: Font weights (thin to black)
- `--line-height-*`: Line heights (none to loose)
- `--letter-spacing-*`: Letter spacing (tighter to widest)
