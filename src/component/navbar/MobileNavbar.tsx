import { IconButton, ListItem } from "@mui/material";
import { AppBarList, StyledAppBer } from "../../style/navbar";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";
import { ThemeModeContext } from "../../context/theme";
import { ThemeModeEnum } from "../../constant/enums";

export default function MobileNavbar(){
    const {themeMode, toggleThemeMode} = useContext(ThemeModeContext)
    return (
        <StyledAppBer>
            <AppBarList type="row">
                <ListItem>Home</ListItem>
                <ListItem>Image</ListItem>
                <ListItem>PDF</ListItem>
                <IconButton onClick={toggleThemeMode}>
                    {themeMode === ThemeModeEnum.Light ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
            </AppBarList>
        </StyledAppBer>
    );
}