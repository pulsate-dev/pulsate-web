import type { Meta, StoryObj } from "@storybook/react";

import { FollowButton } from "./FollowButton";

const meta = {
  component: FollowButton
} satisfies Meta<typeof FollowButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accountFollowStatus: "following",
    isFollowed: true
  }
};
