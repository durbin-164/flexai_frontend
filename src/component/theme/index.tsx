import React,{  } from "react";
import { darkTheme, lightTheme } from "../../style/theme";
import { ThemeProvider } from "@mui/material";
import { ThemeModeEnum } from "../../constant/enums";
import { RootState, useAppSelector } from "../../redux/store";


export default function CustomThemeProvider({children}: {children: React.ReactNode}){
    const uiMode = useAppSelector((state: RootState) => state.uiMode);

    
    const theme = uiMode === ThemeModeEnum.Light? lightTheme: darkTheme

    return (
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
    )
}