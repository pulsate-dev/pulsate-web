import { type Meta, type StoryObj } from "@storybook/react";
import NoteFooter from "./NoteFooter";

export default {
  title: "Note/Footer",
  component: NoteFooter
} satisfies Meta<typeof NoteFooter>;

type Story = StoryObj<typeof NoteFooter>;

export const Default: Story = {};
