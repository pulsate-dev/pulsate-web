import { Flex, IconButton } from "@radix-ui/themes";
import EmojiIcon from "./icons/EmojiIcon";
import RenoteIcon from "./icons/RenoteIcon";
import ReplyIcon from "./icons/ReplyIcon";
import ShareIcon from "./icons/ShareIcon";

export default function NoteFooter() {
  return (
    <Flex justify={"between"}>
      <IconButton variant="ghost">
        <ReplyIcon width="18" height="18" />
      </IconButton>
      <IconButton variant="ghost">
        <RenoteIcon width="18" height="18" />
      </IconButton>
      <IconButton variant="ghost">
        <EmojiIcon width="18" height="18" />
      </IconButton>
      <IconButton variant="ghost">
        <ShareIcon width="18" height="18" />
      </IconButton>
    </Flex>
  );
}
