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
        borderWidth: "1px"
      }}
    >
      <Avatar {...author} />
      <NoteBody content={content} style={{ ml: "4" }} />
    </Box>
  );
}
