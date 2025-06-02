import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../src/components/Input';
import * as React from 'react';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    round: 'lg',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    round: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Contrôle l\'arrondi des bords',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    focusColor: {
      control: 'text',
      description: 'Focus color: predefined colors (purple, pink, emerald...) or hex color (#ff6b6b)',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// Different Variants
export const ErrorState: Story = {
  args: {
    variant: 'error',
    placeholder: 'Error input',
    defaultValue: 'Invalid email',
  },
};

export const SuccessState: Story = {
  args: {
    variant: 'success',
    placeholder: 'Success input',
    defaultValue: 'Valid input',
  },
};

// Different Sizes
export const Small: Story = {
  args: {
    inputSize: 'sm',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'lg',
    placeholder: 'Large input',
  },
};

// With Icons
const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export const WithStartIcon: Story = {
  args: {
    placeholder: 'Search...',
    startIcon: <SearchIcon />,
  },
};

export const WithEndIcon: Story = {
  args: {
    placeholder: 'Password',
    type: 'password',
    endIcon: <EyeIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: 'Email',
    type: 'email',
    startIcon: <span>@</span>,
    endIcon: <SearchIcon />,
  },
};

// States
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

// Different Types
export const EmailInput: Story = {
  args: {
    type: 'email',
    placeholder: 'your@email.com',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: '123',
  },
};

// Custom Focus Colors
export const PurpleFocus: Story = {
  args: {
    placeholder: 'Purple focus',
    focusColor: 'purple',
  },
};

export const PinkFocus: Story = {
  args: {
    placeholder: 'Pink focus',
    focusColor: 'pink',
  },
};

export const EmeraldFocus: Story = {
  args: {
    placeholder: 'Emerald focus',
    focusColor: 'emerald',
  },
};

export const OrangeFocus: Story = {
  args: {
    placeholder: 'Orange focus',
    focusColor: 'orange',
  },
};

export const CustomHexFocus: Story = {
  args: {
    placeholder: 'Custom color focus',
    focusColor: '#ff6b6b',
  },
};

export const CustomFocusWithIcon: Story = {
  args: {
    placeholder: 'Search with purple focus...',
    focusColor: 'purple',
    startIcon: <SearchIcon />,
  },
};

// Round Variations
export const SquareInput: Story = {
  args: {
    placeholder: 'Square input',
    round: 'none',
  },
};

export const SlightlyRounded: Story = {
  args: {
    placeholder: 'Slightly rounded',
    round: 'sm',
  },
};

export const MediumRounded: Story = {
  args: {
    placeholder: 'Medium rounded',
    round: 'md',
  },
};

export const VeryRounded: Story = {
  args: {
    placeholder: 'Very rounded',
    round: 'xl',
  },
};

export const MaxRounded: Story = {
  args: {
    placeholder: 'Maximum rounded',
    round: '2xl',
  },
}; 