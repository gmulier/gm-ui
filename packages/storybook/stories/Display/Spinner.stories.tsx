import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Spinner } from '@gm/ui';

const meta = {
  title: 'Display/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white', 'current'],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Spinner
export const Default: Story = {
  args: {},
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLargeSize: Story = {
  args: {
    size: 'xl',
  },
};

// Different Colors
export const PrimaryColor: Story = {
  args: {
    color: 'primary',
  },
};

export const SecondaryColor: Story = {
  args: {
    color: 'secondary',
  },
};

export const WhiteColor: Story = {
  args: {
    color: 'white',
  },
  decorators: [
    (Story) => (
      <div className="p-4 bg-gray-800 rounded">
        <Story />
      </div>
    ),
  ],
};

export const CurrentColor: Story = {
  args: {
    color: 'current',
  },
  decorators: [
    (Story) => (
      <div className="text-purple-600">
        <Story />
      </div>
    ),
  ],
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

// All Colors
export const AllColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <div className="p-2 bg-gray-800 rounded">
        <Spinner color="white" />
      </div>
      <div className="text-green-600">
        <Spinner color="current" />
      </div>
    </div>
  ),
};

// Real-world Examples
export const LoadingButton: Story = {
  render: () => (
    <button className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-xl" disabled>
      <Spinner size="sm" color="white" className="mr-2" />
      Loading...
    </button>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <div className="w-64 p-8 border border-gray-200 rounded-xl">
      <div className="flex flex-col items-center space-y-3">
        <Spinner size="lg" />
        <p className="text-sm text-gray-600">Loading content...</p>
      </div>
    </div>
  ),
};

export const PageLoader: Story = {
  render: () => (
    <div className="flex items-center justify-center h-64">
      <div className="flex flex-col items-center space-y-4">
        <Spinner size="xl" color="primary" />
        <p className="text-gray-600 text-center">Loading page...</p>
      </div>
    </div>
  ),
};

export const InlineLoader: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="flex items-center text-sm">
        <Spinner size="sm" className="mr-2" />
        Checking availability...
      </p>
      <p className="flex items-center text-sm text-green-600">
        <Spinner size="sm" color="current" className="mr-2" />
        Saving changes...
      </p>
      <p className="flex items-center text-sm text-red-600">
        <Spinner size="sm" color="current" className="mr-2" />
        Deleting item...
      </p>
    </div>
  ),
}; 