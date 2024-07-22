import { type Meta, type StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    id: "example",
    name: "表示名",
    iconUrl: "https://api.dicebear.com/9.x/pixel-art/png",
  },
};

export const Fallback: Story = {
  args: {
    id: "fallback",
    name: "IconUrlが取得できなかった場合",
    iconUrl: undefined,
  },
  argTypes: {
    iconUrl: { table: { disable: true } },
  },
};
