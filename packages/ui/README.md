# @gm/ui

[![NPM Version](https://img.shields.io/npm/v/@gm/ui?style=flat-square)](https://www.npmjs.com/package/@gm/ui)
[![License](https://img.shields.io/npm/l/@gm/ui?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern, accessible, and customizable React UI component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

## ✨ Features

- 🎨 **Beautiful Design**: Modern, clean components with thoughtful design patterns
- ♿ **Accessible**: Built on Radix UI primitives ensuring excellent accessibility
- 🎯 **TypeScript First**: Full TypeScript support with excellent IntelliSense
- 🎨 **Customizable**: Powered by Tailwind CSS with CVA for variant management
- 📱 **Responsive**: Mobile-first approach with responsive design
- 🌙 **Dark Mode**: Built-in dark mode support
- ⚡ **Performance**: Optimized bundle size with tree-shaking support
- 📖 **Well Documented**: Comprehensive Storybook documentation

## 📦 Installation

### From GitHub (Recommended)

```bash
npm install github:gmulier/gm-ui
```

### From npm (Coming Soon)

```bash
npm install @gm/ui
```

## 🚀 Quick Start

### 1. Install Tailwind CSS

Make sure you have Tailwind CSS installed in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this line to include @gm/ui components
    "./node_modules/@gm/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Import Styles

Import the CSS file in your main entry point:

```tsx
// main.tsx or App.tsx
import '@gm/ui/styles';
```

### 4. Start Using Components

```tsx
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

### Display Components
- **Avatar** - User avatars with fallback support
- **Badge** - Status indicators and labels
- **Button** - Interactive buttons with various styles
- **Card** - Content containers
- **Separator** - Visual dividers
- **Skeleton** - Loading placeholders
- **Spinner** - Loading indicators

### Form Components
- **Checkbox** - Checkboxes with custom styling
- **Input** - Text input fields
- **Label** - Form labels
- **Radio** - Radio button groups
- **Select** - Dropdown selection
- **Slider** - Range sliders
- **Switch** - Toggle switches
- **Textarea** - Multi-line text input

### Feedback Components
- **Alert** - Alert messages
- **Progress** - Progress indicators
- **Toast** - Notification toasts
- **Tooltip** - Contextual help

### Navigation Components
- **Breadcrumb** - Navigation breadcrumbs
- **Menu** - Dropdown menus
- **Pagination** - Page navigation
- **Tabs** - Tab navigation

### Overlay Components
- **Accordion** - Collapsible content
- **Modal** - Modal dialogs
- **Popover** - Floating content

## 🎨 Customization

Components use Tailwind CSS classes and can be customized using the `className` prop:

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Button
</Button>
```

Many components also support variant props for predefined styles:

```tsx
<Button variant="destructive" size="lg">
  Delete
</Button>

<Badge variant="success">
  Active
</Badge>
```

## 📖 Documentation

Visit our [Storybook documentation](https://gm-ui-storybook.vercel.app) to see all components in action with interactive examples.

## 🏗️ Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/gmulier/gm-ui.git
cd gm-ui

# Install dependencies
npm install

# Start development
npm run dev
```

### Building

```bash
# Build the library
npm run build

# Build with type checking
npm run build:types
```

### Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Radix UI](https://www.radix-ui.com/) primitives
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Component variants managed with [CVA](https://cva.style/)
- Icons from [Heroicons](https://heroicons.com/)

---

Made with ❤️ by [Guillaume Mulier](https://github.com/gmulier) 