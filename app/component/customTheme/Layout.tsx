"use client"

import { Container, CssBaseline, ThemeProvider } from "@mui/material"
import Navbar from "../navbar/Navbar"
import globalTheme from "./CustomTheme"

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <ThemeProvider theme={globalTheme}>
        
        <CssBaseline/>
        <Navbar />

        <Container>
          
            {children}
        </Container>

        
      </ThemeProvider>
    )
  }