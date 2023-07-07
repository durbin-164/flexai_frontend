"use client"

import { Container, CssBaseline, ThemeProvider } from "@mui/material"

import globalTheme from "./CustomTheme"
import Navbar from "../navbar/Navbar"

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