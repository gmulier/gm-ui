import React, { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  Badge,
  Spinner,
} from '../src';

export function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          @guillaume/ui Component Library
        </h1>

        {/* Buttons Section */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Various button styles and states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="icon">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
              <Button variant="primary" isLoading onClick={handleLoadingClick}>
                {isLoading ? 'Loading' : 'Click to Load'}
              </Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </CardContent>
        </Card>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>A basic card with default styling</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area where you can place any content.</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Card with shadow elevation</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card has a more prominent shadow for emphasis.</p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>Card with colored border</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card uses a primary color border for visual distinction.</p>
            </CardContent>
          </Card>

          <Card variant="interactive">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Hover and click me!</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This card responds to hover and click interactions.</p>
            </CardContent>
          </Card>
        </div>

        {/* Inputs Section */}
        <Card>
          <CardHeader>
            <CardTitle>Input Fields</CardTitle>
            <CardDescription>Various input styles and states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Default input" />
              <Input variant="error" placeholder="Error state" />
              <Input variant="success" placeholder="Success state" />
              <Input inputSize="sm" placeholder="Small input" />
              <Input inputSize="lg" placeholder="Large input" />
              <Input
                placeholder="Search..."
                startIcon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
              <Input
                placeholder="Password"
                type="password"
                endIcon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                }
              />
              <Input disabled placeholder="Disabled input" />
            </div>
          </CardContent>
        </Card>

        {/* Badges Section */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Modal Section */}
        <Card>
          <CardHeader>
            <CardTitle>Modal Dialog</CardTitle>
            <CardDescription>Click the button to open a modal</CardDescription>
          </CardHeader>
          <CardContent>
            <Modal>
              <ModalTrigger asChild>
                <Button>Open Modal</Button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Example Modal</ModalTitle>
                  <ModalDescription>
                    This is an example modal dialog with a title and description.
                  </ModalDescription>
                </ModalHeader>
                <div className="py-4">
                  <p>Modal content goes here. You can add any React components or HTML.</p>
                </div>
                <ModalFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </CardContent>
        </Card>

        {/* Spinner Section */}
        <Card>
          <CardHeader>
            <CardTitle>Loading Spinners</CardTitle>
            <CardDescription>Various spinner sizes and colors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
              <div className="bg-gray-800 p-4 rounded">
                <Spinner color="white" />
              </div>
              <Spinner color="secondary" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 