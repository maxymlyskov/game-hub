import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  let limit = 300;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={2}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
