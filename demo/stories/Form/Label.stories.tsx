import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Label } from '../../../src/components/Label';
import { Input } from '../../../src/components/Input';

const meta = {
  title: 'Form/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    required: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Label
export const Default: Story = {
  args: {
    children: 'Label text',
  },
};

// With Required Indicator
export const Required: Story = {
  args: {
    children: 'Required field',
    required: true,
  },
};

// Different Variants
export const DefaultVariant: Story = {
  args: {
    children: 'Default label',
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
    children: 'Error label',
    required: true,
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    children: 'Success label',
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    size: 'sm',
    children: 'Small label',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    children: 'Large label',
  },
};

// With Form Controls
export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email" required>Email Address</Label>
      <Input id="email" type="email" placeholder="your@email.com" />
    </div>
  ),
};

export const WithErrorInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="password" variant="error" required>Password</Label>
      <Input id="password" type="password" variant="error" placeholder="Enter password" />
      <p className="text-xs text-red-500">Password is required</p>
    </div>
  ),
};

export const WithSuccessInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="username" variant="success">Username</Label>
      <Input id="username" variant="success" defaultValue="johndoe" />
      <p className="text-xs text-green-500">Username is available</p>
    </div>
  ),
};

// Form Example
export const CompleteForm: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="name" required>Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" required>Email</Label>
        <Input id="email" type="email" placeholder="john@example.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <textarea 
          id="bio" 
          className="flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          placeholder="Tell us about yourself..."
        />
      </div>
    </form>
  ),
}; 