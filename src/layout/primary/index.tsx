import { Container, CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import { Outlet } from "react-router-dom";
import CustomThemeProvider from "../../component/theme";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Layout(){
    return (
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
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
      </GoogleOAuthProvider>
    );
  };









