import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SimpleAvatar, Avatar, AvatarImage, AvatarFallback } from '@gm/ui';

const meta = {
  title: 'Display/Avatar',
  component: SimpleAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    fallback: {
      control: 'text',
    },
  },
} satisfies Meta<typeof SimpleAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Avatar
export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
    fallback: 'JD',
  },
};

// With Fallback
export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url.com/image.jpg',
    alt: 'User avatar',
    fallback: 'AB',
  },
};

// Different Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'User avatar',
    fallback: 'XS',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User avatar',
    fallback: 'SM',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'User avatar',
    fallback: 'MD',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User avatar',
    fallback: 'LG',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    src: 'https://i.pravatar.cc/150?img=6',
    alt: 'User avatar',
    fallback: 'XL',
  },
};

export const DoubleExtraLarge: Story = {
  args: {
    size: '2xl',
    src: 'https://i.pravatar.cc/150?img=7',
    alt: 'User avatar',
    fallback: '2XL',
  },
};

// All Sizes
export const AllSizes: StoryObj = {
  render: () => (
    <div className="flex items-end gap-4">
      <SimpleAvatar size="xs" src="https://i.pravatar.cc/150?img=8" alt="User" fallback="XS" />
      <SimpleAvatar size="sm" src="https://i.pravatar.cc/150?img=9" alt="User" fallback="SM" />
      <SimpleAvatar size="md" src="https://i.pravatar.cc/150?img=10" alt="User" fallback="MD" />
      <SimpleAvatar size="lg" src="https://i.pravatar.cc/150?img=11" alt="User" fallback="LG" />
      <SimpleAvatar size="xl" src="https://i.pravatar.cc/150?img=12" alt="User" fallback="XL" />
      <SimpleAvatar size="2xl" src="https://i.pravatar.cc/150?img=13" alt="User" fallback="2XL" />
    </div>
  ),
};

// Custom Avatar with Gradient Fallback
export const CustomAvatar: StoryObj = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src="https://invalid-url.com" alt="User" />
      <AvatarFallback className="bg-gradient-to-br from-primary-400 to-primary-600 text-white">
        JD
      </AvatarFallback>
    </Avatar>
  ),
};

// Real-world Examples
export const UserList: StoryObj = {
  render: () => (
    <div className="space-y-4">
      {[
        { name: 'John Doe', role: 'Developer', fallback: 'JD', img: 14 },
        { name: 'Jane Smith', role: 'Designer', fallback: 'JS', img: 15 },
        { name: 'Bob Johnson', role: 'Manager', fallback: 'BJ', img: 16 },
      ].map((user, i) => (
        <div key={i} className="flex items-center gap-3">
          <SimpleAvatar 
            src={`https://i.pravatar.cc/150?img=${user.img}`} 
            alt={user.name} 
            fallback={user.fallback} 
          />
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const AvatarGroup: StoryObj = {
  render: () => (
    <div className="flex -space-x-4">
      <SimpleAvatar 
        src="https://i.pravatar.cc/150?img=17" 
        alt="User 1" 
        fallback="U1"
        className="ring-2 ring-white dark:ring-gray-950" 
      />
      <SimpleAvatar 
        src="https://i.pravatar.cc/150?img=18" 
        alt="User 2" 
        fallback="U2"
        className="ring-2 ring-white dark:ring-gray-950" 
      />
      <SimpleAvatar 
        src="https://i.pravatar.cc/150?img=19" 
        alt="User 3" 
        fallback="U3"
        className="ring-2 ring-white dark:ring-gray-950" 
      />
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-medium ring-2 ring-white dark:bg-gray-800 dark:ring-gray-950">
        +3
      </div>
    </div>
  ),
};

export const StatusIndicator: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <div className="relative">
        <SimpleAvatar src="https://i.pravatar.cc/150?img=20" alt="Online user" fallback="ON" />
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-950" />
      </div>
      <div className="relative">
        <SimpleAvatar src="https://i.pravatar.cc/150?img=21" alt="Away user" fallback="AW" />
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-white dark:ring-gray-950" />
      </div>
      <div className="relative">
        <SimpleAvatar src="https://i.pravatar.cc/150?img=22" alt="Offline user" fallback="OF" />
        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-400 ring-2 ring-white dark:ring-gray-950" />
      </div>
    </div>
  ),
}; 