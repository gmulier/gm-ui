import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@gm/ui';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Checkbox
export const Default: Story = {
  args: {},
};

// With Label
export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

// With Label and Description
export const WithDescription: Story = {
  args: {
    label: 'Marketing emails',
    description: 'Receive emails about new products, features, and more.',
  },
};

// Different Variants
export const ErrorVariant: Story = {
  args: {
    variant: 'error',
    label: 'This field is required',
    defaultChecked: false,
  },
};

export const SuccessVariant: Story = {
  args: {
    variant: 'success',
    label: 'Verified',
    defaultChecked: true,
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    size: 'sm',
    label: 'Small checkbox',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    label: 'Large checkbox',
  },
};

// States
export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'This is checked',
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
export const TermsAndConditions: Story = {
  args: {
    label: 'I agree to the Terms and Conditions',
    description: 'By checking this box, you agree to our Terms of Service and Privacy Policy.',
    required: true,
  },
};

export const NewsletterSignup: Story = {
  args: {
    label: 'Subscribe to newsletter',
    description: 'Get the latest news and updates delivered to your inbox.',
    defaultChecked: true,
  },
}; 