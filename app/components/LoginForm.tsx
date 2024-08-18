import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  TextField
} from "@radix-ui/themes";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap="2">
      <Heading>{t("login")}</Heading>
      <Box>
        <Text>{t("idAndMailAddress")}</Text>
        <TextField.Root />
      </Box>
      <Box>
        <Text>{t("password")}</Text>
        <TextField.Root type="password" />
      </Box>
      <Flex direction="column" align="center" gap="2" mx="auto">
        <Button size="3">{t("login")}</Button>
        <Link>{t("register")}</Link>
        <Link>{t("forgotPassword")}</Link>
      </Flex>
    </Flex>
  );
}
