import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Radio, RadioGroup } from '../../../src/components/Radio';

const meta = {
  title: 'Form/Radio',
  component: Radio,
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
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Radio
export const Default: Story = {
  args: {
    name: 'option',
    value: 'option1',
  },
};

// With Label
export const WithLabel: Story = {
  args: {
    name: 'option',
    value: 'option1',
    label: 'Option 1',
  },
};

// Radio Group Examples
export const RadioGroupVertical: Story = {
  render: () => (
    <RadioGroup orientation="vertical">
      <Radio name="plan" value="free" label="Free Plan" description="Basic features for personal use" />
      <Radio name="plan" value="pro" label="Pro Plan" description="Advanced features for professionals" />
      <Radio name="plan" value="enterprise" label="Enterprise Plan" description="Full features for large teams" />
    </RadioGroup>
  ),
};

export const RadioGroupHorizontal: Story = {
  render: () => (
    <RadioGroup orientation="horizontal">
      <Radio name="size" value="s" label="S" />
      <Radio name="size" value="m" label="M" />
      <Radio name="size" value="l" label="L" />
      <Radio name="size" value="xl" label="XL" />
    </RadioGroup>
  ),
};

// Different Variants
export const ErrorVariant: Story = {
  render: () => (
    <RadioGroup>
      <Radio variant="error" name="required" value="yes" label="Yes" />
      <Radio variant="error" name="required" value="no" label="No" />
    </RadioGroup>
  ),
};

export const SuccessVariant: Story = {
  render: () => (
    <RadioGroup>
      <Radio variant="success" name="verified" value="yes" label="Verified" defaultChecked />
      <Radio variant="success" name="verified" value="no" label="Not Verified" />
    </RadioGroup>
  ),
};

// Different Sizes
export const SmallSize: Story = {
  render: () => (
    <RadioGroup>
      <Radio size="sm" name="small" value="1" label="Small Option 1" />
      <Radio size="sm" name="small" value="2" label="Small Option 2" />
    </RadioGroup>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <RadioGroup>
      <Radio size="lg" name="large" value="1" label="Large Option 1" />
      <Radio size="lg" name="large" value="2" label="Large Option 2" />
    </RadioGroup>
  ),
};

// States
export const Disabled: Story = {
  render: () => (
    <RadioGroup>
      <Radio name="disabled" value="1" label="Enabled Option" />
      <Radio name="disabled" value="2" label="Disabled Option" disabled />
      <Radio name="disabled" value="3" label="Disabled Checked" disabled defaultChecked />
    </RadioGroup>
  ),
};

// Real-world Examples
export const PaymentMethod: Story = {
  render: () => (
    <div>
      <h3 className="mb-4 text-sm font-medium">Select Payment Method</h3>
      <RadioGroup>
        <Radio 
          name="payment" 
          value="card" 
          label="Credit Card" 
          description="Pay with Visa, Mastercard, or American Express"
        />
        <Radio 
          name="payment" 
          value="paypal" 
          label="PayPal" 
          description="Redirect to PayPal for secure payment"
        />
        <Radio 
          name="payment" 
          value="bank" 
          label="Bank Transfer" 
          description="Direct transfer from your bank account"
        />
      </RadioGroup>
    </div>
  ),
};

export const ShippingSpeed: Story = {
  render: () => (
    <div>
      <h3 className="mb-4 text-sm font-medium">Shipping Speed</h3>
      <RadioGroup>
        <Radio 
          name="shipping" 
          value="standard" 
          label="Standard Shipping" 
          description="5-7 business days • Free"
          defaultChecked
        />
        <Radio 
          name="shipping" 
          value="express" 
          label="Express Shipping" 
          description="2-3 business days • $15"
        />
        <Radio 
          name="shipping" 
          value="overnight" 
          label="Overnight Shipping" 
          description="Next business day • $35"
        />
      </RadioGroup>
    </div>
  ),
}; 
 