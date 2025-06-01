# @gm/ui - Complete Documentation

A modern React component library built with TypeScript, Tailwind CSS and Radix UI.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Components](#components)
  - [Core Components](#core-components)
  - [Form Components](#form-components)
  - [Feedback Components](#feedback-components)
  - [Navigation Components](#navigation-components)
  - [UI Components](#ui-components)
- [Hooks](#hooks)
- [Theme and Customization](#theme-and-customization)

## Installation

```bash
npm install @gm/ui
# or
yarn add @gm/ui
# or
pnpm add @gm/ui
```

## Configuration

### 1. Import CSS styles

```tsx
// In your main file (App.tsx or index.tsx)
import '@gm/ui/dist/index.css';
```

### 2. Dark mode configuration (optional)

Add the `dark` class to your `<html>` element to enable dark mode:

```html
<html class="dark">
  <!-- ... -->
</html>
```

## Components

### Core Components

#### Button

A versatile button with multiple variants and states.

```tsx
import { Button } from '@gm/ui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔔</Button>

// Customizable roundness
<Button round="none">Square</Button>
<Button round="sm">Slightly rounded</Button>
<Button round="md">Moderately rounded</Button>
<Button round="lg">Rounded (default)</Button>
<Button round="xl">Very rounded</Button>
<Button round="2xl">Maximum rounded</Button>

// Loading states
<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>

// With Slot (for links)
<Button asChild>
  <a href="/home">Home</a>
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
- `size`: 'sm' | 'md' | 'lg' | 'icon'
- `fullWidth`: boolean
- `isLoading`: boolean
- `asChild`: boolean
- `round`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' - Controls the roundness of the edges

#### Card

A flexible container for grouping content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@gm/ui';

<Card variant="default">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Variants
<Card variant="elevated">...</Card>
<Card variant="outlined">...</Card>
<Card variant="interactive">...</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' | 'interactive'

#### Badge

To display statuses or labels.

```tsx
import { Badge } from '@gm/ui';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="outline">Outline</Badge>
```

**Props:**
- `variant`: 'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'outline'

#### Spinner

Animated loading indicator.

```tsx
import { Spinner } from '@gm/ui';

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

<Spinner color="primary" />
<Spinner color="secondary" />
<Spinner color="white" />
<Spinner color="current" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'white' | 'current'

### Form Components

#### Input

Input field with icon support and states.

```tsx
import { Input } from '@gm/ui';

// Base
<Input placeholder="Email" type="email" />

// Variants
<Input variant="default" placeholder="Default" />
<Input variant="error" placeholder="Error" />
<Input variant="success" placeholder="Success" />

// Sizes
<Input inputSize="sm" placeholder="Small" />
<Input inputSize="md" placeholder="Medium" />
<Input inputSize="lg" placeholder="Large" />

// Customizable roundness
<Input placeholder="Square" round="none" />
<Input placeholder="Slightly rounded" round="sm" />
<Input placeholder="Moderately rounded" round="md" />
<Input placeholder="Rounded (default)" round="lg" />
<Input placeholder="Very rounded" round="xl" />
<Input placeholder="Maximum rounded" round="2xl" />

// With icons
<Input 
  placeholder="Search..." 
  startIcon={<SearchIcon />}
/>
<Input 
  placeholder="Password" 
  type="password"
  endIcon={<EyeIcon />}
/>

// Customizable focus color
<Input 
  placeholder="Violet Focus" 
  focusColor="purple"
/>
<Input 
  placeholder="Pink Focus" 
  focusColor="pink"
/>
<Input 
  placeholder="Emerald Focus" 
  focusColor="emerald"
/>

// Customizable color with hex
<Input 
  placeholder="Custom Focus" 
  focusColor="#ff6b6b"
/>
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `inputSize`: 'sm' | 'md' | 'lg'
- `startIcon`: ReactNode
- `endIcon`: ReactNode
- `focusColor`: 'purple' | 'pink' | 'emerald' | 'orange' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'teal' | string - Focus color (predefined colors or hex/css color)
- `round`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' - Controls the roundness of the edges

#### Textarea

Multi-line text area with automatic resizing.

```tsx
import { Textarea } from '@gm/ui';

// Base
<Textarea placeholder="Your message..." />

// With character counter
<Textarea 
  placeholder="Description" 
  showCount 
  maxLength={200}
/>

// Automatic resizing
<Textarea 
  placeholder="Auto-resize" 
  autoResize
/>

// Variants and sizes
<Textarea variant="error" size="lg" />
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `autoResize`: boolean
- `showCount`: boolean
- `maxLength`: number

#### Checkbox

Checkbox with optional label.

```tsx
import { Checkbox } from '@gm/ui';

// Simple
<Checkbox />

// With label
<Checkbox 
  label="I accept the terms" 
  description="By checking, you agree to our terms of service"
/>

// Variants and sizes
<Checkbox variant="error" size="lg" />
<Checkbox variant="success" checked />
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `label`: string
- `description`: string

#### Radio

Radio buttons for exclusive selection.

```tsx
import { Radio, RadioGroup } from '@gm/ui';

<RadioGroup orientation="vertical">
  <Radio name="plan" value="free" label="Free Plan" />
  <Radio name="plan" value="pro" label="Pro Plan" description="10€/month" />
  <Radio name="plan" value="enterprise" label="Enterprise" />
</RadioGroup>

// Horizontal orientation
<RadioGroup orientation="horizontal">
  <Radio name="size" value="sm" label="S" />
  <Radio name="size" value="md" label="M" />
  <Radio name="size" value="lg" label="L" />
</RadioGroup>
```

**Props Radio:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `label`: string
- `description`: string

**Props RadioGroup:**
- `orientation`: 'horizontal' | 'vertical'

#### Switch

On/off switch.

```tsx
import { Switch } from '@gm/ui';

// Simple
<Switch />

// With label
<Switch 
  label="Dark Mode" 
  description="Enable dark theme"
/>

// Variants and sizes
<Switch variant="success" size="lg" />
<Switch variant="error" disabled />
```

**Props:**
- `variant`: 'default' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md' | 'lg'
- `label`: string
- `description`: string

#### Select

Dropdown for selection.

```tsx
import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator
} from '@gm/ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
      <SelectItem value="potato">Potato</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// With variants and sizes
<SelectTrigger variant="error" size="lg">
  ...
</SelectTrigger>
```

**Props SelectTrigger:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'

#### Label

Label for form fields.

```tsx
import { Label } from '@gm/ui';

<Label htmlFor="email">Email</Label>
<Label htmlFor="password" required>Password</Label>

// Variants and sizes
<Label variant="error" size="lg">Error Field</Label>
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `required`: boolean

### Feedback Components

#### Alert

Alert messages and notifications.

```tsx
import { Alert, AlertTitle, AlertDescription, DismissibleAlert } from '@gm/ui';

// Simple alert
<Alert>
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an information message.
  </AlertDescription>
</Alert>

// Variants
<Alert variant="info">...</Alert>
<Alert variant="success">...</Alert>
<Alert variant="warning">...</Alert>
<Alert variant="error">...</Alert>

// Dismissible alert
<DismissibleAlert 
  variant="success" 
  onDismiss={() => console.log('Closed')}
>
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>The operation was successful.</AlertDescription>
</DismissibleAlert>
```

**Props:**
- `variant`: 'default' | 'info' | 'success' | 'warning' | 'error'

#### Progress

Progress bar.

```tsx
import { Progress } from '@gm/ui';

// Simple
<Progress value={60} />

// With label
<Progress value={75} showLabel label="Downloading" />

// Variants and sizes
<Progress value={90} variant="success" size="lg" />
<Progress value={30} variant="gradient" />
```

**Props:**
- `value`: number (0-100)
- `variant`: 'default' | 'success' | 'warning' | 'error' | 'gradient'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `showLabel`: boolean
- `label`: string

#### Toast

Temporary notifications.

```tsx
import { ToastProvider, useToast } from '@gm/ui';

// 1. Wrapper your app with ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// 2. Use the useToast hook
function MyComponent() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      title: 'Success!',
      description: 'Your action was completed.',
      variant: 'success',
      duration: 5000, // or 0 for infinite
    });
  };

  // With action
  const showActionToast = () => {
    addToast({
      title: 'File Deleted',
      description: 'photo.jpg was deleted',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undone'),
      },
    });
  };
}
```

**Props Toast:**
- `variant`: 'default' | 'success' | 'error' | 'warning' | 'info'
- `title`: string
- `description`: string
- `duration`: number (ms)
- `action`: { label: string, onClick: () => void }

#### Tooltip

Hover tooltips.

```tsx
import { SimpleTooltip, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@gm/ui';

// Simple
<SimpleTooltip content="This is a tooltip">
  <Button>Hover over me</Button>
</SimpleTooltip>

// Customized
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">?</Button>
    </TooltipTrigger>
    <TooltipContent side="right" align="center">
      <p>Detailed Information</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

**Props SimpleTooltip:**
- `content`: ReactNode
- `side`: 'top' | 'right' | 'bottom' | 'left'
- `align`: 'start' | 'center' | 'end'
- `delayDuration`: number

### Navigation Components

#### Tabs

Tab navigation.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@gm/ui';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Tab 1 Content
  </TabsContent>
  <TabsContent value="tab2">
    Tab 2 Content
  </TabsContent>
  <TabsContent value="tab3">
    Tab 3 Content
  </TabsContent>
</Tabs>

// Variants
<TabsList variant="outline">...</TabsList>
<TabsList variant="pills">...</TabsList>
```

**Props TabsList:**
- `variant`: 'default' | 'outline' | 'pills'

#### Breadcrumb

Breadcrumb navigation.

```tsx
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage,
  BreadcrumbSeparator 
} from '@gm/ui';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Details</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

#### Menu (Dropdown)

Contextual dropdown menu.

```tsx
import { 
  Menu, 
  MenuTrigger, 
  MenuContent, 
  MenuItem,
  MenuSeparator,
  MenuLabel,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent
} from '@gm/ui';

<Menu>
  <MenuTrigger asChild>
    <Button variant="outline">Options</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuLabel>My Account</MenuLabel>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Settings</MenuItem>
    <MenuSeparator />
    <MenuSub>
      <MenuSubTrigger>More</MenuSubTrigger>
      <MenuSubContent>
        <MenuItem>Help</MenuItem>
        <MenuItem>About</MenuItem>
      </MenuSubContent>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>
      Logout
      <MenuShortcut>⌘Q</MenuShortcut>
    </MenuItem>
  </MenuContent>
</Menu>
```

#### Pagination

Page navigation.

```tsx
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext
} from '@gm/ui';

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

### UI Components

#### Avatar

Profile image with fallback.

```tsx
import { SimpleAvatar, Avatar, AvatarImage, AvatarFallback } from '@gm/ui';

// Simple
<SimpleAvatar 
  src="/user.jpg" 
  alt="John Doe" 
  fallback="JD"
  size="lg"
/>

// Customized
<Avatar size="xl">
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

**Props:**
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

#### Skeleton

Loading placeholder.

```tsx
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonButton } from '@gm/ui';

// Customized skeleton
<Skeleton width={200} height={20} />
<Skeleton width="100%" height={100} rounded="xl" />

// Skeleton with shimmer animation
<Skeleton variant="shimmer" width="100%" height={40} />

// Pre-configured skeletons
<SkeletonText lines={3} />
<SkeletonAvatar size="lg" />
<SkeletonButton size="md" />
```

**Props Skeleton:**
- `variant`: 'default' | 'shimmer'
- `rounded`: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `width`: string | number
- `height`: string | number

#### Accordion

Expandable sections.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@gm/ui';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Section 1 Content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Section 2 Content
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple
<Accordion type="multiple" defaultValue={["item-1"]}>
  ...
</Accordion>
```

#### Separator

Line separator for visually dividing content.

```tsx
import { Separator } from '@gm/ui';

// Horizontal (default)
<div>
  <p>Section 1</p>
  <Separator className="my-4" />
  <p>Section 2</p>
</div>

// Vertical (requires a container with defined height)
<div className="flex h-5 items-center space-x-4 text-sm">
  <span>Menu</span>
  <Separator orientation="vertical" />
  <span>About</span>
  <Separator orientation="vertical" />
  <span>Contact</span>
</div>

// In a menu
<div className="w-48 rounded border p-2">
  <button className="w-full p-2 text-left">Profile</button>
  <button className="w-full p-2 text-left">Settings</button>
  <Separator className="my-1" />
  <button className="w-full p-2 text-left">Logout</button>
</div>

// In a toolbar
<div className="flex items-center gap-2">
  <Button size="sm">Copy</Button>
  <Separator orientation="vertical" className="h-6" />
  <Button size="sm">Paste</Button>
  <Separator orientation="vertical" className="h-6" />
  <Button size="sm">Delete</Button>
</div>
```

**Props:**
- `orientation`: 'horizontal' | 'vertical' (default: 'horizontal')
- `decorative`: boolean (default: true) - If false, the separator is accessible to screen readers

**💡 Tip:** For vertical separators, ensure the parent container has a defined height (`h-5`, `h-6`, etc.) and use `flex items-center` for alignment.

#### Slider

Value selection slider.

```tsx
import { Slider } from '@gm/ui';

// Simple
<Slider defaultValue={[50]} max={100} />

// With label and value
<Slider 
  defaultValue={[25]} 
  max={100}
  showValue
  label="Volume"
/>

// Sizes
<Slider size="sm" />
<Slider size="md" />
<Slider size="lg" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `showValue`: boolean
- `label`: string

#### Popover

Floating content.

```tsx
import { SimplePopover, Popover, PopoverTrigger, PopoverContent } from '@gm/ui';

// Simple
<SimplePopover
  trigger={<Button>Open</Button>}
  content={<p>Popover Content</p>}
  side="bottom"
/>

// Customized
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Info</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-gray-500">
        Set the dimensions of the element.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

**Props SimplePopover:**
- `trigger`: ReactNode
- `content`: ReactNode
- `side`: 'top' | 'right' | 'bottom' | 'left'
- `align`: 'start' | 'center' | 'end'

#### Modal

Modal dialog box.

```tsx
import { 
  Modal, 
  ModalTrigger, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription,
  ModalFooter
} from '@gm/ui';

<Modal>
  <ModalTrigger asChild>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
      <ModalDescription>
        Modal Description
      </ModalDescription>
    </ModalHeader>
    <div className="py-4">
      {/* Content */}
    </div>
    <ModalFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

## Hooks

### useToggle

Boolean state management.

```tsx
import { useToggle } from '@gm/ui';

function Component() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setIsOpen(true)}>Open</button>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </>
  );
}
```

### useLocalStorage

Persistence in localStorage.

```tsx
import { useLocalStorage } from '@gm/ui';

function Component() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current Theme: {theme}
    </button>
  );
}
```

### useDebounce

Debounce a value.

```tsx
import { useDebounce } from '@gm/ui';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### useClickOutside

Detect clicks outside an element.

```tsx
import { useClickOutside } from '@gm/ui';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <div>Menu Content</div>
      )}
    </div>
  );
}
```

### useCopyToClipboard

Copy text to clipboard.

```tsx
import { useCopyToClipboard } from '@gm/ui';

function CopyButton() {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <button onClick={() => copy('Hello World!')}>
      {copiedText ? 'Copied!' : 'Copy'}
    </button>
  );
}
```

### useMediaQuery

Programmatic responsive design.

```tsx
import { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop } from '@gm/ui';

function ResponsiveComponent() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## Theme and Customization

### Utility Classes

The library uses Tailwind CSS. You can customize components with Tailwind classes:

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">
  Custom Button
</Button>

<Card className="border-2 border-blue-500">
  Custom Card
</Card>
```

### Theme Colors

The primary colors used:
- **Primary**: Warm orange (#f97316)
- **Secondary**: Red (#ef4444)
- **Gray**: Grayscale for text and borders
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Dark Mode

All components automatically support dark mode. Simply add the `dark` class to your `<html>` element:

```html
<html class="dark">
```

Or handle it dynamically:

```tsx
function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      label="Dark Mode"
    />
  );
}
```

## Accessibility

All components are built with accessibility in mind:
- Complete keyboard support
- Appropriate ARIA attributes
- Focus management
- Screen reader announcements
- Contrast color compliance with WCAG

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT © Guillaume Mulier 