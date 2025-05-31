import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalTitle,
  ModalDescription,
} from '../../../src/components/Modal';
import { Button } from '../../../src/components/Button';
import { Input } from '../../../src/components/Input';
import { Label } from '../../../src/components/Label';

const meta = {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Modal
export const Default: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>
            This is a modal dialog. You can put any content here.
          </ModalDescription>
        </ModalHeader>
        <div className="py-4">
          <p>Modal content goes here...</p>
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

// Simple Alert Modal
export const AlertModal: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Are you absolutely sure?</ModalTitle>
          <ModalDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

// Form Modal
export const FormModal: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Edit Profile</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Edit Profile</ModalTitle>
          <ModalDescription>
            Make changes to your profile here. Click save when you're done.
          </ModalDescription>
        </ModalHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              id="bio"
              className="flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
              placeholder="Tell us about yourself..."
              defaultValue="Product designer and developer."
            />
          </div>
        </div>
        <ModalFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

// Large Content Modal
export const LargeContentModal: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>View Terms</Button>
      </ModalTrigger>
      <ModalContent className="max-w-2xl">
        <ModalHeader>
          <ModalTitle>Terms of Service</ModalTitle>
          <ModalDescription>
            Last updated: January 1, 2024
          </ModalDescription>
        </ModalHeader>
        <div className="max-h-96 overflow-y-auto py-4">
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold">1. Acceptance of Terms</h3>
            <p className="text-gray-600">
              By accessing and using this service, you accept and agree to be bound by the terms
              and provision of this agreement. If you do not agree to abide by the above, please
              do not use this service.
            </p>
            <h3 className="font-semibold">2. Use License</h3>
            <p className="text-gray-600">
              Permission is granted to temporarily download one copy of the materials (information
              or software) on our service for personal, non-commercial transitory viewing only.
            </p>
            <h3 className="font-semibold">3. Disclaimer</h3>
            <p className="text-gray-600">
              The materials on our service are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for
              a particular purpose, or non-infringement of intellectual property or other violation
              of rights.
            </p>
            <h3 className="font-semibold">4. Limitations</h3>
            <p className="text-gray-600">
              In no event shall our company or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on our service,
              even if we or our authorized representative has been notified orally or in writing of
              the possibility of such damage. Because some jurisdictions do not allow limitations on
              implied warranties, or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </p>
          </div>
        </div>
        <ModalFooter>
          <Button variant="outline">Decline</Button>
          <Button>Accept</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ),
};

// Custom Close Button
export const CustomCloseModal: Story = {
  render: () => (
    <Modal>
      <ModalTrigger asChild>
        <Button>Open Custom Modal</Button>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader className="relative">
          <ModalTitle>Custom Close Button</ModalTitle>
          <button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            onClick={() => {
              // Close modal logic would go here
              console.log('Close modal');
            }}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </ModalHeader>
        <div className="py-4">
          <p>This modal has a custom close button in the header.</p>
        </div>
      </ModalContent>
    </Modal>
  ),
}; 