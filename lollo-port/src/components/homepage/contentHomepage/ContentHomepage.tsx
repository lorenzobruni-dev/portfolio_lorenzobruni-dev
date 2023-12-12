import BodyHomepage from "../bodyHomepage/BodyHomepage";
import { Flex, Text, useMantineTheme } from "@mantine/core";

const ContentHomepage = () => {
  const theme = useMantineTheme();
  return (
    <BodyHomepage>
      <Flex direction={"column"} gap={10}>
        <Text fz={30} sx={{ letterSpacing: -2 }}>
          Hi, <br />
          I'm Lorenzo Bruni
          <br />
          web developer
        </Text>
        <Text fz={18} color={theme.colors.gray[7]} sx={{ letterSpacing: 5 }}>
          Frontend Developer / React <br />
          Developer
        </Text>
      </Flex>
    </BodyHomepage>
  );
};

export default ContentHomepage;
