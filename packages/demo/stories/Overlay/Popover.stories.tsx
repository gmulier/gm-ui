import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../../../src/components/Popover';
import { Button } from '../../../src/components/Button';
import { Input } from '../../../src/components/Input';
import { Label } from '../../../src/components/Label';

const meta = {
  title: 'Overlay/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Popover
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-gray-500">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// Different Positions
export const TopPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Top</Button>
      </PopoverTrigger>
      <PopoverContent side="top">
        <p>This popover appears on top</p>
      </PopoverContent>
    </Popover>
  ),
};

export const RightPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Right</Button>
      </PopoverTrigger>
      <PopoverContent side="right">
        <p>This popover appears on the right</p>
      </PopoverContent>
    </Popover>
  ),
};

export const BottomPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom">
        <p>This popover appears on bottom</p>
      </PopoverContent>
    </Popover>
  ),
};

export const LeftPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Left</Button>
      </PopoverTrigger>
      <PopoverContent side="left">
        <p>This popover appears on the left</p>
      </PopoverContent>
    </Popover>
  ),
};

// Different Alignments
export const StartAlign: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-32">Start align</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <p>Aligned to the start</p>
      </PopoverContent>
    </Popover>
  ),
};

export const EndAlign: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-32">End align</Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <p>Aligned to the end</p>
      </PopoverContent>
    </Popover>
  ),
};

// Real-world Examples
export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-300" />
          <span>John Doe</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-300" />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">john@example.com</p>
            </div>
          </div>
          <div className="border-t pt-3">
            <button className="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-gray-100">
              View Profile
            </button>
            <button className="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-gray-100">
              Settings
            </button>
            <button className="w-full rounded px-3 py-1.5 text-left text-sm hover:bg-gray-100">
              Sign Out
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const ColorPicker: Story = {
  render: () => {
    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
      '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
      '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
      '#ec4899', '#f43f5e',
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-32">
            <div className="mr-2 h-4 w-4 rounded bg-primary-500" />
            Pick color
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-3">
            <h4 className="font-medium">Choose a color</h4>
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className="h-8 w-8 rounded"
                  style={{ backgroundColor: color }}
                  onClick={() => console.log('Selected color:', color)}
                />
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const NotificationSettings: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Notifications</h4>
            <button className="text-sm text-primary-600 hover:underline">Mark all as read</button>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-sm font-medium">New comment on your post</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-sm font-medium">You have a new follower</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-3">
              <p className="text-sm font-medium">Your export is ready</p>
              <p className="text-xs text-gray-500">3 hours ago</p>
            </div>
          </div>
          <button className="w-full rounded-lg border border-gray-200 py-2 text-sm hover:bg-gray-50">
            View all notifications
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const ShareMenu: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a3 3 0 10-5.432-1.684m5.432 1.684l-9.032-4.026M18.316 8.658a3 3 0 10-5.432 1.684m5.432-1.684L9.284 12.684" />
          </svg>
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div className="space-y-1">
          <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-gray-100">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
          <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-gray-100">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </button>
          <button className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-gray-100">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Copy link
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}; 