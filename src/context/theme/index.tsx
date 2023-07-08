import React,{ createContext, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../../style/theme";
import { ThemeProvider } from "@mui/material";
import { ThemeModeEnum } from "../../constant/enums";

export const ThemeModeContext = createContext({
    toggleThemeMode: () => {},
    themeMode: ThemeModeEnum.Light
})

export default function ThemeContextProvider({children}: {children: React.ReactNode}){
    const [themeMode, setThemeMode] = useState(ThemeModeEnum.Light)

    const colorMode = useMemo(() => ({
        toggleThemeMode: () => setThemeMode(prevMode => prevMode === ThemeModeEnum.Light? ThemeModeEnum.Dark: ThemeModeEnum.Light),
        themeMode
    }), [themeMode])

    const theme = themeMode === "light"? lightTheme: darkTheme

    return (
        <ThemeModeContext.Provider value ={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )

}