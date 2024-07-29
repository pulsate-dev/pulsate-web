import { type Meta, type StoryObj } from "@storybook/react";
import Note from "./Note";

export default {
  title: "Note",
  component: Note,
  args: {
    author: {
      name: "example",
      nickname: "Example",
      iconUrl: "https://api.dicebear.com/9.x/pixel-art/png"
    },
    content: "あいうえお"
  },
  argTypes: {
    content: { control: "text" }
  }
} satisfies Meta<typeof Note>;

type Story = StoryObj<typeof Note>;

export const Default: Story = {};

export const ReadMore: Story = {
  args: {
    content: "あ".repeat(3000)
  }
};

export const Renote: Story = {
  args: {
    content: null,
    renote: {
      author: {
        name: "renote",
        nickname: "リノート元",
        iconUrl: ""
      },
      content: "あいうえお"
    }
  },
  argTypes: {
    content: { table: { disable: true } }
  }
};

export const QuotedRenote: Story = {
  args: {
    content: "引用",
    renote: {
      author: {
        name: "quote",
        nickname: "引用元",
        iconUrl: ""
      },
      content: "引用元の投稿"
    }
  }
};
