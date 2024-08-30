import type { Meta, StoryObj } from "@storybook/react";

import { AccountProfile } from "./AccountProfile";

const meta = {
  component: AccountProfile
} satisfies Meta<typeof AccountProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    accountFollowStatus: "notFollowing",
    isFollowed: false,
    avatarUrl: "https://github.com/pulsate-dev.png",
    headerUrl: "https://github.com/pulsate-dev.png",
    nickname: "Pulsate",
    accountName: "pulsate",
    bio: "biobiobiobiobiobiobiobiobiobiobiobiobiobiobiobiobio",
    followersCount: 30,
    followingCount: 50
  }
};
