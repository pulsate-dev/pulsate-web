import { Flex, Avatar as RadixAvatar, Text } from "@radix-ui/themes";

type Props = {
  id: string;
  name: string;
  iconUrl?: string;
};

export default function Avatar({ id, name, iconUrl }: Props) {
  return (
    <Flex align="center" gap="2">
      <RadixAvatar
        size="5"
        radius="full"
        fallback={id.slice(0, 2)}
        src={iconUrl}
      />
      <div>
        <Text>{name}</Text>
        <br />
        <Text>@{id}</Text>
      </div>
    </Flex>
  );
}
