
import { mergeConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const config = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)', '../../packages/components/src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@neshiness-ui/components': resolve(__dirname, '../../packages/components/src'),
          '@neshiness-ui/theme': resolve(__dirname, '../../packages/theme/src'),
          '@neshiness-ui/theme/orange-black.css': resolve(__dirname, '../../packages/theme/styles/orange-black.css'),
          '@neshiness-ui/theme/orange-light.css': resolve(__dirname, '../../packages/theme/styles/orange-light.css')
        }
      }
    });
  }
};
export default config;
