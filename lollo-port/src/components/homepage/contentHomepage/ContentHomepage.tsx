import BodyHomepage from "../bodyHomepage/BodyHomepage";
import { Button, Flex, Text, useMantineTheme } from "@mantine/core";
import { useLocation } from "wouter";

const ContentHomepage = () => {
  const theme = useMantineTheme();
  const [, setLocation] = useLocation();
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
        <Button
          variant="default"
          w={"90%"}
          onClick={() => setLocation("/contact")}
          sx={{
            backgroundColor: "inherit",
            border: `1px solid ${theme.colors.yellow[3]}`,
            color: theme.colors.yellow[3],
            "&:hover": { backgroundColor: "inherit" },
          }}
        >
          Contact me
        </Button>
      </Flex>
    </BodyHomepage>
  );
};

export default ContentHomepage;
