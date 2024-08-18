import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import "@radix-ui/themes/styles.css";
import "../app/styles/font.css";
import { Theme } from "@radix-ui/themes";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18nConfig from "../i18n/config";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en_US", title: "English" },
        { value: "ja_JP", title: "日本語" }
      ],
      showName: true
    }
  }
};

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
    (Story, context) => {
      const { locale } = context.globals;
      const { i18n } = useTranslation();

      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      return (
        <I18nextProvider i18n={i18nConfig.default}>
          <Theme>
            <Story />
          </Theme>
        </I18nextProvider>
      );
    }
  ]
};

export default preview;
