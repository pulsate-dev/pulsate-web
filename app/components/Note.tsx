import { Box, Flex, Link, Strong, Text } from "@radix-ui/themes";
import { ComponentProps } from "react";
import Avatar from "./Avatar";
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";
import QuotedNote from "./QuotedNote";
import RenoteIcon from "./icons/RenoteIcon";

type Props = {
  author: ComponentProps<typeof Avatar>;
  content: string | null;
  renote?: Props;
};

export default function Note({ author, content, renote }: Props) {
  const isRenote = renote && !content;
  const isQuoted = renote && content;

  return (
    <Flex direction="column">
      <Flex pl="2" align="center" gap="1" display={isRenote ? "flex" : "none"}>
        <RenoteIcon fontSize={18} />
        <Text>
          <Strong>
            <Link href="">{author.nickname}</Link>
          </Strong>
          さんがリノート
        </Text>
      </Flex>
      <Box py="2" pl="2">
        {isRenote ? <Avatar {...renote.author} /> : <Avatar {...author} />}
      </Box>
      <Box pl="4" pb="2">
        <NoteBody content={isRenote ? renote.content : content} />
      </Box>
      {isQuoted && (
        <Box pl="4">
          <QuotedNote {...renote} />
        </Box>
      )}
      <Box p="3">
        <NoteFooter />
      </Box>
    </Flex>
  );
}
