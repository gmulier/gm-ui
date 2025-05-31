# Guillaume UI - Stories Storybook

Ce dossier contient toutes les stories des composants de la bibliothèque `@guillaume/ui`, organisées par catégorie.

## Structure

```
stories/
├── Display/           # Composants d'affichage (Card, Button, Badge, Avatar, etc.)
├── Form/              # Composants de formulaire (Input, Select, Checkbox, etc.)
├── Navigation/        # Composants de navigation (Menu, Tabs, Breadcrumb, etc.)
├── Feedback/          # Composants de feedback (Alert, Toast, Progress, etc.)
├── Overlay/           # Composants overlay/modal (Modal, Popover, Accordion, etc.)
├── assets/            # Assets statiques pour Storybook
└── Configure.mdx      # Documentation de configuration Storybook
```

## Organisation des stories

Chaque story correspond à un composant de la bibliothèque principale (`src/components/`) et démontre toutes ses variantes, états et cas d'usage.

Les stories suivent la convention de nommage :
- `ComponentName.stories.tsx`

## Développement

Pour lancer Storybook en mode développement :
```bash
npm run dev:demo
``` 