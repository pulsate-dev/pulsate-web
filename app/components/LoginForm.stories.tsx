import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

export default {
  title: "LoginForm",
  component: LoginForm
} satisfies Meta<typeof LoginForm>;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
