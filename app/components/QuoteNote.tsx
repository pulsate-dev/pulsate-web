import { Box } from "@radix-ui/themes";
import { ComponentProps } from "react";
import Avatar from "./Avatar";
import Note from "./Note";
import NoteBody from "./NoteBody";

type Props = ComponentProps<typeof Note>;

export default function QuoteNote({ author, content }: Props) {
  return (
    <Box
      ml="6"
      style={{
        borderStyle: "dashed",
        borderWidth: "1px",
      }}
    >
      <Box pl="2" py="2">
        <Avatar {...author} />
      </Box>
      <Box pl="4" pb="2">
        <NoteBody content={content} />
      </Box>
    </Box>
  );
}
