import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SimpleTooltip, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../../../src/components/Tooltip';
import { Button } from '../../../src/components/Button';

const meta = {
  title: 'Feedback/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

// Basic Tooltip Stories
export const Default: StoryObj<typeof SimpleTooltip> = {
  render: () => (
    <SimpleTooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </SimpleTooltip>
  ),
};

// Different Positions
export const TopPosition: StoryObj = {
  render: () => (
    <SimpleTooltip content="Tooltip on top" side="top">
      <Button variant="outline">Top</Button>
    </SimpleTooltip>
  ),
};

export const RightPosition: StoryObj = {
  render: () => (
    <SimpleTooltip content="Tooltip on right" side="right">
      <Button variant="outline">Right</Button>
    </SimpleTooltip>
  ),
};

export const BottomPosition: StoryObj = {
  render: () => (
    <SimpleTooltip content="Tooltip on bottom" side="bottom">
      <Button variant="outline">Bottom</Button>
    </SimpleTooltip>
  ),
};

export const LeftPosition: StoryObj = {
  render: () => (
    <SimpleTooltip content="Tooltip on left" side="left">
      <Button variant="outline">Left</Button>
    </SimpleTooltip>
  ),
};

// Different Alignments
export const StartAlign: StoryObj = {
  render: () => (
    <SimpleTooltip content="Start aligned tooltip" side="top" align="start">
      <Button variant="outline" className="w-32">Start</Button>
    </SimpleTooltip>
  ),
};

export const EndAlign: StoryObj = {
  render: () => (
    <SimpleTooltip content="End aligned tooltip" side="top" align="end">
      <Button variant="outline" className="w-32">End</Button>
    </SimpleTooltip>
  ),
};

// With Delay
export const WithDelay: StoryObj = {
  render: () => (
    <SimpleTooltip content="This tooltip has a 1 second delay" delayDuration={1000}>
      <Button>Hover and wait</Button>
    </SimpleTooltip>
  ),
};

export const NoDelay: StoryObj = {
  render: () => (
    <SimpleTooltip content="This tooltip appears instantly" delayDuration={0}>
      <Button>Hover for instant tooltip</Button>
    </SimpleTooltip>
  ),
};

// Advanced Tooltip with Custom Content
export const CustomContent: StoryObj = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Custom tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p className="font-semibold">Custom Tooltip</p>
            <p className="text-gray-400">With multiple lines of content</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

// Real-world Examples
export const IconButton: StoryObj = {
  render: () => (
    <div className="space-y-6">
      {/* Actions principales */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Actions principales</h4>
        <div className="flex gap-2 flex-wrap">
          <SimpleTooltip content="Edit">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </Button>
          </SimpleTooltip>
          
          <SimpleTooltip content="Delete">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Add">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Copy">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="7" y="6" width="12" height="14" rx="2" strokeWidth={2} />
                <rect x="3" y="2" width="12" height="14" rx="2" strokeWidth={2} />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Search">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      {/* Navigation et liens */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Navigation</h4>
        <div className="flex gap-2 flex-wrap">
          <SimpleTooltip content="External Link">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Download">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Print">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      {/* Visibilité et statut */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Visibilité & Statut</h4>
        <div className="flex gap-2 flex-wrap">
          <SimpleTooltip content="View">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Hide">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Lock">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Unlock">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0" />
              </svg>
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      {/* Synchronisation */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Synchronisation</h4>
        <div className="flex gap-2 flex-wrap">
          <SimpleTooltip content="Refresh">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Sync">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      {/* Information et aide */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">Information & Aide</h4>
        <div className="flex gap-2 flex-wrap">
          <SimpleTooltip content="Information">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8h.01" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Help">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
              </svg>
            </Button>
          </SimpleTooltip>

          <SimpleTooltip content="Settings">
            <Button size="icon" variant="ghost">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Button>
          </SimpleTooltip>
        </div>
      </div>
    </div>
  ),
};

export const FormHelp: StoryObj = {
  render: () => (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium">API Key</label>
      <SimpleTooltip content="Your API key can be found in your account settings">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-xs">
          ?
        </span>
      </SimpleTooltip>
    </div>
  ),
};

export const StatusIndicator: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      <SimpleTooltip content="System is operational">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-sm">Online</span>
        </div>
      </SimpleTooltip>
      
      <SimpleTooltip content="Experiencing minor issues">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <span className="text-sm">Degraded</span>
        </div>
      </SimpleTooltip>
      
      <SimpleTooltip content="System is offline">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <span className="text-sm">Offline</span>
        </div>
      </SimpleTooltip>
    </div>
  ),
}; 