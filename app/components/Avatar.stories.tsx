import { type Meta, type StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "example",
    nickname: "Example",
    iconUrl: "https://api.dicebear.com/9.x/pixel-art/png"
  }
};

export const Fallback: Story = {
  args: {
    name: "fallback",
    nickname: "IconURLが無効だった場合",
    iconUrl: ""
  },
  argTypes: {
    iconUrl: { table: { disable: true } }
  }
};
