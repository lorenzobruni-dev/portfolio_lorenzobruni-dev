import {Grid, useMantineTheme} from "@mantine/core";
import React from "react";

type MainPageProps = {
    location: string
}

interface PropsRenderComponent {
    location: string;
}


const RenderCorrectComponent: React.FC<PropsRenderComponent> = ({location}) => {
    switch (location) {
        case "/":
            return <>Home</>
        case "/about":
            return <>About me</>
        case "/contact":
            return <>Contact me</>
        default:
            return <>Home</>
    }
}
const MainPage = ({location}: MainPageProps) => {
    const theme = useMantineTheme()
    return <Grid
        data-testid={"chat-page"}
        h={"100vh"}
        columns={15}
        gutter={0}
        styles={{
            inner: {height: "100%"},
            col: {
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                justifyContent: "space-between",
            },
        }}
    >
        <Grid.Col span={1} h={"100vh"} bg={theme.colors.gray[9]}>
        </Grid.Col>
        <Grid.Col span={14} bg={theme.colors.blue[9]}>
            <RenderCorrectComponent location={location}/>
        </Grid.Col>
    </Grid>


}
export default MainPage