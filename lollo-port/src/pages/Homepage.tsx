import { Flex, Sx, Text, useMantineTheme } from "@mantine/core";

const Homepage = () => {
  const theme = useMantineTheme();

  const styleBodyText: Sx = {
    fontFamily: "Brush Script MT, Brush Script Std, cursive",
    fontStyle: "italic",
  };

  const styleFlexTags: Sx = {
    textAlign: "left",
    width: "100%",
  };

  return (
    <Flex
      pl={150}
      direction={"column"}
      align={"center"}
      h={"100%"}
      justify={"space-evenly"}
      pos={"absolute"}
      top={0}
    >
      <Flex direction={"column"} sx={styleFlexTags}>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]}>
          {"<html>"}
        </Text>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]} ml={25}>
          {"<body>"}
        </Text>
      </Flex>
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
      <Flex direction={"column"} sx={styleFlexTags}>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]} ml={25}>
          {"</body>"}
        </Text>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]}>
          {"</html>"}
        </Text>
      </Flex>
    </Flex>
  );
};
export default Homepage;
