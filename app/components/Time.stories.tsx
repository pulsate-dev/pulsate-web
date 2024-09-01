import type { Meta, StoryObj } from '@storybook/react';

import { Time } from './Time';

const meta = {
  component: Time,
} satisfies Meta<typeof Time>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date()
  }
};
