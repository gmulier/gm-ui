import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@gm/ui';

const meta = {
  title: 'Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Switch
export const Default: Story = {
  args: {},
};

// With Label
export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
  },
};

// With Label and Description
export const WithDescription: Story = {
  args: {
    label: 'Dark mode',
    description: 'Enable dark theme across the application',
  },
};

// Different Variants
export const DefaultVariant: Story = {
  args: {
    label: 'Default switch',
    defaultChecked: true,
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    label: 'Feature enabled',
    defaultChecked: true,
  },
};

export const WarningVariant: Story = {
  args: {
    variant: 'warning',
    label: 'Beta feature',
    description: 'This feature is still in beta',
    defaultChecked: true,
  },
};

export const ErrorVariant: Story = {
  args: {
    variant: 'error',
    label: 'Dangerous setting',
    description: 'This action cannot be undone',
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    size: 'sm',
    label: 'Small switch',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    label: 'Large switch',
  },
};

// States
export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'This is checked',
  },
};

export const Unchecked: Story = {
  args: {
    defaultChecked: false,
    label: 'This is unchecked',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'This is disabled',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Disabled and checked',
  },
};

// Real-world Examples
export const EmailNotifications: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive email updates about your account',
    defaultChecked: true,
  },
};

export const TwoFactorAuth: Story = {
  args: {
    variant: 'success',
    label: 'Two-factor authentication',
    description: 'Add an extra layer of security to your account',
    defaultChecked: false,
  },
};

export const MaintenanceMode: Story = {
  args: {
    variant: 'warning',
    label: 'Maintenance mode',
    description: 'Your site will be inaccessible to visitors',
    defaultChecked: false,
  },
}; 