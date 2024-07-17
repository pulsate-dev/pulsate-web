import { Button, Flex, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import "../../i18n/config";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  const { t, i18n } = useTranslation();

  return (
    <Flex direction="column" gap="2">
      <Text>
        Hello! {t("welcome")} {t("appName")}
      </Text>
      <Button onClick={() => i18n.changeLanguage("en")}>Eng</Button>
      <Button onClick={() => i18n.changeLanguage("ja_JP")}>Ja</Button>
    </Flex>
  );
}
