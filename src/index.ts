// Import styles
import './styles/globals.css';

// Export utilities
export { cn } from './utils/cn';

// Export hooks
export * from './hooks';

// Export components
export { Button, buttonVariants } from './components/Button';
export type { ButtonProps } from './components/Button';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
} from './components/Card';
export type { CardProps } from './components/Card';

export { Input, inputVariants } from './components/Input';
export type { InputProps } from './components/Input';

export {
  Modal,
  ModalPortal,
  ModalOverlay,
  ModalTrigger,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from './components/Modal';

export { Badge, badgeVariants } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Spinner, spinnerVariants } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

// Form components
export { Checkbox, checkboxVariants } from './components/Checkbox';
export type { CheckboxProps } from './components/Checkbox';

export { Label, labelVariants } from './components/Label';
export type { LabelProps } from './components/Label';

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  selectTriggerVariants,
} from './components/Select';

export { Switch, switchVariants } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export { Radio, RadioGroup, radioVariants } from './components/Radio';
export type { RadioProps, RadioGroupProps } from './components/Radio';

export { Textarea, textareaVariants } from './components/Textarea';
export type { TextareaProps } from './components/Textarea';

// Feedback components
export {
  Alert,
  AlertTitle,
  AlertDescription,
  DismissibleAlert,
  alertVariants,
} from './components/Alert';
export type { DismissibleAlertProps } from './components/Alert';

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
} from './components/Tooltip';
export type { SimpleTooltipProps } from './components/Tooltip';

export { Progress, progressVariants, progressIndicatorVariants } from './components/Progress';
export type { ProgressProps } from './components/Progress';

export { ToastProvider, useToast, toastVariants } from './components/Toast';

// Navigation components
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsListVariants,
  tabsTriggerVariants,
} from './components/Tabs';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './components/Breadcrumb';

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
  MenuGroup,
  MenuPortal,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuRadioGroup,
} from './components/Menu';

// UI components
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  SimpleAvatar,
  avatarVariants,
} from './components/Avatar';
export type { SimpleAvatarProps } from './components/Avatar';

export {
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  skeletonVariants,
} from './components/Skeleton';
export type { SkeletonProps } from './components/Skeleton';

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/Accordion';

export { Separator } from './components/Separator';

export { Slider, sliderVariants } from './components/Slider';
export type { SliderProps } from './components/Slider';

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './components/Pagination';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  SimplePopover,
} from './components/Popover';
export type { SimplePopoverProps } from './components/Popover'; 