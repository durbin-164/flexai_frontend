import React,{ createContext, useEffect, useMemo, useState } from "react";
import { darkTheme, lightTheme } from "../../style/theme";
import { ThemeProvider } from "@mui/material";
import { ThemeModeEnum } from "../../constant/enums";

export const ThemeModeContext = createContext({
    toggleThemeMode: () => {},
    themeMode: ThemeModeEnum.Light
})

export default function ThemeContextProvider({children}: {children: React.ReactNode}){
    const store_theme = localStorage.getItem("theme")
    const [themeMode, setThemeMode] = useState(store_theme? store_theme as ThemeModeEnum: ThemeModeEnum.Light)

    const colorMode = useMemo(() => ({
        toggleThemeMode: () => setThemeMode(prevMode => prevMode === ThemeModeEnum.Light? ThemeModeEnum.Dark: ThemeModeEnum.Light),
        themeMode
    }), [themeMode])

    useEffect(() => {
        localStorage.setItem("theme", themeMode);
      }, [themeMode]);
    

    const theme = themeMode === ThemeModeEnum.Light? lightTheme: darkTheme

    return (
        <ThemeModeContext.Provider value ={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )

}