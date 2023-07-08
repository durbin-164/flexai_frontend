import React, {  } from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import ColorContextProvider from "../../context/theme";



export default function Layout({ children }:{children: React.ReactNode}){
    return (
      <ColorContextProvider>
        <CssBaseline />
          <Navbar/>
          {children}
      </ColorContextProvider>
    );
  };









