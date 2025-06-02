import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@gm/ui';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Tabs
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Tab 1 Content</h3>
          <p className="text-gray-600">This is the content for the first tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Tab 2 Content</h3>
          <p className="text-gray-600">This is the content for the second tab.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Tab 3 Content</h3>
          <p className="text-gray-600">This is the content for the third tab.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Different Variants
export const OutlineVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="outline">
        <TabsTrigger value="tab1" variant="outline">Overview</TabsTrigger>
        <TabsTrigger value="tab2" variant="outline">Analytics</TabsTrigger>
        <TabsTrigger value="tab3" variant="outline">Reports</TabsTrigger>
        <TabsTrigger value="tab4" variant="outline">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">Overview content</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">Analytics content</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">Reports content</div>
      </TabsContent>
      <TabsContent value="tab4">
        <div className="p-4">Notifications content</div>
      </TabsContent>
    </Tabs>
  ),
};

export const PillsVariant: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList variant="pills">
        <TabsTrigger value="tab1" variant="pills">All</TabsTrigger>
        <TabsTrigger value="tab2" variant="pills">Active</TabsTrigger>
        <TabsTrigger value="tab3" variant="pills">Draft</TabsTrigger>
        <TabsTrigger value="tab4" variant="pills">Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">All items</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">Active items</div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">Draft items</div>
      </TabsContent>
      <TabsContent value="tab4">
        <div className="p-4">Archived items</div>
      </TabsContent>
    </Tabs>
  ),
};

// Real-world Examples
export const UserProfile: Story = {
  render: () => (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold">Profile Information</h3>
          <div className="space-y-2">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" defaultValue="John Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" defaultValue="john@example.com" />
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="account">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold">Account Settings</h3>
          <p>Manage your account preferences and settings.</p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold">Change Password</h3>
          <p>Update your password to keep your account secure.</p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold">Notification Preferences</h3>
          <p>Choose how you want to be notified.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ProductDetails: Story = {
  render: () => (
    <Tabs defaultValue="description">
      <TabsList variant="outline">
        <TabsTrigger value="description" variant="outline">Description</TabsTrigger>
        <TabsTrigger value="specifications" variant="outline">Specifications</TabsTrigger>
        <TabsTrigger value="reviews" variant="outline">Reviews (42)</TabsTrigger>
        <TabsTrigger value="qa" variant="outline">Q&A</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Product Description</h3>
          <p className="text-gray-600">
            This premium product features cutting-edge technology and exceptional build quality. 
            Perfect for professionals and enthusiasts alike.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="specifications">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Technical Specifications</h3>
          <dl className="space-y-2">
            <div>
              <dt className="font-medium">Dimensions:</dt>
              <dd className="text-gray-600">10" x 8" x 2"</dd>
            </div>
            <div>
              <dt className="font-medium">Weight:</dt>
              <dd className="text-gray-600">2.5 lbs</dd>
            </div>
          </dl>
        </div>
      </TabsContent>
      <TabsContent value="reviews">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
          <p className="text-gray-600">4.5 out of 5 stars based on 42 reviews</p>
        </div>
      </TabsContent>
      <TabsContent value="qa">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Questions & Answers</h3>
          <p className="text-gray-600">Have a question? Get answers from the community.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}; 