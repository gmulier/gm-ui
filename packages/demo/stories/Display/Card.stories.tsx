import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../src/components/Card';
import { Button } from '../../../src/components/Button';
import { Badge } from '../../../src/components/Badge';

const meta = {
  title: 'Display/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'interactive'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Card
export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content. You can put any content here.</p>
      </CardContent>
    </Card>
  ),
};

// Different Variants
export const DefaultVariant: Story = {
  render: () => (
    <Card variant="default">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a default card with subtle shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const ElevatedVariant: Story = {
  render: () => (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has a more prominent shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const OutlinedVariant: Story = {
  render: () => (
    <Card variant="outlined">
      <CardHeader>
        <CardTitle>Outlined Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has only a border, no shadow.</p>
      </CardContent>
    </Card>
  ),
};

export const InteractiveVariant: Story = {
  render: () => (
    <Card variant="interactive">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card responds to hover and can be clicked.</p>
      </CardContent>
    </Card>
  ),
};

// With Footer
export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer section</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content goes here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

// Real-world Examples
export const PricingCard: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Pro Plan
          <Badge variant="success">Popular</Badge>
        </CardTitle>
        <CardDescription>Perfect for growing businesses</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-3xl font-bold">
          $29<span className="text-sm font-normal text-gray-600">/month</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center">
            <svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Advanced analytics
          </li>
          <li className="flex items-center">
            <svg className="mr-2 h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            24/7 support
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button fullWidth>Get Started</Button>
      </CardFooter>
    </Card>
  ),
};

export const BlogPostCard: Story = {
  render: () => (
    <Card variant="interactive">
      <CardContent className="p-0">
        <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-t-xl" />
      </CardContent>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <Badge variant="outline">Technology</Badge>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <CardTitle>Building Scalable Web Applications</CardTitle>
        <CardDescription>
          Learn the best practices for building web applications that can handle millions of users.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-300" />
          <div className="text-sm">
            <p className="font-medium">John Doe</p>
            <p className="text-gray-500">Mar 15, 2024</p>
          </div>
        </div>
        <Button variant="ghost" size="sm">Read More →</Button>
      </CardFooter>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: () => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-green-600">+20.1% from last month</p>
      </CardContent>
    </Card>
  ),
};

export const UserProfileCard: Story = {
  render: () => (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mb-4" />
          <h3 className="text-lg font-semibold">Jane Smith</h3>
          <p className="text-sm text-gray-500">Product Designer</p>
          <div className="flex gap-4 mt-4 text-sm">
            <div className="text-center">
              <p className="font-semibold">124</p>
              <p className="text-gray-500">Projects</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">8.2k</p>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">523</p>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" fullWidth>Message</Button>
        <Button fullWidth>Follow</Button>
      </CardFooter>
    </Card>
  ),
}; 