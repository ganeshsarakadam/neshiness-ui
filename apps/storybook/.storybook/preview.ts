
// Import both theme CSS files
import '@neshiness-ui/theme/orange-black.css';
import '@neshiness-ui/theme/orange-light.css';

// Set default theme
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', 'orange-black');
  
  // Add custom CSS to override Storybook's background
  const style = document.createElement('style');
  style.textContent = `
    .sb-show-main {
      background: var(--color-bg) !important;
    }
    .sb-show-main[data-theme="orange-light"] {
      background: #FFFFFF !important;
    }
    .sb-show-main[data-theme="orange-black"] {
      background: #0B0B0C !important;
    }
  `;
  document.head.appendChild(style);
}

const preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { 
      default: 'dark',
      values: [
        { name: 'dark', value: '#0B0B0C' },
        { name: 'light', value: '#FFFFFF' }
      ]
    }
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'orange-black',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'orange-black', title: 'Orange Black (Dark)' },
          { value: 'orange-light', title: 'Orange Light' }
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'orange-black';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Apply theme to Storybook's main content area
        const mainElement = document.querySelector('.sb-show-main');
        if (mainElement) {
          mainElement.setAttribute('data-theme', theme);
        }
        
        // Update Storybook background based on theme
        const backgroundValue = theme === 'orange-light' ? 'light' : 'dark';
        context.parameters.backgrounds.default = backgroundValue;
      }
      return Story();
    },
  ],
};

export default preview;
