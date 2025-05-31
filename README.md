# @guillaume/ui

A modern React UI component library built with TypeScript and Tailwind CSS. Features a warm color palette with rounded components for a friendly, engaging user experience.

## 🎨 Design Philosophy

- **Warm Colors**: Orange, red, and yellow tones create an inviting interface
- **Rounded Components**: Soft edges (border-radius: xl/2xl) for a modern look
- **Performance First**: Optimized bundle size and runtime performance
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Dark Mode Ready**: All components support automatic dark mode switching

## 🚀 Quick Start - Voir la démo

Pour voir tous les composants en action dans votre navigateur :

```bash
# 1. Clonez le repo
git clone https://github.com/guillaumemulier/guillaume-ui.git
cd guillaume-ui

# 2. Installez les dépendances
npm install

# 3. Installez les dépendances de la démo
cd demo && npm install && cd ..

# 4. Lancez la démo
npm run demo
```

La démo s'ouvrira automatiquement sur `http://localhost:5173` et vous pourrez voir tous les composants avec leurs différentes variantes.

## 📦 Installation

### Using npm link (Local Development)

1. Clone this repository:
```bash
git clone https://github.com/guillaumemulier/guillaume-ui.git
cd guillaume-ui
```

2. Install dependencies and build:
```bash
npm install
npm run build
```

3. Create a local link:
```bash
npm link
```

4. In your React project:
```bash
npm link @guillaume/ui
```

### Using as a Git dependency

Add to your `package.json`:
```json
{
  "dependencies": {
    "@guillaume/ui": "github:guillaumemulier/guillaume-ui"
  }
}
```

## 🚀 Usage

### Setup Tailwind CSS

Add the UI library to your Tailwind CSS configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your other content paths
    "./node_modules/@guillaume/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
}
```

### Import Components

```tsx
import { Button, Card, Input, Modal, Badge, Spinner } from '@guillaume/ui';

function MyComponent() {
  return (
    <Card variant="elevated" padding="lg">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Get started with @guillaume/ui</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Enter your name" />
          <Button variant="primary" size="md">
            Get Started
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

## 📚 Components

### Button

A versatile button component with multiple variants and states.

```tsx
<Button variant="primary" size="md" isLoading={false}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
- `size`: 'sm' | 'md' | 'lg' | 'icon'
- `isLoading`: boolean (shows loading spinner)
- `fullWidth`: boolean
- `asChild`: boolean (use with Radix UI Slot)

### Card

A flexible container component with header, content, and footer sections.

```tsx
<Card variant="elevated" padding="md">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' | 'interactive'
- `padding`: 'none' | 'sm' | 'md' | 'lg'

### Input

A styled input component with icon support.

```tsx
<Input
  variant="default"
  inputSize="md"
  placeholder="Search..."
  startIcon={<SearchIcon />}
/>
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `inputSize`: 'sm' | 'md' | 'lg'
- `startIcon`: ReactNode
- `endIcon`: ReactNode

### Modal

A dialog component built with Radix UI.

```tsx
<Modal>
  <ModalTrigger asChild>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
      <ModalDescription>Modal description</ModalDescription>
    </ModalHeader>
    <div>Modal content</div>
    <ModalFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### Badge

A small label component for status and categorization.

```tsx
<Badge variant="success">Active</Badge>
```

**Props:**
- `variant`: 'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'outline'

### Spinner

A loading spinner component.

```tsx
<Spinner size="md" color="primary" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'white' | 'current'

## 🛠️ Development

### Scripts

- `npm run dev` - Start development mode with watch
- `npm run build` - Build the library
- `npm run demo` - Launch the interactive demo
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Adding New Components

1. Create component in `src/components/ComponentName.tsx`
2. Export from `src/index.ts`
3. Add documentation to README
4. Build and test

## 🎨 Customization

### Using Custom Colors

The library uses a warm color palette by default. You can override these in your project's Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom primary colors
        },
        secondary: {
          // Your custom secondary colors
        },
      },
    },
  },
}
```

### Extending Components

All components accept standard HTML attributes and can be extended:

```tsx
<Button
  className="custom-class"
  onClick={handleClick}
  data-testid="my-button"
>
  Custom Button
</Button>
```

## 📝 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 