import { Container, CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import ColorContextProvider from "../../context/theme";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return (
      <ColorContextProvider>
        <CssBaseline />
          <Navbar/>
          <Toolbar/>
          <Container component="main">
            <Outlet/>
          </Container>
      </ColorContextProvider>
    );
  };









