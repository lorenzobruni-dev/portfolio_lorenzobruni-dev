import { Grid, useMantineTheme } from "@mantine/core";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./MainPage.module.css";
import { useLocation } from "wouter";
import Homepage from "./Homepage";

type MainPageProps = {
  location: string;
  isHomepage: boolean;
};

interface PropsRenderComponent {
  location: string;
}

const RenderCorrectComponent: React.FC<PropsRenderComponent> = ({
  location,
}) => {
  switch (location) {
    case "/":
      return <Homepage />;
    case "/about-me":
      return <>About me</>;
    case "/contact":
      return <>Contact me</>;
    default:
      return <>Home</>;
  }
};
const MainPage = ({ location, isHomepage }: MainPageProps) => {
  const theme = useMantineTheme();
  const [, setLocation] = useLocation();
  return (
    <Grid
      data-testid={"chat-page"}
      h={"100vh"}
      columns={15}
      gutter={0}
      styles={{
        inner: { height: "100%" },
        col: {
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-between",
        },
      }}
    >
      <Grid.Col span={1} h={"100vh"} bg={theme.colors.gray[9]}>
        <Sidebar
          onAboutMeIconClick={() => setLocation(`/about-me`)}
          onContactMeIconClick={() => setLocation(`/contact`)}
          onHomePageIconClick={() => setLocation(`/`)}
        />
      </Grid.Col>
      <Grid.Col
        span={14}
        bg={theme.colors.blue[9]}
        className={isHomepage ? styles.home : styles.others}
      >
        <RenderCorrectComponent location={location} />
      </Grid.Col>
    </Grid>
  );
};
export default MainPage;
