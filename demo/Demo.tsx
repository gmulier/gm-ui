import React, { useState } from 'react';
import {
  // Core components
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Badge,
  Spinner,
  Avatar,
  AvatarImage,
  AvatarFallback,
  SimpleAvatar,
  
  // Form components
  Checkbox,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Radio,
  RadioGroup,
  Textarea,
  Slider,
  
  // Feedback components
  Alert,
  AlertTitle,
  AlertDescription,
  DismissibleAlert,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Progress,
  
  // Navigation components
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
  
  // UI components
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonButton,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Separator,
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Popover,
  PopoverTrigger,
  PopoverContent,
  
  // Modal components
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
} from '../src';

export function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [sliderValue, setSliderValue] = useState([50]);
  const [progressValue, setProgressValue] = useState(65);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');

  const handleLoadingDemo = () => {
    setIsLoading(true);
    // Copy GitHub installation command to clipboard
    const installCommand = 'npm install github:gmulier/gm-ui';
    navigator.clipboard.writeText(installCommand).then(() => {
      setTimeout(() => {
        setIsLoading(false);
        alert('📋 Installation command copied to clipboard!\n\n' + installCommand + '\n\n💡 Installation via GitHub (package not yet on npm)');
      }, 1500);
    }).catch(() => {
      setTimeout(() => {
        setIsLoading(false);
        alert('💡 Installation command:\n' + installCommand + '\n\n📝 Installation via GitHub (package not yet on npm)');
      }, 1500);
    });
  };

  const scrollToExamples = () => {
    const examplesSection = document.getElementById('examples-section');
    if (examplesSection) {
      examplesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const incrementProgress = () => {
    setProgressValue(prev => Math.min(prev + 10, 100));
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200 cursor-pointer">
                      <span className="text-white font-bold text-lg">G</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-4">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-xl">G</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Guillaume Mulier</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <a 
                          href="https://github.com/gmulier" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <svg className="h-5 w-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">GitHub</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">@gmulier</div>
                          </div>
                        </a>
                        
                        <a 
                          href="https://www.linkedin.com/in/guillaume-mulier" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">LinkedIn</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Guillaume Mulier</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">@gm/ui</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Modern React Component Library</p>
                </div>
              </div>
              
              <nav className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/gmulier/gm-ui" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://storybook-gm-ui.vercel.app" target="_blank" rel="noopener noreferrer">
                    📚 Technical Documentation
                  </a>
                </Button>
                <Button variant="primary" size="sm" asChild>
                  <a href="/getting-started">
                    Get Started
                  </a>
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4">
                🎨 New version v0.1.0
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Beautiful <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">components</span>
                <br />for your React applications
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                A modern component library built with TypeScript and Tailwind CSS. 
                Warm color palette, rounded design, and optimized performance.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" onClick={handleLoadingDemo} isLoading={isLoading}>
                  {isLoading ? 'Installing...' : 'Install Now'}
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToExamples}>
                  View Examples
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Components</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">TypeScript</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">16</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dependencies</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">✓</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accessible (A11Y)</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 pb-20" id="examples-section">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              {/* Buttons Showcase */}
              <section>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Buttons</h3>
                  <p className="text-gray-600 dark:text-gray-400">Expressive buttons for every action</p>
                </div>
                
                <Card className="p-8">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button variant="primary" size="lg">Primary</Button>
                      <Button variant="secondary" size="lg">Secondary</Button>
                      <Button variant="outline" size="lg">Outline</Button>
                      <Button variant="ghost" size="lg">Ghost</Button>
                      <Button variant="destructive" size="lg">Destructive</Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                      <Button size="icon">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button variant="primary" isLoading>Loading</Button>
                      <Button variant="primary" disabled>Disabled</Button>
                      <Button variant="link">Link Button</Button>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Cards Showcase */}
              <section>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Cards</h3>
                  <p className="text-gray-600 dark:text-gray-400">Flexible containers to organize your content</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <Card variant="default">
                    <CardHeader>
                      <CardTitle>Default Card</CardTitle>
                      <CardDescription>Simple and clear description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Card content with explanatory text.</p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full">Action</Button>
                    </CardFooter>
                  </Card>

                  <Card variant="elevated">
                    <CardHeader>
                      <CardTitle>Elevated Card</CardTitle>
                      <CardDescription>With pronounced shadow</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <SimpleAvatar
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"
                          fallback="JD"
                          size="sm"
                        />
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-xs text-gray-500">Developer</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="outlined">
                    <CardHeader>
                      <CardTitle>Outlined Card</CardTitle>
                      <CardDescription>With colored border</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge variant="success">Active</Badge>
                        <p className="text-sm">Real-time status</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="interactive">
                    <CardHeader>
                      <CardTitle>Interactive Card</CardTitle>
                      <CardDescription>Click to interact</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center gap-3">
                        <Spinner size="md" />
                        <p className="text-sm">Loading...</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Avatars & Badges */}
              <section>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Avatars & Badges</h3>
                  <p className="text-gray-600 dark:text-gray-400">Visual identity and status indicators</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Avatars</h4>
                    <div className="flex items-center space-x-4">
                      <SimpleAvatar
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40"
                        fallback="JD"
                        size="sm"
                      />
                      <SimpleAvatar
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48"
                        fallback="AB"
                        size="md"
                      />
                      <SimpleAvatar
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b108?w=56"
                        fallback="CD"
                        size="lg"
                      />
                      <SimpleAvatar fallback="XL" size="xl" />
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="destructive">Error</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </Card>
                </div>
              </section>
            </TabsContent>

            {/* Forms Tab */}
            <TabsContent value="forms" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Form Components</h3>
                <p className="text-gray-600 dark:text-gray-400">Collect and validate user data with style</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input & Textarea */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Input Fields</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your@email.com"
                        startIcon={
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password"
                        type="password" 
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        placeholder="Your message..."
                        rows={4}
                      />
                    </div>
                  </div>
                </Card>

                {/* Select & Controls */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Controls</h4>
                  <div className="space-y-6">
                    <div>
                      <Label>Selection</Label>
                      <Select value={selectValue} onValueChange={setSelectValue}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch 
                        id="notifications"
                        checked={switchChecked}
                        onCheckedChange={setSwitchChecked}
                      />
                      <Label htmlFor="notifications">Enable notifications</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms"
                        checked={checkboxChecked}
                        onChange={(e) => setCheckboxChecked(e.target.checked)}
                      />
                      <Label htmlFor="terms">I accept the terms and conditions</Label>
                    </div>

                    <div>
                      <Label>Preferences</Label>
                      <RadioGroup className="mt-2">
                        <div className="flex items-center space-x-2">
                          <Radio 
                            value="option1" 
                            id="r1" 
                            name="preferences"
                            checked={radioValue === 'option1'}
                            onChange={() => setRadioValue('option1')}
                          />
                          <Label htmlFor="r1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Radio 
                            value="option2" 
                            id="r2" 
                            name="preferences"
                            checked={radioValue === 'option2'}
                            onChange={() => setRadioValue('option2')}
                          />
                          <Label htmlFor="r2">Option 2</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Volume: {sliderValue[0]}%</Label>
                      <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Feedback Tab */}
            <TabsContent value="feedback" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Feedback Components</h3>
                <p className="text-gray-600 dark:text-gray-400">Communicate clearly with your users</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Alerts */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Alerts</h4>
                  <div className="space-y-4">
                    <Alert>
                      <AlertTitle>Information</AlertTitle>
                      <AlertDescription>
                        Here is important information to remember.
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="error">
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>
                        An error occurred during processing.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="warning">
                      <AlertTitle>Warning</AlertTitle>
                      <AlertDescription>
                        This action cannot be undone.
                      </AlertDescription>
                    </Alert>

                    <DismissibleAlert variant="success">
                      <AlertTitle>Success</AlertTitle>
                      <AlertDescription>
                        Your changes have been saved.
                      </AlertDescription>
                    </DismissibleAlert>
                  </div>
                </Card>

                {/* Progress & Tooltip */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Progress & Tooltips</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label>Progress: {progressValue}%</Label>
                        <Button size="sm" variant="outline" onClick={incrementProgress}>
                          +10%
                        </Button>
                      </div>
                      <Progress value={progressValue} className="mb-4" />
                    </div>

                    <div>
                      <Label className="mb-2 block">Interactive Tooltips</Label>
                      <div className="flex space-x-4">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline">Hover me</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Informative tooltip</p>
                          </TooltipContent>
                        </Tooltip>

                        <Button variant="primary">
                          Action Button
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Spinners</Label>
                      <div className="flex items-center space-x-4">
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                        <Spinner size="xl" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Navigation Tab */}
            <TabsContent value="navigation" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Navigation</h3>
                <p className="text-gray-600 dark:text-gray-400">Guide your users through your application</p>
              </div>

              <div className="space-y-8">
                {/* Breadcrumb */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Breadcrumb</h4>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Navigation</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </Card>

                {/* Menu & Pagination */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Context Menu</h4>
                    <Menu>
                      <MenuTrigger asChild>
                        <Button variant="outline">Open Menu</Button>
                      </MenuTrigger>
                      <MenuContent>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Sign Out</MenuItem>
                      </MenuContent>
                    </Menu>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Pagination</h4>
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">2</PaginationLink>
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
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Layout Tab */}
            <TabsContent value="layout" className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Layout & Structure</h3>
                <p className="text-gray-600 dark:text-gray-400">Organize and structure your content</p>
              </div>

              <div className="space-y-8">
                {/* Accordion */}
                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Accordion</h4>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is @gm/ui?</AccordionTrigger>
                      <AccordionContent>
                        A modern React component library built with TypeScript and Tailwind CSS, 
                        offering a warm color palette and rounded designs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How to install it?</AccordionTrigger>
                      <AccordionContent>
                        You can install the library via npm or yarn, then import it into your React projects.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes, all components follow WCAG accessibility standards and include 
                        keyboard and screen reader support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Card>

                {/* Skeleton & Popover */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Skeleton Loading</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <SkeletonAvatar />
                        <div className="space-y-2">
                          <SkeletonText className="h-4 w-[200px]" />
                          <SkeletonText className="h-4 w-[150px]" />
                        </div>
                      </div>
                      <Separator />
                      <SkeletonButton />
                      <SkeletonText className="h-4 w-full" />
                      <SkeletonText className="h-4 w-3/4" />
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Popover & Modal</h4>
                    <div className="space-y-4">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline">Open Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="space-y-2">
                            <h4 className="font-medium">Configuration</h4>
                            <p className="text-sm text-gray-600">
                              Adjust your preferences here.
                            </p>
                            <div className="flex space-x-2">
                              <Button size="sm">Save</Button>
                              <Button size="sm" variant="outline">Cancel</Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>

                      <Modal>
                        <ModalTrigger asChild>
                          <Button>Open Modal</Button>
                        </ModalTrigger>
                        <ModalContent>
                          <ModalHeader>
                            <ModalTitle>Confirmation</ModalTitle>
                            <ModalDescription>
                              Are you sure you want to perform this action?
                            </ModalDescription>
                          </ModalHeader>
                          <div className="py-4">
                            <p>This action cannot be undone.</p>
                          </div>
                          <ModalFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="destructive">Confirm</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <footer className="border-t bg-white dark:bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to get started?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Integrate @gm/ui into your next React project
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/getting-started">
                    Start Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://storybook-gm-ui.vercel.app" target="_blank" rel="noopener noreferrer">
                    View Documentation
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