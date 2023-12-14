import { Flex } from "@mantine/core";
import ContentHomepage from "../components/homepage/contentHomepage/ContentHomepage";
import styleHomepage from "./Homepage.module.css";

const Homepage = () => {
  return (
    <Flex
      className={styleHomepage.home}
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
