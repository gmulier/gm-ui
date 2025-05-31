import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      builder: {
        viteConfigPath: undefined
      }
    }
  },
  "core": {
    "disableTelemetry": true
  },
  "viteFinal": async (config: any) => {
    config.build = {
      ...config.build,
      target: 'esnext',
      minify: false,
    };
    
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: ['react', 'react-dom'],
    };
    
    return config;
  }
};
export default config;