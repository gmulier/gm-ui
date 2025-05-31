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
    // Configuration optimisée pour la documentation
    docs: {
      docsPage: () => null, // Désactive DocsPage par défaut pour plus de vitesse
    },
    // Améliorer la performance en réduisant les logs
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
      
      // Appliquer la classe dark/light sur l'élément html
      React.useEffect(() => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
      }, [theme]);
      
      return React.createElement(Story);
    },
  ],
};

export default preview;