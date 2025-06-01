import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Separator,
  TooltipProvider,
  SimpleTooltip,
} from '../src';

// Hook pour copier dans le presse-papier
const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<string>('');

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(''), 2000);
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      return false;
    }
  };

  return { copiedText, copy };
};

// Composant pour les blocs de code
interface CodeBlockProps {
  children: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, title }) => {
  const { copy, copiedText } = useCopyToClipboard();
  const isCopied = copiedText === children;

  return (
    <div className="relative">
      {title && (
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {title}
        </div>
      )}
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-x-auto font-mono text-sm relative">
        <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap m-0">{children}</pre>
        <SimpleTooltip content={isCopied ? "Copied!" : "Copy to clipboard"}>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => copy(children)}
          >
            {isCopied ? (
              <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </Button>
        </SimpleTooltip>
      </div>
    </div>
  );
};

// Composant pour les étapes
interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, children }) => {
  return (
    <Card>
      <CardHeader className="pb-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{number}</span>
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export function GettingStarted() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">@gm/ui</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Getting Started Guide</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="/">← Back to Demo</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/gmulier/gm-ui" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              🚀 Get Started Guide
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get Started with{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                @gm/ui
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Follow this step-by-step guide to integrate our modern React component library into your project.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-16">
            {/* Step 1: Installation */}
            <Step number={1} title="Installation">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Install @gm/ui in your React project using your preferred package manager:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <CodeBlock title="via GitHub (recommended)">
                  npm install github:gmulier/gm-ui
                </CodeBlock>
                <CodeBlock title="with Yarn">
                  yarn add github:gmulier/gm-ui
                </CodeBlock>
              </div>

              <Card variant="outlined" className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                <CardContent className="pt-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 <strong>Note:</strong> The package is currently hosted on GitHub. We're working on publishing it to npm for easier installation.
                  </p>
                </CardContent>
              </Card>
            </Step>

            {/* Step 2: CSS Setup */}
            <Step number={2} title="Import Styles">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Import the CSS styles in your main application file (App.tsx or index.tsx):
              </p>
              
              <CodeBlock>
                import '@gm/ui/dist/index.css';
              </CodeBlock>
            </Step>

            {/* Step 3: Tailwind Configuration */}
            <Step number={3} title="Configure Tailwind CSS">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Add @gm/ui to your Tailwind CSS configuration to ensure proper styling:
              </p>
              
              <CodeBlock title="tailwind.config.js">
{`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@gm/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme
    },
  },
  plugins: [],
}`}
              </CodeBlock>
            </Step>

            {/* Step 4: Usage */}
            <Step number={4} title="Start Using Components">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Import and use components in your React application:
              </p>
              
              <CodeBlock>
{`import { Button, Card, CardHeader, CardTitle, CardContent } from '@gm/ui';

function MyComponent() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Welcome to @gm/ui</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A modern React component library.</p>
        <Button variant="primary" className="mt-4">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}`}
              </CodeBlock>

              <div className="mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Here's what the code above looks like:
                </p>
                <Card className="max-w-md">
                  <CardHeader>
                    <CardTitle>Welcome to @gm/ui</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">A modern React component library.</p>
                    <Button variant="primary" className="mt-4">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Step>

            {/* Step 5: Dark Mode */}
            <Step number={5} title="Enable Dark Mode (Optional)">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                All components support dark mode out of the box. Add the{' '}
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">dark</code>{' '}
                class to your HTML element:
              </p>
              
              <CodeBlock>
{`<html class="dark">
  <!-- Your app content -->
</html>`}
              </CodeBlock>

              <p className="text-gray-600 dark:text-gray-300 mt-6 mb-4">
                Or toggle it dynamically with JavaScript:
              </p>
              
              <CodeBlock>
{`// Toggle dark mode
document.documentElement.classList.toggle('dark');`}
              </CodeBlock>
            </Step>
          </div>

          {/* Section de transition avec background */}
          <div className="py-20 mt-20">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What's Next?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                  Now that you know how to set up @gm/ui, explore these resources to get the most out of the library.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a href="/" className="block">
                    <Card variant="interactive" className="group cursor-pointer h-full">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                          Interactive Demo
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          See all components in action
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                  
                  <a href="https://storybook-gm-ui.vercel.app" target="_blank" rel="noopener noreferrer" className="block">
                    <Card variant="interactive" className="group cursor-pointer h-full">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">📚</div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                          Documentation
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Complete API reference
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                  
                  <a href="https://github.com/gmulier/gm-ui" target="_blank" rel="noopener noreferrer" className="block">
                    <Card variant="interactive" className="group cursor-pointer h-full">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">🚀</div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                          Source Code
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          View on GitHub
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>


        {/* Footer */}
        <footer className="border-t bg-white dark:bg-gray-900 py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to build something amazing?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Start using @gm/ui in your next React project and create beautiful UIs faster.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/">
                    Try Demo
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/gmulier/gm-ui" target="_blank" rel="noopener noreferrer">
                    View Source
                  </a>
                </Button>
              </div>
            </div>
            
            <Separator className="mb-8" />
            
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © 2025 Guillaume Mulier. Licensed under MIT.
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="outline">v0.1.0</Badge>
                <Badge variant="outline">React 18+</Badge>
                <Badge variant="outline">TypeScript</Badge>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
} 