import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonButton } from '@gm/ui';

const meta = {
  title: 'Display/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'shimmer'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Skeleton
export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
};

// Different Shapes
export const Rectangle: Story = {
  args: {
    width: 300,
    height: 100,
    rounded: 'md',
  },
};

export const Circle: Story = {
  args: {
    width: 64,
    height: 64,
    rounded: 'full',
  },
};

export const Square: Story = {
  args: {
    width: 100,
    height: 100,
    rounded: 'lg',
  },
};

// With Shimmer
export const WithShimmer: Story = {
  args: {
    variant: 'shimmer',
    width: 250,
    height: 30,
  },
};

// Pre-configured Components
export const TextSkeleton: StoryObj = {
  render: () => (
    <div className="w-64">
      <SkeletonText lines={3} />
    </div>
  ),
};

export const AvatarSkeleton: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <SkeletonAvatar size="xs" />
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
  ),
};

export const ButtonSkeleton: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <SkeletonButton size="sm" />
      <SkeletonButton size="md" />
      <SkeletonButton size="lg" />
    </div>
  ),
};

// Real-world Examples
export const CardSkeleton: StoryObj = {
  render: () => (
    <div className="w-80 rounded-xl border border-gray-200 p-4 space-y-4">
      <div className="flex items-center gap-3">
        <SkeletonAvatar />
        <div className="flex-1 space-y-2">
          <Skeleton width="50%" height={16} />
          <Skeleton width="30%" height={14} />
        </div>
      </div>
      <SkeletonText lines={3} />
      <div className="flex gap-2">
        <SkeletonButton />
        <SkeletonButton />
      </div>
    </div>
  ),
};

export const ListSkeleton: StoryObj = {
  render: () => (
    <div className="w-96 space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
          <SkeletonAvatar size="lg" />
          <div className="flex-1 space-y-2">
            <Skeleton width="60%" height={20} />
            <Skeleton width="40%" height={16} />
          </div>
          <Skeleton width={60} height={32} rounded="lg" />
        </div>
      ))}
    </div>
  ),
};

export const FormSkeleton: StoryObj = {
  render: () => (
    <div className="w-96 space-y-4">
      <div className="space-y-2">
        <Skeleton width={60} height={16} />
        <Skeleton width="100%" height={40} rounded="lg" />
      </div>
      <div className="space-y-2">
        <Skeleton width={80} height={16} />
        <Skeleton width="100%" height={40} rounded="lg" />
      </div>
      <div className="space-y-2">
        <Skeleton width={100} height={16} />
        <Skeleton width="100%" height={80} rounded="lg" />
      </div>
      <div className="flex justify-end gap-2">
        <SkeletonButton />
        <SkeletonButton width={100} />
      </div>
    </div>
  ),
};

export const TableSkeleton: StoryObj = {
  render: () => (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              <Skeleton width={80} height={16} />
            </th>
            <th className="p-4 text-left">
              <Skeleton width={100} height={16} />
            </th>
            <th className="p-4 text-left">
              <Skeleton width={60} height={16} />
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((i) => (
            <tr key={i} className="border-b">
              <td className="p-4">
                <Skeleton width="80%" height={16} />
              </td>
              <td className="p-4">
                <Skeleton width="60%" height={16} />
              </td>
              <td className="p-4">
                <Skeleton width="40%" height={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

export const ShimmerEffect: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Skeleton</h3>
        <Skeleton width={300} height={40} />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Shimmer Skeleton</h3>
        <Skeleton variant="shimmer" width={300} height={40} />
      </div>
    </div>
  ),
}; 