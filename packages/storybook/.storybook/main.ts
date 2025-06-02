import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

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
    "options": {}
  },
  "core": {
    "disableTelemetry": true
  },
  "viteFinal": async (config, { configType }) => {
    // Configure @gm/ui alias to point to the ui/src folder
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        '@gm/ui': path.resolve(__dirname, '../../ui/src'),
      },
    };

    // Performance optimizations and reduced reloads
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        'react', 
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@mdx-js/react',
        'react-dom/client',
        'storybook/theming',
      ],
      // Force pre-optimization of Storybook internal modules
      force: configType === 'DEVELOPMENT',
    };

    // Build optimizations
    config.build = {
      ...config.build,
      target: 'esnext',
      minify: false,
    };
    
    // File watching optimization
    config.server = {
      ...config.server,
      watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
      },
    };
    
    return config;
  }
};
export default config;