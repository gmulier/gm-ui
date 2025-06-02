import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Alert, AlertTitle, AlertDescription, DismissibleAlert } from '@gm/ui';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Alert
export const Default: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Default Alert</AlertTitle>
      <AlertDescription>
        This is a default alert with neutral styling.
      </AlertDescription>
    </Alert>
  ),
};

// Variants
export const InfoAlert: Story = {
  render: () => (
    <Alert variant="info">
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational alert to provide helpful context.
      </AlertDescription>
    </Alert>
  ),
};

export const SuccessAlert: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your action was completed successfully.
      </AlertDescription>
    </Alert>
  ),
};

export const WarningAlert: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please review this important information before proceeding.
      </AlertDescription>
    </Alert>
  ),
};

export const ErrorAlert: Story = {
  render: () => (
    <Alert variant="error">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request.
      </AlertDescription>
    </Alert>
  ),
};

// Without Title
export const DescriptionOnly: Story = {
  render: () => (
    <Alert variant="info">
      <AlertDescription>
        This is an alert with only a description, no title.
      </AlertDescription>
    </Alert>
  ),
};

// Dismissible Alerts
export const DismissibleDefault: Story = {
  render: () => (
    <DismissibleAlert onDismiss={() => console.log('Alert dismissed')}>
      <AlertTitle>Dismissible Alert</AlertTitle>
      <AlertDescription>
        Click the X button to dismiss this alert.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const DismissibleSuccess: Story = {
  render: () => (
    <DismissibleAlert variant="success" onDismiss={() => console.log('Success alert dismissed')}>
      <AlertTitle>Changes saved!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

// Real-world Examples
export const UpdateNotification: Story = {
  render: () => (
    <DismissibleAlert variant="info">
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>
        A new version of the application is available. Please refresh the page to update.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const FormError: Story = {
  render: () => (
    <Alert variant="error">
      <AlertTitle>Form submission failed</AlertTitle>
      <AlertDescription>
        <ul className="mt-2 list-disc list-inside text-sm">
          <li>Email address is required</li>
          <li>Password must be at least 8 characters</li>
          <li>Please accept the terms and conditions</li>
        </ul>
      </AlertDescription>
    </Alert>
  ),
};

export const SystemMaintenance: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTitle>Scheduled Maintenance</AlertTitle>
      <AlertDescription>
        The system will be undergoing maintenance on Sunday, March 10th from 2:00 AM to 6:00 AM EST. 
        Some features may be unavailable during this time.
      </AlertDescription>
    </Alert>
  ),
};

export const SuccessWithAction: Story = {
  render: () => (
    <DismissibleAlert variant="success">
      <div className="flex justify-between items-start">
        <div>
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>
            Your payment of $99.99 has been processed successfully.
          </AlertDescription>
        </div>
        <button className="ml-4 text-sm font-medium underline">
          View receipt
        </button>
      </div>
    </DismissibleAlert>
  ),
}; 