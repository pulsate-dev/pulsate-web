import { Flex, type FlexProps, Text } from "@radix-ui/themes";
import { ComponentProps } from "react";
import Avatar from "./Avatar";
import NoteBody from "./NoteBody";
import QuoteNote from "./QuoteNote";
import RenoteIcon from "./RenoteIcon";

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
      {isRenote ? (
        <Flex ml="2" align="center" gap="1">
          <RenoteIcon fontSize={18} />
          <Text>{author.name}さんがリノート</Text>
        </Flex>
      ) : (
        <></>
      )}
      {isRenote ? <Avatar {...renote.author} /> : <Avatar {...author} />}
      <NoteBody
        content={isRenote ? renote.content : content}
        style={{ ml: "4" }}
      />
      {isQuoted ? <QuoteNote {...renote} /> : <></>}
    </Flex>
  );
}
