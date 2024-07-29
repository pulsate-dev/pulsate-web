import { Flex, IconButton } from "@radix-ui/themes";
import EmojiIcon from "./icons/EmojiIcon";
import RenoteIcon from "./icons/RenoteIcon";
import ReplyIcon from "./icons/ReplyIcon";
import ShareIcon from "./icons/ShareIcon";

export default function NoteFooter() {
  return (
    <Flex justify="between">
      <IconButton
        variant="ghost"
        color="gray"
        size={{ initial: "4", md: "3" }}
        highContrast
      >
        <ReplyIcon width="22" height="22" />
      </IconButton>
      <IconButton
        variant="ghost"
        color="gray"
        size={{ initial: "4", md: "3" }}
        highContrast
      >
        <RenoteIcon width="22" height="22" />
      </IconButton>
      <IconButton
        variant="ghost"
        color="gray"
        size={{ initial: "4", md: "3" }}
        highContrast
      >
        <EmojiIcon width="22" height="22" />
      </IconButton>
      <IconButton
        variant="ghost"
        color="gray"
        size={{ initial: "4", md: "3" }}
        highContrast
      >
        <ShareIcon width="22" height="22" />
      </IconButton>
    </Flex>
  );
}
