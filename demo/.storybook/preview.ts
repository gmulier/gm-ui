import type { Preview } from '@storybook/react'
import * as React from 'react';
import '../../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    // Optimized configuration for documentation
    docs: {
      docsPage: () => null, // Disable default DocsPage for better performance
    },
    // Improve performance by reducing logs
    actions: {
      disable: false,
    },
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story: any, context: any) => {
      const theme = context.globals.theme;
      
      // Apply dark/light class on html element
      React.useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
      }, [theme]);
      
      return React.createElement(Story);
    },
  ],
};

export default preview;