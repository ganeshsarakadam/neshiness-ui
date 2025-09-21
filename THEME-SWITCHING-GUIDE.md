# 🎨 Theme Switching Guide

## How to Switch Between Themes

### Current Setup
- **Default Theme**: Neutral gray theme (defined in `globals.css`)
- **Blue Theme**: Blue color palette (defined in `themes/blue-theme.css`)

### Method 1: Using the Theme Switcher Component (Recommended)
1. Go to `/design-system` page
2. Click the theme switcher buttons:
   - **🎨 Neutral**: Switches to default neutral theme
   - **🔵 Blue**: Switches to blue theme
   - **🌙 Toggle Dark**: Toggles dark/light mode

### Method 2: Manual CSS Class Switching
Add/remove CSS classes on the `<html>` element:

```javascript
// Switch to Blue Theme
document.documentElement.className = 'blue-theme';

// Switch to Blue Theme + Dark Mode
document.documentElement.className = 'blue-theme dark';

// Switch back to Neutral Theme
document.documentElement.className = '';

// Switch to Neutral Theme + Dark Mode
document.documentElement.className = 'dark';
```

### Method 3: Programmatic Theme Switching
```javascript
// In your component
const switchTheme = (themeName) => {
  const html = document.documentElement;
  
  // Remove all theme classes
  html.className = html.className.replace(/blue-theme|green-theme|purple-theme/g, '');
  
  // Add new theme class
  if (themeName !== 'neutral') {
    html.classList.add(`${themeName}-theme`);
  }
};

// Usage
switchTheme('blue');    // Switch to blue theme
switchTheme('neutral'); // Switch to neutral theme
```

## File Structure
```
src/app/
├── globals.css              # Default neutral theme
└── themes/
    └── blue-theme.css       # Blue theme (only applies with .blue-theme class)
```

## How It Works
1. **Default Theme**: CSS variables in `globals.css` define the neutral theme
2. **Blue Theme**: CSS variables in `blue-theme.css` override the defaults when `.blue-theme` class is present
3. **Dark Mode**: Both themes have `.dark` variants that override light mode colors
4. **CSS Specificity**: `.blue-theme` has higher specificity than `:root`, so it overrides the default values

## Creating New Themes
1. Create a new file: `src/app/themes/your-theme.css`
2. Use the same CSS variable names as the default theme
3. Wrap your variables in a class selector: `.your-theme { /* variables */ }`
4. Add dark mode support: `.your-theme.dark { /* dark variables */ }`
5. Import the theme in `globals.css` if needed
6. Add a button to switch to your theme class

## Example: Creating a Green Theme
```css
/* src/app/themes/green-theme.css */
.green-theme {
  --primary: oklch(0.45 0.15 140);        /* Green */
  --primary-foreground: oklch(0.98 0.01 140);
  /* ... other variables */
}

.green-theme.dark {
  --primary: oklch(0.7 0.12 140);         /* Light green */
  --primary-foreground: oklch(0.08 0.02 140);
  /* ... other variables */
}
```

Then switch to it with:
```javascript
document.documentElement.className = 'green-theme';
```
