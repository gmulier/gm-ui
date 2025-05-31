# @guillaume/ui - Documentation complète

Une librairie de composants React moderne construite avec TypeScript, Tailwind CSS et Radix UI.

## Table des matières

- [Installation](#installation)
- [Configuration](#configuration)
- [Composants](#composants)
  - [Composants de base](#composants-de-base)
  - [Composants de formulaire](#composants-de-formulaire)
  - [Composants de feedback](#composants-de-feedback)
  - [Composants de navigation](#composants-de-navigation)
  - [Composants UI](#composants-ui)
- [Hooks](#hooks)
- [Thème et personnalisation](#thème-et-personnalisation)

## Installation

```bash
npm install @guillaume/ui
# ou
yarn add @guillaume/ui
# ou
pnpm add @guillaume/ui
```

## Configuration

### 1. Importer les styles CSS

```tsx
// Dans votre fichier principal (App.tsx ou index.tsx)
import '@guillaume/ui/dist/index.css';
```

### 2. Configuration du dark mode (optionnel)

Ajoutez la classe `dark` à votre élément `<html>` pour activer le mode sombre :

```html
<html class="dark">
  <!-- ... -->
</html>
```

## Composants

### Composants de base

#### Button

Un bouton polyvalent avec plusieurs variantes et états.

```tsx
import { Button } from '@guillaume/ui';

// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Tailles
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔔</Button>

// États
<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>

// Avec Slot (pour les liens)
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

#### Card

Un conteneur flexible pour regrouper le contenu.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@guillaume/ui';

<Card variant="default">
  <CardHeader>
    <CardTitle>Titre de la carte</CardTitle>
    <CardDescription>Description de la carte</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Contenu de la carte</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Variantes
<Card variant="elevated">...</Card>
<Card variant="outlined">...</Card>
<Card variant="interactive">...</Card>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined' | 'interactive'

#### Badge

Pour afficher des statuts ou des labels.

```tsx
import { Badge } from '@guillaume/ui';

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

Indicateur de chargement animé.

```tsx
import { Spinner } from '@guillaume/ui';

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

### Composants de formulaire

#### Input

Champ de saisie avec support des icônes et états.

```tsx
import { Input } from '@guillaume/ui';

// Base
<Input placeholder="Email" type="email" />

// Variantes
<Input variant="default" placeholder="Default" />
<Input variant="error" placeholder="Erreur" />
<Input variant="success" placeholder="Succès" />

// Tailles
<Input inputSize="sm" placeholder="Small" />
<Input inputSize="md" placeholder="Medium" />
<Input inputSize="lg" placeholder="Large" />

// Avec icônes
<Input 
  placeholder="Rechercher..." 
  startIcon={<SearchIcon />}
/>
<Input 
  placeholder="Mot de passe" 
  type="password"
  endIcon={<EyeIcon />}
/>
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `inputSize`: 'sm' | 'md' | 'lg'
- `startIcon`: ReactNode
- `endIcon`: ReactNode

#### Textarea

Zone de texte multi-lignes avec redimensionnement automatique.

```tsx
import { Textarea } from '@guillaume/ui';

// Base
<Textarea placeholder="Votre message..." />

// Avec compteur de caractères
<Textarea 
  placeholder="Description" 
  showCount 
  maxLength={200}
/>

// Redimensionnement automatique
<Textarea 
  placeholder="Auto-resize" 
  autoResize
/>

// Variantes et tailles
<Textarea variant="error" size="lg" />
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `autoResize`: boolean
- `showCount`: boolean
- `maxLength`: number

#### Checkbox

Case à cocher avec label optionnel.

```tsx
import { Checkbox } from '@guillaume/ui';

// Simple
<Checkbox />

// Avec label
<Checkbox 
  label="J'accepte les conditions" 
  description="En cochant, vous acceptez nos CGU"
/>

// Variantes et tailles
<Checkbox variant="error" size="lg" />
<Checkbox variant="success" checked />
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `label`: string
- `description`: string

#### Radio

Boutons radio pour sélection exclusive.

```tsx
import { Radio, RadioGroup } from '@guillaume/ui';

<RadioGroup orientation="vertical">
  <Radio name="plan" value="free" label="Plan gratuit" />
  <Radio name="plan" value="pro" label="Plan Pro" description="10€/mois" />
  <Radio name="plan" value="enterprise" label="Enterprise" />
</RadioGroup>

// Orientation horizontale
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

Interrupteur on/off.

```tsx
import { Switch } from '@guillaume/ui';

// Simple
<Switch />

// Avec label
<Switch 
  label="Mode sombre" 
  description="Activer le thème sombre"
/>

// Variantes et tailles
<Switch variant="success" size="lg" />
<Switch variant="error" disabled />
```

**Props:**
- `variant`: 'default' | 'success' | 'warning' | 'error'
- `size`: 'sm' | 'md' | 'lg'
- `label`: string
- `description`: string

#### Select

Menu déroulant de sélection.

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
} from '@guillaume/ui';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Sélectionner un fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Pomme</SelectItem>
      <SelectItem value="banana">Banane</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Légumes</SelectLabel>
      <SelectItem value="carrot">Carotte</SelectItem>
      <SelectItem value="potato">Pomme de terre</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// Avec variantes et tailles
<SelectTrigger variant="error" size="lg">
  ...
</SelectTrigger>
```

**Props SelectTrigger:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'

#### Label

Label pour les champs de formulaire.

```tsx
import { Label } from '@guillaume/ui';

<Label htmlFor="email">Email</Label>
<Label htmlFor="password" required>Mot de passe</Label>

// Variantes et tailles
<Label variant="error" size="lg">Champ en erreur</Label>
```

**Props:**
- `variant`: 'default' | 'error' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `required`: boolean

### Composants de feedback

#### Alert

Messages d'alerte et notifications.

```tsx
import { Alert, AlertTitle, AlertDescription, DismissibleAlert } from '@guillaume/ui';

// Alert simple
<Alert>
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Ceci est un message d'information.
  </AlertDescription>
</Alert>

// Variantes
<Alert variant="info">...</Alert>
<Alert variant="success">...</Alert>
<Alert variant="warning">...</Alert>
<Alert variant="error">...</Alert>

// Alert dismissible
<DismissibleAlert 
  variant="success" 
  onDismiss={() => console.log('Fermé')}
>
  <AlertTitle>Succès!</AlertTitle>
  <AlertDescription>L'opération a réussi.</AlertDescription>
</DismissibleAlert>
```

**Props:**
- `variant`: 'default' | 'info' | 'success' | 'warning' | 'error'

#### Progress

Barre de progression.

```tsx
import { Progress } from '@guillaume/ui';

// Simple
<Progress value={60} />

// Avec label
<Progress value={75} showLabel label="Téléchargement" />

// Variantes et tailles
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

Notifications temporaires.

```tsx
import { ToastProvider, useToast } from '@guillaume/ui';

// 1. Wrapper votre app avec ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// 2. Utiliser le hook useToast
function MyComponent() {
  const { addToast } = useToast();

  const showToast = () => {
    addToast({
      title: 'Succès!',
      description: 'Votre action a été effectuée.',
      variant: 'success',
      duration: 5000, // ou 0 pour infini
    });
  };

  // Avec action
  const showActionToast = () => {
    addToast({
      title: 'Fichier supprimé',
      description: 'photo.jpg a été supprimé',
      action: {
        label: 'Annuler',
        onClick: () => console.log('Annulé'),
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

Info-bulles au survol.

```tsx
import { SimpleTooltip, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@guillaume/ui';

// Simple
<SimpleTooltip content="Ceci est une info-bulle">
  <Button>Survolez-moi</Button>
</SimpleTooltip>

// Personnalisé
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">?</Button>
    </TooltipTrigger>
    <TooltipContent side="right" align="center">
      <p>Information détaillée</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

**Props SimpleTooltip:**
- `content`: ReactNode
- `side`: 'top' | 'right' | 'bottom' | 'left'
- `align`: 'start' | 'center' | 'end'
- `delayDuration`: number

### Composants de navigation

#### Tabs

Onglets de navigation.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@guillaume/ui';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Onglet 1</TabsTrigger>
    <TabsTrigger value="tab2">Onglet 2</TabsTrigger>
    <TabsTrigger value="tab3">Onglet 3</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Contenu de l'onglet 1
  </TabsContent>
  <TabsContent value="tab2">
    Contenu de l'onglet 2
  </TabsContent>
  <TabsContent value="tab3">
    Contenu de l'onglet 3
  </TabsContent>
</Tabs>

// Variantes
<TabsList variant="outline">...</TabsList>
<TabsList variant="pills">...</TabsList>
```

**Props TabsList:**
- `variant`: 'default' | 'outline' | 'pills'

#### Breadcrumb

Fil d'Ariane pour la navigation.

```tsx
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage,
  BreadcrumbSeparator 
} from '@guillaume/ui';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Produits</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Détails</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

#### Menu (Dropdown)

Menu déroulant contextuel.

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
} from '@guillaume/ui';

<Menu>
  <MenuTrigger asChild>
    <Button variant="outline">Options</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuLabel>Mon compte</MenuLabel>
    <MenuItem>Profil</MenuItem>
    <MenuItem>Paramètres</MenuItem>
    <MenuSeparator />
    <MenuSub>
      <MenuSubTrigger>Plus</MenuSubTrigger>
      <MenuSubContent>
        <MenuItem>Aide</MenuItem>
        <MenuItem>À propos</MenuItem>
      </MenuSubContent>
    </MenuSub>
    <MenuSeparator />
    <MenuItem>
      Déconnexion
      <MenuShortcut>⌘Q</MenuShortcut>
    </MenuItem>
  </MenuContent>
</Menu>
```

#### Pagination

Navigation entre pages.

```tsx
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext
} from '@guillaume/ui';

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

### Composants UI

#### Avatar

Image de profil avec fallback.

```tsx
import { SimpleAvatar, Avatar, AvatarImage, AvatarFallback } from '@guillaume/ui';

// Simple
<SimpleAvatar 
  src="/user.jpg" 
  alt="John Doe" 
  fallback="JD"
  size="lg"
/>

// Personnalisé
<Avatar size="xl">
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

**Props:**
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

#### Skeleton

Placeholder de chargement.

```tsx
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonButton } from '@guillaume/ui';

// Skeleton personnalisé
<Skeleton width={200} height={20} />
<Skeleton width="100%" height={100} rounded="xl" />

// Skeleton avec animation shimmer
<Skeleton variant="shimmer" width="100%" height={40} />

// Skeletons pré-configurés
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

Sections repliables.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@guillaume/ui';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>
      Contenu de la section 1
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>
      Contenu de la section 2
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple
<Accordion type="multiple" defaultValue={["item-1"]}>
  ...
</Accordion>
```

#### Separator

Ligne de séparation.

```tsx
import { Separator } from '@guillaume/ui';

// Horizontal
<Separator />

// Vertical
<div className="flex h-5 items-center space-x-4">
  <span>Texte</span>
  <Separator orientation="vertical" />
  <span>Texte</span>
</div>
```

**Props:**
- `orientation`: 'horizontal' | 'vertical'

#### Slider

Curseur de sélection de valeur.

```tsx
import { Slider } from '@guillaume/ui';

// Simple
<Slider defaultValue={[50]} max={100} />

// Avec label et valeur
<Slider 
  defaultValue={[25]} 
  max={100}
  showValue
  label="Volume"
/>

// Tailles
<Slider size="sm" />
<Slider size="md" />
<Slider size="lg" />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `showValue`: boolean
- `label`: string

#### Popover

Contenu flottant.

```tsx
import { SimplePopover, Popover, PopoverTrigger, PopoverContent } from '@guillaume/ui';

// Simple
<SimplePopover
  trigger={<Button>Ouvrir</Button>}
  content={<p>Contenu du popover</p>}
  side="bottom"
/>

// Personnalisé
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Infos</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-gray-500">
        Définissez les dimensions de l'élément.
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

Boîte de dialogue modale.

```tsx
import { 
  Modal, 
  ModalTrigger, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription,
  ModalFooter
} from '@guillaume/ui';

<Modal>
  <ModalTrigger asChild>
    <Button>Ouvrir Modal</Button>
  </ModalTrigger>
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Titre de la modal</ModalTitle>
      <ModalDescription>
        Description de la modal
      </ModalDescription>
    </ModalHeader>
    <div className="py-4">
      {/* Contenu */}
    </div>
    <ModalFooter>
      <Button variant="outline">Annuler</Button>
      <Button>Confirmer</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

## Hooks

### useToggle

Gestion d'état booléen.

```tsx
import { useToggle } from '@guillaume/ui';

function Component() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => setIsOpen(true)}>Ouvrir</button>
      <button onClick={() => setIsOpen(false)}>Fermer</button>
    </>
  );
}
```

### useLocalStorage

Persistance dans localStorage.

```tsx
import { useLocalStorage } from '@guillaume/ui';

function Component() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Thème actuel: {theme}
    </button>
  );
}
```

### useDebounce

Débounce d'une valeur.

```tsx
import { useDebounce } from '@guillaume/ui';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Effectuer la recherche
      performSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <Input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Rechercher..."
    />
  );
}
```

### useClickOutside

Détecter les clics en dehors d'un élément.

```tsx
import { useClickOutside } from '@guillaume/ui';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <div>Contenu du menu</div>
      )}
    </div>
  );
}
```

### useCopyToClipboard

Copier du texte dans le presse-papiers.

```tsx
import { useCopyToClipboard } from '@guillaume/ui';

function CopyButton() {
  const [copiedText, copy] = useCopyToClipboard();

  return (
    <button onClick={() => copy('Hello World!')}>
      {copiedText ? 'Copié!' : 'Copier'}
    </button>
  );
}
```

### useMediaQuery

Responsive design programmatique.

```tsx
import { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop } from '@guillaume/ui';

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

## Thème et personnalisation

### Classes utilitaires

La librairie utilise Tailwind CSS. Vous pouvez personnaliser les composants avec les classes Tailwind :

```tsx
<Button className="bg-purple-500 hover:bg-purple-600">
  Bouton personnalisé
</Button>

<Card className="border-2 border-blue-500">
  Carte personnalisée
</Card>
```

### Couleurs du thème

Les couleurs principales utilisées :
- **Primary**: Orange chaleureux (#f97316)
- **Secondary**: Rouge (#ef4444)
- **Gray**: Nuances de gris pour le texte et les bordures
- **Success**: Vert (#10b981)
- **Warning**: Jaune (#f59e0b)
- **Error**: Rouge (#ef4444)

### Dark mode

Tous les composants supportent automatiquement le mode sombre. Ajoutez simplement la classe `dark` à votre élément `<html>` :

```html
<html class="dark">
```

Ou gérez-le dynamiquement :

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
      label="Mode sombre"
    />
  );
}
```

## Accessibilité

Tous les composants sont construits avec l'accessibilité en tête :
- Support complet du clavier
- Attributs ARIA appropriés
- Gestion du focus
- Annonces pour les lecteurs d'écran
- Contrastes de couleurs conformes WCAG

## Support navigateur

- Chrome (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- Edge (dernières 2 versions)

## Licence

MIT © Guillaume Mulier 