import React from "react";
import type { Preview } from "@storybook/react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <Theme style={{ minHeight: "inherit" }}>
          <Story />
        </Theme>
      );
    }
  ]
};

export default preview;
