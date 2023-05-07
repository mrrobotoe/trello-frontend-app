import type { Meta, StoryObj } from '@storybook/react';

import { Column } from '.';

const meta = {
  title: 'Components/Column',
  component: Column,
  tags: ['autodocs'],
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'To Do',
  },
};
