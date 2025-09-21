# 🎨 Font Options for Your Design System

## Popular Google Fonts

### Modern & Clean (Similar to Geist)
- **Inter** - Very popular, excellent readability
- **Poppins** - Modern, friendly, rounded
- **Work Sans** - Professional, clean
- **Source Sans Pro** - Adobe's font, very readable

### Classic & Professional
- **Roboto** - Google's signature font
- **Open Sans** - Highly readable, neutral
- **Lato** - Humanist, warm feeling
- **Nunito** - Friendly, rounded

### Tech & Modern
- **JetBrains Mono** - Great for code
- **Fira Code** - Popular coding font with ligatures
- **Cascadia Code** - Microsoft's coding font
- **SF Mono** - Apple's system font

### Display & Headings
- **Montserrat** - Great for headings
- **Raleway** - Elegant, thin
- **Playfair Display** - Serif, elegant
- **Merriweather** - Readable serif

## How to Change Fonts

### Method 1: Replace in layout.tsx
```typescript
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
```

### Method 2: Custom Font Variables
```css
/* In globals.css */
:root {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

### Method 3: Multiple Font Weights
```typescript
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Load multiple weights
});
```
