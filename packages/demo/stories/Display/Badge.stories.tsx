import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Badge } from '../../../src/components/Badge';

const meta = {
  title: 'Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'outline'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Badge
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// Different Variants
export const DefaultVariant: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const DestructiveVariant: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const OutlineVariant: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// Badge Collection
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

// Real-world Examples
export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Server Status:</span>
        <Badge variant="success">Online</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Build Status:</span>
        <Badge variant="warning">Building</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Deployment:</span>
        <Badge variant="destructive">Failed</Badge>
      </div>
    </div>
  ),
};

export const ProductBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">iPhone 15 Pro</h3>
        <Badge variant="success">In Stock</Badge>
        <Badge variant="destructive">Hot</Badge>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">MacBook Air</h3>
        <Badge variant="outline">Coming Soon</Badge>
        <Badge>New</Badge>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">AirPods Pro</h3>
        <Badge variant="warning">Low Stock</Badge>
        <Badge variant="secondary">-20%</Badge>
      </div>
    </div>
  ),
};

export const NotificationBadges: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="relative">
        <button className="p-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <Badge className="absolute -top-1 -right-1" variant="destructive">3</Badge>
        </button>
      </div>
      <div className="relative">
        <button className="p-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <Badge className="absolute -top-1 -right-1" variant="default">12</Badge>
        </button>
      </div>
    </div>
  ),
};

export const TagList: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium mb-2">Skills</h4>
        <div className="flex flex-wrap gap-1">
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">GraphQL</Badge>
          <Badge variant="outline">Tailwind CSS</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Categories</h4>
        <div className="flex flex-wrap gap-1">
          <Badge>Technology</Badge>
          <Badge>Design</Badge>
          <Badge>Business</Badge>
          <Badge>Marketing</Badge>
        </div>
      </div>
    </div>
  ),
}; 