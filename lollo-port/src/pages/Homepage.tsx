import { Flex } from "@mantine/core";
import ContentHomepage from "../components/homepage/contentHomepage/ContentHomepage";
import { useEffect, useState } from "react";
import { useElementSize } from "@mantine/hooks";

const Homepage = () => {
  const { width } = useElementSize();
  const [isStrected, setIsStrected] = useState(false);

  useEffect(() => {
    if (width <= 660) setIsStrected(true);
    else setIsStrected(false);
  }, [width]);

  return (
    <Flex
      pl={isStrected ? 50 : 150}
      direction={"column"}
      align={"center"}
      h={"100%"}
      justify={"space-evenly"}
      pos={"absolute"}
      top={0}
    >
      <ContentHomepage />
    </Flex>
  );
};
export default Homepage;
