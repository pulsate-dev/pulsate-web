import { Button, Flex, type FlexProps, Text } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

type Props = {
  content: string | null;
  style?: FlexProps;
};

export default function NoteBody({ content, style }: Props) {
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
    <Flex
      pb="2"
      direction="column"
      style={{ whiteSpace: "pre-wrap" }}
      {...style}
    >
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
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "閉じる" : "続きを読む"}
        </Button>
      ) : (
        <></>
      )}
    </Flex>
  );
}
