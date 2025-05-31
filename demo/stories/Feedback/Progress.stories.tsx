import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Progress } from '../../../src/components/Progress';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'gradient'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    showLabel: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Progress
export const Default: Story = {
  args: {
    value: 60,
  },
};

// Different Values
export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Quarter: Story = {
  args: {
    value: 25,
  },
};

export const Half: Story = {
  args: {
    value: 50,
  },
};

export const ThreeQuarters: Story = {
  args: {
    value: 75,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

// Different Variants
export const SuccessVariant: Story = {
  args: {
    value: 100,
    variant: 'success',
  },
};

export const WarningVariant: Story = {
  args: {
    value: 65,
    variant: 'warning',
  },
};

export const ErrorVariant: Story = {
  args: {
    value: 30,
    variant: 'error',
  },
};

export const GradientVariant: Story = {
  args: {
    value: 80,
    variant: 'gradient',
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    value: 60,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    value: 60,
    size: 'lg',
  },
};

export const ExtraLargeSize: Story = {
  args: {
    value: 60,
    size: 'xl',
  },
};

// With Label
export const WithLabel: Story = {
  args: {
    value: 45,
    showLabel: true,
  },
};

export const WithCustomLabel: Story = {
  args: {
    value: 72,
    showLabel: true,
    label: 'Upload Progress',
  },
};

// Real-world Examples
export const FileUpload: Story = {
  args: {
    value: 68,
    showLabel: true,
    label: 'Uploading document.pdf',
    variant: 'default',
  },
};

export const ProfileCompletion: Story = {
  args: {
    value: 85,
    showLabel: true,
    label: 'Profile Completion',
    variant: 'success',
  },
};

export const StorageUsage: Story = {
  args: {
    value: 92,
    showLabel: true,
    label: 'Storage Used',
    variant: 'warning',
  },
};

export const LoadingIndicator: Story = {
  args: {
    value: 33,
    label: 'Loading...',
    showLabel: true,
    variant: 'gradient',
  },
};

export const TaskProgress: Story = {
  args: {
    value: 40,
    showLabel: true,
    label: '4 of 10 tasks completed',
  },
}; 