# @gm/ui

A modern React UI component library built with TypeScript and Tailwind CSS. Features a warm color palette with rounded components for a friendly, engaging user experience.

## 🎨 Design Philosophy

- **Warm Colors**: Orange, red, and yellow tones create an inviting interface
- **Rounded Components**: Soft edges (border-radius: xl/2xl) for a modern look
- **Performance First**: Optimized bundle size and runtime performance
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Dark Mode Ready**: All components support automatic dark mode switching

## 🚀 Quick Start - See the Demo

To see all components in action in your browser:

```bash
# 1. Clone the repo
git clone https://github.com/gmulier/gm-ui.git
cd gm-ui

# 2. Install dependencies
npm install

# 3. Install demo dependencies
cd demo && npm install && cd ..

# 4. Launch the demo
npm run demo
```

The demo will automatically open at `http://localhost:5173` and you can see all components with their different variants.

## 📦 Installation

### Using npm link (Local Development)

1. Clone this repository:
```bash
git clone https://github.com/gmulier/gm-ui.git
cd gm-ui
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
npm link @gm/ui
```

### Using as a Git dependency

Add to your `package.json`:
```json
{
  "dependencies": {
    "@gm/ui": "github:gmulier/gm-ui"
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
    "./node_modules/@gm/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
}
```

### Import Components

```tsx
import { Button, Card, Input, Modal, Badge, Spinner } from '@gm/ui';

function MyComponent() {
  return (
    <Card variant="elevated" padding="lg">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Get started with @gm/ui</CardDescription>
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
- `variant`: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'

### Spinner

A loading indicator component with multiple sizes.

```tsx
<Spinner size="md" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl'

### Avatar

Profile picture component with fallback support.

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Input with Icons

Enhanced input component with start and end icon support.

```tsx
<Input
  placeholder="Search..."
  startIcon={<SearchIcon />}
  endIcon={<ClearIcon />}
/>
```

## 🎯 Complete Example

```tsx
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Input,
  Badge,
  Avatar,
  AvatarImage,
  AvatarFallback
} from '@gm/ui';

export function UserProfile() {
  return (
    <Card variant="elevated" className="max-w-md">
      <CardHeader className="text-center">
        <Avatar className="mx-auto mb-4">
          <AvatarImage src="/user-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <CardTitle>John Doe</CardTitle>
        <Badge variant="success">Active</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Email address" />
        <Input placeholder="Phone number" />
        <Button variant="primary" fullWidth>
          Update Profile
        </Button>
      </CardContent>
    </Card>
  );
}
```

## 🛠 Development

### Setup

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch for changes during development
npm run dev
```

### Run Storybook

```bash
# Start Storybook
npm run storybook

# Build Storybook for production
npm run build-storybook
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Guillaume Mulier - [@gmulier](https://github.com/gmulier)

Project Link: [https://github.com/gmulier/gm-ui](https://github.com/gmulier/gm-ui) 