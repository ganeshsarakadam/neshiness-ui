import type { Preview } from '@storybook/react';
import '@neshiness-ui/theme/orange-black.css';
import { applyTheme } from '@neshiness-ui/theme';
applyTheme('orange-black');
const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { default: 'dark', values: [ { name: 'dark', value: '#0B0B0C' } ] }
  }
};
export default preview;
