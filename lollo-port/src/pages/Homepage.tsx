import { Flex } from "@mantine/core";
import ContentHomepage from "../components/homepage/contentHomepage/ContentHomepage";

const Homepage = () => {
  const width = window.screen.width;
  const isStrected = width <= 660;

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
