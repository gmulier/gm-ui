import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { ToastProvider, useToast } from '../../../src/components/Toast';
import { Button } from '../../../src/components/Button';

const ToastDemo = () => {
  const { addToast } = useToast();

  const showDefaultToast = () => {
    addToast({
      title: 'Default Toast',
      description: 'This is a default toast message.',
    });
  };

  const showSuccessToast = () => {
    addToast({
      variant: 'success',
      title: 'Success!',
      description: 'Your action was completed successfully.',
    });
  };

  const showErrorToast = () => {
    addToast({
      variant: 'error',
      title: 'Error',
      description: 'Something went wrong. Please try again.',
    });
  };

  const showWarningToast = () => {
    addToast({
      variant: 'warning',
      title: 'Warning',
      description: 'Please review this important information.',
    });
  };

  const showInfoToast = () => {
    addToast({
      variant: 'info',
      title: 'Information',
      description: 'Here is some helpful information.',
    });
  };

  const showToastWithAction = () => {
    addToast({
      title: 'File deleted',
      description: 'photo.jpg has been deleted.',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo clicked'),
      },
    });
  };

  const showPersistentToast = () => {
    addToast({
      variant: 'info',
      title: 'Persistent Toast',
      description: 'This toast will not auto-dismiss.',
      duration: 0,
    });
  };

  const showMultipleToasts = () => {
    addToast({
      variant: 'success',
      title: 'First Toast',
      description: 'This is the first toast.',
    });
    setTimeout(() => {
      addToast({
        variant: 'info',
        title: 'Second Toast',
        description: 'This is the second toast.',
      });
    }, 500);
    setTimeout(() => {
      addToast({
        variant: 'warning',
        title: 'Third Toast',
        description: 'This is the third toast.',
      });
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={showDefaultToast}>Default Toast</Button>
        <Button onClick={showSuccessToast} variant="outline">Success Toast</Button>
        <Button onClick={showErrorToast} variant="outline">Error Toast</Button>
        <Button onClick={showWarningToast} variant="outline">Warning Toast</Button>
        <Button onClick={showInfoToast} variant="outline">Info Toast</Button>
        <Button onClick={showToastWithAction} variant="outline">Toast with Action</Button>
        <Button onClick={showPersistentToast} variant="outline">Persistent Toast</Button>
        <Button onClick={showMultipleToasts} variant="outline">Multiple Toasts</Button>
      </div>
    </div>
  );
};

const meta = {
  title: 'Feedback/Toast',
  component: ToastDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const Default: Story = {};

// Real-world Examples
const RealWorldExamples = () => {
  const { addToast } = useToast();

  const handleSave = () => {
    // Simulate save action
    addToast({
      variant: 'success',
      title: 'Changes saved',
      description: 'Your changes have been saved successfully.',
    });
  };

  const handleDelete = () => {
    addToast({
      variant: 'error',
      title: 'Item deleted',
      description: 'The item has been permanently deleted.',
      action: {
        label: 'Undo',
        onClick: () => {
          addToast({
            variant: 'info',
            title: 'Deletion cancelled',
            description: 'The item has been restored.',
          });
        },
      },
    });
  };

  const handleCopy = () => {
    addToast({
      title: 'Copied to clipboard',
      description: 'The link has been copied to your clipboard.',
      duration: 3000,
    });
  };

  const handleSubscribe = () => {
    addToast({
      variant: 'success',
      title: 'Subscribed!',
      description: 'You have been subscribed to our newsletter.',
      action: {
        label: 'Preferences',
        onClick: () => console.log('Opening preferences...'),
      },
    });
  };

  const handleSubscribeLong = () => {
    addToast({
      variant: 'success',
      title: 'Subscribed!',
      description: 'You have been subscribed to our newsletter.',
      action: {
        label: 'Manage preferences',
        onClick: () => console.log('Opening preferences...'),
      },
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Real-world Examples</h3>
      <div className="grid grid-cols-2 gap-4">
        <Button onClick={handleSave} variant="primary">Save Changes</Button>
        <Button onClick={handleDelete} variant="destructive">Delete Item</Button>
        <Button onClick={handleCopy} variant="outline">Copy Link</Button>
        <Button onClick={handleSubscribe} variant="outline">Subscribe</Button>
        <Button onClick={handleSubscribeLong} variant="outline">Subscribe (Long)</Button>
      </div>
    </div>
  );
};

export const Examples: Story = {
  render: () => <RealWorldExamples />,
}; 