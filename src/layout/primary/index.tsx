import { Container, CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import { Outlet } from "react-router-dom";
import CustomThemeProvider from "../../component/theme";

export default function Layout(){

    return (
      <CustomThemeProvider>
        <CssBaseline />
          <Navbar/>
          <Toolbar/>
          <Container component="main"
          //  sx={{backgroundColor: "blue"}}
           >
            <Outlet/>
          </Container>
      </CustomThemeProvider>
    );
  };









