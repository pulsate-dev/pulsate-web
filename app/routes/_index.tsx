import { Button, Flex, Text } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello!</Text>
      <Button>I am</Button>
      <Button>Remix</Button>
    </Flex>
  );
}
