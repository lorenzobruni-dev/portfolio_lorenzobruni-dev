import { ActionIcon, Box, Flex, Image } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconDev from "../../assets/sidebar/icon-dev.svg.png";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";

type SidebarProps = {
  onHomePageIconClick: () => void;
  onAboutMeIconClick: () => void;
  onContactMeIconClick: () => void;
};
const Sidebar = ({
  onAboutMeIconClick,
  onHomePageIconClick,
  onContactMeIconClick,
}: SidebarProps) => {
  return (
    <Flex
      direction={"column"}
      wrap={"wrap"}
      align={"center"}
      h={"100%"}
      justify={"space-between"}
    >
      <Box p={10} h={80} w={80}>
        <Image src={iconDev} />
      </Box>
      <Flex
        gap={30}
        direction={"column"}
        align={"center"}
        justify={"center"}
        pb={10}
      >
        <ActionIcon size={50} onClick={onHomePageIconClick}>
          <FontAwesomeIcon size={"lg"} icon={faHome} />
        </ActionIcon>
        <ActionIcon size={50} onClick={onContactMeIconClick}>
          <FontAwesomeIcon size={"lg"} icon={faEnvelope} />
        </ActionIcon>
        <ActionIcon size={50} onClick={onAboutMeIconClick}>
          <FontAwesomeIcon size={"lg"} icon={faUser} />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};
export default Sidebar;
