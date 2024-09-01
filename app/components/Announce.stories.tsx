import type { Meta, StoryObj } from '@storybook/react';

import { Announce } from './Announce';

const meta = {
  component: Announce,
} satisfies Meta<typeof Announce>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    announceType: "warn",
    title: "定期メンテナンスのお知らせ",
    body: "以下の日時に定期メンテナンスを行います",
    updatedAt: new Date("2023-09-10T00:00:00Z")
  }
};
