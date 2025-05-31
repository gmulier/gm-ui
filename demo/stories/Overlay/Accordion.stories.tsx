import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../../src/components/Accordion';

const meta = {
  title: 'Overlay/Accordion',
  component: Accordion,
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
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Accordion (Single)
export const Single: StoryObj = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Multiple Accordion
export const Multiple: StoryObj = {
  render: () => (
    <Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! When the accordion type is set to "multiple", you can open multiple items at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is there a default open state?</AccordionTrigger>
        <AccordionContent>
          Yes, you can set defaultValue to control which items are open by default.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be controlled?</AccordionTrigger>
        <AccordionContent>
          Yes, you can use the value and onValueChange props for controlled behavior.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// FAQ Example
export const FAQ: StoryObj = {
  render: () => (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="pricing">
          <AccordionTrigger>What are your pricing plans?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">We offer three pricing tiers:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Free: $0/month - Basic features for personal use</li>
              <li>Pro: $19/month - Advanced features for professionals</li>
              <li>Enterprise: Custom pricing - Tailored solutions for large teams</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="refund">
          <AccordionTrigger>What is your refund policy?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day money-back guarantee. If you're not satisfied with our product, 
            you can request a full refund within 30 days of purchase, no questions asked.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>How can I contact support?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">You can reach our support team through:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Email: support@example.com</li>
              <li>Live chat: Available 24/7 on our website</li>
              <li>Phone: 1-800-123-4567 (Mon-Fri, 9AM-5PM EST)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="integration">
          <AccordionTrigger>Do you offer API integration?</AccordionTrigger>
          <AccordionContent>
            Yes! We provide a comprehensive REST API and webhooks for seamless integration 
            with your existing tools and workflows. Check our developer documentation for 
            detailed guides and examples.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Settings Panel
export const SettingsPanel: StoryObj = {
  render: () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <Accordion type="single" collapsible defaultValue="notifications">
        <AccordionItem value="account">
          <AccordionTrigger>Account Settings</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Username</label>
                <input className="mt-1 block w-full rounded-md border-gray-300" defaultValue="johndoe" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 block w-full rounded-md border-gray-300" defaultValue="john@example.com" />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifications">
          <AccordionTrigger>Notification Preferences</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">SMS notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Marketing emails</span>
              </label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger>Privacy & Security</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Two-factor authentication</span>
                <button className="text-sm text-primary-600 hover:underline">Enable</button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Login history</span>
                <button className="text-sm text-primary-600 hover:underline">View</button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Active sessions</span>
                <button className="text-sm text-primary-600 hover:underline">Manage</button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

// Technical Documentation
export const Documentation: StoryObj = {
  render: () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Component Documentation</h2>
      <Accordion type="multiple">
        <AccordionItem value="installation">
          <AccordionTrigger>Installation</AccordionTrigger>
          <AccordionContent>
            <pre className="bg-gray-100 p-3 rounded-md text-sm">
              <code>npm install @guillaume/ui</code>
            </pre>
            <p className="mt-2 text-sm text-gray-600">
              Or if you're using yarn:
            </p>
            <pre className="bg-gray-100 p-3 rounded-md text-sm mt-2">
              <code>yarn add @guillaume/ui</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="usage">
          <AccordionTrigger>Basic Usage</AccordionTrigger>
          <AccordionContent>
            <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
              <code>{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@guillaume/ui';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>
      Content 1
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="props">
          <AccordionTrigger>Props Reference</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm">
              <div>
                <code className="bg-gray-100 px-1 py-0.5 rounded">type</code>: "single" | "multiple"
              </div>
              <div>
                <code className="bg-gray-100 px-1 py-0.5 rounded">collapsible</code>: boolean (only for type="single")
              </div>
              <div>
                <code className="bg-gray-100 px-1 py-0.5 rounded">defaultValue</code>: string | string[]
              </div>
              <div>
                <code className="bg-gray-100 px-1 py-0.5 rounded">value</code>: string | string[] (controlled)
              </div>
              <div>
                <code className="bg-gray-100 px-1 py-0.5 rounded">onValueChange</code>: (value: string | string[]) =&gt; void
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}; 
 