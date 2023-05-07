import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-styling', '@storybook/addon-mdx-gfm', 'storybook-addon-styled-components-themes/register'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {},
  docs: {
    autodocs: 'tag'
  }
};
export default config;