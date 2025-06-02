import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Separator } from '@gm/ui';

const meta = {
  title: 'Display/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A visual separator to divide content. Can be horizontal or vertical depending on context.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    decorative: {
      control: 'boolean',
      description: 'If true, the separator is purely decorative (not read by screen readers)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Separator with proper context for both orientations
export const Default: Story = {
  args: {},
  render: (args) => {
    const isVertical = args.orientation === 'vertical';
    
    if (isVertical) {
      return (
        <div className="flex h-20 items-center space-x-4 text-sm">
          <div className="flex h-full items-center">
            <span>Left</span>
          </div>
          <Separator {...args} />
          <div className="flex h-full items-center">
            <span>Right</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="w-64">
        <div>
          <span className="text-sm">Top content</span>
        </div>
        <Separator {...args} className="my-4" />
        <div>
          <span className="text-sm">Bottom content</span>
        </div>
      </div>
    );
  },
};

// Horizontal Separator
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-gray-500">An open-source UI component library.</p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

// Vertical Separator
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator {...args} />
      <div>Docs</div>
      <Separator {...args} />
      <div>Source</div>
    </div>
  ),
};

// Show both orientations side by side
export const Orientations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h4 className="mb-4 text-sm font-medium">Horizontal (default)</h4>
        <div className="w-64">
          <div className="text-sm text-gray-600">Section 1</div>
          <Separator className="my-3" />
          <div className="text-sm text-gray-600">Section 2</div>
          <Separator className="my-3" />
          <div className="text-sm text-gray-600">Section 3</div>
        </div>
      </div>
      
      <div>
        <h4 className="mb-4 text-sm font-medium">Vertical (with defined height)</h4>
        <div className="flex h-16 items-center space-x-4 text-sm text-gray-600">
          <div>Menu</div>
          <Separator orientation="vertical" />
          <div>About</div>
          <Separator orientation="vertical" />
          <div>Contact</div>
          <Separator orientation="vertical" />
          <div>Blog</div>
        </div>
      </div>
    </div>
  ),
};

// Real-world Examples
export const InCard: Story = {
  render: () => (
    <div className="w-80 rounded-xl border border-gray-200 p-6">
      <div className="space-y-1">
        <h3 className="font-semibold">Account Settings</h3>
        <p className="text-sm text-gray-500">Manage your account preferences</p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm">Email notifications</span>
          <button className="text-sm text-primary-600">Edit</button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Privacy settings</span>
          <button className="text-sm text-primary-600">Edit</button>
        </div>
      </div>
    </div>
  ),
};

export const InMenu: Story = {
  render: () => (
    <div className="w-48 rounded-xl border border-gray-200 py-2">
      <div className="px-2 py-1.5">
        <button className="w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-100">Profile</button>
        <button className="w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-100">Settings</button>
        <button className="w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-100">Team</button>
      </div>
      <Separator className="my-1" />
      <div className="px-2 py-1.5">
        <button className="w-full rounded px-2 py-1.5 text-left text-sm hover:bg-gray-100">Logout</button>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 text-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Item
      </button>
      <Separator orientation="vertical" className="h-4" />
      <button className="flex items-center gap-2 text-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Edit
      </button>
      <Separator orientation="vertical" className="h-4" />
      <button className="flex items-center gap-2 text-sm">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Delete
      </button>
    </div>
  ),
}; 