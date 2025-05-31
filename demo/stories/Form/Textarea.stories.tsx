import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../../src/components/Textarea';

const meta = {
  title: 'Form/Textarea',
  component: Textarea,
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
    placeholder: {
      control: 'text',
    },
    autoResize: {
      control: 'boolean',
    },
    showCount: {
      control: 'boolean',
    },
    maxLength: {
      control: 'number',
    },
    rows: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Textarea
export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

// Different Variants
export const ErrorState: Story = {
  args: {
    variant: 'error',
    placeholder: 'Error state',
    defaultValue: 'This field has an error',
  },
};

export const SuccessState: Story = {
  args: {
    variant: 'success',
    placeholder: 'Success state',
    defaultValue: 'Valid content',
  },
};

// Different Sizes
export const SmallSize: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small textarea',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large textarea',
  },
};

// With Character Count
export const WithCharacterCount: Story = {
  args: {
    placeholder: 'Write your bio...',
    showCount: true,
    maxLength: 160,
    defaultValue: 'This is a textarea with character counting functionality.',
  },
};

// Auto Resize
export const AutoResize: Story = {
  args: {
    placeholder: 'This textarea will grow as you type...',
    autoResize: true,
    defaultValue: 'Start typing and the textarea will automatically adjust its height to fit the content.',
  },
};

// Different Row Counts
export const FewRows: Story = {
  args: {
    placeholder: 'Small textarea',
    rows: 2,
  },
};

export const ManyRows: Story = {
  args: {
    placeholder: 'Large textarea',
    rows: 10,
  },
};

// States
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    defaultValue: 'This textarea is disabled',
  },
};

// Real-world Examples
export const CommentBox: Story = {
  args: {
    placeholder: 'Leave a comment...',
    showCount: true,
    maxLength: 500,
    rows: 4,
  },
};

export const FeedbackForm: Story = {
  args: {
    placeholder: 'Tell us what you think about our product...',
    autoResize: true,
    showCount: true,
    maxLength: 1000,
    defaultValue: '',
  },
};

export const CodeEditor: Story = {
  args: {
    placeholder: '// Paste your code here',
    rows: 8,
    style: { fontFamily: 'monospace' },
  },
};

export const TwitterLike: Story = {
  args: {
    placeholder: "What's happening?",
    showCount: true,
    maxLength: 280,
    autoResize: true,
    rows: 3,
  },
}; 
 