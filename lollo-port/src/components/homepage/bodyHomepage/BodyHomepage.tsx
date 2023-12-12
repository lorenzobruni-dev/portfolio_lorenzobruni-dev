import { Flex, Sx, Text, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

type BodyHomepageProps = {
  children: ReactNode;
};
const BodyHomepage = ({ children }: BodyHomepageProps) => {
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
    <>
      <Flex direction={"column"} sx={styleFlexTags}>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]}>
          {"<html>"}
        </Text>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]} ml={25}>
          {"<body>"}
        </Text>
      </Flex>
      {children}
      <Flex direction={"column"} sx={styleFlexTags}>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]} ml={25}>
          {"</body>"}
        </Text>
        <Text sx={styleBodyText} color={theme.colors.yellow[7]}>
          {"</html>"}
        </Text>
      </Flex>
    </>
  );
};
export default BodyHomepage;
