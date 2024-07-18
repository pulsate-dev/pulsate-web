import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@radix-ui/themes";

export default {
  component: Button,
  title: "Button"
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => <Button>Button</Button>
};
