import type { Meta, StoryObj } from '@storybook/react';

import { AddNewColumnForm } from '.';

const meta = {
  title: 'Components/AddNewColumnForm',
  component: AddNewColumnForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddNewColumnForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
