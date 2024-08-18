import { Box, Flex, Link, Text } from "@radix-ui/themes";
import { version } from "package.json";
import { useTranslation } from "react-i18next";
import LoginForm from "~/components/LoginForm";

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <Flex
      direction="column"
      justify="end"
      align="center"
      minHeight="100vh"
      style={{ backgroundColor: "#0f0e3b" }}
    >
      <Box
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "var(--radius-6)",
          backgroundColor: "var(--gray-1)"
        }}
        minWidth={{ xs: "520px" }}
        p="6"
        mx="4"
        my="auto"
      >
        <LoginForm />
      </Box>
      <Flex
        direction={{ initial: "column", xs: "row" }}
        mr="auto"
        ml="3"
        mb="2"
        gap={{ initial: "1", xs: "2" }}
      >
        <Text style={{ color: "var(--gray-1)" }}>
          {t("appName")} v.{version}
        </Text>
        <Link style={{ color: "var(--gray-1)" }}>{t("aboutPulsate")}</Link>
        <Link
          href="https://github.com/pulsate-dev/pulsate"
          style={{ color: "var(--gray-1)" }}
        >
          {t("sourceCode")}
        </Link>
      </Flex>
    </Flex>
  );
}
