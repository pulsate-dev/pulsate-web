import { Flex, Avatar as RadixAvatar, Text } from "@radix-ui/themes";

type Props = {
  name: string;
  nickname: string;
  iconUrl: string;
};

export default function Avatar({ name, nickname, iconUrl }: Props) {
  return (
    <Flex align="center" gap="2">
      <RadixAvatar
        size="5"
        radius="full"
        fallback={name.slice(0, 2)}
        src={iconUrl}
      />
      <div>
        <Text weight="bold" size="4">
          {nickname}
        </Text>
        <br />
        <Text color="gray">@{name}</Text>
      </div>
    </Flex>
  );
}
