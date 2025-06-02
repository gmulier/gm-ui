import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { 
  Menu, 
  MenuTrigger, 
  MenuContent, 
  MenuItem,
  MenuSeparator,
  MenuLabel,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
  MenuShortcut
} from '@gm/ui';
import { Button } from '@gm/ui';

const meta = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Menu
export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Help</MenuItem>
        <MenuSeparator />
        <MenuItem>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

// With Icons and Shortcuts
export const WithIconsAndShortcuts: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">File</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          New File
          <MenuShortcut>⌘N</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Open...
          <MenuShortcut>⌘O</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Save
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuItem disabled>
          Print
          <MenuShortcut>⌘P</MenuShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

// With Labels and Groups
export const WithLabels: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Account</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>My Account</MenuLabel>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuSeparator />
        <MenuLabel>Team</MenuLabel>
        <MenuItem>Invite Members</MenuItem>
        <MenuItem>Team Settings</MenuItem>
        <MenuSeparator />
        <MenuItem>Logout</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

// With Checkbox Items
export const WithCheckboxItems: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">View</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
            Status Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
            Activity Bar
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
            Panel
          </MenuCheckboxItem>
        </MenuContent>
      </Menu>
    );
  },
};

// With Radio Items
export const WithRadioItems: Story = {
  render: () => {
    const [theme, setTheme] = React.useState('light');

    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="outline">Theme</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuRadioGroup value={theme} onValueChange={setTheme}>
            <MenuRadioItem value="light">Light</MenuRadioItem>
            <MenuRadioItem value="dark">Dark</MenuRadioItem>
            <MenuRadioItem value="system">System</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    );
  },
};

// With Submenus
export const WithSubmenus: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Edit</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger>Find</MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Find...</MenuItem>
            <MenuItem>Find Next</MenuItem>
            <MenuItem>Find Previous</MenuItem>
            <MenuSeparator />
            <MenuItem>Replace...</MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

// Real-world Examples
export const UserMenu: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
            JD
          </div>
        </Button>
      </MenuTrigger>
      <MenuContent align="end">
        <MenuLabel>john.doe@example.com</MenuLabel>
        <MenuSeparator />
        <MenuItem>
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Profile
        </MenuItem>
        <MenuItem>
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </MenuItem>
        <MenuItem>
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          Billing
        </MenuItem>
        <MenuSeparator />
        <MenuItem>
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const ContextMenu: Story = {
  render: () => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <p className="text-gray-500 mb-4">Right-click anywhere in this area</p>
      <Menu>
        <MenuTrigger asChild>
          <Button variant="secondary">Or click here</Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem>Back</MenuItem>
          <MenuItem>Forward</MenuItem>
          <MenuItem>Reload</MenuItem>
          <MenuSeparator />
          <MenuItem>Save As...</MenuItem>
          <MenuItem>Print...</MenuItem>
          <MenuItem>Cast...</MenuItem>
          <MenuSeparator />
          <MenuItem>View Page Source</MenuItem>
          <MenuItem>Inspect</MenuItem>
        </MenuContent>
      </Menu>
    </div>
  ),
}; 