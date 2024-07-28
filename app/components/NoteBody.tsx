import { Button, Flex, Text } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

type Props = {
  content: string | null;
};

export default function NoteBody({ content }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    if (ref?.current) {
      const { height } = ref.current.getBoundingClientRect();
      setHeight(height);
    }
  }, [ref]);

  return (
    <Flex direction="column" style={{ whiteSpace: "pre-wrap" }}>
      <Text
        as="p"
        style={
          height >= 120 && !readMore
            ? {
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 5
              }
            : {}
        }
        ref={ref}
      >
        {content}
      </Text>
      {height >= 120 ? (
        <Button
          variant="outline"
          highContrast
          onClick={() => {
            setReadMore(!readMore);
          }}
          style={{ margin: "auto", maxWidth: "100px" }}
        >
          {readMore ? "閉じる" : "続きを読む"}
        </Button>
      ) : (
        <></>
      )}
    </Flex>
  );
}
