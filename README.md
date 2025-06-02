# @gm/ui

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

[![NPM Version](https://img.shields.io/npm/v/@gm/ui?style=flat-square)](https://www.npmjs.com/package/@gm/ui)
[![License](https://img.shields.io/npm/l/@gm/ui?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Modern Design** - Clean, beautiful components
- ♿ **Accessible** - Built on Radix UI primitives  
- 🎯 **TypeScript** - Full type safety
- 🎨 **Customizable** - Tailwind CSS + CVA variants
- 📱 **Responsive** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in dark mode support
- ⚡ **Optimized** - Tree-shakeable bundle

## 📦 Installation

```bash
# From GitHub (recommended)
npm install github:gmulier/gm-ui

# From npm (coming soon)
npm install @gm/ui
```

## 🚀 Quick Start

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind

```js
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@gm/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

### 3. Import styles and use components

```tsx
import '@gm/ui/styles';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@gm/ui';

function App() {
  return (
    <div className="p-8">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Welcome to @gm/ui</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => alert('Hello!')}>
            Click me!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 📚 Components

### Display
- **Avatar** - User avatars with fallback
- **Badge** - Status indicators and labels  
- **Button** - Interactive buttons with variants
- **Card** - Content containers
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders
- **Spinner** - Loading indicators

### Form
- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Checkbox** - Checkboxes with custom styling
- **Switch** - Toggle switches
- **Radio** - Radio button groups
- **Select** - Dropdown selection
- **Slider** - Range sliders

### Feedback
- **Alert** - Alert messages
- **Progress** - Progress indicators
- **Toast** - Notification toasts
- **Tooltip** - Contextual help

### Navigation
- **Breadcrumb** - Navigation breadcrumbs
- **Menu** - Dropdown menus
- **Pagination** - Page navigation
- **Tabs** - Tab navigation

### Overlay
- **Accordion** - Collapsible content
- **Modal** - Modal dialogs
- **Popover** - Floating content

## 🎨 Customization

```tsx
// Use variants
<Button variant="destructive" size="lg">Delete</Button>
<Badge variant="success">Active</Badge>

// Custom styling
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Button
</Button>
```

## 🏗️ Development

### Monorepo Structure

```
gm-ui/
├── packages/
│   ├── ui/           ← Component library (@gm/ui)
│   ├── demo/         ← Demo application
│   └── storybook/    ← Storybook documentation
└── package.json
```

### Scripts

```bash
# Development
npm run dev          # Start demo app
npm run storybook    # Start Storybook
npm run build        # Build library
npm run type-check   # TypeScript validation

# In packages/ui/
npm run dev          # Development with watch
npm run build        # Production build
```

## 📖 Documentation

- **[Storybook](https://gm-ui-storybook.vercel.app)** - Interactive documentation
- **[Demo](https://gm-ui-demo.vercel.app)** - Live examples

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines.

## 📄 License

MIT © [Guillaume Mulier](https://github.com/gmulier) 