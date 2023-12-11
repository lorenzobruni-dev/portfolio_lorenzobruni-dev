import {Grid, useMantineTheme} from "@mantine/core";

const MainPage = () => {
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

        </Grid.Col>
    </Grid>


}
export default MainPage