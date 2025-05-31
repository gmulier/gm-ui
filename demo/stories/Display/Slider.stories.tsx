import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Slider } from '../../../src/components/Slider';

const meta = {
  title: 'Display/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'object',
      description: 'Default value(s) for the slider - can be a single value [50] or range [25, 75]',
    },
    value: {
      control: false,
      description: 'Controlled value(s) for the slider - use useState in stories to demonstrate',
    },
    max: {
      control: { type: 'number', min: 1, max: 1000 },
      description: 'Maximum value',
    },
    min: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Minimum value',
    },
    step: {
      control: { type: 'number', min: 0.1, max: 50, step: 0.1 },
      description: 'Step increment',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slider is disabled',
    },
    showValue: {
      control: 'boolean',
      description: 'Show current value and min/max labels',
    },
    label: {
      control: 'text',
      description: 'Label for the slider',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback fired when value changes',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Slider
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
    disabled: false,
  },
};

// Controlled Simple Slider with Controls
export const Controlled: StoryObj = {
  render: (args: any) => {
    const [value, setValue] = React.useState([args.defaultValue || 50]);
    
    // Ensure value is always an array for consistency
    const handleValueChange = (newValue: number[]) => {
      setValue(newValue);
      if (args.onValueChange) {
        args.onValueChange(newValue);
      }
    };
    
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Value: {value[0]}</span>
          <button 
            onClick={() => setValue([50])}
            className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
        <Slider
          value={value}
          onValueChange={handleValueChange}
          max={args.max}
          min={args.min}
          step={args.step}
          disabled={args.disabled}
        />
      </div>
    );
  },
  args: {
    defaultValue: 50, // Simple number for this story
    max: 100,
    min: 0,
    step: 1,
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Initial value for the slider',
    },
  },
};

// Different Values
export const MinValue: Story = {
  args: {
    defaultValue: [0],
  },
};

export const MaxValue: Story = {
  args: {
    defaultValue: [100],
  },
};

export const MidValue: Story = {
  args: {
    defaultValue: [33],
  },
};

// Custom Range
export const CustomRange: Story = {
  args: {
    defaultValue: [25],
    min: 0,
    max: 50,
  },
};

// With Steps
export const WithSteps: Story = {
  args: {
    defaultValue: [50],
    step: 10,
  },
};

export const SmallSteps: Story = {
  args: {
    defaultValue: [2.5],
    min: 0,
    max: 5,
    step: 0.1,
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
};

// Multiple Values (Range)
export const RangeSlider: Story = {
  args: {
    defaultValue: [25, 75],
  },
};

// Real-world Examples
export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = React.useState([50]);
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Volume</label>
          <span className="text-sm text-gray-500">{volume}%</span>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
        />
      </div>
    );
  },
};

export const PriceRange: Story = {
  render: () => {
    const [price, setPrice] = React.useState([100, 500]);
    
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <Slider
          value={price}
          onValueChange={setPrice}
          max={1000}
          step={10}
        />
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>${price[0]}</span>
          <span>${price[1]}</span>
        </div>
      </div>
    );
  },
};

export const BrightnessControl: Story = {
  render: () => {
    const [brightness, setBrightness] = React.useState([70]);
    
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <Slider
            value={brightness}
            onValueChange={setBrightness}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-sm font-medium w-10 text-right">{brightness}%</span>
        </div>
      </div>
    );
  },
};

export const TimelineSlider: Story = {
  render: () => {
    const [time, setTime] = React.useState([0]);
    const duration = 240; // 4 minutes in seconds
    
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    
    return (
      <div className="space-y-2">
        <Slider
          value={time}
          onValueChange={setTime}
          max={duration}
          step={1}
        />
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{formatTime(time[0])}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    );
  },
};

export const ColorPicker: Story = {
  render: () => {
    const [hue, setHue] = React.useState([180]);
    
    return (
      <div className="space-y-4">
        <div 
          className="h-10 rounded"
          style={{ backgroundColor: `hsl(${hue}, 70%, 50%)` }}
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Hue: {hue}°</label>
          <Slider
            value={hue}
            onValueChange={setHue}
            max={360}
            step={1}
            className="[&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-red-500 [&_[role=slider]]:via-green-500 [&_[role=slider]]:to-blue-500"
          />
        </div>
      </div>
    );
  },
};

// Stories demandées par l'utilisateur

// Story avec mode controlled et useState visible
export const ControlledSlider: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.defaultValue || [50]);
    
    const handleValueChange = (newValue: number[]) => {
      setValue(newValue);
      // Log the action to show callback behavior
      console.log('Value changed:', newValue);
    };
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600">
          Current value: <strong>{value.join(', ')}</strong>
        </div>
        <Slider
          value={value}
          onValueChange={handleValueChange}
          {...args}
        />
        <button 
          onClick={() => setValue([75])}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
        >
          Set to 75
        </button>
      </div>
    );
  },
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    label: 'Controlled Slider',
  },
};

// Story dédiée pour Range Slider
export const RangeSliderDemo: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    label: 'Range Selection',
  },
};

// Story dédiée pour état disabled
export const DisabledSlider: Story = {
  args: {
    defaultValue: [60],
    disabled: true,
    showValue: true,
    label: 'Disabled Slider',
    max: 100,
    min: 0,
  },
};

// Story pour démontrer showValue avec min/max
export const ShowValueDemo: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Sans showValue</h3>
        <Slider
          defaultValue={[30]}
          min={0}
          max={100}
          label="Volume"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Avec showValue (valeur + min/max)</h3>
        <Slider
          defaultValue={[30]}
          min={0}
          max={100}
          showValue={true}
          label="Volume"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Range avec showValue</h3>
        <Slider
          defaultValue={[20, 80]}
          min={0}
          max={100}
          showValue={true}
          label="Price Range"
        />
      </div>
    </div>
  ),
}; 