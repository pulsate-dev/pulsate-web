import {
  Box,
  Button,
  Card,
  Flex,
  Link,
  TabNav,
  Text,
  TextField
} from "@radix-ui/themes";

export default function LoginPage() {
  return (
    <Box>
      <Flex
        align="center"
        justify="center"
        m="-2"
        width="100vw"
        height="100vh"
        direction="column"
        style={{
          background: "#0f0e3b"
        }}
      >
        <Flex
          style={{
            background: "var(--gray-9)",
            borderRadius: "var(--radius-3)",
            minWidth: "30%"
          }}
          direction="column"
          gap="4"
          p="4"
        >
          <Text size="6" weight="bold" style={{}}>
            ログイン
          </Text>
          <Box>
            <Text size="4" style={{}}>
              ID/メールアドレス
            </Text>
            <TextField.Root />
          </Box>
          <Box>
            <Text size="4" style={{}}>
              パスワード
            </Text>
            <TextField.Root />
          </Box>
          <Button style={{ margin: "auto", maxWidth: "100px" }}>
            ログイン
          </Button>
          <Link href="/register" style={{ margin: "auto" }}>
            新規登録
          </Link>
        </Flex>
      </Flex>
      <footer
        style={{ position: "absolute", bottom: 0, color: "var(--gray-1)" }}
      >
        <Flex gap="4">
          <Text style={{ color: "var(--gray-1)" }}>Pulsate v0.1.0</Text>
          <Link
            href="https://pulsate.dev/about"
            underline="always"
            style={{
              color: "var(--gray-1)"
            }}
          >
            Pulsateについて
          </Link>
          <Link
            href="https://github.com/pulsate-dev"
            underline="always"
            style={{
              color: "var(--gray-1)"
            }}
          >
            ソースコード
          </Link>
        </Flex>
      </footer>
    </Box>
  );
}
